import React, { useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react';
import { PortfolioData, EngineeringNote } from '../types';
import { NoteReaderModal } from './NoteReaderModal';
import { useLanguage } from '../context/LanguageContext';

interface EngineeringNotesProps {
  data: PortfolioData;
}

export const EngineeringNotes: React.FC<EngineeringNotesProps> = ({ data }) => {
  const { t } = useLanguage();
  const [selectedNote, setSelectedNote] = useState<EngineeringNote | null>(null);

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-200" id="notes">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 px-2.5 py-1 rounded-md mb-3 shadow-2xs">
            <span>{t('notes.badge')}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {t('notes.title')}
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            {t('notes.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.notes.map((note, idx) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              onClick={() => setSelectedNote(note)}
              className="bg-white dark:bg-slate-900/60 hover:bg-slate-50 dark:hover:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800/90 hover:border-slate-300 dark:hover:border-slate-700 rounded-xl p-6 transition-all duration-200 cursor-pointer flex flex-col justify-between group shadow-xs hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400 mb-2.5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    {note.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                    {note.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-700 dark:group-hover:text-emerald-300 transition-colors mb-2 leading-snug">
                  {note.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4 line-clamp-3">
                  {note.summary}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {note.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 text-[11px] font-mono text-slate-700 dark:text-slate-400 bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-700 dark:text-emerald-400 group-hover:text-emerald-800 dark:group-hover:text-emerald-300">
                  <span>{t('notes.read')}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Reader Modal */}
      <NoteReaderModal
        note={selectedNote}
        onClose={() => setSelectedNote(null)}
      />
    </section>
  );
};
