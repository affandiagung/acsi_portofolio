import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Code2, Database, Zap, ShieldCheck, Server, Play, CheckCircle2, RefreshCw, Terminal } from 'lucide-react';
import { PortfolioData, EngineeringThought } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface EngineeringPhilosophyProps {
  data: PortfolioData;
}

export const EngineeringPhilosophy: React.FC<EngineeringPhilosophyProps> = ({ data }) => {
  const { t } = useLanguage();
  const [activeThoughtId, setActiveThoughtId] = useState<string>(data.engineeringThoughts[0]?.id || 'api-design');
  
  // Interactive Query Simulator state
  const [simulationMode, setSimulationMode] = useState<'naive' | 'partitioned' | 'cached'>('cached');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simOutput, setSimOutput] = useState<{
    latency: string;
    rowsScanned: string;
    cpuLoad: number;
    planNote: string;
  }>({
    latency: '14 ms',
    rowsScanned: '1 (Key lookup)',
    cpuLoad: 2,
    planNote: 'Served directly from Redis in-memory cache cluster'
  });

  const activeThought = data.engineeringThoughts.find(t => t.id === activeThoughtId) || data.engineeringThoughts[0];

  const runSimulation = (mode: 'naive' | 'partitioned' | 'cached') => {
    setSimulationMode(mode);
    setIsSimulating(true);

    setTimeout(() => {
      if (mode === 'naive') {
        setSimOutput({
          latency: '242,180 ms (~4.03 minutes)',
          rowsScanned: '41,200,000 (Full Table Scan)',
          cpuLoad: 94,
          planNote: 'Seq Scan on unpartitioned telemetry table. High disk I/O wait.'
        });
      } else if (mode === 'partitioned') {
        setSimOutput({
          latency: '17,820 ms (17.8s)',
          rowsScanned: '320,000 (Partition pruned)',
          cpuLoad: 28,
          planNote: 'Index Scan on monthly partition + Materialized View hourly rollup'
        });
      } else {
        setSimOutput({
          latency: '12 ms',
          rowsScanned: '1 (Hash Key lookup)',
          cpuLoad: 2,
          planNote: 'Redis Cache-Aside hit. Sub-millisecond memory fetch.'
        });
      }
      setIsSimulating(false);
    }, mode === 'naive' ? 1200 : mode === 'partitioned' ? 700 : 250);
  };

  const getPillarIcon = (id: string) => {
    switch (id) {
      case 'api-design':
        return <Code2 className="w-4 h-4" />;
      case 'database-optimization':
        return <Database className="w-4 h-4" />;
      case 'performance-caching':
        return <Zap className="w-4 h-4" />;
      case 'reliability-fault':
        return <ShieldCheck className="w-4 h-4" />;
      case 'deployment-devops':
        return <Server className="w-4 h-4" />;
      default:
        return <Code2 className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-20 bg-slate-50/80 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200" id="how-i-think">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 px-2.5 py-1 rounded-md mb-3 shadow-2xs">
            <span>{t('philosophy.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t('philosophy.title')}
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('philosophy.subtitle')}
          </p>
        </div>

        {/* 5 Thought Pillars Selection Bar */}
        <div className="flex flex-wrap gap-2 pb-6 border-b border-slate-200 dark:border-slate-800">
          {data.engineeringThoughts.map((thought) => (
            <button
              key={thought.id}
              onClick={() => setActiveThoughtId(thought.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                activeThoughtId === thought.id
                  ? 'bg-emerald-600 text-white dark:bg-emerald-500 dark:text-slate-950 font-bold shadow-xs'
                  : 'bg-white dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800'
              }`}
            >
              {getPillarIcon(thought.id)}
              <span>{thought.title}</span>
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Thought Principles */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-semibold uppercase tracking-wider mb-1">
                {activeThought.tag}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                {activeThought.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                {activeThought.subtitle}
              </p>
            </div>

            {/* Key Architectural Points */}
            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-semibold">
                {t('philosophy.principlesTitle')}
              </h4>
              <ul className="space-y-2.5">
                {activeThought.keyPoints.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Code Snippet / Production Implementation */}
          <div className="lg:col-span-6">
            {activeThought.codeSnippet ? (
              <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
                <div className="bg-slate-900 px-4 py-2.5 border-b border-slate-800 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="text-slate-200 font-semibold">
                      {activeThought.codeSnippet.title}
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-500 uppercase">
                    {activeThought.codeSnippet.language}
                  </span>
                </div>
                <div className="p-4 overflow-x-auto">
                  <pre className="text-xs font-mono text-slate-200 leading-relaxed">
                    <code>{activeThought.codeSnippet.code}</code>
                  </pre>
                </div>
              </div>
            ) : null}
          </div>
        </div>

        {/* Interactive Query Latency & Optimization Benchmark Simulator */}
        <div className="mt-14 p-6 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/90 shadow-md dark:shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-semibold uppercase tracking-wider">
                <Terminal className="w-4 h-4" />
                <span>{t('philosophy.simBadge')}</span>
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-0.5">
                {t('philosophy.simTitle')}
              </h4>
            </div>

            {/* Mode Switchers */}
            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => runSimulation('naive')}
                disabled={isSimulating}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                  simulationMode === 'naive'
                    ? 'bg-rose-100 dark:bg-rose-500/20 text-rose-800 dark:text-rose-300 border border-rose-300 dark:border-rose-500/50 font-semibold'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {t('philosophy.simMode1')}
              </button>
              <button
                onClick={() => runSimulation('partitioned')}
                disabled={isSimulating}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                  simulationMode === 'partitioned'
                    ? 'bg-amber-100 dark:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-500/50 font-semibold'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {t('philosophy.simMode2')}
              </button>
              <button
                onClick={() => runSimulation('cached')}
                disabled={isSimulating}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg transition-all cursor-pointer ${
                  simulationMode === 'cached'
                    ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-500/50 font-semibold'
                    : 'bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800'
                }`}
              >
                {t('philosophy.simMode3')}
              </button>
            </div>
          </div>

          {/* Simulator Live Output */}
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs">
            <div className="bg-slate-50 dark:bg-slate-900/80 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-slate-500 dark:text-slate-400 text-[11px]">{t('philosophy.latency')}</span>
              <div className={`text-xl font-bold ${
                simulationMode === 'naive' ? 'text-rose-600 dark:text-rose-400' : simulationMode === 'partitioned' ? 'text-amber-600 dark:text-amber-400' : 'text-emerald-700 dark:text-emerald-400'
              }`}>
                {isSimulating ? t('philosophy.executing') : simOutput.latency}
              </div>
              <span className="text-[10px] text-slate-400 dark:text-slate-500">{t('philosophy.latencyDesc')}</span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/80 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
              <span className="text-slate-500 dark:text-slate-400 text-[11px]">{t('philosophy.scanned')}</span>
              <div className="text-xl font-bold text-slate-800 dark:text-slate-200">
                {isSimulating ? t('philosophy.scanning') : simOutput.rowsScanned}
              </div>
              <span className="text-[10px] text-slate-400 dark:text-slate-500">{t('philosophy.scannedDesc')}</span>
            </div>

            <div className="bg-slate-50 dark:bg-slate-900/80 p-4 rounded-xl border border-slate-200 dark:border-slate-800 space-y-1">
              <div className="flex justify-between items-center text-slate-500 dark:text-slate-400 text-[11px]">
                <span>{t('philosophy.cpuLoad')}</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{simOutput.cpuLoad}%</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
                <div
                  className={`h-full transition-all duration-500 ${
                    simOutput.cpuLoad > 70 ? 'bg-rose-500' : simOutput.cpuLoad > 20 ? 'bg-amber-500' : 'bg-emerald-500'
                  }`}
                  style={{ width: `${simOutput.cpuLoad}%` }}
                />
              </div>
              <span className="text-[10px] text-slate-400 dark:text-slate-500 pt-1 block">{t('philosophy.cpuDesc')}</span>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-700 dark:text-slate-300">
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 dark:text-emerald-400">➜</span>
              <span className="text-slate-500 dark:text-slate-400">{t('philosophy.planAnalysis')}</span>
              <span className="text-slate-800 dark:text-slate-200 font-medium">{simOutput.planNote}</span>
            </div>
            <span className="text-slate-400 dark:text-slate-500 text-[11px]">EXPLAIN (ANALYZE, BUFFERS)</span>
          </div>
        </div>
      </div>
    </section>
  );
};
