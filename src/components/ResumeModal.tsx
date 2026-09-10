import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink, Award, CheckCircle2, GraduationCap } from 'lucide-react';
import { PortfolioData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: PortfolioData;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose, data }) => {
  const { t, language } = useLanguage();

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 dark:bg-slate-950/85 backdrop-blur-md"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl w-full max-w-4xl max-h-[92vh] overflow-y-auto shadow-2xl z-10 text-slate-900 dark:text-slate-100 flex flex-col"
        >
          {/* Top Actions Header */}
          <div className="sticky top-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between z-20 print:hidden">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span className="text-sm font-bold text-slate-900 dark:text-white">{t('resume.title')}</span>
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400">· {data.personal.name}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg transition-colors cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                <span>{t('resume.print')} / Save PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 rounded-lg transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Document Body */}
          <div className="p-6 sm:p-10 space-y-8 text-slate-800 dark:text-slate-200 text-sm bg-slate-50/50 dark:bg-slate-950/80 print:bg-white print:text-black">
            {/* Header / Personal Details */}
            <div className="border-b border-slate-200 dark:border-slate-800 print:border-black/20 pb-6 space-y-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white print:text-black tracking-tight uppercase">
                {data.personal.name}
              </h1>
              <p className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 print:text-emerald-700 font-mono">
                {data.personal.roleTitle}
              </p>

              <div className="flex flex-wrap gap-y-1 gap-x-4 text-xs font-mono text-slate-600 dark:text-slate-300 print:text-slate-700 pt-2">
                <span className="flex items-center gap-1">
                  <Mail className="w-3 h-3 text-slate-400 dark:text-slate-400" />
                  {data.personal.email}
                </span>
                <span className="flex items-center gap-1">
                  <Phone className="w-3 h-3 text-slate-400 dark:text-slate-400" />
                  {data.personal.phone}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400 dark:text-slate-400" />
                  {data.personal.domicile}
                </span>
              </div>
            </div>

            {/* Summary Profile */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 print:text-emerald-800 font-mono">
                {t('resume.summary')}
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 print:text-slate-800 leading-relaxed">
                {language === 'id'
                  ? 'Software Engineer & Backend Developer dengan pengalaman 4+ tahun dalam membangun sistem backend scalable, REST API, sistem ERP terintegrasi, website SaaS UMKM (POS System), instalasi cloud VPS (AWS, IDCloudHost), serta pemeliharaan & troubleshooting sistem produksi. Berpengalaman dalam pengembangan AI RAG, optimasi query dari 4 menit ke bawah 20 detik, dan pemrosesan dataset telemetri skala gigabyte-terabyte.'
                  : 'AI-focused & Backend Software Engineer with 4+ years of experience building scalable backend systems, REST APIs, integrated ERP solutions, UMKM SaaS web platforms (POS), cloud server setups (AWS, IDCloudHost), and ongoing production troubleshooting. Proven record optimizing queries from 4 minutes to under 20 seconds and handling telemetry pipelines.'}
              </p>
            </div>

            {/* Work Experience */}
            <div className="space-y-4">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 print:text-emerald-800 font-mono">
                {t('resume.experience')}
              </h2>
              <div className="space-y-6">
                {data.experiences.map((exp) => (
                  <div key={exp.id} className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white print:text-black">{exp.role}</span>
                        <span className="text-slate-500 dark:text-slate-400 print:text-slate-600 text-xs"> — {exp.company}</span>
                      </div>
                      <div className="text-xs font-mono text-slate-500 dark:text-slate-400 print:text-slate-600">
                        {exp.period} | {exp.location}
                      </div>
                    </div>

                    <ul className="space-y-1 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800">
                      {exp.impactBullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-emerald-600 dark:text-emerald-400 print:text-emerald-700 font-mono">•</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400 print:text-slate-600 pt-1">
                      Tech: {exp.technologies.join(', ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 print:text-emerald-800 font-mono">
                {t('resume.education')}
              </h2>
              {data.education.map((edu, idx) => (
                <div key={idx} className="flex justify-between items-baseline text-xs">
                  <div>
                    <span className="font-bold text-slate-900 dark:text-white print:text-black">{edu.school}</span>
                    <span className="text-slate-600 dark:text-slate-300 print:text-slate-700"> — {edu.degree}</span>
                  </div>
                  <div className="font-mono text-slate-500 dark:text-slate-400 print:text-slate-600">
                    {edu.year} | {edu.gpa}
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications & Training */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 print:text-emerald-800 font-mono">
                {t('resume.certifications')}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {data.certifications.map((c, idx) => (
                  <div key={idx} className="p-2.5 rounded bg-white dark:bg-slate-900 print:bg-slate-100 border border-slate-200 dark:border-slate-800 print:border-slate-300 shadow-2xs">
                    <div className="font-semibold text-slate-900 dark:text-slate-200 print:text-slate-900">{c.name}</div>
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 print:text-slate-600">{c.org} ({c.year})</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills Overview */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 print:text-emerald-800 font-mono">
                {t('resume.skills')}
              </h2>
              <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300 print:text-slate-800">
                <div><strong className="text-slate-900 dark:text-slate-200 print:text-black">{language === 'id' ? 'Bahasa Pemrograman:' : 'Languages:'}</strong> TypeScript, JavaScript, PHP, Python, SQL</div>
                <div><strong className="text-slate-900 dark:text-slate-200 print:text-black">Backend:</strong> Python (FastAPI), Laravel, CodeIgniter, Node.js (NestJS, Express), Bun, RESTful APIs, OpenAPI</div>
                <div><strong className="text-slate-900 dark:text-slate-200 print:text-black">Databases & Caching:</strong> PostgreSQL, MySQL, Redis, MongoDB, ChromaDB (Vector DB), Prisma ORM</div>
                <div><strong className="text-slate-900 dark:text-slate-200 print:text-black">{language === 'id' ? 'Solusi Bisnis & Web:' : 'Business & Web Solutions:'}</strong> ERP System Customization, POS SaaS UMKM, E-Commerce, Landing Pages (SukaVillage)</div>
                <div><strong className="text-slate-900 dark:text-slate-200 print:text-black">{language === 'id' ? 'Server & Maintenance:' : 'Server & Maintenance:'}</strong> AWS, IDCloudHost, Linux VPS, Nginx, Docker, System Monitoring, Bug Fixing & Hotpatching</div>
              </div>
            </div>
          </div>

          {/* Footer Close */}
          <div className="sticky bottom-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md px-6 py-3 border-t border-slate-200 dark:border-slate-800 flex justify-end print:hidden">
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 text-xs font-medium transition-colors cursor-pointer"
            >
              {t('modal.close')}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
