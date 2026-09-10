export interface MethodologyStep {
  step: string;
  title: string;
  description: string;
  details: string[];
  tag: string;
}

export const METHODOLOGY_EN: MethodologyStep[] = [
  {
    step: '01',
    title: 'Understand',
    description: 'Understand the business problem and system requirements.',
    details: [
      'Analyze stakeholder goals, operational bottlenecks, and domain requirements',
      'Define clear system boundaries, SLA expectations, and data retention policies',
      'Identify edge cases, security compliance mandates, and input variability'
    ],
    tag: 'Requirements & Scope'
  },
  {
    step: '02',
    title: 'Design',
    description: 'Design data flow, architecture and integration points.',
    details: [
      'Architect data flow diagrams, database schemas, and normalization rules',
      'Map external third-party integration contracts and API specifications',
      'Plan caching strategies, partition schemas, and failover buffer layers'
    ],
    tag: 'Architecture & Data Flow'
  },
  {
    step: '03',
    title: 'Build',
    description: 'Implement backend, APIs, database and application logic.',
    details: [
      'Write clean, modular, and typed production code in TypeScript, Go, Python, and PHP',
      'Implement robust RESTful endpoints with idempotency and structured error handling',
      'Develop responsive user interfaces, transactional state, and optimized database queries'
    ],
    tag: 'Implementation & Logic'
  },
  {
    step: '04',
    title: 'Integrate',
    description: 'Connect external systems, services and data sources.',
    details: [
      'Integrate hardware sensors, serial/PLC interfaces, and file protocols (FTP/SFTP/CSV)',
      'Connect government regulatory gateways (e.g. SISPEK KLHK) and cloud storage (MinIO/S3)',
      'Orchestrate asynchronous message queues (BullMQ/Redis) and ingestion worker daemons'
    ],
    tag: 'Integration & Protocols'
  },
  {
    step: '05',
    title: 'Deploy',
    description: 'Deploy and configure production environments.',
    details: [
      'Provision and harden Linux servers on cloud VPS (AWS, IDCloudHost) and on-premise Windows Server',
      'Configure Nginx reverse proxies, SSL certificates, PM2 process managers, and Docker containers',
      'Establish CI/CD build pipelines and automated scheduler tasks (cron & Windows Task Scheduler)'
    ],
    tag: 'Production Deployment'
  },
  {
    step: '06',
    title: 'Maintain',
    description: 'Monitor, troubleshoot, optimize and improve.',
    details: [
      'Analyze slow query execution plans (EXPLAIN), re-indexing, and eliminating N+1 bottlenecks',
      'Diagnose live production anomalies, review access/error logs, and apply zero-downtime hotfixes',
      'Incorporate evolving client change requests (CR) and continuous performance tuning'
    ],
    tag: 'Optimization & Stability'
  }
];

export const METHODOLOGY_ID: MethodologyStep[] = [
  {
    step: '01',
    title: 'Understand',
    description: 'Pahami masalah bisnis dan kebutuhan spesifikasi sistem.',
    details: [
      'Menganalisis tujuan pemangku kepentingan, kendala operasional, dan spesifikasi bisnis',
      'Menetapkan batasan sistem yang jelas, ekspektasi SLA, dan kebijakan retensi data',
      'Mengidentifikasi potensi edge case, kepatuhan regulasi keamanan, dan variasi format input'
    ],
    tag: 'Kebutuhan & Ruang Lingkup'
  },
  {
    step: '02',
    title: 'Design',
    description: 'Rancang alur data, arsitektur, dan titik integrasi.',
    details: [
      'Merancang diagram alur data, skema relasional database, dan aturan normalisasi',
      'Memetakan kontrak integrasi pihak ketiga eksternal dan spesifikasi API',
      'Merencanakan strategi caching, skema partisi tabel, dan lapisan buffer edge failover'
    ],
    tag: 'Arsitektur & Alur Data'
  },
  {
    step: '03',
    title: 'Build',
    description: 'Implementasikan backend, API, database, dan logika aplikasi.',
    details: [
      'Menulis kode produksi yang bersih, modular, dan teruji dalam TypeScript, Go, Python, dan PHP',
      'Mengimplementasikan endpoint RESTful yang andal dengan idempoten dan penanganan error terstruktur',
      'Mengembangkan antarmuka responsif, state transaksi aman, dan query database teroptimasi'
    ],
    tag: 'Implementasi & Logika'
  },
  {
    step: '04',
    title: 'Integrate',
    description: 'Hubungkan sistem eksternal, layanan, dan sumber data.',
    details: [
      'Mengintegrasikan sensor instrumen, interface serial/PLC, dan protokol transfer file (FTP/SFTP/CSV)',
      'Menghubungkan gateway regulasi resmi pemerintah (SISPEK KLHK) dan cloud storage (MinIO/S3)',
      'Mengorkestrasi antrean pesan asinkron (BullMQ/Redis) dan daemon worker ingestion'
    ],
    tag: 'Integrasi & Protokol'
  },
  {
    step: '05',
    title: 'Deploy',
    description: 'Deploy dan konfigurasi lingkungan server produksi.',
    details: [
      'Menyiapkan dan mengamankan server Linux di cloud VPS (AWS, IDCloudHost) dan Windows Server on-premise',
      'Mengonfigurasi reverse proxy Nginx, sertifikat SSL, process manager PM2, dan kontainer Docker',
      'Menyusun pipeline build CI/CD dan penjadwalan otomatis tugas (cron & Windows Task Scheduler)'
    ],
    tag: 'Deployment Produksi'
  },
  {
    step: '06',
    title: 'Maintain',
    description: 'Pantau, lakukan troubleshooting, optimasi, dan pemeliharaan berkelanjutan.',
    details: [
      'Menganalisis rencana eksekusi query lambat (EXPLAIN), re-indexing, dan eliminasi bottleneck N+1',
      'Mendiagnosis anomali produksi live, memeriksa log server, dan menerapkan perbaikan tanpa downtime',
      'Mengakomodasi permintaan perubahan fitur klien (CR) secara berkala dan penyetelan performa berkelanjutan'
    ],
    tag: 'Optimasi & Stabilitas'
  }
];
