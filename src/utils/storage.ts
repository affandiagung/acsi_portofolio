import { PortfolioData } from '../types';
import { getInitialPortfolioData, INITIAL_PORTFOLIO_DATA_ID, INITIAL_PORTFOLIO_DATA_EN } from '../data/initialData';

const STORAGE_KEY_PREFIX = 'affandi_portfolio_data_v5_';
const ADMIN_AUTH_KEY = 'affandi_admin_auth_session';

export function getStoredPortfolioData(lang: 'id' | 'en' = 'id'): PortfolioData {
  try {
    // Clear legacy stale cache keys from older versions
    ['affandi_portfolio_data_id', 'affandi_portfolio_data_en', 'affandi_portfolio_data_v2_id', 'affandi_portfolio_data_v2_en', 'affandi_portfolio_data_v3_id', 'affandi_portfolio_data_v3_en'].forEach((k) => {
      try { localStorage.removeItem(k); } catch { /* ignore */ }
    });

    const raw = localStorage.getItem(`${STORAGE_KEY_PREFIX}${lang}`);
    if (!raw) {
      return getInitialPortfolioData(lang);
    }
    const parsed = JSON.parse(raw);
    // Only return parsed if it was deliberately modified by the Admin with valid flag
    if (parsed && parsed._isAdminCustom && parsed.personal && parsed.projects) {
      return parsed;
    }
    return getInitialPortfolioData(lang);
  } catch (err) {
    console.error('Error reading stored portfolio data:', err);
    return getInitialPortfolioData(lang);
  }
}

export function savePortfolioData(data: PortfolioData, lang: 'id' | 'en' = 'id'): void {
  try {
    const toSave = { ...data, _isAdminCustom: true };
    localStorage.setItem(`${STORAGE_KEY_PREFIX}${lang}`, JSON.stringify(toSave, null, 2));
    // Dispatch custom event so live components react
    window.dispatchEvent(new CustomEvent('portfolio-data-updated', { detail: { data: toSave, lang } }));
  } catch (err) {
    console.error('Error saving portfolio data:', err);
  }
}

export function resetPortfolioData(lang: 'id' | 'en' = 'id'): PortfolioData {
  const initial = getInitialPortfolioData(lang);
  try {
    localStorage.removeItem(`${STORAGE_KEY_PREFIX}${lang}`);
    window.dispatchEvent(new CustomEvent('portfolio-data-updated', { detail: { data: initial, lang } }));
  } catch (err) {
    console.error('Error resetting portfolio data:', err);
  }
  return initial;
}

export function exportPortfolioJSON(data: PortfolioData): void {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `affandi-portfolio-data-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function validateAndImportPortfolioJSON(jsonText: string): PortfolioData {
  const parsed = JSON.parse(jsonText);
  if (!parsed.personal?.name || !Array.isArray(parsed.projects)) {
    throw new Error('Invalid JSON structure. Missing personal or projects array.');
  }
  savePortfolioData(parsed);
  return parsed;
}

export function isAdminLoggedIn(): boolean {
  try {
    return sessionStorage.getItem(ADMIN_AUTH_KEY) === 'authenticated_affandi_admin';
  } catch {
    return false;
  }
}

export function loginAdmin(user: string, pass: string): boolean {
  if (user.trim() === 'admin' && pass.trim() === '123456') {
    sessionStorage.setItem(ADMIN_AUTH_KEY, 'authenticated_affandi_admin');
    return true;
  }
  return false;
}

export function logoutAdmin(): void {
  try {
    sessionStorage.removeItem(ADMIN_AUTH_KEY);
  } catch {
    // ignore
  }
}
