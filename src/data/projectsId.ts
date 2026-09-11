import { Project } from '../types';

/**
 * PANDUAN PENGGUNAAN GAMBAR PROYEK (LOCAL ASSETS):
 * Simpan file gambar Anda di folder: /public/assets/projects/
 * Contoh: /public/assets/projects/bakti-oss.png
 * Lalu ubah properti `imageUrl` pada proyek di bawah menjadi:
 * imageUrl: '/assets/projects/bakti-oss.png'
 * (Bisa juga menggunakan link URL gambar eksternal https://...)
 */
export const PROJECTS_DATA_ID: Project[] = [
  {
    id: 'bakti-oss',
    title: 'BAKTI OSS (Operational Support System)',
    subtitle: 'Pemantauan infrastruktur telekomunikasi dan pelaporan KPI operasional untuk 10.000+ lokasi BTS di seluruh Indonesia',
    category: 'backend',
    flag: 'Install & Cloud',
    badge: 'Enterprise Telekomunikasi',
    status: 'Pemeliharaan & pengembangan berkelanjutan',
    businessPurpose: 'Digunakan oleh BAKTI Kominfo (Badan Aksesibilitas Telekomunikasi dan Informasi) untuk mengelola dan memantau kegiatan operasional proyek telekomunikasi di Indonesia.',
    role: ['Pengembang Backend'],
    problem: '10.000+ lokasi BTS di seluruh Indonesia menghasilkan volume data telemetri yang sangat besar dari sumber-sumber yang bervariasi (API, FTP, SFTP, CSV, Excel, dan file log). Format yang tidak konsisten dan skala data yang masif membuat pelaporan real-time, ekspor file Excel, dan penyesuaian kebutuhan mingguan dari user menjadi sangat menantang.',
    solution: 'Membangun backend ingestion dan agregasi data berkinerja tinggi menggunakan Python, Go, dan Javascript (NodeJS). Mempartisi tabel database PostgreSQL dengan materialized view, menerapkan antrean worker BullMQ, serta menghangatkan lapisan cache Redis untuk query KPI berkecepatan sub-detik.',
    technicalChallenges: [
      '10.000+ BTS di seluruh Indonesia menghasilkan data dari API, FTP, SFTP, CSV, Excel, dan file log',
      'Format data yang tidak konsisten memerlukan parsing, validasi, dan normalisasi ekstensif',
      'Volume data skala besar membuat pelaporan real-time dan ekspor Excel membebani komputasi',
      'Alur kerja pemeliharaan memerlukan otomatisasi pembuatan tiket, persetujuan, notifikasi, dan penutupan tiket',
      'Perubahan mingguan yang sering diminta oleh user menuntut sistem untuk tetap fleksibel dan modular'
    ],
    keyContributions: [
      'Membangun pipeline pengumpulan data dari berbagai sumber jarak jauh (FTP, SFTP, CSV, Excel, file log)',
      'Mengimplementasikan pemrosesan, validasi, dan normalisasi data menggunakan Python, Javascript (NodeJS), dan Go',
      'Mengagregasi data telemetri menjadi KPI operasional pada berbagai interval (dari 15 menit hingga bulanan)',
      'Merancang skema database PostgreSQL dengan partisi time-series dan materialized view',
      'Menerapkan lapisan cache Redis untuk pengambilan cepat KPI operasional dan snapshot kesehatan sistem',
      'Mengembangkan REST API untuk aplikasi pelaporan dan dashboard pemantauan administratif'
    ],
    metrics: [
      { label: 'Situs Dipantau', value: '10.000+ BTS', desc: 'Infrastruktur telekomunikasi di seluruh Indonesia' },
      { label: 'Volume Telemetri', value: '3.5 TB+ / thn', desc: 'Rekor telemetri time-series yang diproses' },
      { label: 'Agregasi Data', value: '15m s/d Bulanan', desc: 'Rollup otomatis KPI multi-interval' },
      { label: 'Cache Hit Rate', value: '99.4%', desc: 'Cache in-memory Redis untuk dashboard' }
    ],
    stack: ['Python', 'Golang', 'NestJS', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Redis', 'BullMQ', 'Worker', 'Nginx', 'PM2', 'Ubuntu Server'],
    architecture: {
      flowDescription: 'Data mengalir dari 10.000+ pemantau BTS jarak jauh melalui worker pemrosesan ke tabel PostgreSQL berpartisi, dihangatkan ke cache Redis, dan disajikan melalui REST API teroptimasi ke dashboard administratif.',
      steps: [
        { title: 'Lokasi BTS Edge', desc: '10.000+ pemantau telekomunikasi jarak jauh mentransmisikan data telemetri mentah', tag: 'Sumber Data' },
        { title: 'Pipeline Data', desc: 'Job Python, Javascript (NodeJS), dan Go memproses dan memvalidasi data FTP, SFTP, CSV, Excel, dan log, lalu mengagregasi KPI interval 15 menit hingga bulanan', tag: 'Pemrosesan' },
        { title: 'Arsitektur PostgreSQL', desc: 'Database PostgreSQL terintegrasi dengan partisi time-series, agregasi KPI multi-interval, dan materialized view', tag: 'Penyimpanan' },
        { title: 'Lapisan Cache Redis', desc: 'Pengambilan cepat di memori (in-memory) untuk 15+ KPI operasional dan snapshot kesehatan sistem', tag: 'Cache' },
        { title: 'API Pelaporan', desc: 'Berbagai endpoint analitis yang mendukung aplikasi pemantauan, pelaporan, dan dashboard', tag: 'Pengiriman' }
      ]
    },
    liveUrl: 'https://baktioss.id',
    imageUrl: '/assets/projects/bakti-oss.png',
    screenshots: [
      {
        title: 'Topologi & Ikhtisar Sistem BAKTI OSS',
        url: '/assets/projects/bakti-oss.png',
        caption: 'Pemantauan analitik secara langsung terhadap metrik operasional dan transmisi data secara real-time.'
      }
    ],
    downloads: {
      primary: { label: 'Unduh Arsitektur BAKTI OSS (.md)', type: 'spec' },
      secondary: { label: 'Unduh Spek Ingestion Data (.json)', type: 'code' }
    },
    featured: true
  },
  {
    id: 'job-portal-app',
    title: 'Job Portal Web Application',
    subtitle: 'Platform web responsif untuk penelusuran lowongan dan manajemen administratif pekerjaan dengan alur kerja CRUD terautentikasi',
    category: 'website',
    flag: 'Website',
    badge: 'Aplikasi Web Full-Stack',
    status: 'Proyek Personal',
    businessPurpose: 'Website portal lowongan kerja yang memungkinkan user menelusuri lowongan yang tersedia, sementara administrator dapat mengelola daftar pekerjaan melalui antarmuka admin terautentikasi.',
    role: ['Pengembang Frontend', 'Pengembang Full-Stack'],
    problem: 'Pencari kerja membutuhkan portal yang simpel dan responsif untuk mencari serta menelusuri peluang kerja secara dinamis, sementara admin perekrutan memerlukan dashboard terautentikasi untuk menerbitkan, memperbarui, dan menghapus lowongan kerja tanpa perlu mengedit file secara manual.',
    solution: 'Membangun aplikasi web single-page dinamis menggunakan ReactJS dengan arsitektur komponen modular dan CSS. Terhubung ke backend REST API dengan autentikasi user/admin dan fungsionalitas CRUD lengkap untuk manajemen lowongan.',
    technicalChallenges: [
      'Membangun arsitektur frontend berbasis komponen di ReactJS dengan navigasi client-side yang lancar',
      'Mengimplementasikan autentikasi dan otorisasi terproteksi bagi user umum dan administrator',
      'Mengembangkan tata letak UI responsif yang optimal di layar perangkat ponsel maupun komputer desktop',
      'Menyusun rendering data dinamis dan validasi formulir untuk daftar lowongan pekerjaan'
    ],
    keyContributions: [
      'Mengembangkan antarmuka dan komponen frontend menggunakan ReactJS dan JavaScript modern',
      'Mengintegrasikan endpoint REST API backend untuk penarikan data lowongan dan autentikasi',
      'Menerapkan sistem autentikasi login terproteksi untuk hak akses administrator',
      'Mengimplementasikan fungsionalitas CRUD yang memungkinkan admin menambah, melihat, mengedit, dan menghapus pekerjaan',
      'Mengoptimalkan rendering data dinamis dan manajemen state untuk respon antarmuka yang cepat'
    ],
    metrics: [
      { label: 'Tipe Aplikasi', value: 'Aplikasi Web SPA', desc: 'Arsitektur komponen React modular' },
      { label: 'Autentikasi', value: 'Admin Terproteksi', desc: 'Portal manajemen lowongan aman' },
      { label: 'Operasi Data', value: 'CRUD Lengkap', desc: 'Tambah, baca, ubah, dan hapus' },
      { label: 'Dukungan Layar', value: 'Responsif', desc: 'Optimal di ponsel dan desktop' }
    ],
    stack: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'REST API', 'Authentication', 'Admin CPanel', 'UI/UX Design'],
    architecture: {
      flowDescription: 'Aplikasi web berbasis React yang menyediakan fitur penelusuran lowongan publik serta fungsionalitas administratif terautentikasi untuk mengelola daftar pekerjaan.',
      steps: [
        { title: 'Beranda Publik', desc: 'Pengguna dapat mengakses beranda dan menelusuri lowongan kerja melalui antarmuka React', tag: 'Frontend' },
        { title: 'Autentikasi Pengguna', desc: 'Pengguna dan admin login melalui antarmuka sebelum mengakses fungsionalitas yang dilindungi', tag: 'Autentikasi' },
        { title: 'Manajemen Lowongan', desc: 'Administrator terautentikasi dapat menambah dan menghapus lowongan pekerjaan melalui panel admin', tag: 'CRUD' },
        { title: 'Tampilan Dinamis', desc: 'Detail dan status lowongan ditampilkan secara dinamis di antarmuka berdasarkan data API', tag: 'Rendering' }
      ]
    },
    liveUrl: 'https://affandi.reactjssanbercode.my.id/',
    imageUrl: '/assets/projects/job-portal.png',
    screenshots: [
      { title: 'Antarmuka Publik & Penelusuran Lowongan', url: '/assets/projects/job-portal.png', caption: 'Job Portal ReactJS dengan pencarian dinamis, filter kategori, dan status pekerjaan' },
      { title: 'Panel Administratif Pengelolaan Lowongan', url: '/assets/projects/job-portal-admin.png', caption: 'Dashboard autentikasi admin untuk posting posisi baru dan evaluasi status pelamar' }
    ],
    downloads: {
      primary: { label: 'Unduh Spek Job Portal (.md)', type: 'spec' },
      secondary: { label: 'Unduh Konfigurasi Skema (.json)', type: 'code' }
    },
    featured: false
  },
  {
    id: 'gos-attendance',
    title: 'GOS Attendance & Workforce Management System',
    subtitle: 'Sistem absensi karyawan dan manajemen tenaga kerja enterprise dengan validasi geolokasi, verifikasi foto selfie, dan laporan payroll',
    category: 'maintenance',
    flag: 'Maintenance',
    badge: 'Tenaga Kerja & ERP',
    status: 'Pemeliharaan & Peningkatan Sistem',
    businessPurpose: 'Sistem absensi dan manajemen tenaga kerja berbasis web untuk mencatat kehadiran karyawan, mengelola pengajuan cuti dan sakit, mengatur lokasi presensi, serta menyediakan laporan kehadiran untuk keperluan administrasi dan penggajian (payroll).',
    role: ['Pengembang Full-Stack'],
    problem: 'Perusahaan mengoperasikan sistem presensi yang membutuhkan penambahan fitur kritis (mencegah kecurangan absensi lewat pembatasan radius lokasi GPS dan verifikasi foto selfie), mengatasi perlambatan query database pada jam masuk kerja, serta mengelola penyimpanan file objek multi-perusahaan secara aman.',
    solution: 'Meningkatkan aplikasi CodeIgniter 3 dan PostgreSQL dengan menambahkan fitur geofencing Google Maps API, verifikasi foto selfie dengan penyimpanan MinIO object storage, menyelesaikan bottleneck query lambat, dan menyempurnakan portal admin untuk ekspor rekap penggajian.',
    technicalChallenges: [
      'Meningkatkan sistem produksi yang sudah berjalan tanpa mengganggu rutinitas absensi harian ribuan karyawan',
      'Mengintegrasikan geolokasi browser real-time dan verifikasi radius titik kantor Google Maps API',
      'Mengonfigurasi MinIO object storage untuk menyimpan dan mengalirkan ribuan arsip foto selfie absensi',
      'Mengoptimalkan API backend dan query database untuk menghapus lonjakan latensi di jam sibuk pagi hari'
    ],
    keyContributions: [
      'Melakukan perbaikan bug rutin, pemeliharaan berkelanjutan, dan refaktorisasi kode',
      'Mengembangkan validasi presensi berbasis lokasi menggunakan geolokasi HTML5 dan Google Maps API',
      'Membangun alur penangkapan foto selfie dan verifikasi unggahan saat transaksi absensi',
      'Mengonfigurasi penyimpanan objek MinIO yang kompatibel dengan S3 untuk arsip foto yang aman dan cepat',
      'Meningkatkan portal administrasi untuk manajemen multi-perusahaan, master lokasi, dan persetujuan cuti',
      'Mengoptimalkan query PostgreSQL dan indeks DataTables untuk pembuatan laporan payroll instan'
    ],
    metrics: [
      { label: 'Kecurangan Absen', value: '0% Bypass', desc: 'Validasi ketat geofencing dan selfie' },
      { label: 'Penyimpanan File', value: 'MinIO S3', desc: 'Object storage foto terisolasi' },
      { label: 'Basis Data', value: 'PostgreSQL', desc: 'Log transaksi presensi ACID' },
      { label: 'Alur Kerja', value: 'Cuti & Sakit', desc: 'Alur persetujuan terintegrasi' }
    ],
    stack: ['CodeIgniter 3', 'JavaScript', 'jQuery', 'Bootstrap 3', 'DataTables', 'PostgreSQL', 'Apache', 'Google Maps API', 'MinIO'],
    architecture: {
      flowDescription: 'Sistem terdiri dari aplikasi presensi karyawan dan aplikasi manajemen administratif yang terhubung ke backend bersama dan database PostgreSQL. Presensi divalidasi dengan geolokasi dan foto selfie yang disimpan di MinIO object storage.',
      steps: [
        { title: 'Presensi Karyawan', desc: 'Karyawan mengakses aplikasi GOS Absen untuk merekam kehadiran dan mengajukan izin atau sakit', tag: 'Aplikasi Karyawan' },
        { title: 'Validasi Lokasi', desc: 'Kehadiran dicocokkan dengan radius lokasi resmi menggunakan geolokasi dan Google Maps API', tag: 'Geolokasi' },
        { title: 'Unggah Foto Selfie', desc: 'Foto kehadiran diunggah saat transaksi presensi dan disimpan aman di penyimpanan objek MinIO', tag: 'Penyimpanan Objek' },
        { title: 'Database PostgreSQL', desc: 'Data karyawan, riwayat waktu presensi, lokasi, cuti, dan log operasional tersimpan andal', tag: 'Basis Data' },
        { title: 'GOS Admin', desc: 'Admin mengelola master perusahaan, karyawan, titik lokasi, rekap kehadiran, dan ekspor payroll', tag: 'Administrasi' },
        { title: 'Pelaporan Payroll', desc: 'Data kehadiran diproses menjadi laporan rekapitulasi untuk keperluan penggajian', tag: 'Pelaporan' }
      ]
    },
    applications: [
      { name: 'GOS Absen', url: '#', description: 'Aplikasi presensi karyawan dengan validasi geolokasi dan verifikasi foto selfie.' },
      { name: 'GOS Admin', url: '#', description: 'Portal admin untuk mengelola perusahaan, karyawan, titik lokasi, dan ekspor laporan.' }
    ],
    imageUrl: '/assets/projects/gos-login.png',
    screenshots: [
      { title: 'Gos Absen Dashboard', url: '/assets/projects/gos-absen-1.png', caption: 'GOS Absen Dashboard' },
      { title: 'Presensi Mobile Geolokasi & Selfie', url: '/assets/projects/gos-absen-2.png', caption: 'Aplikasi presensi karyawan dengan validasi radius geofence GPS dan verifikasi foto selfie MinIO' },
      { title: 'Portal GOS Admin & Pengaturan Shift', url: '/assets/projects/gos-admin.png', caption: 'Portal HR enterprise untuk manajemen titik kantor, multi-shift kerja, dan approval izin/cuti' },
    ],
    downloads: {
      primary: { label: 'Unduh Spek Arsitektur GOS (.md)', type: 'spec' },
      secondary: { label: 'Unduh Spek Integrasi MinIO (.json)', type: 'code' }
    },
    featured: true
  },
  {
    id: 'egateway-cems',
    title: 'Egateway – CEMS Emission Monitoring Integration System',
    subtitle: 'Gateway pemantauan emisi cerobong industri on-premise yang terintegrasi langsung dengan sistem SISPEK KLHK',
    category: 'install',
    flag: 'Install & Cloud',
    badge: 'On-Premise & Integrasi',
    status: 'Deployment, Pemeliharaan & Peningkatan Sistem',
    businessPurpose: 'Aplikasi web on-premise yang digunakan untuk menerima, memproses, menormalisasi, dan mentransmisikan data pemantauan emisi cerobong CEMS secara terus-menerus ke SISPEK yang dikelola oleh Kementerian Lingkungan Hidup dan Kehutanan (KLHK) RI.',
    role: ['Software Engineer', 'Integrasi Sistem & Deployment'],
    problem: 'Pabrik industri diwajibkan oleh regulasi lingkungan hidup Indonesia untuk mengirimkan data emisi cerobong asap yang valid ke SISPEK KLHK. Topologi jaringan pabrik sangat beragam, menuntut deployment on-premise yang fleksibel, otomatisasi tugas terjadwal, dan normalisasi data anti-gagal.',
    solution: 'Melakukan deployment dan pemeliharaan aplikasi Egateway berbasis Laravel 10 dan Python di server Windows Server pelanggan. Mengonfigurasi penerimaan otomatis dari file CSV dan API industri, menerapkan otomatisasi via Windows Task Scheduler, serta memastikan transmisi aman ke SISPEK KLHK.',
    technicalChallenges: [
      'Menyesuaikan instalasi dan integrasi dengan topologi jaringan lokal dan firewall pabrik yang bervariasi',
      'Menerima data sensor emisi dari berbagai merek instrumen CEMS melalui protokol API dan drop file CSV',
      'Mengonfigurasi worker background Python untuk parsing, validasi, transformasi, dan normalisasi data',
      'Mengonfigurasi web server Apache, PostgreSQL, dan Windows Task Scheduler agar berjalan otonom 24/7'
    ],
    keyContributions: [
      'Melakukan instalasi aplikasi on-premise, konfigurasi server, dan persiapan lingkungan produksi',
      'Mengonfigurasi routing jaringan dan topologi server lokal di area industri pabrik',
      'Membangun dan menyetel skrip pemrosesan Python untuk membaca dan menormalisasi log mentah CEMS',
      'Mengonfigurasi skema database PostgreSQL untuk pencatatan log emisi dan jejak audit kepatuhan',
      'Mengonfigurasi Apache dan Windows Task Scheduler untuk transmisi background yang tahan gangguan',
      'Menangani pemeliharaan berkala, pembaruan dependency, dan penambahan fitur kustom permintaan klien'
    ],
    deploymentEnvironment: {
      type: 'On-Premise',
      server_os: 'Windows Server',
      web_server: 'Apache / XAMPP',
      database: 'PostgreSQL',
      scheduler: 'Windows Task Scheduler'
    },
    metrics: [
      { label: 'Sistem Tujuan', value: 'SISPEK KLHK', desc: 'Standar regulasi kementerian lingkungan' },
      { label: 'Lingkungan', value: 'On-Premise', desc: 'Deployment industri Windows Server' },
      { label: 'Penjadwalan', value: 'Otonom 24/7', desc: 'Windows Task Scheduler batch berulang' },
      { label: 'Engine Data', value: 'Normalizer Python', desc: 'Transformasi real-time CSV & API' }
    ],
    stack: ['Laravel 10', 'Python', 'Bootstrap', 'PostgreSQL', 'Windows Server', 'XAMPP'],
    imageUrl: '/assets/projects/egateway-login.png',
    screenshots: [
      { title: 'Dashboard Emisi Cerobong Industri', url: '/assets/projects/egateway-dashboard.png', caption: 'Pemantauan kontinu parameter gas buang cerobong industri (SO2, NOx, CO, O2, Partikulat)' }
    ],
    architecture: {
      flowDescription: 'Instrumen CEMS di pabrik industri terus menghasilkan data emisi cerobong. Data diterima melalui API atau transfer CSV, diproses dan dinormalisasi oleh skrip Python, disimpan di PostgreSQL, dikelola oleh Laravel Egateway, dan dikirimkan ke SISPEK KLHK.',
      steps: [
        { title: 'Instrumen CEMS', desc: 'Perangkat CEMS industri menghasilkan data pemantauan emisi cerobong secara berkelanjutan', tag: 'Sumber Data' },
        { title: 'Pengumpulan Data', desc: 'Data masuk diterima melalui API lokal atau pengiriman berkala file CSV sesuai konfigurasi pabrik', tag: 'Integrasi' },
        { title: 'Pemrosesan Python', desc: 'Skrip Python mem-parsing, memvalidasi, mentransformasi, dan menormalisasi data sesuai format KLHK', tag: 'Normalisasi' },
        { title: 'Database PostgreSQL', desc: 'Data emisi yang telah dinormalisasi disimpan dengan riwayat jejak audit lengkap', tag: 'Penyimpanan' },
        { title: 'Aplikasi Egateway', desc: 'Aplikasi on-premise Laravel menyediakan pemantauan visual, grafik emisi, dan modul integrasi', tag: 'Aplikasi' },
        { title: 'Tugas Terjadwal', desc: 'Windows Task Scheduler mengeksekusi job pemrosesan data dan sinkronisasi berkala secara otomatis', tag: 'Otomasi' },
        { title: 'Gateway SISPEK KLHK', desc: 'Data emisi berhasil dikirim ke server pusat sistem pemantauan lingkungan hidup KLHK', tag: 'Gateway Regulasi' }
      ]
    },
    downloads: {
      primary: { label: 'Unduh Arsitektur Egateway (.md)', type: 'spec' },
      secondary: { label: 'Unduh Spek Normalisasi CEMS (.json)', type: 'code' }
    },
    featured: true
  },
  {
    id: 'dashboard-pemantauan-udara',
    title: 'Dashboard Pemantauan Udara (Air Quality Monitoring)',
    subtitle: 'Dashboard pemantauan sensor AQMS real-time dengan prediksi berbasis AI/LLM dan Sistem Peringatan Dini (EWS)',
    category: 'ai',
    flag: 'AI / Backend',
    badge: 'AI & Visualisasi Data',
    status: 'Pemeliharaan & Peningkatan Sistem',
    businessPurpose: 'Digunakan untuk memantau dan memvisualisasikan data sensor AQMS (Air Quality Monitoring System) secara real-time, serta menyediakan forecasting dan peringatan dini (Early Warning System) berbasis AI untuk membantu evaluasi kualitas udara dan panduan kesehatan masyarakat.',
    role: ['Software Engineer', 'Pengembangan Fitur AI/ML', 'Project Lead'],
    problem: 'Anomali kualitas udara dan lonjakan polusi membutuhkan visibilitas real-time bagi otoritas dan publik. Aliran data sensor mentah perlu dimodelkan menjadi prakiraan prediktif dan peringatan dini agar pemerintah dapat mengantisipasi degradasi kualitas udara secara proaktif.',
    solution: 'Memelihara dan meningkatkan dashboard berbasis Svelte dan runtime Bun/Elysia. Mengintegrasikan pemodelan data prediktif berbasis LLM melalui kolaborasi dengan peneliti akademis (meningkatkan akurasi prediksi ~15%), serta meningkatkan chatbot asisten AI interaktif.',
    technicalChallenges: [
      'Menjaga streaming data real-time tetap responsif dari puluhan stasiun sensor AQMS aktif',
      'Mengimplementasikan visualisasi Early Warning System berbasis pemodelan prediksi AI/LLM',
      'Berkolaborasi dengan peneliti akademis untuk mengoptimalkan algoritma forecasting (naik ~15% akurasi)',
      'Mengkoordinasikan linimasa dan spesifikasi fitur lintas lembaga pemerintah dan tim multidisiplin'
    ],
    keyContributions: [
      'Mengembangkan fitur Early Warning System (EWS) menggunakan pemodelan data prediktif berbasis LLM',
      'Mengimplementasikan visualisasi pengukuran sensor real-time dengan Svelte, Tailwind CSS, dan Google Maps API',
      'Meningkatkan asisten chatbot AI untuk memberikan jawaban cerdas dan kontekstual seputar data lingkungan',
      'Membangun layanan backend menggunakan Elysia, Bun, Prisma, dan PostgreSQL dengan latensi sub-detik',
      'Berkolaborasi dalam riset peramalan AI/ML yang menghasilkan peningkatan akurasi prediksi sebesar ~15%'
    ],
    metrics: [
      { label: 'Akurasi Prediksi', value: '+15% Akurat', desc: 'Peningkatan melalui kolaborasi riset AI/ML' },
      { label: 'Sumber Data', value: 'AQMS Real-time', desc: 'Telemetri sensor lingkungan berkelanjutan' },
      { label: 'Mesin Backend', value: 'Bun + Elysia', desc: 'Runtime TypeScript throughput tinggi' },
      { label: 'Engine EWS', value: 'Berbasis LLM', desc: 'Peringatan dini anomali kualitas udara' }
    ],
    stack: ['Svelte', 'TailwindCSS', 'Google Maps API', 'Elysia', 'Bun', 'Prisma', 'PostgreSQL', 'Redis', 'AI/LLM Predictive Models', 'Ubuntu Server'],
    architecture: {
      flowDescription: 'Data sensor AQMS diproses dan disajikan melalui API backend ke dashboard interaktif, di mana pengukuran real-time divisualisasikan pada grafik dan peta spasial. Pemrosesan berbasis AI/LLM digunakan untuk pemodelan data, peramalan, dan visualisasi Early Warning System (EWS).',
      steps: [
        { title: 'Sensor AQMS', desc: 'Sensor pemantau kualitas udara menghasilkan data lingkungan mentah untuk dianalisis', tag: 'Sumber Data' },
        { title: 'API Backend', desc: 'Backend berbasis Elysia dan Bun memproses dan mengekspos data AQMS melalui API dengan Prisma dan PostgreSQL', tag: 'Backend' },
        { title: 'Dashboard Real-time', desc: 'Dashboard berbasis Svelte memvisualisasikan data sensor melalui grafik interaktif dan Google Maps', tag: 'Visualisasi' },
        { title: 'Forecasting AI/LLM', desc: 'Pemodelan berbasis LLM memproses data sensor untuk menghasilkan prediksi kondisi kualitas udara', tag: 'AI/ML' },
        { title: 'Sistem Peringatan Dini', desc: 'Hasil peramalan divisualisasikan di dashboard untuk memberikan indikasi dini kualitas udara', tag: 'EWS' },
        { title: 'Chatbot AI', desc: 'Asisten AI interaktif memberikan respon cerdas dan informatif sesuai kebutuhan proyek', tag: 'Asisten AI' }
      ]
    },
    liveUrl: 'https://dashboard.greenteams.co/',
    imageUrl: '/assets/projects/dpu.png',
    screenshots: [
      { title: 'Asisten Chatbot AI Kualitas Udara', url: '/assets/projects/dpu-chatbot.png', caption: 'Chatbot AI cerdas untuk rekomendasi aktivitas dan analisis mendalam data lingkungan' }
    ],
    downloads: {
      primary: { label: 'Unduh Arsitektur Dashboard AQMS (.md)', type: 'spec' },
      secondary: { label: 'Unduh Konfigurasi Forecasting EWS (.json)', type: 'code' }
    },
    featured: true
  },
  {
    id: 'trusur-erp',
    title: 'Trusur ERP (Enterprise Resource Planning)',
    subtitle: 'Sistem ERP berbasis web terintegrasi untuk mendukung operasional bisnis, pengadaan, dan manajemen inventaris',
    category: 'erp',
    flag: 'ERP',
    badge: 'Platform Enterprise',
    status: 'Pemeliharaan & Peningkatan Fitur',
    businessPurpose: 'Aplikasi berbasis web untuk mendukung proses Enterprise Resource Planning (ERP) dan pengelolaan operasional bisnis, pengadaan, pelacakan aset, dan alur kerja perusahaan.',
    role: ['Software Engineer'],
    problem: 'Operasional bisnis perusahaan melibatkan alur pelacakan inventaris yang kompleks, pembelian dari pemasok, serta persetujuan antar divisi yang membutuhkan perbaikan bug cepat, adaptasi alur kerja, dan konsistensi data yang mutlak.',
    solution: 'Memelihara dan terus meningkatkan sistem ERP web di lingkungan produksi. Menyelesaikan bug operasional, menyesuaikan alur kerja berdasarkan feedback user, dan menambahkan modul baru sesuai dinamika bisnis perusahaan.',
    technicalChallenges: [
      'Menjaga keandalan tinggi pada modul ERP yang saling berkaitan (pengadaan, stok gudang, penagihan)',
      'Menyelesaikan kendala sistem secara cepat untuk mencegah hambatan operasional di divisi gudang dan keuangan',
      'Menerapkan logika bisnis baru tanpa merusak kompatibilitas catatan transaksi terdahulu'
    ],
    keyContributions: [
      'Memelihara fitur-fitur ERP web yang ada dan menyelesaikan bug operasional sistem',
      'Memodifikasi fungsionalitas aplikasi sesuai dinamika operasional dan kebutuhan user',
      'Mengimplementasikan penambahan fitur baru yang mendukung alur kerja pengadaan dan stok barang',
      'Melakukan pemeliharaan database berkala, penyesuaian query, dan peningkatan stabilitas sistem'
    ],
    metrics: [
      { label: 'Kelas Sistem', value: 'ERP Enterprise', desc: 'Platform bisnis multi-modul terintegrasi' },
      { label: 'Alur Kerja', value: 'End-to-End', desc: 'Pengadaan, inventaris, dan operasional' },
      { label: 'Keandalan', value: 'SLA Produksi', desc: 'Nol gangguan saat pembaruan fitur' },
      { label: 'Keamanan', value: 'RBAC', desc: 'Hak akses berbasis peran user' }
    ],
    stack: ['Web Application', 'CodeIgniter', 'MySQL', 'JavaScript', 'Bootstrap', 'REST API'],
    architecture: {
      flowDescription: 'Aplikasi ERP berbasis web mendukung proses bisnis dan operasional perusahaan melalui modul dan fitur yang terintegrasi secara utuh.',
      steps: [
        { title: 'Inti Aplikasi ERP', desc: 'Aplikasi berbasis web yang menyediakan fungsionalitas manajemen operasional bisnis', tag: 'Aplikasi' },
        { title: 'Pemeliharaan Fitur', desc: 'Memelihara fitur dan memodifikasi fungsionalitas berdasarkan kebutuhan operasional', tag: 'Pemeliharaan' },
        { title: 'Perbaikan Bug', desc: 'Mengidentifikasi dan memperbaiki bug aplikasi guna meningkatkan keandalan sistem', tag: 'Perbaikan Bug' },
        { title: 'Peningkatan Fitur', desc: 'Menerapkan fitur baru dan menyempurnakan alur kerja yang sudah ada sesuai kebutuhan bisnis', tag: 'Peningkatan' }
      ]
    },
    liveUrl: 'https://dashboards.trusur.tech/',
    imageUrl: '/assets/projects/erp-login.png',
    screenshots: [
      { title: 'Dashboard Operasional & Finansial ERP', url: '/assets/projects/erp-menu.png', caption: 'Ikhtisar transaksi harian, status pesanan penjualan, dan neraca operasional bisnis' },
      { title: 'Manajemen Prosedur', url: '/assets/projects/erp-menu-1.png', caption: 'Menu Pengaturan Prosedur - SOP' }
    ],
    downloads: {
      primary: { label: 'Unduh Gambaran Trusur ERP (.md)', type: 'spec' },
      secondary: { label: 'Unduh Spek Alur Modul (.json)', type: 'code' }
    },
    featured: false
  },
  {
    id: 'dashboard-aqms-legacy',
    title: 'Dashboard AQMS (Optimasi Performa & Basis Data)',
    subtitle: 'Aplikasi web pemantauan udara yang dioptimalkan dari latensi query 4 menit menjadi di bawah 20 detik',
    category: 'maintenance',
    flag: 'Maintenance',
    badge: 'Optimasi Query',
    status: 'Pemeliharaan & Peningkatan Performa',
    businessPurpose: 'Digunakan untuk memantau data AQMS (Air Quality Monitoring System) secara real-time melalui aplikasi berbasis web.',
    role: ['Software Engineer', 'Pengembang Backend'],
    problem: 'Endpoint API kritis mengalami penurunan performa yang parah, membutuhkan waktu hingga 4 menit per request akibat loop query N+1, tidak adanya indeks database penting, serta baris duplikat yang membuat utilitas storage server mencapai hampir 100%.',
    solution: 'Melakukan profiling database sistematis dan optimasi query pada CodeIgniter 4 dan MySQL. Menghilangkan pola query N+1, membuat indeks komposit pada kolom timestamp dan sensor, serta menyusun ulang kompleksitas akses data dari O(n) ke O(1), memangkas latensi API hingga 91.7% dan membebaskan 80% ruang penyimpanan.',
    technicalChallenges: [
      'Menghilangkan loop query N+1 yang parah pada endpoint pelaporan ber-traffic tinggi',
      'Mengatasi saturasi kapasitas storage database 100% akibat kelalaian indeks dan pemindaian berulang',
      'Mengoptimalkan rencana eksekusi query pada sistem produksi tanpa menghentikan layanan (zero downtime)'
    ],
    keyContributions: [
      'Mengidentifikasi dan menghapus bottleneck loop query N+1 pada endpoint API utama',
      'Memangkas waktu respon API dari sekitar 4 menit menjadi di bawah 20 detik (penurunan 91.7%)',
      'Meningkatkan efisiensi komputasi proses bisnis kritis dari O(n) menjadi O(1)',
      'Mengidentifikasi dan membersihkan data duplikat serta menuntaskan masalah ketiadaan indeks tabel',
      'Menurunkan utilisasi storage database dari sekitar 100% menjadi hanya 20%',
      'Melakukan pemeliharaan berkelanjutan, penanganan bug, dan penambahan fitur aplikasi'
    ],
    metrics: [
      { label: 'Waktu Respon API', value: '4m → <20s', desc: '91.7% penurunan latensi query' },
      { label: 'Utilisasi Storage', value: '100% → 20%', desc: 'Mengembalikan kapasitas server via indexing' },
      { label: 'Kompleksitas', value: 'O(n) → O(1)', desc: 'Optimasi algoritma pengambilan data' },
      { label: 'Query N+1', value: '0 Loop Calls', desc: 'Menghilangkan query relasional berulang' }
    ],
    stack: ['CodeIgniter', 'PHP', 'MySQL', 'Database Indexing', 'Query Optimization'],
    architecture: {
      flowDescription: 'Data pemantauan AQMS ditarik melalui API backend dan diproses menggunakan CodeIgniter 4 sebelum disajikan ke dashboard web. Hambatan performa diselesaikan lewat optimasi query, strategi akses data yang efisien, dan penerapan indeks database yang tepat.',
      steps: [
        { title: 'Sumber Data AQMS', desc: 'Data pemantauan kualitas udara dikumpulkan dan disiapkan untuk pemantauan real-time', tag: 'Sumber Data' },
        { title: 'API CodeIgniter', desc: 'Backend CodeIgniter 4 memproses dan menyajikan data AQMS melalui endpoint aplikasi', tag: 'Backend' },
        { title: 'Optimasi Query', desc: 'Menuntaskan kendala query N+1 dan menyempurnakan strategi akses data untuk memangkas waktu proses', tag: 'Performa' },
        { title: 'Pemberian Indeks Database', desc: 'Menambahkan dan mengoptimalkan indeks tabel database guna mempercepat query dan menghemat resource', tag: 'Basis Data' },
        { title: 'Dashboard AQMS', desc: 'Dashboard berbasis web menampilkan data AQMS yang telah diproses untuk pemantauan langsung', tag: 'Visualisasi' }
      ]
    },
    liveUrl: 'https://aqms.trusur.tech/login',
    imageUrl: '/assets/projects/aqms-login.png',
    screenshots: [
      { title: 'Laporan', url: '/assets/projects/aqms-report.png', caption: 'Laporan komprehensif tentang data dan analisis AQMS' },
      { title: 'Peta', url: '/assets/projects/aqms-map.png', caption: 'Peta menunjukkan lokasi sensor AQMS dan visualisasi data' }
    ],
    downloads: {
      primary: { label: 'Unduh Studi Kasus Optimasi (.md)', type: 'spec' },
      secondary: { label: 'Unduh Benchmark Indexing SQL (.json)', type: 'code' }
    },
    featured: true
  },
  {
    id: 'efs-aqms-edge',
    title: 'EFS - AQMS Edge System',
    subtitle: 'Platform komputasi edge Linux otonom di lokasi perangkat untuk akuisisi telemetri sensor AQMS real-time dan sinkronisasi data',
    category: 'install',
    flag: 'Install & Cloud',
    badge: 'IoT & Komputasi Edge',
    status: 'Pemeliharaan & Deployment Edge',
    businessPurpose: 'Digunakan sebagai sistem edge yang dipasang di lokasi perangkat fisik AQMS untuk membaca, memproses, dan mengirimkan data sensor ke Dashboard AQMS untuk pemantauan terpusat.',
    role: ['Software Engineer', 'Integrasi Sistem & Deployment'],
    problem: 'Instrumen sensor kualitas udara yang terpasang di 30+ lokasi fisik membutuhkan sistem edge otonom yang tangguh untuk membaca sensor perangkat keras via PLC dan komunikasi serial, menangani putusnya koneksi internet, serta menjamin pengiriman data ke server pusat.',
    solution: 'Melakukan deployment dan pemeliharaan sistem edge EFS berbasis Linux di 30+ stasiun AQMS fisik. Membangun daemon background Python untuk akuisisi data serial/USB, penjadwalan tugas, dan konfigurasi troubleshooting jarak jauh via TeamViewer.',
    technicalChallenges: [
      'Menginstal dan mengonfigurasi sistem operasi Linux dan runtime dependency pada perangkat keras di lapangan',
      'Menghubungkan instrumen sensor AQMS industri melalui antarmuka PLC dan komunikasi serial/USB',
      'Menangani perubahan kalibrasi sensor dan variasi format output data telemetri di lapangan',
      'Mengonfigurasi pemulihan otomatis saat restart listrik dan akses jarak jauh tanpa pengawasan'
    ],
    keyContributions: [
      'Melakukan instalasi dan konfigurasi aplikasi edge EFS di 30+ titik sensor fisik di seluruh Indonesia',
      'Mengonfigurasi sistem operasi Linux MX dan paket runtime hemat daya pada hardware edge',
      'Membangun dan memelihara service Python untuk membaca dan mengurai aliran data sensor secara kontinu',
      'Mengonfigurasi job cron terjadwal dan skrip auto-startup untuk operasional otonom tanpa henti',
      'Mengonfigurasi akses remote aman via TeamViewer untuk troubleshooting cepat baik lokal maupun jarak jauh',
      'Menjamin keandalan pengiriman data ke platform terpusat Dashboard AQMS'
    ],
    metrics: [
      { label: 'Unit Terpasang', value: '30+ Titik', desc: 'Perangkat edge Linux beroperasi 24/7 di lapangan' },
      { label: 'Antarmuka Hardware', value: 'PLC & Serial', desc: 'Akuisisi data via USB, RS-232, dan Modbus' },
      { label: 'Ketahanan Edge', value: 'Store & Forward', desc: 'Buffer data lokal saat koneksi internet putus' },
      { label: 'Bantuan Remote', value: 'TeamViewer', desc: 'Akses perbaikan jarak jauh tanpa gangguan' }
    ],
    stack: ['Python', 'Code Igniter', 'Linux', 'Apache', 'MariaDB', 'Cron', 'Serial Communication', 'TeamViewer'],
    imageUrl: '/assets/projects/efs-sensor.png',
    screenshots: [
      {
        title: 'Linux MX',
        url: '/assets/projects/efs-linux.png',
        caption: 'Sistem operasi berbasis Linux yang digunakan untuk pengembangan, administrasi server, konfigurasi sistem, pemecahan masalah, dan deployment.'
      },
      {
        title: 'AQMS-EFS Sensor',
        url: '/assets/projects/efs-sensor.png',
        caption: 'Arsitektur store-and-forward yang memastikan tidak ada paket data telemetri yang hilang saat terjadi gangguan koneksi.'
      },
      {
        title: 'AQMS-EFS Warehouse',
        url: '/assets/projects/efs-warehouse.png',
        caption: 'Tempat penyimpanan perangkat sensor dan peralatan monitoring untuk mendukung operasional serta pemantauan kualitas udara di area sekitar.'
      },
    ],
    architecture: {
      flowDescription: 'Sensor AQMS yang terhubung melalui PLC dan perangkat komunikasi mengirimkan data pengukuran ke perangkat edge EFS. Sistem EFS membaca dan memproses data melalui service Python, menyimpannya di storage lokal, dan meneruskannya secara andal ke Dashboard AQMS terpusat.',
      steps: [
        { title: 'Sensor AQMS', desc: 'Sensor lingkungan yang terpasang di lokasi pelanggan menghasilkan data pemantauan kualitas udara', tag: 'Perangkat Keras' },
        { title: 'PLC & Komunikasi Serial', desc: 'Perangkat sensor berkomunikasi dengan sistem edge melalui interface PLC dan port serial/USB', tag: 'Antarmuka Alat' },
        { title: 'Perangkat Edge EFS', desc: 'Komputer edge berbasis Linux di lokasi sensor menerima dan memproses data mentah', tag: 'Sistem Edge' },
        { title: 'Service Python', desc: 'Daemon background Python membaca, memvalidasi, dan mengurai telemetri secara berkelanjutan', tag: 'Pengolahan Data' },
        { title: 'Transmisi Data', desc: 'Data yang telah diproses dikirimkan secara andal dari unit EFS ke dashboard pusat', tag: 'Pengiriman' },
        { title: 'Dukungan Remote', desc: 'TeamViewer dikonfigurasi untuk memudahkan pemantauan dan perbaikan unit edge dari jarak jauh', tag: 'Operasional Remote' }
      ]
    },
    downloads: {
      primary: { label: 'Unduh Spek Sistem Edge EFS (.md)', type: 'spec' },
      secondary: { label: 'Unduh Konfigurasi Daemon Edge (.json)', type: 'code' }
    },
    featured: false
  },
  {
    id: 'caltax-platform',
    title: 'Caltax – Tax Processing & AI Assistant Platform',
    subtitle: 'Platform perpajakan microservices dengan mesin kalkulasi terpusat dan asisten AI penasihat pajak berbasis RAG',
    category: 'ai',
    flag: 'AI / Backend',
    badge: 'Microservices & RAG',
    status: 'Pemeliharaan & pengembangan berkelanjutan',
    businessPurpose: 'Platform perpajakan yang menyediakan pengelolaan user, master data perpajakan, proses perhitungan pajak otomatis, serta AI Assistant berbasis RAG untuk membantu wajib pajak memahami ketentuan dan regulasi perpajakan.',
    role: ['Pengembang Backend', 'Pengembangan Fitur AI/LLM', 'CI/CD & Deployment'],
    problem: 'Perhitungan pajak di Indonesia melibatkan aturan regulasi yang rumit, sering mengalami pembaruan, dan memiliki matriks data acuan yang besar. Pengguna memerlukan kalkulator pajak yang presisi serta asisten cerdas yang mampu merujuk pasal undang-undang resmi tanpa halusinasi AI.',
    solution: 'Merancang arsitektur microservices yang memisahkan layanan User, Master Data, Kalkulasi Pajak, dan AI menggunakan Python FastAPI. Membangun asisten Retrieval-Augmented Generation (RAG) menggunakan ChromaDB untuk pencarian vektor, Ollama dengan model Qwen2.5, serta streaming Server-Sent Events (SSE).',
    technicalChallenges: [
      'Memisahkan sistem menjadi microservices independen untuk beban kerja user, master, kalkulasi, dan AI',
      'Merancang pemotongan chunk teks regulasi pajak Indonesia dan pencarian vektor semantik berakurasi tinggi',
      'Mengimplementasikan streaming Server-Sent Events (SSE) untuk respon interaktif chatbot AI tanpa jeda',
      'Mengatur pipeline deployment CI/CD di server Linux dengan reverse proxy Nginx dan process manager PM2'
    ],
    keyContributions: [
      'Merancang arsitektur microservices yang memisahkan modul otentikasi, master data, komputasi, dan AI',
      'Membangun Service Perhitungan Pajak yang mengimplementasikan formula bisnis dan aturan hukum pajak',
      'Mengimplementasikan chatbot AI berbasis RAG menggunakan FastAPI, vector store Chroma, dan LLM Qwen2.5',
      'Membangun pipeline respon streaming (SSE) untuk pengalaman percakapan AI berkecepatan tinggi',
      'Mengonfigurasi server produksi Linux, manajemen proses PM2, sertifikat SSL Nginx, dan pipeline CI/CD'
    ],
    metrics: [
      { label: 'Arsitektur', value: 'Microservices', desc: 'Layanan domain terpisah dan mandiri' },
      { label: 'Pipeline AI', value: 'RAG + Chroma', desc: 'Pencarian vektor dokumen hukum semantik' },
      { label: 'Respon AI', value: 'SSE Streaming', desc: 'Aliran token interaktif real-time' },
      { label: 'Operasional', value: 'PM2 + Nginx', desc: 'Deployment server Linux dengan CI/CD' }
    ],
    stack: ['Python', 'FastAPI', 'Microservices', 'PostgreSQL', 'AI/LLM Model', 'RAG', 'Vector Database', 'CI/CD', 'Linux', 'PM2', 'Nginx'],
    architecture: {
      flowDescription: 'Caltax menerapkan arsitektur microservices di mana pengelolaan user, master data, pemrosesan pajak, dan fungsionalitas AI ditangani oleh service terpisah yang berkomunikasi melalui API untuk menghadirkan alur kerja terpadu.',
      steps: [
        { title: 'User Service', desc: 'Menangani registrasi user, otentikasi, login, dan pengelolaan profil', tag: 'Autentikasi' },
        { title: 'Master Service', desc: 'Menyediakan tarif master, data referensi, dan matriks persyaratan perhitungan pajak', tag: 'Master Data' },
        { title: 'Tax Service', desc: 'Memproses data input dan mengeksekusi komputasi serta logika bisnis utama perpajakan', tag: 'Komputasi' },
        { title: 'AI Service', desc: 'Asisten AI berbasis RAG mencari pengetahuan hukum pajak terkait dan menyusun jawaban kontekstual', tag: 'AI / RAG' },
        { title: 'Lapisan Knowledge AI', desc: 'Menggunakan embeddings dokumen dengan ChromaDB dan LLM untuk memastikan kutipan pasal akurat', tag: 'Basis Pengetahuan' }
      ]
    },
    applications: [
      { name: 'Caltax Master Service', url: 'https://master-caltax-dev.cetta.tech/' },
      { name: 'Caltax User Service', url: 'https://user-caltax-dev.cetta.tech/' },
      { name: 'Caltax Tax Service', url: 'https://tax-caltax-dev.cetta.tech/' },
      { name: 'Caltax AI Service', url: 'https://ai-caltax-dev.cetta.tech/' }
    ],
    imageUrl: '/assets/projects/caltax-login.png',
    screenshots: [
      {
        title: 'Caltax Login',
        url: '/assets/projects/caltax-login.png',
        caption: 'Autentikasi pengguna untuk mengakses aplikasi Caltax dan berbagai fitur perpajakan'
      },
      {
        title: 'Caltax Dashboard',
        url: '/assets/projects/caltax-dashboard.png',
        caption: 'Dashboard utama yang menyediakan akses ke kalkulator pajak, AI Assistant, dan berbagai fitur aplikasi'
      },
      {
        title: 'Caltax AI Chat',
        url: '/assets/projects/caltax-ai-chat.png',
        caption: 'Asisten chat berbasis AI untuk menjawab pertanyaan perpajakan dan mengambil informasi dari regulasi pajak Indonesia yang relevan'
      },
      {
        title: 'AI Service — FastAPI & Swagger',
        url: '/assets/projects/caltax-ai-service.png',
        caption: 'Layanan AI berbasis FastAPI dengan dokumentasi Swagger untuk menguji dan mengelola endpoint API terkait layanan AI'
      }
    ],
    downloads: {
      primary: { label: 'Unduh Spek Arsitektur Caltax (.md)', type: 'spec' },
      secondary: { label: 'Unduh Topologi Microservices (.json)', type: 'code' }
    },
    featured: true
  },
  {
    id: 'saas-pos-umkm',
    title: 'SaaS POS UMKM (Platform Kasir Digital)',
    subtitle: 'Solusi Point of Sale cloud-native untuk mendigitalkan transaksi dan inventaris warung, angkringan, dan UMKM kuliner',
    category: 'website',
    flag: 'Website',
    badge: 'Cloud SaaS & POS',
    status: 'Dalam Pengembangan Aktif',
    businessPurpose: 'Sistem Point of Sale berbasis SaaS yang ditujukan untuk warung, angkringan, kedai, dan restoran kecil yang sebelumnya masih mengandalkan pencatatan nota kertas manual.',
    role: ['Pengembang Full-Stack', 'Pengembangan Produk'],
    problem: 'Pengusaha kuliner skala mikro seringkali mengalami kebocoran pencatatan omzet, ketidaksesuaian stok, dan pembukuan manual yang melelahkan karena masih mengandalkan buku tulis kertas dan nota manual.',
    solution: 'Membangun aplikasi web POS SaaS modern dan mudah diakses dengan antarmuka kasir layar sentuh yang intuitif, pencatatan penjualan langsung, serta katalog menu/stok yang dapat diakses di ponsel ekonomis maupun laptop.',
    technicalChallenges: [
      'Merancang antarmuka kasir yang sangat responsif dan intuitif untuk ritme transaksi counter yang cepat',
      'Menyusun isolasi data multi-tenant yang aman untuk masing-masing pemilik usaha warung',
      'Menerapkan caching transaksi yang ramah koneksi terbatas dan pembuatan bukti struk yang cepat'
    ],
    keyContributions: [
      'Mengembangkan aplikasi web POS berbasis SaaS yang ditargetkan untuk operasional UMKM kuliner',
      'Merancang alur transaksi kasir yang intuitif, pemilihan varian menu, dan pencatatan pembayaran',
      'Membangun endpoint REST API untuk manajemen katalog, pelaporan penjualan harian, dan riwayat pesanan',
      'Melakukan deployment prototipe aplikasi live di Vercel untuk uji coba user dan iterasi produk'
    ],
    metrics: [
      { label: 'Target Sasaran', value: 'UMKM Kuliner', desc: 'Warung, angkringan, dan kedai' },
      { label: 'Dampak Nyata', value: 'Paperless', desc: 'Pencatatan kasir dan struk digital' },
      { label: 'Tipe Platform', value: 'Cloud SaaS', desc: 'Arsitektur web multi-tenant' },
      { label: 'Status Proyek', value: 'Pengembangan', desc: 'Prototipe live di Vercel' }
    ],
    stack: ['ReactJS', 'Typescript', 'TailwindCSS', 'ExpressJS', 'Supabase', 'Vite'],
    architecture: {
      flowDescription: 'Platform SaaS POS mendigitalkan operasional penjualan harian pelaku UMKM kuliner melalui aplikasi web yang terpusat dan responsif.',
      steps: [
        { title: 'Antarmuka Kasir POS', desc: 'Antarmuka kasir untuk input pesanan cepat, pemilihan item, dan kalkulasi pembayaran', tag: 'Frontend' },
        { title: 'API Data Usaha', desc: 'Mengelola data menu, kategori, harga, dan transaksi operasional melalui REST API', tag: 'API' },
        { title: 'Platform Cloud SaaS', desc: 'Menyediakan layanan web terpusat yang dapat diakses dari berbagai browser atau smartphone', tag: 'Cloud' }
      ]
    },
    liveUrl: 'https://saas-pos-umkm.vercel.app/',
    imageUrl: '/assets/projects/pos-login.png',
    screenshots: [
      {
        'title': 'POS UMKM Authentication',
        'url': '/assets/projects/pos-login.png',
        'caption': 'User authentication for secure access to the POS platform and business management features'
      },
      {
        'title': 'POS UMKM Dashboard',
        'url': '/assets/projects/pos-dashboard.png',
        'caption': 'Centralized dashboard for accessing POS features and monitoring business activities'
      }
    ],
    downloads: {
      primary: { label: 'Unduh Spek Sistem POS (.md)', type: 'spec' },
      secondary: { label: 'Unduh Blueprint Produk (.json)', type: 'code' }
    },
    featured: true
  },
  {
    id: 'sukavillage-platform',
    title: 'Suka Village Hospitality & Destination Platform',
    subtitle: 'Platform hospitality digital komprehensif yang menampilkan akomodasi villa, kuliner restoran, aktivitas luar ruang, dan reservasi event privat',
    category: 'website',
    flag: 'Website',
    badge: 'Web Full-Stack',
    status: 'Dalam Pengembangan Aktif',
    businessPurpose: 'Platform digital untuk memperkenalkan Suka Village sebagai destinasi hospitality unggulan yang menyediakan akomodasi villa, restoran kuliner, aktivitas rekreasi, serta paket event (wedding, gathering perusahaan, dan retret keluarga).',
    role: ['Project Lead', 'Pengembang Full-Stack'],
    problem: 'Suka Village membutuhkan kehadiran digital yang elegan dan modern untuk menyatukan katalog vila penginapan, menu kuliner restoran, pilihan aktivitas wisata, dan konsultasi event ke dalam satu wadah web yang memikat.',
    solution: 'Merancang dan membangun platform web full-stack menggunakan Vue.js untuk antarmuka interaktif dan Express.js untuk backend REST API, dilengkapi katalog atraktif dan formulir pengajuan pemesanan.',
    technicalChallenges: [
      'Menyusun hierarki konten yang kaya meliputi vila akomodasi, restoran, aktivitas outdoor, dan event',
      'Memastikan pengiriman aset media visual tetap ringan dan transisi komponen mulus di perangkat seluler',
      'Merancang API backend yang fleksibel dan siap untuk integrasi sistem booking dan pembayaran langsung'
    ],
    keyContributions: [
      'Mengembangkan aplikasi frontend menggunakan Vue.js dengan arsitektur berbasis komponen',
      'Membangun layanan backend dan REST API dengan Express.js untuk distribusi konten destinasi',
      'Merancang tata letak responsif untuk katalog vila, menu kuliner, dan paket acara',
      'Melakukan deployment build pratinjau dan produksi di Vercel untuk evaluasi pemangku kepentingan'
    ],
    metrics: [
      { label: 'Stack Frontend', value: 'Vue.js', desc: 'Klien berbasis komponen dinamis' },
      { label: 'API Backend', value: 'Express.js', desc: 'Layanan REST yang ringan dan cepat' },
      { label: 'Cakupan Destinasi', value: 'Hospitality', desc: 'Penginapan, kuliner, dan event retret' },
      { label: 'Status Proyek', value: 'Pengembangan', desc: 'Showcase web live di Vercel' }
    ],
    stack: ['ReactJS', 'Typescript', 'TailwindCSS', 'ExpressJS', 'Supabase', 'Vite'],
    architecture: {
      flowDescription: 'Platform Suka Village menggunakan arsitektur full-stack dengan frontend Vue.js yang berkomunikasi dengan backend Express.js melalui REST API untuk menyajikan katalog destinasi interaktif.',
      steps: [
        { title: 'Frontend Vue.js', desc: 'Menyediakan website interaktif yang menampilkan info akomodasi, menu resto, aktivitas, dan paket acara', tag: 'Frontend' },
        { title: 'Backend Express.js', desc: 'Menyediakan layanan backend dan REST API untuk konten destinasi dan alur formulir reservasi', tag: 'Backend' },
        { title: 'Gateway REST API', desc: 'Menghubungkan komponen antarmuka dengan layanan backend dan data terstruktur', tag: 'API' }
      ]
    },
    liveUrl: 'https://sukavillage-v7.vercel.app/',
    imageUrl: '/assets/projects/sukavillage.png',
    screenshots: [
      { title: 'Katalog Villa & Akomodasi Eksklusif', url: '/assets/projects/sukavillage-villa.png', caption: 'Galeri visual penginapan dengan detail fasilitas, kapasitas tamu, dan harga sewa' },
      { title: 'Menu Kuliner Restoran & Aktivitas Outdoor', url: '/assets/projects/sukavillage-dine.png', caption: 'Daftar sajian khas kuliner dan paket rekreasi outbound keluarga atau gathering perusahaan' },
      { title: 'Formulir Reservasi Event & Kontak Pengelola', url: '/assets/projects/sukavillage-reserve.png', caption: 'Alur pengajuan booking tempat dan konsultasi acara privat' }
    ],
    downloads: {
      primary: { label: 'Unduh Spek Suka Village (.md)', type: 'spec' },
      secondary: { label: 'Unduh Skema Platform (.json)', type: 'code' }
    },
    featured: false
  }
];
