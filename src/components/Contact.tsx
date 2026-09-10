import React, { useState } from 'react';
import { Mail, Phone, Send, Check, Copy, ExternalLink, Github, Linkedin } from 'lucide-react';
import { PortfolioData } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ContactProps {
  data: PortfolioData;
}

export const Contact: React.FC<ContactProps> = ({ data }) => {
  const { t } = useLanguage();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSentNotice, setIsSentNotice] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(data.personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Inquiry from ${senderName || 'Software Recruiter / Client'}`);
    const body = encodeURIComponent(`Hi Affandi,\n\n${message}\n\nFrom: ${senderName} (${senderEmail})`);
    window.location.href = `mailto:${data.personal.email}?subject=${subject}&body=${body}`;
    setIsSentNotice(true);
    setTimeout(() => setIsSentNotice(false), 4000);
  };

  return (
    <section className="py-20 bg-slate-50/80 dark:bg-slate-900/40 border-t border-slate-200 dark:border-slate-800/80 transition-colors duration-200" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Outreach Info */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50 px-2.5 py-1 rounded-md shadow-2xs">
              <span>{t('contact.badge')}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              {t('contact.title')}
            </h2>
            
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              {t('contact.subtitle')}
            </p>

            {/* Direct Contact Badges */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{t('contact.directEmail')}</div>
                    <div className="text-sm font-mono font-semibold text-slate-900 dark:text-white">
                      {data.personal.email}
                    </div>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 text-xs font-mono text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md transition-colors flex items-center gap-1 cursor-pointer"
                >
                  {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedEmail ? t('contact.copied') : t('contact.copy')}</span>
                </button>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-2xs">
                <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">{t('contact.whatsapp')}</div>
                  <div className="text-sm font-mono font-semibold text-slate-900 dark:text-white">
                    {data.personal.phone}
                  </div>
                </div>
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={data.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>{t('contact.githubProfile')}</span>
                <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-500" />
              </a>
              <a
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg shadow-2xs transition-colors"
              >
                <Linkedin className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>{t('contact.linkedinProfile')}</span>
                <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-6">
            <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 shadow-md dark:shadow-xl">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 tracking-tight">
                {t('contact.formTitle')}
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
                {t('contact.formSubtitle')}
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                    {t('contact.name')}
                  </label>
                  <input
                    type="text"
                    required
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder={t('contact.namePlaceholder')}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                    {t('contact.email')}
                  </label>
                  <input
                    type="email"
                    required
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder={t('contact.emailPlaceholder')}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500 transition-colors font-mono"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 dark:text-slate-300 mb-1.5">
                    {t('contact.message')}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder={t('contact.messagePlaceholder')}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 text-xs focus:outline-none focus:border-emerald-500 transition-colors font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-500 dark:bg-emerald-500 dark:hover:bg-emerald-400 text-white dark:text-slate-950 font-bold text-xs transition-all shadow-md shadow-emerald-600/10 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t('contact.send')}</span>
                </button>

                {isSentNotice && (
                  <p className="text-center text-xs font-mono text-emerald-700 dark:text-emerald-400 pt-1 font-semibold">
                    {t('contact.sentNotice')}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
