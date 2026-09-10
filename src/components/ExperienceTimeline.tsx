import React from 'react';
import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Award } from 'lucide-react';
import { PortfolioData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ExperienceTimelineProps {
  data: PortfolioData;
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({ data }) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-50/80 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200" id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 px-2.5 py-1 rounded-md mb-3 shadow-2xs">
            <span>{t('experience.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t('experience.title')}
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-4 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
          {data.experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-10 sm:pl-12 group"
            >
              {/* Timeline Marker */}
              <div className="absolute left-1.5 sm:left-2 top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-2 border-emerald-600 dark:border-emerald-400 group-hover:scale-125 transition-transform shadow-xs" />

              <div className="bg-white dark:bg-slate-950/80 border border-slate-200/90 dark:border-slate-800/90 group-hover:border-slate-300 dark:group-hover:border-slate-700 rounded-xl p-6 transition-all shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                      <span>{exp.location}</span>
                    </span>
                  </div>
                </div>

                {/* Impact Bullets */}
                <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {exp.impactBullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies used */}
                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-900 flex flex-wrap gap-1.5">
                  {exp.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[11px] font-mono text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Industry Recognition */}
        <div className="mt-16 pt-10 border-t border-slate-200 dark:border-slate-800/80">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider mb-4">
            <Award className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{t('experience.certTitle')}</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800 flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400 mb-1">
                    <span>{cert.year}</span>
                    <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{t('experience.verified')}</span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                    {cert.org}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
