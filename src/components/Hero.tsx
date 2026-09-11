import React from 'react';
import { ArrowRight, Github, Linkedin, Terminal, Mail } from 'lucide-react';
import { motion } from 'motion/react';
import { PortfolioData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface HeroProps {
  data: PortfolioData;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ data, onOpenTerminal }) => {
  const { language } = useLanguage();

  return (
    <section className="relative pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-200" id="hero-section">
      {/* Subtle technical background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute top-1/4 left-1/3 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl space-y-6">
          {/* Engineering Badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-slate-900 border border-emerald-200 dark:border-slate-800 text-xs text-emerald-800 dark:text-slate-300 font-mono shadow-xs"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
            <span>Software Engineer</span>
            <span className="text-emerald-300 dark:text-slate-500">|</span>
            <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{language === 'id' ? '4+ Tahun Pengalaman' : '4+ Years Experience'}</span>
          </motion.div>

          {/* Main Hero Heading */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {data.personal.heroHeading}
            </h1>
            <p className="text-lg sm:text-xl text-emerald-700 dark:text-emerald-400 font-medium leading-relaxed">
              {data.personal.heroSubtitle}
            </p>
          </motion.div>

          {/* About Narrative Integrated directly on first page */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-3.5 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
          >
            {data.personal.aboutStory.map((paragraph, idx) => (
              <p key={idx} className="font-normal text-slate-600 dark:text-slate-300 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Specialization & Tech Stack Badges */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap items-center gap-2 pt-1"
          >
            {data.personal.specializationPills.map((pill, idx) => (
              <span
                key={idx}
                className="px-3 py-1.5 text-xs font-mono font-medium text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md hover:border-slate-300 dark:hover:border-slate-700 transition-colors shadow-2xs"
              >
                {pill}
              </span>
            ))}
          </motion.div>

          {/* Action Buttons (CTAs) */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-600/20 group"
              id="hero-cta-projects"
            >
              <span>{language === 'id' ? 'Lihat Semua Proyek' : 'View Projects'}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a
              href="#methodology"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-800 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-sm font-semibold transition-all shadow-xs"
              id="hero-cta-methodology"
            >
              <span>{language === 'id' ? 'Alur Kerja' : 'Engineering Workflow '}</span>
            </a>

            <button
              onClick={onOpenTerminal}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-sm transition-all shadow-xs cursor-pointer"
              title="Open Terminal Shell"
            >
              <Terminal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="hidden sm:inline">{language === 'id' ? 'Terminal' : 'Terminal'}</span>
            </button>

            {/* <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-sm transition-all shadow-xs"
              title="Contact"
            >
              <Mail className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span className="hidden sm:inline">{language === 'id' ? 'Hubungi' : 'Contact'}</span>
            </a> */}

            <a
              href={data.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-sm transition-all shadow-xs"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <a
              href={data.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 text-sm transition-all shadow-xs"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
