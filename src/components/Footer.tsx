import React from 'react';
import { Terminal, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PortfolioData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  data: PortfolioData;
  onOpenTerminal: () => void;
  onOpenResume?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ data, onOpenTerminal }) => {
  const { t, language } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100/80 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-12 text-slate-600 dark:text-slate-400 text-xs font-mono transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-200 dark:border-slate-900">
          <div>
            <div className="flex items-center gap-2 text-slate-900 dark:text-slate-100 font-bold text-sm tracking-tight mb-1">
              <span>{data.personal.name}</span>
              <span className="text-slate-300 dark:text-slate-600">/</span>
              <span className="text-emerald-700 dark:text-emerald-400 text-xs font-medium">Software Engineer</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 max-w-md text-xs font-sans">
              {language === 'id' 
                ? 'Software Engineer yang membangun aplikasi handal, sistem API, integrasi data, dan konfigurasi server cloud produksi.'
                : 'Software Engineer building reliable applications, API architectures, data integrations, and production cloud systems.'}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-sans text-slate-600 dark:text-slate-400">
            <a href="#projects" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
              {language === 'id' ? 'Proyek' : 'Projects'}
            </a>
            <a href="#methodology" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
              {language === 'id' ? 'Metodologi' : 'Workflow'}
            </a>
            <a href="#tech-stack" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
              {language === 'id' ? 'Tech Stack' : 'Tech Stack'}
            </a>
            <a href="#experience" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
              {language === 'id' ? 'Pengalaman' : 'Experience'}
            </a>
            <a href="#contact" className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors">
              {language === 'id' ? 'Kontak' : 'Contact'}
            </a>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenTerminal}
              className="p-2 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-200/70 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-800 shadow-2xs cursor-pointer"
              title="Open Terminal"
              aria-label="Open Terminal"
            >
              <Terminal className="w-4 h-4 text-emerald-700 dark:text-emerald-400" />
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-200/70 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 transition-colors border border-slate-200 dark:border-slate-800 shadow-2xs cursor-pointer"
              title={t('footer.backToTop')}
              aria-label={t('footer.backToTop')}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 dark:text-slate-400 text-[11px]">
          <div className="flex items-center gap-2">
            {/* <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400" /> */}
            {/* <span>{language === 'id' ? 'Pipeline Telemetri Aktif · 99.9% Uptime SLA' : 'Telemetry Pipeline Active · 99.9% Uptime SLA'}</span> */}
          </div>

          <div>
            © {new Date().getFullYear()} {data.personal.name}. {t('footer.builtWith')}
          </div>
        </div>
      </div>
    </footer>
  );
};
