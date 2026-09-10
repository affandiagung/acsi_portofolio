import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, CheckCircle2, AlertTriangle, Cpu, ArrowRight, Layers } from 'lucide-react';
import { Project } from '../types';
import { ProjectVisual } from './ProjectVisual';
import { useLanguage } from '../context/LanguageContext';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const { t, language } = useLanguage();
  if (!project) return null;

  const getFlagBadgeStyle = (flag?: string) => {
    switch (flag) {
      case 'ERP':
        return 'text-purple-800 dark:text-purple-300 bg-purple-50 dark:bg-purple-950/70 border-purple-200 dark:border-purple-800/60';
      case 'Website':
        return 'text-sky-800 dark:text-sky-300 bg-sky-50 dark:bg-sky-950/70 border-sky-200 dark:border-sky-800/60';
      case 'Install & Cloud':
      case 'Instalasi & Cloud':
        return 'text-amber-800 dark:text-amber-300 bg-amber-50 dark:bg-amber-950/70 border-amber-200 dark:border-amber-800/60';
      case 'Maintenance':
        return 'text-teal-800 dark:text-teal-300 bg-teal-50 dark:bg-teal-950/70 border-teal-200 dark:border-teal-800/60';
      case 'AI / Backend':
      default:
        return 'text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/70 border-emerald-200 dark:border-emerald-800/60';
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl z-10 text-slate-900 dark:text-slate-100"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between z-20">
            <div>
              <div className="flex items-center gap-2 mb-1 flex-wrap">
                {project.flag && (
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-bold border shadow-2xs ${getFlagBadgeStyle(project.flag)}`}>
                    {project.flag}
                  </span>
                )}
                {project.badge && (
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
                    {project.badge}
                  </span>
                )}
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 capitalize">
                  {language === 'id' ? 'Kategori' : 'Category'}: {project.category}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 space-y-7 text-sm">
            {/* Visual Preview / Showcase Section */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{t('modal.visualTitle')}</span>
                </span>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
                  >
                    <span>{t('visual.openDemo')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              <ProjectVisual project={project} mode="showcase" />
            </div>

            {/* Project Scope & Deployment Environment Strip */}
            {(project.role || project.status || project.projectScope || project.deploymentEnvironment) && (
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-slate-50 dark:bg-slate-950/40 p-3.5 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono">
                {project.role && (
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">{language === 'id' ? 'Peran' : 'Role'}</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      {Array.isArray(project.role) ? project.role.join(', ') : String(project.role)}
                    </span>
                  </div>
                )}
                {project.status && (
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">{language === 'id' ? 'Status' : 'Status'}</span>
                    <span className="font-bold text-emerald-600 dark:text-emerald-400">{project.status}</span>
                  </div>
                )}
                {project.projectScope && (
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">{language === 'id' ? 'Cakupan' : 'Scope'}</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      {typeof project.projectScope === 'string'
                        ? project.projectScope
                        : (project.projectScope?.type || project.projectScope?.description || 'Full Lifecycle')}
                    </span>
                  </div>
                )}
                {project.deploymentEnvironment && (
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-semibold">{language === 'id' ? 'Lingkungan' : 'Environment'}</span>
                    <span className="font-bold text-slate-800 dark:text-slate-200">
                      {typeof project.deploymentEnvironment === 'string'
                        ? project.deploymentEnvironment
                        : (project.deploymentEnvironment?.type || project.deploymentEnvironment?.server_os || 'Production')}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Business Purpose & Impact */}
            {project.businessPurpose && (
              <div className="bg-slate-50 dark:bg-slate-950/60 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
                <span className="font-mono font-bold text-slate-500 dark:text-slate-400 block mb-1 uppercase tracking-wider text-[11px]">
                  {language === 'id' ? 'Tujuan Bisnis & Nilai Solusi' : 'Business Purpose & Value'}
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm">
                  {project.businessPurpose}
                </p>
              </div>
            )}

            {/* Integrated Applications (if applicable) */}
            {project.applications && project.applications.length > 0 && (
              <div className="space-y-1.5">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                  {language === 'id' ? 'Modul & Aplikasi Terintegrasi' : 'Integrated Modules & Applications'}
                </span>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.applications.map((app, aIdx) => {
                    const appName = typeof app === 'string' ? app : app.name;
                    const appDesc = typeof app === 'object' ? app.description : undefined;
                    const appUrl = typeof app === 'object' && app.url && app.url !== '#' ? app.url : undefined;

                    return (
                      <div
                        key={aIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/80 text-emerald-900 dark:text-emerald-300 rounded-lg shadow-2xs"
                      >
                        <span className="font-semibold">{appName}</span>
                        {appDesc && (
                          <span className="text-[11px] text-emerald-700/80 dark:text-emerald-400/80 hidden sm:inline">
                            — {appDesc}
                          </span>
                        )}
                        {appUrl && (
                          <a
                            href={appUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-1 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-0.5"
                            title={`Open ${appName}`}
                          >
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Interactive Architecture Flow Diagram */}
            {project.architecture && (
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
                    <Cpu className="w-4 h-4" />
                    <span>{t('modal.architectureTitle')}</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {language === 'id' ? 'alur pipeline end-to-end' : 'end-to-end pipeline'}
                  </span>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-950/40 p-3 rounded-lg border border-slate-200 dark:border-slate-800/60">
                  {project.architecture.flowDescription}
                </p>

                {/* Flow Diagram Steps */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-2 pt-1">
                  {project.architecture.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className="bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 rounded-xl p-3 flex flex-col justify-between relative group hover:border-emerald-500 dark:hover:border-emerald-500/50 transition-colors shadow-2xs"
                    >
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-slate-400 mb-1.5">
                          <span className="text-emerald-700 dark:text-emerald-400 font-bold">Step 0{idx + 1}</span>
                          {step.tag && (
                            <span className="bg-white dark:bg-slate-900 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300">
                              {step.tag}
                            </span>
                          )}
                        </div>
                        <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                          {step.title}
                        </h4>
                        <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-snug">
                          {step.desc}
                        </p>
                      </div>

                      {idx < project.architecture!.steps.length - 1 && (
                        <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-10">
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600 dark:text-slate-600 dark:group-hover:text-emerald-400 transition-colors" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-rose-50/50 dark:bg-slate-950/60 border border-rose-200 dark:border-slate-800/80 rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-xs uppercase tracking-wider font-mono">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{t('modal.problemTitle')}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="bg-emerald-50/50 dark:bg-slate-950/60 border border-emerald-200 dark:border-slate-800/80 rounded-xl p-5 space-y-2">
                <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider font-mono">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t('modal.solutionTitle')}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Technical Challenges & Key Contributions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                  {t('modal.challengesTitle')}
                </h4>
                <ul className="space-y-2">
                  {project.technicalChallenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <span className="text-amber-600 dark:text-amber-400 font-mono text-sm leading-none mt-0.5">•</span>
                      <span>{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                  {t('modal.contributionsTitle')}
                </h4>
                <ul className="space-y-2">
                  {project.keyContributions.map((contribution, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{contribution}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Stack Pills */}
            <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-800">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">
                {t('modal.stackTitle')}
              </span>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project.stack.map((item, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 text-xs font-mono bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-md"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="sticky bottom-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between flex-wrap gap-3">
            <div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950 text-xs font-semibold transition-all shadow-xs"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{t('projects.liveApp')}</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg"
            >
              {t('modal.close')}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
