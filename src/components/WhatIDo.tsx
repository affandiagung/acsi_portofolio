import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Server, Database, Cpu, Bot, Layers, CheckCircle2, ChevronRight, ArrowUpRight } from 'lucide-react';
import { PortfolioData, ServiceCard } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface WhatIDoProps {
  data: PortfolioData;
}

export const WhatIDo: React.FC<WhatIDoProps> = ({ data }) => {
  const { t } = useLanguage();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      default:
        return <Server className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50/80 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200" id="what-i-do">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 px-2.5 py-1 rounded-md mb-3 shadow-2xs">
            <span>{t('whatIDo.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t('whatIDo.title')}
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('whatIDo.subtitle')}
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.whatIDo.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`p-6 rounded-xl bg-white dark:bg-slate-950/80 border transition-all relative overflow-hidden flex flex-col justify-between shadow-xs hover:shadow-md ${
                selectedCard === card.id
                  ? 'border-emerald-500 shadow-emerald-500/10'
                  : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xs">
                    {getIcon(card.icon)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {card.description}
                </p>

                {/* Sub-items checklist */}
                <ul className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800/70">
                  {card.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                <span>production ready</span>
                <span className="text-emerald-700 dark:text-emerald-400/80 font-mono font-medium">active stack</span>
              </div>
            </motion.div>
          ))}

          {/* 6th Card: Cross-functional Mindset */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 5 * 0.08 }}
            className="p-6 rounded-xl bg-emerald-50/60 dark:bg-gradient-to-br dark:from-slate-950/90 dark:to-slate-900/90 border border-emerald-200 dark:border-emerald-500/30 flex flex-col justify-between shadow-xs hover:shadow-md"
          >
            <div>
              <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-800/50 w-fit mb-4">
                <ArrowUpRight className="w-5 h-5 text-emerald-700 dark:text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
                {t('whatIDo.card6Title')}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                {t('whatIDo.card6Desc')}
              </p>
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-400 font-mono pt-2">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  <span>Sub-20s analytical latency</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  <span>3.5 TB data pipeline management</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  <span>Enterprise SLA adherence</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-3 border-t border-emerald-200 dark:border-slate-800 flex items-center justify-between text-xs">
              <a
                href="#projects"
                className="text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300 font-semibold inline-flex items-center gap-1 transition-colors"
              >
                <span>{t('whatIDo.card6Link')}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

