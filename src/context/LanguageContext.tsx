import React, { createContext, useContext, useState, useEffect } from 'react';

export type Language = 'id' | 'en';

export interface LanguageContextType {
  language: Language;
  isIndonesian: boolean;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (key: string, fallback?: string) => string;
}

const UI_TRANSLATIONS: Record<Language, Record<string, string>> = {
  id: {
    // Navigation
    'nav.about': 'Tentang',
    'nav.whatIDo': 'Layanan & Keahlian',
    'nav.projects': 'Proyek',
    'nav.howIThink': 'Cara Berpikir',
    'nav.techStack': 'Tech Stack',
    'nav.experience': 'Pengalaman',
    'nav.notes': 'Catatan',
    'nav.contact': 'Kontak',
    'nav.terminal': 'Terminal',
    'nav.resume': 'Resume',
    'nav.themeLight': 'Cerah',
    'nav.themeDark': 'Gelap',
    'nav.role': 'Software Engineer',
    'nav.sysOk': 'sistem_ok',
    'nav.langSwitch': 'Ganti Bahasa (ID / EN)',

    // Hero Section
    'hero.badge': 'Software Engineer',
    'hero.exp': '4+ Tahun Pengalaman',
    'hero.greeting': 'Halo, saya Affandi.',
    'hero.subtitle': 'Software Engineer berpengalaman yang membangun aplikasi web, sistem ERP, arsitektur API, dan konfigurasi server cloud produksi.',
    'hero.viewProjects': 'Lihat Proyek',
    'hero.viewResume': 'Lihat Resume',
    'hero.openTerminal': 'Terminal Interaktif',
    'hero.systemHealth': 'Status Sistem',
    'hero.allSystemsOk': 'Semua Sistem Operasional',
    'hero.liveTelemetry': 'Telemetri Data Langsung',
    'hero.simulateQuery': 'Uji Latensi Query',
    'hero.simulating': 'Menguji...',
    'hero.latency': 'Latensi',
    'hero.databaseEngine': 'Mesin Database',
    'hero.uptime': 'Ketersediaan Sistem',
    'hero.activeNodes': 'Node Aktif',
    'hero.specPill1': 'Sistem ERP & Kustomisasi',
    'hero.specPill2': 'Website & Pengembangan Fullstack',
    'hero.specPill3': 'Instalasi Software & Cloud VPS',
    'hero.specPill4': 'Maintenance & Perbaikan Bug',
    'hero.specPill5': 'Arsitektur Backend AI & RAG',

    // Stats Bar
    'stats.telemetryLabel': 'Data Telemetri',
    'stats.telemetryHelper': 'Data time-series diproses per tahun',
    'stats.queryLabel': 'Latensi Query',
    'stats.queryHelper': 'Peningkatan 92% via indexing & views',
    'stats.sitesLabel': 'Situs Dipantau',
    'stats.sitesHelper': 'Node BTS infrastruktur telekomunikasi',
    'stats.uptimeLabel': 'Ketersediaan Sistem',
    'stats.uptimeHelper': 'SLA level regulasi dan korporasi',

    // About Section
    'about.badge': 'KISAH REKAYASA',
    'about.title': 'Rekayasa berorientasi arsitektur, teruji di lingkungan produksi nyata.',
    'about.value1Title': 'Performa Nyata Bukan Tebakan',
    'about.value1Desc': 'Mengandalkan analisis query mendalam (EXPLAIN ANALYZE), kardinalitas indeks, dan profiling daripada optimasi prematur.',
    'about.value2Title': 'Integrasi Sistem yang Tangguh',
    'about.value2Desc': 'Membangun edge failover buffer, endpoint API idempoten, dan exponential retry agar kegagalan layanan eksternal tidak merusak integritas data.',
    'about.profileTitle': 'Profil Teknis',
    'about.experienceLabel': 'Pengalaman:',
    'about.languagesLabel': 'Bahasa Utama:',
    'about.databasesLabel': 'Database:',
    'about.locationLabel': 'Lokasi Domisili:',
    'about.relocationLabel': 'Peluang Relokasi:',
    'about.relocationValue': 'Terbuka (Seluruh Indonesia, ASEAN, Jepang, UEA)',
    'about.educationTitle': 'Pendidikan & Prestasi Akademik',
    'about.degree': 'S.Kom., Sarjana Ilmu Komputer (Teknik Informatika)',
    'about.university': 'Universitas Pamulang, Tangerang Selatan',
    'about.graduationInfo': 'Lulusan Terbaik / Predikat Cum Laude (IPK 3.82 / 4.00)',

    // What I Do Section
    'whatIDo.badge': 'LAYANAN & REKAYASA SISTEM',
    'whatIDo.title': '4 Pilar Utama Rekayasa Perangkat Lunak',
    'whatIDo.subtitle': 'Keahlian komprehensif mulai dari arsitektur backend, kustomisasi ERP, website & SaaS, instalasi cloud server VPS, hingga pemeliharaan jangka panjang dan perbaikan bug.',
    'whatIDo.explore': 'Jelajahi Proyek Terkait',

    // Projects Section
    'projects.badge': 'PROYEK PILIHAN & SISTEM KLIEN',
    'projects.title': 'Proyek & Sistem Rekayasa',
    'projects.subtitle': 'Jelajahi sistem nyata meliputi solusi ERP, platform website & SaaS (POS UMKM & SukaVillage), instalasi Cloud VPS (AWS & IDCloudHost), pemeliharaan berkala & perbaikan bug, serta arsitektur AI / RAG.',
    'projects.all': 'Semua Proyek',
    'projects.erp': 'Sistem ERP',
    'projects.website': 'Website & SaaS',
    'projects.install': 'Instalasi & Cloud VPS',
    'projects.maintenance': 'Maintenance & Perbaikan',
    'projects.ai': 'AI & Backend',
    'projects.liveApp': 'Aplikasi Live',
    'projects.viewSpecs': 'Detail & Spesifikasi',
    'projects.downloadSpec': 'Spek (.md)',
    'projects.downloadPackage': 'Paket (.json)',
    'projects.clickForSpecs': 'klik untuk detail ➜',
    'projects.coreChallenge': 'Tantangan Utama:',
    'projects.detail': 'Detail',

    // Project Visual & Modal
    'visual.mockupNotice': 'Tampilan Antarmuka Interaktif Sistem',
    'visual.openDemo': 'Buka Live Web App',
    'modal.visualTitle': 'Pratinjau Visual & Antarmuka Sistem Interaktif',
    'modal.deliverablesTitle': 'Berkas Proyek & Spesifikasi Teknis',
    'modal.deliverablesSubtitle': 'Unduh dokumentasi arsitektur terstruktur (.md) atau konfigurasi deployment (.json) untuk sistem ini.',
    'modal.downloadSpecBtn': 'Unduh Arsitektur (.md)',
    'modal.downloadPackageBtn': 'Unduh Konfigurasi (.json)',
    'modal.architectureTitle': 'Diagram Alur Arsitektur & Aliran Data',
    'modal.problemTitle': 'Deskripsi Masalah & Kebutuhan Klien',
    'modal.solutionTitle': 'Solusi Rekayasa Teknis',
    'modal.challengesTitle': 'Tantangan Teknis Kunci',
    'modal.contributionsTitle': 'Kontribusi & Implementasi Spesifik',
    'modal.stackTitle': 'Teknologi & Stack Produksi',
    'modal.close': 'Tutup',

    // Engineering Philosophy
    'philosophy.badge': 'PRINSIP REKAYASA',
    'philosophy.title': 'Bagaimana Saya Berpikir: Beyond CRUD',
    'philosophy.subtitle': 'Skalabilitas bukan hal yang dipikirkan belakangan. Inilah kerangka pragmatis saya untuk kontrak API, kardinalitas database, ketahanan caching, dan continuous delivery.',
    'philosophy.principlesTitle': 'Prinsip Kunci & Standar Produksi:',
    'philosophy.sampleTitle': 'Pola Implementasi Produksi:',
    'philosophy.simBadge': 'SIMULATOR QUERY TELEMETRI INTERAKTIF',
    'philosophy.simTitle': 'Simulasi Performa Query Dataset 3.5TB',
    'philosophy.simMode1': '1. Scan Monolitik (Sebelum)',
    'philosophy.simMode2': '2. Partisi + MatView (Dioptimasi)',
    'philosophy.simMode3': '3. Redis Cache-Aside (Warmed)',
    'philosophy.latency': 'Latensi Eksekusi',
    'philosophy.latencyDesc': 'waktu respon end-to-end',
    'philosophy.scanned': 'Rekor Terpindai',
    'philosophy.scannedDesc': 'jejak storage I/O',
    'philosophy.cpuLoad': 'Beban CPU Database',
    'philosophy.cpuDesc': 'dampak kapasitas cluster',
    'philosophy.planAnalysis': 'Analisis Rencana Eksekusi:',
    'philosophy.executing': 'Mengeksekusi query...',
    'philosophy.scanning': 'Memindai partisi...',

    // Tech Stack
    'stack.badge': 'TOOLCHAIN & KEAHLIAN',
    'stack.title': 'Teknologi & Stack Produksi',
    'stack.subtitle': 'Alat dan teknologi yang saya gunakan sehari-hari untuk merancang, menguji, dan menjalankan sistem produksi yang andal.',
    'stack.proficiency': 'Tingkat Kemahiran:',
    'stack.productionLevel': 'Level Produksi',

    // Experience
    'experience.badge': 'PERJALANAN KARIER',
    'experience.title': 'Riwayat Pengalaman & Rekam Jejak Rekayasa',
    'experience.subtitle': 'Mengukur masa kerja rekayasa lewat milestone sistem, reduksi latensi, dan throughput data di lingkungan produksi nyata.',
    'experience.present': 'Sekarang',
    'experience.certTitle': 'Sertifikasi & Pengembangan Profesional',
    'experience.verified': 'Terverifikasi',

    // Notes
    'notes.badge': 'CATATAN TEKNIS',
    'notes.title': 'Catatan Rekayasa & Arsitektur',
    'notes.subtitle': 'Catatan lapangan, analisis insiden produksi, dan panduan praktis penanganan sistem backend.',
    'notes.read': 'Baca Selengkapnya',
    'notes.minRead': 'menit baca',

    // Contact
    'contact.badge': 'MARI BERDISKUSI',
    'contact.title': 'Mari Terhubung',
    'contact.subtitle': 'Saya terbuka untuk posisi Software Engineer (Full-time / Kontrak / Konsultan) serta proyek ERP, Website SaaS, Setup Server VPS, dan AI.',
    'contact.name': 'Nama Lengkap',
    'contact.namePlaceholder': 'Nama Anda atau Perusahaan',
    'contact.email': 'Alamat Email',
    'contact.emailPlaceholder': 'email.anda@perusahaan.com',
    'contact.subject': 'Subjek / Keperluan',
    'contact.subjectPlaceholder': 'Proyek ERP / Tawaran Kerja / Setup VPS / Diskusi Sistem',
    'contact.message': 'Pesan / Deskripsi Kebutuhan',
    'contact.messagePlaceholder': 'Tuliskan deskripsi proyek, kebutuhan teknis, atau jadwal wawancara...',
    'contact.send': 'Kirim Pesan',
    'contact.sending': 'Mengirim Pesan...',
    'contact.success': 'Pesan Berhasil Terkirim!',
    'contact.successDesc': 'Terima kasih atas pesan Anda. Saya akan segera merespons ke alamat email Anda.',
    'contact.sendAnother': 'Kirim Pesan Lain',
    'contact.directChannels': 'Saluran Kontak Langsung',
    'contact.directEmail': 'Email Pribadi',
    'contact.whatsapp': 'WhatsApp / Telepon',
    'contact.domicile': 'Lokasi Domisili & Relokasi',
    'contact.responseSpeed': 'Kecepatan Respon Rata-rata',
    'contact.responseVal': '< 6 Jam (Hari Kerja)',
    'contact.formTitle': 'Kirim Pesan Langsung',
    'contact.formSubtitle': 'Ini akan membuka email client Anda dengan pesan yang telah diformat rapi.',
    'contact.sentNotice': '✓ Membuka aplikasi email Anda dengan pesan terformat!',
    'contact.copy': 'Salin',
    'contact.copied': 'Tersalin!',
    'contact.githubProfile': 'Profil GitHub',
    'contact.linkedinProfile': 'Profil LinkedIn',

    // Footer
    'footer.copyright': 'Hak Cipta © 2026 Affandi Agung Laksono. Semua hak dilindungi.',
    'footer.builtWith': 'Dibuat dengan React, TypeScript & Tailwind CSS.',
    'footer.backToTop': 'Kembali ke Atas',

    // Resume Modal
    'resume.title': 'Resume & Riwayat Profesional',
    'resume.downloadPdf': 'Unduh Resume (.md / .pdf)',
    'resume.print': 'Cetak',
    'resume.summary': 'Ringkasan Eksekutif',
    'resume.skills': 'Keahlian Inti',
    'resume.experience': 'Pengalaman Kerja',
    'resume.education': 'Pendidikan',
    'resume.certifications': 'Sertifikasi',

    // Terminal
    'terminal.title': 'Terminal Rekayasa Backend — Affandi Shell v2.4',
    'terminal.welcome': "Ketik 'help' untuk melihat daftar perintah yang tersedia. Gunakan TAB untuk pelengkap otomatis.",
    'terminal.placeholder': "Ketik perintah (contoh: 'help', 'projects', 'skills', 'contact')...",
  },
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.whatIDo': 'What I Do',
    'nav.projects': 'Projects',
    'nav.howIThink': 'How I Think',
    'nav.techStack': 'Tech Stack',
    'nav.experience': 'Experience',
    'nav.notes': 'Notes',
    'nav.contact': 'Contact',
    'nav.terminal': 'Terminal',
    'nav.resume': 'Resume',
    'nav.themeLight': 'Light',
    'nav.themeDark': 'Dark',
    'nav.role': 'Software Engineer',
    'nav.sysOk': 'sys_ok',
    'nav.langSwitch': 'Switch Language (EN / ID)',

    // Hero Section
    'hero.badge': 'Software Engineer',
    'hero.exp': '4+ Years Exp',
    'hero.greeting': "Hi, I'm Affandi.",
    'hero.subtitle': 'Software Engineer building reliable applications, APIs, database architectures, and scalable production systems.',
    'hero.viewProjects': 'View Projects',
    'hero.viewResume': 'View Resume',
    'hero.openTerminal': 'Interactive Shell',
    'hero.systemHealth': 'System Health',
    'hero.allSystemsOk': 'All Systems Operational',
    'hero.liveTelemetry': 'Live Data Telemetry',
    'hero.simulateQuery': 'Simulate Query Latency',
    'hero.simulating': 'Pinging...',
    'hero.latency': 'Latency',
    'hero.databaseEngine': 'Database Engine',
    'hero.uptime': 'System Uptime',
    'hero.activeNodes': 'Active Nodes',
    'hero.specPill1': 'ERP Systems & Customization',
    'hero.specPill2': 'Website & Fullstack Development',
    'hero.specPill3': 'Software Installation & Cloud VPS',
    'hero.specPill4': 'Maintenance & Bug Fixing',
    'hero.specPill5': 'AI & RAG Backend Architecture',

    // Stats Bar
    'stats.telemetryLabel': 'Telemetry Data',
    'stats.telemetryHelper': 'Annual processed time-series data',
    'stats.queryLabel': 'Query Latency',
    'stats.queryHelper': '92% reduction via indexing & views',
    'stats.sitesLabel': 'Monitored Sites',
    'stats.sitesHelper': 'Telecom BTS infrastructure nodes',
    'stats.uptimeLabel': 'System Uptime',
    'stats.uptimeHelper': 'Regulatory & enterprise SLA',

    // About Section
    'about.badge': 'ENGINEERING STORY',
    'about.title': 'Architecture-minded engineering, built on production realities.',
    'about.value1Title': 'Performance Over Guesswork',
    'about.value1Desc': 'Relying on query analysis (EXPLAIN ANALYZE), index cardinality, and profiling rather than premature optimizations.',
    'about.value2Title': 'Resilient Integrations',
    'about.value2Desc': 'Building edge failover buffers, idempotent API endpoints, and exponential retry strategies so external failures never corrupt internal state.',
    'about.profileTitle': 'Technical Profile',
    'about.experienceLabel': 'Experience:',
    'about.languagesLabel': 'Core Languages:',
    'about.databasesLabel': 'Databases:',
    'about.locationLabel': 'Location:',
    'about.relocationLabel': 'Relocation:',
    'about.relocationValue': 'Open (Indonesia, ASEAN, Japan, UAE)',
    'about.educationTitle': 'Education & Academic Standing',
    'about.degree': 'S.Kom., Bachelor of Computer Science (Informatics)',
    'about.university': 'Pamulang University, South Tangerang',
    'about.graduationInfo': 'Top Graduate / Cum Laude Honors (GPA 3.82 / 4.00)',

    // What I Do Section
    'whatIDo.badge': 'CORE CAPABILITIES & SERVICES',
    'whatIDo.title': '4 Core Engineering Pillars',
    'whatIDo.subtitle': 'Comprehensive engineering covering backend architecture, ERP customization, SaaS websites, cloud server installations, and long-term production maintenance.',
    'whatIDo.explore': 'Explore Relevant Work',

    // Projects Section
    'projects.badge': 'FEATURED WORK & CLIENT SYSTEMS',
    'projects.title': 'Projects & Engineering Systems',
    'projects.subtitle': 'Explore hands-on systems across ERP solutions, SaaS website platforms (POS UMKM & SukaVillage), Cloud VPS installations (AWS & IDCloudHost), ongoing maintenance & bug fixes, and AI/RAG architectures.',
    'projects.all': 'All Projects',
    'projects.erp': 'ERP Systems',
    'projects.website': 'Websites & SaaS',
    'projects.install': 'Install & Cloud VPS',
    'projects.maintenance': 'Maintenance & Fixes',
    'projects.ai': 'AI & Backend',
    'projects.liveApp': 'Live App',
    'projects.viewSpecs': 'View Specs & Metrics',
    'projects.downloadSpec': 'Spec (.md)',
    'projects.downloadPackage': 'Package (.json)',
    'projects.clickForSpecs': 'click for specs ➜',
    'projects.coreChallenge': 'Core Challenge:',
    'projects.detail': 'Detail',

    // Project Visual & Modal
    'visual.mockupNotice': 'Interactive System Visual Preview',
    'visual.openDemo': 'Open Live Web App',
    'modal.visualTitle': 'Interactive System & UI Visual Preview',
    'modal.deliverablesTitle': 'Project Deliverables & Technical Specs',
    'modal.deliverablesSubtitle': 'Download structured architecture documentation (.md) or deployment configuration (.json) for this system.',
    'modal.downloadSpecBtn': 'Download Tech Spec (.md)',
    'modal.downloadPackageBtn': 'Download Package (.json)',
    'modal.architectureTitle': 'System Architecture & Data Flow Diagram',
    'modal.problemTitle': 'Problem Statement & Business Need',
    'modal.solutionTitle': 'Engineered Solution',
    'modal.challengesTitle': 'Key Technical Challenges',
    'modal.contributionsTitle': 'Key Engineering Contributions',
    'modal.stackTitle': 'Technologies & Production Stack',
    'modal.close': 'Close',

    // Engineering Philosophy
    'philosophy.badge': 'ENGINEERING ARCHITECTURE',
    'philosophy.title': 'How I Think: Beyond CRUD',
    'philosophy.subtitle': 'Scalability is not an afterthought. Here is my pragmatic framework for API contracts, database cardinality, caching resilience, and continuous delivery.',
    'philosophy.principlesTitle': 'Guiding Principles & Production Standards:',
    'philosophy.sampleTitle': 'Production Implementation Pattern:',
    'philosophy.simBadge': 'INTERACTIVE TELEMETRY QUERY SIMULATOR',
    'philosophy.simTitle': 'Simulate 3.5TB Dataset Query Performance',
    'philosophy.simMode1': '1. Monolithic Scan (Before)',
    'philosophy.simMode2': '2. Partitioned + MatView (Tuned)',
    'philosophy.simMode3': '3. Redis Cache-Aside (Warmed)',
    'philosophy.latency': 'Execution Latency',
    'philosophy.latencyDesc': 'end-to-end response time',
    'philosophy.scanned': 'Records Scanned',
    'philosophy.scannedDesc': 'I/O storage footprint',
    'philosophy.cpuLoad': 'Database CPU Load',
    'philosophy.cpuDesc': 'cluster capacity impact',
    'philosophy.planAnalysis': 'Execution Plan Analysis:',
    'philosophy.executing': 'Executing query...',
    'philosophy.scanning': 'Scanning partitions...',

    // Tech Stack
    'stack.badge': 'PRODUCTION TOOLCHAIN',
    'stack.title': 'Production Tech Stack',
    'stack.subtitle': 'Technologies and tools I use daily to design, test, and deploy resilient production systems.',
    'stack.proficiency': 'Proficiency Level:',
    'stack.productionLevel': 'Production Level',

    // Experience
    'experience.badge': 'CAREER JOURNEY',
    'experience.title': 'Work Experience & Engineering Track Record',
    'experience.subtitle': 'Measuring engineering tenure by system milestones, latency reductions, and data throughput delivered in production.',
    'experience.present': 'Present',
    'experience.certTitle': 'Certifications & Professional Development',
    'experience.verified': 'Verified',

    // Notes
    'notes.badge': 'TECHNICAL WRITING',
    'notes.title': 'Engineering Notes & Deep Dives',
    'notes.subtitle': 'Field notes, production postmortems, and practical guides on backend engineering.',
    'notes.read': 'Read Note',
    'notes.minRead': 'min read',

    // Contact
    'contact.badge': 'GET IN TOUCH',
    'contact.title': "Let's Connect",
    'contact.subtitle': 'Open to Software Engineer roles (Full-time / Contract / Consulting) as well as ERP, SaaS Websites, VPS Server Setup, and AI projects.',
    'contact.name': 'Full Name',
    'contact.namePlaceholder': 'Your name or company',
    'contact.email': 'Email Address',
    'contact.emailPlaceholder': 'your.email@company.com',
    'contact.subject': 'Subject / Topic',
    'contact.subjectPlaceholder': 'ERP Project / Job Opportunity / VPS Setup / General Inquiry',
    'contact.message': 'Message / Project Details',
    'contact.messagePlaceholder': 'Describe your project requirements, scope, or interview schedule...',
    'contact.send': 'Send Message',
    'contact.sending': 'Sending Message...',
    'contact.success': 'Message Sent Successfully!',
    'contact.successDesc': 'Thank you for reaching out. I will get back to you shortly.',
    'contact.sendAnother': 'Send Another Message',
    'contact.directChannels': 'Direct Contact Channels',
    'contact.directEmail': 'Direct Email',
    'contact.whatsapp': 'WhatsApp / Phone',
    'contact.domicile': 'Domicile & Relocation',
    'contact.responseSpeed': 'Typical Response Speed',
    'contact.responseVal': '< 6 Hours (Business Days)',
    'contact.formTitle': 'Send a Direct Message',
    'contact.formSubtitle': 'This will trigger your email client with your message pre-composed.',
    'contact.sentNotice': '✓ Opening your mail client with formatted message!',
    'contact.copy': 'Copy',
    'contact.copied': 'Copied',
    'contact.githubProfile': 'GitHub Profile',
    'contact.linkedinProfile': 'LinkedIn Profile',

    // Footer
    'footer.copyright': 'Copyright © 2026 Affandi Agung Laksono. All rights reserved.',
    'footer.builtWith': 'Built with React, TypeScript & Tailwind CSS.',
    'footer.backToTop': 'Back to top',

    // Resume Modal
    'resume.title': 'Curriculum Vitae & Professional Resume',
    'resume.downloadPdf': 'Download Resume (.md / .pdf)',
    'resume.print': 'Print',
    'resume.summary': 'Executive Summary',
    'resume.skills': 'Core Competencies',
    'resume.experience': 'Work Experience',
    'resume.education': 'Education',
    'resume.certifications': 'Certifications',

    // Terminal
    'terminal.title': 'Backend Engineering Terminal — Affandi Shell v2.4',
    'terminal.welcome': "Type 'help' for available commands. Press TAB for autocomplete.",
    'terminal.placeholder': "Type a command (e.g., 'help', 'projects', 'skills', 'contact')...",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem('affandi_portfolio_lang');
      if (stored === 'id' || stored === 'en') return stored;
    } catch {
      // fallback
    }
    return 'id'; // Default to Indonesian as requested by user
  });

  useEffect(() => {
    try {
      localStorage.setItem('affandi_portfolio_lang', language);
    } catch {
      // ignore
    }
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const t = (key: string, fallback?: string): string => {
    const dict = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.id;
    return dict[key] || fallback || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        isIndonesian: language === 'id',
        setLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
