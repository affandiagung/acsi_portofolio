import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Layers, Code2, Network, Server, Activity, CheckCircle2, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { METHODOLOGY_EN, METHODOLOGY_ID, MethodologyStep } from '../data/methodologyData';
import { useLanguage } from '../context/LanguageContext';

export const Methodology: React.FC = () => {
  const { language } = useLanguage();
  const steps: MethodologyStep[] = language === 'id' ? METHODOLOGY_ID : METHODOLOGY_EN;
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Search className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
      case '02':
        return <Layers className="w-4 h-4 text-sky-600 dark:text-sky-400" />;
      case '03':
        return <Code2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />;
      case '04':
        return <Network className="w-4 h-4 text-purple-600 dark:text-purple-400" />;
      case '05':
        return <Server className="w-4 h-4 text-amber-600 dark:text-amber-400" />;
      case '06':
        return <Activity className="w-4 h-4 text-teal-600 dark:text-teal-400" />;
      default:
        return <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  const getStepColorClass = (step: string) => {
    switch (step) {
      case '01':
        return 'border-emerald-500/40 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300';
      case '02':
        return 'border-sky-500/40 bg-sky-50/60 dark:bg-sky-950/40 text-sky-700 dark:text-sky-300';
      case '03':
        return 'border-indigo-500/40 bg-indigo-50/60 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300';
      case '04':
        return 'border-purple-500/40 bg-purple-50/60 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300';
      case '05':
        return 'border-amber-500/40 bg-amber-50/60 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300';
      case '06':
        return 'border-teal-500/40 bg-teal-50/60 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300';
      default:
        return 'border-emerald-500/40 bg-emerald-50/60 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300';
    }
  };

  const activeStep = steps[activeStepIndex] || steps[0];

  return (
    <section className="py-14 sm:py-16 bg-slate-50/80 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200" id="methodology">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="max-w-3xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 px-2.5 py-1 rounded-md mb-2 shadow-2xs">
            <span>{language === 'id' ? 'METODOLOGI SIKLUS HIDUP SOFTWARE' : 'SOFTWARE ENGINEERING LIFECYCLE'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {language === 'id' ? 'Alur Rekayasa: Dari Kebutuhan Hingga Pemeliharaan' : 'Engineering Workflow: From Requirements to Maintenance'}
          </h2>
          <p className="mt-1.5 text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
            {language === 'id'
              ? 'Enam tahapan terstruktur yang saya terapkan dalam setiap pengembangan sistem untuk menjamin keandalan, performa, dan kestabilan jangka panjang di lingkungan produksi.'
              : 'Six structured stages I apply across every software project to ensure production reliability, performance, and long-term operational stability.'}
          </p>
        </div>

        {/* 6 Step Single-Row Selector (All 6 cards in 1 row) */}
        <div className="flex lg:grid lg:grid-cols-6 gap-2 sm:gap-2.5 overflow-x-auto pb-2 lg:pb-0 mb-5 scrollbar-none snap-x">
          {steps.map((item, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: idx * 0.03 }}
                onClick={() => setActiveStepIndex(idx)}
                className={`flex-1 min-w-[150px] sm:min-w-[160px] lg:min-w-0 snap-start p-3 rounded-xl border transition-all cursor-pointer relative overflow-hidden flex flex-col justify-between group select-none ${
                  isActive
                    ? 'bg-white dark:bg-slate-900 border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                    : 'bg-white/90 dark:bg-slate-900/60 hover:bg-white dark:hover:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-2xs'
                }`}
                id={`methodology-step-${item.step}`}
              >
                {/* Active Indicator Bar */}
                {isActive && (
                  <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500" />
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5">
                      <div className={`w-7 h-7 rounded-lg flex items-center justify-center border transition-colors ${
                        isActive
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800'
                          : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700'
                      }`}>
                        {getStepIcon(item.step)}
                      </div>
                      <span className={`font-mono text-xs font-bold ${
                        isActive ? 'text-emerald-700 dark:text-emerald-400' : 'text-slate-500 dark:text-slate-400'
                      }`}>
                        {item.step}
                      </span>
                    </div>

                    <span className={`text-[9px] font-mono font-semibold px-1.5 py-0.5 rounded border truncate max-w-[78px] ${getStepColorClass(item.step)}`}>
                      {item.tag.split('&')[0].trim()}
                    </span>
                  </div>

                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1 mt-0.5 leading-snug">
                    {item.description}
                  </p>
                </div>

                <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[10px] font-mono">
                  <span className={`font-semibold ${isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300'}`}>
                    {isActive ? (language === 'id' ? 'Aktif' : 'Active') : (language === 'id' ? 'Pilih' : 'Select')}
                  </span>
                  <ArrowRight className={`w-3 h-3 transition-transform ${isActive ? 'text-emerald-600 dark:text-emerald-400 translate-x-0.5' : 'text-slate-300 dark:text-slate-600 group-hover:translate-x-0.5'}`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Active Step Deep Dive Card (Full Screen-Prominent View) */}
        <motion.div
          key={activeStep.step}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="p-5 sm:p-7 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg relative overflow-hidden"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-5 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 text-xl font-mono font-bold text-emerald-700 dark:text-emerald-400 shadow-2xs">
                {activeStep.step}
              </div>
              <div>
                <div className="text-xs font-mono font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                  {language === 'id' ? `Tahap ${activeStep.step} — ${activeStep.tag}` : `Phase ${activeStep.step} — ${activeStep.tag}`}
                </div>
                <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  {activeStep.title}
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-300 max-w-lg leading-relaxed">
                {activeStep.description}
              </p>

              {/* Prev / Next Stage Quick Controls */}
              <div className="hidden sm:flex items-center gap-1.5 shrink-0 bg-slate-50 dark:bg-slate-950/60 p-1.5 rounded-xl border border-slate-200 dark:border-slate-800">
                <button
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  disabled={activeStepIndex === 0}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  title={language === 'id' ? 'Tahap Sebelumnya' : 'Previous Step'}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400 font-bold px-1.5">
                  {activeStepIndex + 1}/{steps.length}
                </span>
                <button
                  onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
                  disabled={activeStepIndex === steps.length - 1}
                  className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  title={language === 'id' ? 'Tahap Selanjutnya' : 'Next Step'}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="pt-5">
            <div className="flex items-center justify-between mb-3.5">
              <h5 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold">
                {language === 'id' ? 'Aktivitas Kunci & Standar Eksekusi:' : 'Key Engineering Actions & Standards:'}
              </h5>
              <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-medium">
                {language === 'id' ? '3 Standar Operasional' : '3 Operational Standards'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {activeStep.details.map((detail, dIdx) => (
                <div
                  key={dIdx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 space-y-2 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                    <span>0{dIdx + 1}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
