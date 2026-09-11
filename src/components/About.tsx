import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Award, GraduationCap, Server, ShieldCheck, Zap } from 'lucide-react';
import { PortfolioData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface AboutProps {
  data: PortfolioData;
}

export const About: React.FC<AboutProps> = ({ data }) => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-200" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 px-2.5 py-1 rounded-md mb-3 shadow-2xs">
            <span>{t('about.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Main Story Narrative */}
          <div className="lg:col-span-7 space-y-5 text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            {data.personal.aboutStory.map((paragraph, idx) => (
              <p key={idx} className="text-slate-600 dark:text-slate-300 font-normal">
                {paragraph}
              </p>
            ))}

            {/* Direct Engineering Values Callouts */}
            <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-semibold text-sm">
                  <Zap className="w-4 h-4" />
                  <span>{t('about.value1Title')}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  {t('about.value1Desc')}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-2xs">
                <div className="flex items-center gap-2 text-blue-700 dark:text-blue-400 font-semibold text-sm">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{t('about.value2Title')}</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-normal">
                  {t('about.value2Desc')}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Specs & Education Card */}
          <div className="lg:col-span-5 space-y-4">
            {/* Quick Profile Summary Card */}
            <div className="bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-4 shadow-xs">
              <div className="border-b border-slate-200 dark:border-slate-800/80 pb-3">
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium">
                  {t('about.profileTitle')}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">
                  {data.personal.name}
                </h3>
                <p className="text-xs text-emerald-700 dark:text-emerald-400 font-mono font-medium mt-0.5">
                  {data.personal.roleTitle}
                </p>
              </div>

              <div className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300">
                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800/40">
                  <span className="text-slate-500 dark:text-slate-400">{t('about.experienceLabel')}</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">4+ Years</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800/40">
                  <span className="text-slate-500 dark:text-slate-400">{t('about.languagesLabel')}</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">Python, PHP, TypeScript, SQL</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800/40">
                  <span className="text-slate-500 dark:text-slate-400">{t('about.databasesLabel')}</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">PostgreSQL, MySQL, Redis</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-200 dark:border-slate-800/40">
                  <span className="text-slate-500 dark:text-slate-400">{t('about.locationLabel')}</span>
                  <span className="font-semibold text-slate-900 dark:text-slate-200">{data.personal.domicile}</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 dark:text-slate-400">{t('about.relocationLabel')}</span>
                  <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{t('about.relocationValue')}</span>
                </div>
              </div>
            </div>

            {/* Education & Academic Honors */}
            <div className="bg-slate-50/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-5 space-y-3 shadow-xs">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider font-medium">
                <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t('about.educationTitle')}</span>
              </div>
              {data.education.map((edu, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-bold text-slate-900 dark:text-white">{edu.school}</span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{edu.year}</span>
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300">{edu.degree}</div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-semibold">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                    <span>{edu.gpa}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
