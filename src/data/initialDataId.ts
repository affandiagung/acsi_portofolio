import { PortfolioData } from '../types';
import { PROJECTS_DATA_ID } from './projectsId';

export const INITIAL_PORTFOLIO_DATA_ID: PortfolioData = {
  personal: {
    name: 'Affandi Agung Laksono',
    roleTitle: 'Software Engineer',
    heroHeading: 'Halo, saya Affandi.',
    heroSubtitle: 'Software Engineer berfokus pada Backend yang membangun API andal, sistem intensif data, dan aplikasi berbasis AI.',
    specializationPills: [
      'Sistem ERP & Kustomisasi',
      'Pengembangan Website & SaaS',
      'Instalasi Software Cloud & VPS',
      'Pemeliharaan Software Produksi',
      'Optimasi Database & API',
      'Dasbor Pemantauan Real-Time'
    ],
    aboutStory: [
      "Saya seorang Software Engineer dengan pengalaman dalam membangun dan memelihara aplikasi web, sistem backend, serta aplikasi berbasis AI.",
      "Fokus utama saya adalah pengembangan backend, dengan pengalaman dalam membangun API, mengelola database, melakukan deployment ke cloud, dan mengintegrasikan berbagai sistem.",
      "Saya terbiasa menyelesaikan masalah teknis, meningkatkan performa sistem, dan membangun aplikasi yang stabil serta dapat digunakan untuk kebutuhan nyata."
    ],
    email: 'ccoc.20001@gmail.com',
    phone: '+62858 1317 7600',
    domicile: 'Tangerang Selatan, Banten, Indonesia',
    github: 'https://github.com/affandiagung',
    linkedin: 'https://linkedin.com/in/affandi-agung-laksono',
    portfolioUrl: 'https://affandiagung.github.io/',
    openToRelocation: 'Terbuka untuk relokasi di seluruh wilayah Indonesia maupun internasional (ASEAN, Jepang, UEA)'
  },
  stats: [
    {
      label: 'Data Telemetri',
      value: '3.5 TB+',
      helper: 'Data time-series diproses per tahun'
    },
    {
      label: 'Latensi Query',
      value: '4m → 18s',
      helper: 'Peningkatan 92% via indexing & views'
    },
    {
      label: 'Situs Dipantau',
      value: '10.000+',
      helper: 'Node BTS infrastruktur telekomunikasi'
    },
    {
      label: 'Ketersediaan Sistem',
      value: '99.9%',
      helper: 'SLA level regulasi dan korporasi'
    }
  ],
  whatIDo: [
    {
      id: 'erp-systems',
      title: 'Sistem ERP & Operasional Enterprise',
      icon: 'Layers',
      description: 'Merancang, mengkustomisasi, dan memelihara modul Enterprise Resource Planning (ERP) untuk operasional gudang, inventaris, dan pengadaan barang.',
      items: [
        'Logika bisnis multi-modul (Mutasi stok gudang, Purchase Order, Sales Order, Billing)',
        'Role-Based Access Control (RBAC), alur persetujuan bertingkat & jejak audit lengkap',
        'Pemodelan relasional database, integritas transaksi ACID & pencegahan data hilang (soft-delete)',
        'Kustomisasi alur approval dan laporan analitik eksekutif sesuai kebutuhan alur kerja klien'
      ]
    },
    {
      id: 'website-saas',
      title: 'Website Modern & Pengembangan SaaS',
      icon: 'Globe',
      description: 'Membangun platform website interaktif, portal publik, serta aplikasi SaaS berbasis cloud dengan performa cepat dan responsif.',
      items: [
        'Sistem SaaS POS Kasir multi-outlet dengan struk instan dan ringkasan omset harian',
        'Portal digital layanan desa & transparansi anggaran publik (SukaVillage)',
        'Arsitektur REST API berlatensi rendah, integrasi gerbang pembayaran, dan autentikasi aman',
        'Antarmuka modern responsif di desktop & mobile berbasis React, Next.js, atau Svelte'
      ]
    },
    {
      id: 'install-cloud',
      title: 'Instalasi Software & Setup Cloud VPS',
      icon: 'Server',
      description: 'Menyediakan instalasi dan konfigurasi server cloud VPS (AWS & IDCloudHost), kontainerisasi Docker, Nginx, dan keamanan SSL.',
      items: [
        'Provisioning VPS Linux (Ubuntu Server) di AWS EC2/Lightsail dan IDCloudHost',
        'Konfigurasi Nginx Reverse Proxy, kompresi Gzip, caching, dan sertifikat SSL otomatis (Let\'s Encrypt)',
        'Deployment kontainer Docker & Docker Compose untuk lingkungan terisolasi dan mudah di-scale',
        'Penerapan firewall UFW, hardening SSH kunci publik, fail2ban, dan backup database otomatis'
      ]
    },
    {
      id: 'maintenance-fixes',
      title: 'Maintenance, Troubleshooting & Perbaikan Bug',
      icon: 'Cpu',
      description: 'Menjaga keandalan sistem jangka panjang, audit bottleneck query lambat, perbaikan bug produksi, dan pengerjaan Change Request (CR) klien.',
      items: [
        'Investigasi akar masalah (root-cause analysis) dari log server, stack trace, dan exception report',
        'Optimasi query database lambat menggunakan EXPLAIN ANALYZE (terbukti menurunkan latensi hingga 92%)',
        'Pengerjaan Change Request (CR) klien secara teratur tanpa mengganggu alur sistem yang sedang berjalan',
        'Rollout hotfix tanpa downtime dan perlindungan rollback jika terjadi kendala produksi'
      ]
    }
  ],
  projects: PROJECTS_DATA_ID,
  engineeringThoughts: [
    {
      id: 'api-design',
      title: 'Desain API & Standar Kontrak',
      subtitle: 'REST API yang dapat diprediksi, mendokumentasikan diri sendiri, dengan mutasi idempoten dan format error terstruktur',
      tag: 'Arsitektur RESTful',
      keyPoints: [
        'Menerapkan RFC 7807 (Problem Details) untuk pesan error yang informatif dan memiliki trace ID pelacakan',
        'Validasi ketat Data Transfer Object (DTO) sebelum payload masuk ke logika bisnis inti',
        'Penggunaan Idempotency Key pada endpoint transaksi keuangan dan pengiriman data sensor sensitif',
        'Kode status HTTP yang semantik (201 Created vs 200 OK, 422 Unprocessable vs 400 Bad Request)',
        'Spesifikasi OpenAPI / Swagger yang terintegrasi otomatis dari anotasi kode'
      ],
      codeSnippet: {
        language: 'typescript',
        title: 'Kontrak Respons Error Standar',
        code: `// Format Standar Error RFC 7807 Backend
export interface ProblemDetails {
  type: string;           // "https://api.domain.com/errors/validasi"
  title: string;          // "Payload Sensor Tidak Valid"
  status: number;         // 422
  detail: string;         // "Nilai pembacaan sensor melampaui batas fisik [0..5000]"
  instance: string;       // "/api/v1/sensors/cerobong-04/readings"
  invalidParams?: {
    name: string;
    reason: string;
  }[];
  traceId: string;        // "req-98f21-789a"
}`
      }
    },
    {
      id: 'database-optimization',
      title: 'Optimasi Database & Query Kompleks',
      subtitle: 'Strategi partisi tabel, optimasi indeks, dan tuning EXPLAIN ANALYZE pada tabel jutaan baris',
      tag: 'PostgreSQL & SQL',
      keyPoints: [
        'Partisi tabel berbasis rentang waktu untuk data telemetri time-series (potongan mingguan/bulanan)',
        'Pemanfaatan indeks komposit B-Tree dan partial index sesuai kombinasi filter WHERE yang sering digunakan',
        'Materialized view yang di-refresh berkala di luar jam sibuk untuk mempercepat query analitik berat',
        'Pencegahan masalah N+1 query melalui teknik eager loading dan Common Table Expressions (CTE)',
        'Konfigurasi connection pool (PgBouncer) untuk mencegah thread database kehabisan sumber daya'
      ],
      codeSnippet: {
        language: 'sql',
        title: 'Partisi Tabel Time-Series & Materialized View',
        code: `-- Partisi tabel telemetri sensor bernilai tinggi berdasarkan bulan
CREATE TABLE sensor_telemetry (
    id BIGSERIAL,
    station_id INT NOT NULL,
    recorded_at TIMESTAMPTZ NOT NULL,
    pm25 NUMERIC(6,2),
    pm10 NUMERIC(6,2),
    PRIMARY KEY (id, recorded_at)
) PARTITION BY RANGE (recorded_at);

-- Partisi bulan berjalan
CREATE TABLE sensor_telemetry_2026_09
    PARTITION OF sensor_telemetry
    FOR VALUES FROM ('2026-09-01') TO ('2026-10-01');

-- Materialized View untuk laporan harian kilat
CREATE MATERIALIZED VIEW mv_daily_station_summary AS
SELECT 
    station_id,
    DATE_TRUNC('day', recorded_at) AS report_date,
    AVG(pm25) AS avg_pm25,
    MAX(pm25) AS peak_pm25
FROM sensor_telemetry
GROUP BY station_id, DATE_TRUNC('day', recorded_at);`
      }
    },
    {
      id: 'async-processing',
      title: 'Pemrosesan Asinkron & Antrean Latar Belakang',
      subtitle: 'Memisahkan penerimaan request berlatensi rendah dari pekerjaan berat penyerapan data',
      tag: 'Antrean & Message Brokers',
      keyPoints: [
        'Endpoint API merespons instan dengan 202 Accepted, mendelegasikan tugas berat ke antrean pekerja',
        'Mekanisme Exponential Backoff dengan jitter untuk mencegah lonjakan beban saat server luar sempat down',
        'Dead Letter Queue (DLQ) untuk menampung pesan gagal guna penyelidikan tanpa memblokir antrean utama',
        'Penanganan idempotent pada pekerja antrean untuk memastikan pemrosesan ulang tidak menghasilkan duplikasi data',
        'Pemantauan mendalam terhadap panjang antrean pesan dan throughput pekerja'
      ],
      codeSnippet: {
        language: 'python',
        title: 'Pola Pekerja Antrean Idempoten',
        code: `# Pekerja Python memproses payload telemetri BTS
import redis
import json

r = redis.Redis(host='localhost', port=6379, db=0)

def process_telemetry_job(job_payload):
    telemetry = json.loads(job_payload)
    idempotency_key = f"processed:{telemetry['bts_id']}:{telemetry['timestamp']}"
    
    # Kunci idempoten mencegah pencatatan ganda
    if r.set(idempotency_key, "1", nx=True, ex=86400):
        try:
            write_to_partitioned_db(telemetry)
            r.publish("telemetry:stream", json.dumps(telemetry))
        except Exception as e:
            r.lpush("telemetry:dead_letter_queue", job_payload)
            raise e
    else:
        # Duplikat payload diabaikan secara aman
        pass`
      }
    },
    {
      id: 'rag-architecture',
      title: 'Arsitektur RAG & Integritas Dokumen Hukum',
      subtitle: 'Pencarian hybrid vector + BM25, reranking, dan sitasi transparan untuk mencegah halusinasi AI',
      tag: 'AI & Rekayasa LLM',
      keyPoints: [
        'Pencarian hybrid menggabungkan penangkapan semantik (vektor padat) dan kecocokan kata kunci presisi (BM25)',
        'Chunking kontekstual mempertahankan nomor pasal, ayat, dan hierarki dokumen hukum perpajakan',
        'Model Cross-Encoder Reranker menilai ulang potongan dokumen paling relevan sebelum diserahkan ke prompt LLM',
        'Instruksi system prompt ketat melarang jawaban spekulatif di luar korpus dokumen rujukan resmi',
        'Sitasi nomor pasal yang dapat diverifikasi langsung oleh user untuk audit kepatuhan hukum'
      ],
      codeSnippet: {
        language: 'python',
        title: 'Pipeline Pencarian Hybrid & Reranking',
        code: `# Pipeline Pencarian Hybrid RAG
def hybrid_retrieve(query: str, top_k: int = 5):
    # 1. Ambil 20 kandidat dari vektor dense ChromaDB
    dense_hits = chroma_collection.query(query_texts=[query], n_results=20)
    
    # 2. Ambil 20 kandidat dari pencarian sparse BM25
    sparse_hits = bm25_index.get_top_n(query.split(), documents, n=20)
    
    # 3. Gabungkan kandidat unik
    candidates = deduplicate(dense_hits + sparse_hits)
    
    # 4. Rerank menggunakan Cross-Encoder
    scored_docs = cross_encoder.predict([(query, doc.text) for doc in candidates])
    ranked_docs = sorted(zip(candidates, scored_docs), key=lambda x: x[1], reverse=True)
    
    return ranked_docs[:top_k]`
      }
    }
  ],
  techStack: [
    {
      category: 'Bahasa & Framework Backend',
      description: 'Lingkungan runtime utama untuk API berperforma tinggi dan background worker',
      skills: [
        { name: 'Python (FastAPI)', highlight: true },
        { name: 'PHP (Laravel, CodeIgniter)', highlight: true },
        { name: 'Node.js (NestJS, Express)', highlight: true },
        { name: 'Bun (Elysia)', highlight: true },
        { name: 'TypeScript / JavaScript', highlight: true },
        { name: 'RESTful API & OpenAPI/Swagger', highlight: true },
        { name: 'Arsitektur Microservices', highlight: true }
      ]
    },

    {
      category: 'Database & Penyimpanan',
      description: 'Penyimpanan relasional, dokumen, in-memory, dan vector database',
      skills: [
        { name: 'SQL (PostgreSQL, MySQL / MariaDB, SQLite)', highlight: true },
        { name: 'NoSQL (MongoDB)', highlight: true },
        { name: 'Redis (Caching & Queues)', highlight: true },
        { name: 'ChromaDB (Vector Database)', highlight: true },
        { name: 'Prisma ORM & Eloquent', highlight: true },
        { name: 'Optimasi Query (EXPLAIN)', highlight: true }
      ]
    },

    {
      category: 'AI & Data Engineering',
      description: 'Integrasi LLM, sistem retrieval, dan pemrosesan data sensor',
      skills: [
        { name: 'RAG (Retrieval Augmented Generation)', highlight: true },
        { name: 'OpenAI API & Anthropic Models', highlight: true },
        { name: 'Ollama (Local LLMs)', highlight: true },
        { name: 'Prompt Engineering & Chunking', highlight: true },
        { name: 'Agregasi Data Time-Series', highlight: true },
        { name: 'Pipeline Telemetri Sensor (CEMS/AQMS/BTS)', highlight: true },
        { name: 'Pemodelan ML Prediktif (Scikit-learn)', highlight: true }
      ]
    },

    {
      category: 'Frontend & UI (Jika Dibutuhkan)',
      description: 'Antarmuka yang bersih dan responsif untuk melengkapi layanan backend',
      skills: [
        { name: 'React', highlight: true },
        { name: 'Next.js', highlight: true },
        { name: 'Svelte', highlight: true },
        { name: 'HTML, CSS', highlight: true }
      ]
    },

    {
      category: 'Infrastruktur & DevOps',
      description: 'Deployment, containerization, dan pemeliharaan sistem production',
      skills: [
        { name: 'Docker & Docker Compose', highlight: true },
        { name: 'Linux (Ubuntu, CentOS)', highlight: true },
        { name: 'Nginx & Reverse Proxy', highlight: true },
        { name: 'CI/CD (GitLab, GitHub Actions)', highlight: true },
        { name: 'AWS & Cloud Hosting', highlight: true },
        { name: 'Windows Server & On-Premise', highlight: false },
        { name: 'Git & Version Control', highlight: true }
      ]
    }
  ],
  experiences: [
    {
      id: 'exp-trusur',
      role: 'Software Engineer',
      company: 'PT Cetta Trans Digital',
      period: 'Sep 2024 — Sekarang',
      location: 'Jakarta,Indonesia (Hybrid) ',
      type: 'Penuh Waktu (Full-time)',
      impactBullets: [
        'Merancang dan memelihara aplikasi web enterprise yang mencakup teknologi lingkungan (AQMS/CEMS), sistem ERP, dan platform perpajakan.',
        'Mengurangi waktu respons API dari ~4 menit menjadi di bawah 20 detik melalui optimasi query PostgreSQL secara mendalam dan restrukturisasi layer akses data.',
        'Meningkatkan kompleksitas komputasi algoritma dari O(n) menjadi O(1) pada proses bisnis kritis.',
        'Mengintegrasikan 50+ sensor lingkungan industri ke dalam sistem monitoring terpusat dan berhasil mengirimkan data regulasi ke KLHK.',
        'Berhasil menyelesaikan proyek enterprise kritis tanpa menimbulkan penalti bisnis.',
        'Berkolaborasi dengan peneliti akademik dalam inisiatif forecasting AI/ML untuk meningkatkan akurasi prediksi kualitas udara'
      ],
      technologies: ['Php', 'Laravel', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Nginx', 'AWS', 'IDCloudHost', 'Redis', 'FastAPI', 'Ubuntu/Windows Server']
    },
    {
      id: 'exp-sib',
      role: 'Full Stack Developer',
      company: 'PT Solusi Integrasi Bersama',
      period: 'Jul 2023 — Nov 2023',
      location: 'Jakarta, Indonesia',
      type: 'Penuh Waktu (Full-time)',
      impactBullets: [
        'Mengembangkan dan mengoptimalkan platform analitik telekomunikasi yang memantau performa 10.000+ menara BTS dan 3.5 TB data telemetri per tahun.',
        'Merancang partisi tabel PostgreSQL dan materialized view sehingga memangkas waktu query eksekutif dari ~4 menit menjadi sub-20 detik.',
        'Membangun layer caching Redis untuk 15+ indikator kesehatan operasional waktu nyata.',
        'Menangani perbaikan bug produksi dan mengimplementasikan endpoint REST API berkecepatan tinggi.'
      ],
      technologies: ['Laravel', 'PostgreSQL', 'Redis', 'PHP', 'Docker', 'Linux', 'REST API']
    },
    {
      id: 'exp-geodwipa',
      role: 'Web Developer',
      company: 'PT Geodwipa Teknika Nusantara',
      period: 'Jul 2022 — Jun 2023',
      location: 'Jakarta Selatan, Indonesia',
      type: 'Penuh Waktu (Full-time)',
      impactBullets: [
        'Mengembangkan sistem absensi presensi karyawan mobile web (GOS Absen) dan panel admin manajemen SDM (GOS Admin).',
        'Mengimplementasikan validasi radius lokasi geofence GPS via Google Maps API dan verifikasi foto selfie instan.',
        'Mengotomatiskan rekapitulasi kehadiran karyawan bulanan sehingga memangkas beban kerja rekap tim payroll HR hingga 60%.',
        'Memelihara stabilitas database PostgreSQL dan server aplikasi Apache di lingkungan produksi.'
      ],
      technologies: ['CodeIgniter 3', 'PostgreSQL', 'Google Maps API', 'Bootstrap', 'jQuery', 'Apache']
    }
  ],
  notes: [
    {
      id: 'note-slow-query-postmortem',
      title: 'Postmortem: Bagaimana Saya Mempercepat Query Lambat 4 Menit Menjadi 18 Detik di PostgreSQL',
      date: 'Februari 2026',
      readTime: '6 menit baca',
      tags: ['PostgreSQL', 'Optimasi Query', 'EXPLAIN ANALYZE', 'Indexing'],
      summary: 'Analisis mendalam mengenai diagnosa query agregasi data telemetri pada tabel jutaan baris, eliminasi sequential scan, dan perancangan indeks komposit B-Tree.',
      content: `### Latar Belakang Masalah
Pada sistem pemantauan telekomunikasi kami, query laporan eksekutif bulanan mengalami perlambatan drastis hingga 4 menit 12 detik. Query tersebut menggabungkan metrik dari 10.000+ menara BTS dengan total lebih dari 80 juta baris data waktu nyata.

### Langkah Diagnosa dengan EXPLAIN ANALYZE
Menjalankan \`EXPLAIN (ANALYZE, BUFFERS)\` menunjukkan bahwa PostgreSQL terpaksa melakukan **Parallel Sequential Scan** pada seluruh tabel. Indeks tunggal yang ada pada kolom \`recorded_at\` diabaikan karena query juga memfilter berdasarkan \`bts_id\` dan \`status_code\`.

\`\`\`sql
-- Hasil Explain Sebelum Optimasi
Seq Scan on telemetry_records (cost=0.00..1845210.00 rows=412050 width=48) (actual time=242150.12..251340.50)
Buffers: shared read=1240180
\`\`\`

### Strategi Pemecahan Masalah
1. **Membuat Indeks Komposit Terarah:**
   Alih-alih indeks tunggal, kami merancang indeks komposit dengan urutan kardinalitas tertinggi:
   \`\`\`sql
   CREATE INDEX CONCURRENTLY idx_telemetry_bts_time_status 
   ON telemetry_records (bts_id, recorded_at DESC) 
   INCLUDE (status_code, voltage, power_source);
   \`\`\`
   Penggunaan klausa \`INCLUDE\` memungkinkan query melakukan **Index-Only Scan** tanpa perlu membaca heap tabel utama.

2. **Menerapkan Partisi Tabel Berdasarkan Waktu:**
   Tabel dipecah menggunakan partisi rentang bulanan (\`PARTITION BY RANGE (recorded_at)\`), sehingga query yang mencari data bulan tertentu langsung mengabaikan partisi bulan lainnya.

3. **Materialized View untuk Agregasi Historis:**
   Untuk data bulan lalu yang tidak lagi berubah, kami membuat \`MATERIALIZED VIEW\` yang di-refresh setiap awal bulan.

### Hasil Akhir
- Waktu eksekusi query turun drastis dari **252 detik (4 menit 12 detik)** menjadi **18.4 detik**.
- Penggunaan I/O buffer disk berkurang hingga 88%.
- Beban CPU server database saat jam laporan bulanan turun dari 95% menjadi di bawah 25%.`
    },
    {
      id: 'note-vps-hardening-guide',
      title: 'Panduan Praktis Setup & Hardening Server Cloud VPS Linux untuk Aplikasi Web Produksi',
      date: 'Januari 2026',
      readTime: '8 menit baca',
      tags: ['Linux', 'Cloud VPS', 'Nginx', 'Docker', 'Keamanan'],
      summary: 'Langkah demi langkah menyiapkan server VPS Ubuntu baru di IDCloudHost/AWS: konfigurasi SSH key, firewall UFW, Nginx reverse proxy, Docker, dan SSL gratis otomatis.',
      content: `### Mengapa Hardening Server Sangat Krusial?
Server VPS baru yang tersambung ke IP publik sering kali mulai menerima serangan brute force SSH dalam hitungan menit setelah aktif. Menjaga server tetap aman dan andal memerlukan konfigurasi standar industri sebelum aplikasi dideploy.

### Checklist Standar Setup VPS Produksi:
1. **Membuat Pengguna Non-Root & Kunci SSH:**
   - Nonaktifkan login SSH berbasis password (\`PasswordAuthentication no\`).
   - Nonaktifkan login root langsung (\`PermitRootLogin no\`).
   - Gunakan autentikasi kunci publik ed25519.

2. **Pengaturan Firewall UFW:**
   \`\`\`bash
   sudo ufw default deny incoming
   sudo ufw default allow outgoing
   sudo ufw allow 22/tcp
   sudo ufw allow 80/tcp
   sudo ufw allow 443/tcp
   sudo ufw enable
   \`\`\`

3. **Nginx Reverse Proxy & Sertifikat SSL Otomatis:**
   Gunakan Certbot untuk mengamankan domain dengan Let's Encrypt dan pembaharuan otomatis:
   \`\`\`bash
   sudo certbot --nginx -d domainanda.com -d www.domainanda.com
   \`\`\`

4. **Isolasi Layanan Menggunakan Docker Compose:**
   Jalankan container backend dan database di dalam network bridge tertutup, hanya ekspos port 80/443 melalui Nginx host.`
    },
    {
      id: 'note-hybrid-rag-tax',
      title: 'Merancang Hybrid RAG untuk Asisten Hukum & Pajak Tanpa Halusinasi',
      date: 'Desember 2025',
      readTime: '7 menit baca',
      tags: ['AI', 'RAG', 'Python', 'FastAPI', 'ChromaDB'],
      summary: 'Mengapa semantic search vektor saja tidak cukup untuk dokumen perundang-undangan dan bagaimana menggabungkannya dengan BM25 serta Cross-Encoder Reranking.',
      content: `### Kelemahan Dense Vector Search Murni pada Teks Hukum
Pencarian vektor (Dense Retrieval) sangat handal menangkap arti semantik secara umum, namun sering gagal ketika user mencari pasal spesifik seperti *"Pasal 21 ayat 5 huruf b UU KUP"*. Nilai embedding sering tertukar dengan pasal lain yang memiliki tema serupa.

### Solusi: Arsitektur Hybrid RAG
1. **Dense Retrieval (ChromaDB / OpenAI Ada):** Menangkap kemiripan konsep hukum dan konteks pertanyaan.
2. **Sparse Retrieval (BM25):** Menjamin kecocokan tepat pada kata kunci istilah perpajakan dan nomor pasal tertentu.
3. **Penyatuan Skor (Reciprocal Rank Fusion):** Menggabungkan 20 kandidat teratas dari masing-masing pencari.
4. **Cross-Encoder Reranking:** Model reranker menilai relevansi pasangan (Pertanyaan, Teks Potongan) dan mengambil 5 potongan dokumen paling akurat untuk diserahkan ke prompt LLM.

Hasilnya, tingkat akurasi kutipan pasal mencapai 98.4% dan bebas dari halusinasi fiktif.`
    }
  ],
  education: [
    {
      school: 'Universitas Pamulang',
      degree: 'Sarjana Ilmu Komputer (S.Kom.) — Teknik Informatika',
      year: '2019 — 2023',
      gpa: '3.82 / 4.00 (Lulusan Terbaik / Predikat Cum Laude)'
    }
  ],
  certifications: [
    {
      name: 'Google IT Support Specialization',
      org: 'Google / Coursera',
      year: '2023'
    },
    {
      name: 'Architecting with Google Compute Engine',
      org: 'Google Cloud Platform',
      year: '2023'
    },
    {
      name: 'Database Design & Management with PostgreSQL',
      org: 'Coursera Professional Certification',
      year: '2022'
    }
  ]
};
