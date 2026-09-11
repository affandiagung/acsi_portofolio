# Folder Asset Gambar Proyek (Project Assets)

Folder ini digunakan untuk menyimpan seluruh file gambar (screenshot, diagram arsitektur, mockup, atau logo) dari proyek portofolio Anda.

---

## 🚀 Cara Penggunaan:

### 1. Salin / Upload Gambar ke Folder Ini
Letakkan gambar proyek Anda di dalam folder:
`public/assets/projects/`

Contoh nama file:
- `bakti-oss.png` (atau `.jpg`, `.webp`)
- `job-portal-app.png`
- `gos-attendance.png`
- `egateway-cems.png`
- `dashboard-pemantauan-udara.png`
- `trusur-erp.png`
- `dashboard-aqms-legacy.png`
- `efs-aqms-edge.png`
- `caltax-platform.png`
- `saas-pos-umkm.png`
- `sukavillage-platform.png`

---

### 2. Hubungkan ke Data JSON atau Kode

Anda cukup mengisi kolom `"imageUrl"` dengan path:
```json
"/assets/projects/nama-file-gambar.png"
```

#### A. Mengubah Langsung Melalui Admin Panel (UI Web):
1. Buka Admin Panel di aplikasi (ikon Gear di pojok kanan atas atau via menu).
2. Pilih tab **Projects**.
3. Klik tombol **Edit** pada proyek yang ingin diubah gambarnya.
4. Isi kolom **Image URL / Asset Path** dengan:
   `/assets/projects/nama-file-gambar.png`
5. Klik **Save Changes**.

#### B. Mengubah Melalui Raw JSON Editor (atau File JSON Export):
1. Di Admin Panel, buka tab **Raw JSON Editor** (atau file JSON yang Anda simpan).
2. Cari proyek yang ingin diganti gambarnya:
```json
{
  "id": "bakti-oss",
  "title": "BAKTI OSS Monitoring & Analytical Platform",
  "imageUrl": "/assets/projects/bakti-oss.png",
  ...
}
```
3. Klik **Apply & Save JSON**.

#### C. Mengubah Melalui File Kode Sumber:
- Untuk Bahasa Indonesia: `src/data/projectsId.ts`
- Untuk Bahasa Inggris: `src/data/projectsEn.ts`
Cari baris `imageUrl:` dan ganti dengan:
```ts
imageUrl: '/assets/projects/bakti-oss.png',
```

---

## 💡 Tips:
- Resolusi yang direkomendasikan: Rasio **16:9** (misalnya `1280x720` atau `1920x1080`).
- Format yang didukung: `.png`, `.jpg`, `.jpeg`, `.webp`, `.svg`.
- Vite secara otomatis melayani file yang berada di dalam folder `/public` langsung dari root URL (`/assets/projects/...`), sehingga path relatif ini langsung berfungsi saat dijalankan baik di mode development maupun setelah di-build ke production.
