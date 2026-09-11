import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  ExternalLink,
  Layers,
  Sparkles,
  Info,
  X
} from 'lucide-react';
import { Project, ProjectScreenshot } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ProjectGalleryProps {
  project: Project;
}

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ project }) => {
  const { language } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [fitMode, setFitMode] = useState<'cover' | 'contain'>('cover');
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  // Compile list of gallery images (cover image + screenshots)
  const galleryItems: ProjectScreenshot[] = React.useMemo(() => {
    const items: ProjectScreenshot[] = [];

    // Include primary cover/highlight image if defined
    if (project.imageUrl) {
      items.push({
        title: language === 'id' ? 'Sorotan Utama (Cover)' : 'Primary Highlight (Cover)',
        url: project.imageUrl,
        caption: language === 'id'
          ? 'Tampilan ikhtisar utama sistem di halaman depan.'
          : 'Overview highlight of the system shown on the main page.'
      });
    }

    // Include additional project screenshots
    if (project.screenshots && project.screenshots.length > 0) {
      project.screenshots.forEach((s) => {
        // Avoid duplicate of identical URL
        if (!items.some((item) => item.url === s.url)) {
          items.push(s);
        }
      });
    }

    // Fallback if no images found at all
    if (items.length === 0) {
      items.push({
        title: project.title,
        url: '/assets/projects/sample-project.svg',
        caption: project.subtitle
      });
    }

    return items;
  }, [project.imageUrl, project.screenshots, project.title, project.subtitle, language]);

  // Reset active index if project changes
  React.useEffect(() => {
    setActiveIndex(0);
    setImageErrors({});
  }, [project.id]);

  const currentItem = galleryItems[activeIndex] || galleryItems[0];
  const hasMultipleImages = galleryItems.length > 1;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : galleryItems.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < galleryItems.length - 1 ? prev + 1 : 0));
  };

  const isCurrentErrored = !!imageErrors[activeIndex];

  return (
    <div className="space-y-3">
      {/* Header Bar: Gallery Label + Counter + Live Demo Link */}
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span className="font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 font-bold flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{language === 'id' ? 'Galeri Visual & Dokumentasi' : 'Visual Gallery & Documentation'}</span>
          </span>
          {hasMultipleImages && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60">
              {activeIndex + 1} / {galleryItems.length}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2 font-mono">
          <button
            onClick={() => setFitMode((prev) => (prev === 'cover' ? 'contain' : 'cover'))}
            className="px-2 py-1 rounded text-[10px] bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 transition-colors"
            title={language === 'id' ? 'Ganti mode proporsi gambar' : 'Toggle image aspect fit'}
          >
            {fitMode === 'cover' ? (language === 'id' ? 'Mode Penuh' : 'Fit View') : (language === 'id' ? 'Mode Proporsional' : 'Fill View')}
          </button>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-emerald-700 dark:text-emerald-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <span>{language === 'id' ? 'Buka Demo Langsung' : 'Open Live Demo'}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>

      {/* Main Image Showcase Stage */}
      <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md group">
        <div className="relative w-full h-64 sm:h-84 md:h-96 flex items-center justify-center bg-slate-950/90 overflow-hidden">
          {/* Subtle Technical Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415515_1px,transparent_1px),linear-gradient(to_bottom,#33415515_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="w-full h-full flex items-center justify-center p-1"
            >
              {!isCurrentErrored ? (
                <img
                  src={currentItem.url}
                  alt={currentItem.title}
                  referrerPolicy="no-referrer"
                  onError={() => setImageErrors((prev) => ({ ...prev, [activeIndex]: true }))}
                  className={`w-full h-full transition-all duration-300 ${
                    fitMode === 'cover' ? 'object-cover' : 'object-contain'
                  }`}
                  loading="lazy"
                />
              ) : (
                /* Fallback if image path is not found yet */
                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-slate-300 font-mono space-y-2">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-emerald-400 mb-1">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-white uppercase tracking-wider">{currentItem.title}</span>
                  <p className="text-[11px] text-slate-400 max-w-sm">
                    {language === 'id'
                      ? `File "${currentItem.url}" belum tersedia. Simpan gambar Anda di folder public/assets/projects/`
                      : `File "${currentItem.url}" not found. Place your image in public/assets/projects/`}
                  </p>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Gradient Overlay for bottom caption legibility */}
          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent pointer-events-none" />

          {/* Top Stage Badges */}
          <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
            {activeIndex === 0 ? (
              <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded-md bg-emerald-500/90 text-slate-950 shadow-sm">
                {language === 'id' ? '★ Sorotan Depan' : '★ Front Highlight'}
              </span>
            ) : (
              <span className="px-2.5 py-1 text-[10px] font-mono font-bold uppercase rounded-md bg-slate-800/90 text-slate-200 border border-slate-700/80 shadow-sm backdrop-blur-xs">
                {language === 'id' ? `Screenshot #${activeIndex}` : `Screenshot #${activeIndex}`}
              </span>
            )}
          </div>

          {/* Top Stage Actions (Fullscreen / Zoom) */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
            <button
              onClick={() => setIsFullscreen(true)}
              className="p-2 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-slate-200 border border-slate-700/80 shadow-sm backdrop-blur-xs transition-colors cursor-pointer"
              title={language === 'id' ? 'Perbesar Gambar' : 'View Fullscreen'}
            >
              <Maximize2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Left / Right Carousel Controls */}
          {hasMultipleImages && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/80 flex items-center justify-center backdrop-blur-xs shadow-md opacity-80 hover:opacity-100 transition-all z-10 cursor-pointer"
                title={language === 'id' ? 'Foto Sebelumnya' : 'Previous Photo'}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                onClick={handleNext}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700/80 flex items-center justify-center backdrop-blur-xs shadow-md opacity-80 hover:opacity-100 transition-all z-10 cursor-pointer"
                title={language === 'id' ? 'Foto Selanjutnya' : 'Next Photo'}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </>
          )}

          {/* Bottom Caption Strip */}
          <div className="absolute bottom-3 inset-x-4 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-1 pointer-events-none">
            <div className="space-y-0.5">
              <h4 className="text-sm font-bold text-white tracking-tight drop-shadow-xs">
                {currentItem.title}
              </h4>
              {currentItem.caption && (
                <p className="text-xs text-slate-300 line-clamp-2 max-w-xl drop-shadow-xs">
                  {currentItem.caption}
                </p>
              )}
            </div>
            {/* <span className="text-[10px] font-mono text-emerald-400/90 whitespace-nowrap">
              {currentItem.url.startsWith('/') ? currentItem.url : currentItem.url.substring(0, 40) + '...'}
            </span> */}
          </div>
        </div>
      </div>

      {/* Thumbnail Strip (Selector) */}
      {hasMultipleImages && (
        <div className="space-y-1.5 pt-1">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
            <span>{language === 'id' ? 'Pilih Gambar untuk Dilihat:' : 'Click thumbnail to inspect:'}</span>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400">
              {galleryItems.length} {language === 'id' ? 'foto tersedia' : 'photos in gallery'}
            </span>
          </div>

          <div className="flex gap-2.5 overflow-x-auto pb-2 scrollbar-none snap-x">
            {galleryItems.map((item, idx) => {
              const isSelected = activeIndex === idx;
              const isErrored = !!imageErrors[idx];

              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative flex-shrink-0 w-24 sm:w-28 h-16 rounded-xl overflow-hidden border transition-all cursor-pointer text-left snap-start group ${
                    isSelected
                      ? 'ring-2 ring-emerald-500 border-emerald-500 shadow-md scale-102'
                      : 'border-slate-200 dark:border-slate-800 opacity-70 hover:opacity-100 hover:border-slate-400 dark:hover:border-slate-600'
                  }`}
                  title={item.title}
                >
                  {!isErrored ? (
                    <img
                      src={item.url}
                      alt={item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full bg-slate-800 flex items-center justify-center text-slate-400 text-[9px] font-mono text-center p-1">
                      {idx === 0 ? 'Cover' : `Img #${idx}`}
                    </div>
                  )}

                  {/* Highlight pill indicator */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-1">
                    <span className="text-[9px] font-mono font-semibold text-white truncate max-w-full">
                      {idx === 0 ? (language === 'id' ? '★ Cover' : '★ Highlight') : item.title}
                    </span>
                  </div>

                  {isSelected && (
                    <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-slate-950" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isFullscreen && (
          <div className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 select-none">
            {/* Lightbox Topbar */}
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 z-10">
              <div className="space-y-0.5">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-bold">
                  {project.title} — {activeIndex + 1} / {galleryItems.length}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {currentItem.title}
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setIsFullscreen(false)}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
                  aria-label="Close fullscreen"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Lightbox Center Image Stage */}
            <div className="relative flex-1 flex items-center justify-center p-2 sm:p-4 my-auto overflow-hidden">
              <img
                src={currentItem.url}
                alt={currentItem.title}
                referrerPolicy="no-referrer"
                className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl"
              />

              {hasMultipleImages && (
                <>
                  <button
                    onClick={handlePrev}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700 flex items-center justify-center shadow-lg transition-all"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white border border-slate-700 flex items-center justify-center shadow-lg transition-all"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}
            </div>

            {/* Lightbox Footer Caption */}
            <div className="border-t border-slate-800 pt-3 text-center z-10">
              {currentItem.caption && (
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto">
                  {currentItem.caption}
                </p>
              )}
              <span className="text-[11px] font-mono text-slate-500 mt-1 block">
                {currentItem.url}
              </span>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
