import React, { useState, useEffect } from 'react';
import { Terminal, Menu, X, Github, Linkedin, Sun, Moon, Languages } from 'lucide-react';
import { PortfolioData } from '../types';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';

interface NavbarProps {
  data: PortfolioData;
  onOpenTerminal: () => void;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ data, onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: language === 'id' ? 'Proyek' : 'Projects', href: '#projects' },
    { name: language === 'id' ? 'Metodologi' : 'Workflow (01-06)', href: '#methodology' },
    { name: language === 'id' ? 'Tech Stack' : 'Tech Stack', href: '#tech-stack' },
    { name: language === 'id' ? 'Pengalaman' : 'Experience', href: '#experience' },
    { name: language === 'id' ? 'Kontak' : 'Contact', href: '#contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-slate-950/85 backdrop-blur-md border-b border-slate-200/90 dark:border-slate-800/80 shadow-xs dark:shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group"
          id="nav-brand-link"
        >
          <div className="w-9 h-9 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-center text-emerald-700 dark:text-emerald-400 font-mono font-bold text-base transition-colors group-hover:bg-emerald-100 dark:group-hover:bg-emerald-500/20 group-hover:border-emerald-400 dark:group-hover:border-emerald-500/50 shadow-xs">
            A_
          </div>
          <div>
            <div className="font-mono text-sm font-semibold tracking-tight text-slate-900 dark:text-slate-100 flex items-center gap-2">
              AFFANDI
              <span className="inline-flex items-center gap-1 text-[11px] font-mono font-normal text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 px-1.5 py-0.5 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
                sys_ok
              </span>
            </div>
            <div className="text-[11px] text-slate-500 dark:text-slate-400 tracking-wide font-medium">
              Software Engineer
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:text-emerald-400 dark:hover:bg-slate-900/60 rounded-md transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Language Switch Toggle (ID / EN) */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-md transition-all shadow-xs cursor-pointer group"
            title={language === 'id' ? 'Ganti Bahasa ke English' : 'Switch Language to Indonesian'}
            aria-label="Switch Language (ID / EN)"
            id="nav-btn-lang-toggle"
          >
            <Languages className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover:rotate-12 transition-transform" />
            <span className="font-mono text-[11px] font-bold tracking-wider">
              {language === 'id' ? 'ID' : 'EN'}
            </span>
            <span className="text-[10px] px-1 py-0.2 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 rounded border border-emerald-200/80 dark:border-emerald-800/60">
              {language === 'id' ? 'EN' : 'ID'}
            </span>
          </button>

          {/* Theme Toggle (Dark/Light) */}
          <button
            onClick={toggleTheme}
            className="p-1.5 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-md transition-colors shadow-xs cursor-pointer"
            title={isDark ? 'Mode Cerah' : 'Mode Gelap'}
            aria-label="Toggle theme"
            id="nav-btn-theme-toggle"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          {/* Terminal Shell Shortcut */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono font-medium text-slate-700 hover:text-emerald-700 dark:text-slate-300 dark:hover:text-emerald-400 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-md transition-colors shadow-xs cursor-pointer"
            title="Terminal Shell (Cmd+K)"
            id="nav-btn-terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="hidden md:inline">Shell</span>
            <kbd className="hidden lg:inline-block px-1 py-0.5 text-[9px] font-sans bg-slate-100 dark:bg-slate-800 text-slate-500 rounded border border-slate-200 dark:border-slate-700">
              ⌘K
            </kbd>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          {/* Language Toggle on Mobile */}
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1 px-2 py-1 text-xs font-mono font-bold text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded shadow-xs"
            aria-label="Toggle language mobile"
          >
            <Languages className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
            <span>{language === 'id' ? 'ID' : 'EN'}</span>
          </button>

          <button
            onClick={toggleTheme}
            className="p-1.5 text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded"
            aria-label="Toggle theme mobile"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-emerald-700 dark:text-slate-200 dark:hover:text-emerald-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-900"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
              className="flex items-center justify-center gap-2 px-3 py-2 text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 rounded-lg border border-slate-200 dark:border-slate-800"
            >
              <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>{language === 'id' ? 'Buka Terminal Shell' : 'Open Terminal Shell'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
