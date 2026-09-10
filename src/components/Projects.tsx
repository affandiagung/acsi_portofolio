import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight, Layers, Server, Cpu, Globe, Bot } from 'lucide-react';
import { PortfolioData, Project } from '../types';
import { ProjectModal } from './ProjectModal';
import { ProjectVisual } from './ProjectVisual';
import { useLanguage } from '../context/LanguageContext';

interface ProjectsProps {
  data: PortfolioData;
}

export const Projects: React.FC<ProjectsProps> = ({ data }) => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  const currentProject = selectedProjectId
    ? data.projects.find((p) => p.id === selectedProjectId) || null
    : null;

  const categories = [
    { id: 'all', label: t('projects.all') },
    { id: 'erp', label: t('projects.erp') },
    { id: 'website', label: t('projects.website') },
    { id: 'install', label: t('projects.install') },
    { id: 'maintenance', label: t('projects.maintenance') },
    { id: 'ai', label: t('projects.ai') },
  ];

  const filteredProjects = activeCategory === 'all'
    ? data.projects
    : data.projects.filter(p => {
        if (p.category === activeCategory) return true;
        if (activeCategory === 'erp' && (p.flag?.toLowerCase().includes('erp') || p.category === 'erp')) return true;
        if (activeCategory === 'website' && (p.flag?.toLowerCase().includes('website') || p.category === 'website')) return true;
        if (activeCategory === 'install' && (p.flag?.toLowerCase().includes('install') || p.category === 'install')) return true;
        if (activeCategory === 'maintenance' && (p.flag?.toLowerCase().includes('maintenance') || p.category === 'maintenance')) return true;
        if (activeCategory === 'ai' && (p.category === 'ai' || p.flag?.toLowerCase().includes('ai') || p.category === 'backend')) return true;
        return false;
      });

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
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-200" id="projects">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 px-2.5 py-1 rounded-md mb-3 shadow-2xs">
              <span>{t('projects.badge')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              {t('projects.title')}
            </h2>
            <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
              {t('projects.subtitle')}
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-100 dark:bg-slate-900/90 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800 shrink-0 self-start md:self-auto shadow-2xs">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950 font-bold shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/70 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 font-medium'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              onClick={() => setSelectedProjectId(project.id)}
              className="bg-white dark:bg-slate-900/70 hover:bg-slate-50 dark:hover:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700/90 rounded-xl p-5 transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-xs hover:shadow-lg relative overflow-hidden"
              id={`project-card-${project.id}`}
            >
              <div>
                {/* Visual Card / Preview Section */}
                <div className="mb-4">
                  <ProjectVisual project={project} mode="thumbnail" />
                </div>

                {/* Top Meta & Flagging */}
                <div className="flex items-center justify-between gap-2 mb-2.5">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {project.flag && (
                      <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded border shadow-2xs ${getFlagBadgeStyle(project.flag)}`}>
                        {project.flag}
                      </span>
                    )}
                    <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      {project.badge || project.category}
                    </span>
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 hover:text-emerald-900 dark:hover:text-emerald-300 flex items-center gap-1 font-semibold"
                      title="Open Live Web Application"
                    >
                      <span>{t('projects.liveApp')}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors mb-1.5 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-2 mb-3.5">
                  {project.subtitle}
                </p>
              </div>

              {/* Bottom: Stack & View Details */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 dark:border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.stack.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[10px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Action Footer */}
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {project.status || 'Active'}
                  </span>

                  <div className="flex items-center gap-1 text-xs text-emerald-700 dark:text-emerald-400 font-semibold group-hover:text-emerald-800 dark:group-hover:text-emerald-300">
                    <span>{t('projects.viewDetail')}</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detailed Spec Modal */}
      <ProjectModal
        project={currentProject}
        onClose={() => setSelectedProjectId(null)}
      />
    </section>
  );
};
