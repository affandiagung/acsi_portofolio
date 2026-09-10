import React from 'react';
import { motion } from 'motion/react';
import { HardDrive, Gauge, ShieldCheck, Radio } from 'lucide-react';
import { PortfolioData } from '../types';

interface StatsBarProps {
  data: PortfolioData;
}

export const StatsBar: React.FC<StatsBarProps> = ({ data }) => {
  const statIcons = [
    <HardDrive className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    <Gauge className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    <Radio className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
    <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
  ];

  return (
    <section className="py-8 bg-slate-100/70 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800/80 transition-colors duration-200" id="stats-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {data.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white dark:bg-slate-950/40 border border-slate-200/90 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700/80 shadow-xs hover:shadow-sm transition-all group"
            >
              <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 group-hover:border-slate-300 dark:group-hover:border-slate-700 transition-colors shrink-0">
                {statIcons[idx % statIcons.length]}
              </div>
              <div className="space-y-0.5">
                <div className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white font-mono">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-slate-800 dark:text-slate-300">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  {stat.helper}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
