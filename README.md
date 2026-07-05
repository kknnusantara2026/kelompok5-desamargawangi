# KKN Desa Margawangi — Website

Situs statis sederhana untuk KKN Desa Margawangi.

## Membuka secara lokal
- Dengan Python 3:

```bash
python -m http.server 8000
```

- Dengan Node (http-server):

```bash
npx http-server -c-1 . -p 8000
```

Buka http://localhost:8000 di browser.

## Deploy ke GitHub Pages (opsi cepat)
1. Push repo ke GitHub pada branch `main` atau `gh-pages`.
2. Di settings repository → Pages, pilih branch `main` (root) atau `gh-pages`.
3. Simpan. Halaman akan tersedia di `https://<user>.github.io/<repo>/`.

(Opsi: gunakan action GitHub Pages atau gh-pages untuk deployment otomatis.)

## Catatan pengembangan
- Struktur aset:
  - CSS: `css/`
  - JS: `js/`
  - Gambar: `img/` (saat ini hanya `.gitkeep` — tambahkan logo, favicon, hero image)
- Halaman utama: `index.html`, `about.html`, `galeri.html`, `artikel.html`, `kontak.html`, `profile-desa.html`, `program-kerja.html`.
- Beberapa skrip adalah stub dan akan diisi bertahap (`js/script.js`, `js/gallery.js`, `js/animation.js`).

Jika mau, saya bisa:
- Menambahkan placeholder logo & favicon SVG di `img/`.
- Menyuntikkan small accessibility/meta improvements ke HTML.
- Menambahkan GitHub Actions workflow untuk Pages.

Sebutkan tindakan mana yang Anda inginkan selanjutnya.