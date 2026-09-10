import React, { useState, useEffect } from 'react';
import { PortfolioData } from './types';
import { getStoredPortfolioData, savePortfolioData } from './utils/storage';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { Projects } from './components/Projects';
import { Methodology } from './components/Methodology';
import { TechStack } from './components/TechStack';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { InteractiveTerminalModal } from './components/InteractiveTerminalModal';
import { AdminPanel } from './components/AdminPanel';

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <MainAppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}

function MainAppContent() {
  const { language } = useLanguage();
  const [data, setData] = useState<PortfolioData>(() => getStoredPortfolioData(language));
  const [isAdminRoute, setIsAdminRoute] = useState<boolean>(() => {
    const path = window.location.pathname;
    const hash = window.location.hash;
    return path.includes('/adminpath') || hash.includes('/adminpath') || hash.includes('adminpath');
  });

  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);

  // Sync data when language toggles
  useEffect(() => {
    const refreshed = getStoredPortfolioData(language);
    setData(refreshed);
  }, [language]);

  // Listen for admin path hash or history changes
  useEffect(() => {
    const checkAdmin = () => {
      const path = window.location.pathname;
      const hash = window.location.hash;
      setIsAdminRoute(path.includes('/adminpath') || hash.includes('/adminpath') || hash.includes('adminpath'));
    };

    window.addEventListener('hashchange', checkAdmin);
    window.addEventListener('popstate', checkAdmin);
    return () => {
      window.removeEventListener('hashchange', checkAdmin);
      window.removeEventListener('popstate', checkAdmin);
    };
  }, []);

  // Global keydown handler for terminal shortcuts (Ctrl+` or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
      if (e.key === '`' && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleUpdateData = (newData: PortfolioData) => {
    setData(newData);
    savePortfolioData(newData, language);
  };

  // Admin Route View
  if (isAdminRoute) {
    return (
      <AdminPanel
        data={data}
        onUpdateData={handleUpdateData}
        onExitAdmin={() => {
          window.location.hash = '';
          setIsAdminRoute(false);
        }}
      />
    );
  }

  // Public Portfolio View
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 selection:bg-emerald-500/20 selection:text-emerald-800 dark:selection:text-emerald-300 font-sans transition-colors duration-200">
      {/* Navigation */}
      <Navbar
        data={data}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Main Content */}
      <main id="main-content">
        <Hero
          data={data}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />
        <StatsBar data={data} />
        <Projects data={data} />
        <Methodology />
        <TechStack data={data} />
        <ExperienceTimeline data={data} />
        <Contact data={data} />
      </main>

      {/* Footer */}
      <Footer
        data={data}
        onOpenTerminal={() => setIsTerminalOpen(true)}
      />

      {/* Global Interactive Terminal Modal */}
      <InteractiveTerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        data={data}
      />
    </div>
  );
}
