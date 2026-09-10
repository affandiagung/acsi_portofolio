import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Calendar, Clock, BookOpen, Share2, Check } from 'lucide-react';
import { EngineeringNote } from '../types';

interface NoteReaderModalProps {
  note: EngineeringNote | null;
  onClose: () => void;
}

export const NoteReaderModal: React.FC<NoteReaderModalProps> = ({ note, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!note) return null;

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/80 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl z-10 text-slate-900 dark:text-slate-100"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-start justify-between z-20">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800/60 px-2 py-0.5 rounded font-semibold">
                  <BookOpen className="w-3 h-3" />
                  <span>Engineering Note</span>
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                  {note.date}
                </span>
                <span className="text-xs font-mono text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Clock className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                  {note.readTime}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight leading-snug">
                {note.title}
              </h2>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-slate-800/80 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors shrink-0 ml-4"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Article Content */}
          <div className="p-6 space-y-6">
            <div className="flex flex-wrap gap-1.5 pb-4 border-b border-slate-200 dark:border-slate-800">
              {note.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-0.5 text-xs font-mono bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <div className="max-w-none text-sm leading-relaxed text-slate-700 dark:text-slate-300 space-y-4">
              {note.content.split('\n\n').map((block, idx) => {
                if (block.startsWith('### ')) {
                  return (
                    <h3 key={idx} className="text-base font-bold text-slate-900 dark:text-white pt-2 border-b border-slate-200 dark:border-slate-800 pb-1">
                      {block.replace('### ', '')}
                    </h3>
                  );
                }
                if (block.startsWith('```')) {
                  const lines = block.split('\n');
                  const code = lines.slice(1, -1).join('\n');
                  return (
                    <div key={idx} className="bg-slate-950 border border-slate-800 rounded-lg p-3.5 font-mono text-xs text-emerald-400 overflow-x-auto my-3 shadow-inner">
                      <pre><code>{code}</code></pre>
                    </div>
                  );
                }
                return (
                  <p key={idx} className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {block}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-200 dark:border-transparent text-xs font-medium transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Share2 className="w-3.5 h-3.5" />}
              <span>{copied ? 'Link Copied' : 'Share Article'}</span>
            </button>

            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
