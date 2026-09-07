# Campus Event Hub

Repository untuk tugas Pertemuan 2 — Manajemen GitHub & Prinsip CI
(Evolusi & Konstruksi Perangkat Lunak, 2026).

Campus Event Hub adalah aplikasi web sederhana berbasis HTML, CSS, dan JavaScript
yang digunakan untuk menampilkan dan mendaftarkan pengguna pada event kampus.

## Aplikasi

Aplikasi ini merupakan web statis sehingga dapat dijalankan langsung melalui browser
atau menggunakan Live Server.

| Berkas | Isi |
| --- | --- |
| `index.html` | Halaman utama aplikasi |
| `events.html` | Halaman daftar event |
| `register.html` | Halaman formulir pendaftaran |
| `style.css` | Tampilan dan styling aplikasi |
| `script.js` | Logika pencarian dan filter kategori |

## Fitur

- Menampilkan daftar event kampus
- Pencarian event
- Filter event berdasarkan kategori
- Formulir pendaftaran event
- Validasi data pendaftaran

## Menjalankan Aplikasi

Aplikasi dapat dijalankan dengan membuka `index.html` menggunakan browser
atau menggunakan Live Server.

## Alur Branch

Kode tidak pernah dikembangkan langsung pada `main`.

```text
feature/<sesuatu> → dev → main
      kerja       integrasi  rilis