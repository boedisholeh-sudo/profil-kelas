# Profil Kelas XII IPA 1

Website profil kelas statis untuk menyimpan cerita, struktur organisasi, daftar siswa, dan profil anggota kelas XII IPA 1.

## Halaman

- `index.html` - halaman utama
- `tentang.html` - cerita dan foto kelas
- `struktur.html` - struktur organisasi kelas
- `galeri.html` - daftar siswa dan modal profil

## Mengubah data siswa

Semua data profil siswa berada di `data-siswa.js`. Edit `city`, `instagram`, `quote`, atau `photo` di file tersebut.

Contoh:

```js
Galih: {
    city: 'Bandung',
    instagram: 'galihardiansyahh',
    quote: 'Tetap semangat.',
    photo: 'assets/foto-siswa/galih.jpg'
}
```

Username Instagram tidak perlu diawali `@`. Website akan membuat link Instagram otomatis.

## Menambah foto

Simpan foto di `assets/foto-siswa/`, lalu tulis path-nya pada properti `photo` di `data-siswa.js`. Gunakan nama file sederhana dengan satu ekstensi, misalnya `nama.jpg`.

## Menjalankan lokal

Buka `index.html` langsung di browser, atau gunakan ekstensi Live Server di VS Code. Tidak ada proses build atau dependency lokal yang diperlukan.

## Catatan

Font dan ikon dimuat dari Google Fonts serta Font Awesome CDN. Foto kelas digunakan sebagai background lokal agar homepage tetap personal dan tidak bergantung pada foto stok eksternal.
