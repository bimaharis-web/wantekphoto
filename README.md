# Wantek Photo Portfolio

Website portofolio fotografi Wantek Photo, dibuat dengan React, TypeScript,
Vite, dan Tailwind CSS.

## Fitur

- Galeri dengan enam karya untuk kategori Beauty, Portrait, dan Product
- Filter kategori serta lightbox untuk melihat foto
- Halaman Blog di `/blog/` dengan artikel tentang fotografi
- Layout responsif untuk desktop dan perangkat mobile
- Tautan Instagram [@wantekphoto](https://www.instagram.com/wantekphoto/)
- Kontak WhatsApp [0853-7008-0083](https://wa.me/6285370080083)

## Menjalankan Secara Lokal

Pastikan Node.js dan pnpm tersedia.

```bash
pnpm install
pnpm dev
```

Buka URL lokal yang ditampilkan Vite di terminal.

## Memeriksa dan Build

```bash
pnpm typecheck
pnpm build
pnpm preview
```

Build production tersedia di direktori `dist/`. Halaman utama dan `/blog/`
dibuat sebagai entry HTML terpisah agar keduanya dapat dimuat langsung.

## GitHub Pages

Konfigurasi Vite otomatis memakai nama repository sebagai base path saat
dijalankan di GitHub Actions. Untuk build manual untuk project site GitHub
Pages, set base path sesuai nama repository:

```bash
VITE_BASE_PATH=/nama-repository/ pnpm build
```

Untuk custom domain atau root domain GitHub Pages, base path adalah `/`.
Jika build berjalan melalui GitHub Actions, tetapkan `VITE_BASE_PATH=/` pada
environment workflow untuk menggunakan base path tersebut.
