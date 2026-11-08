# Vitest
[https://docs.google.com/presentation/d/1c0D8SAtrsh3eQIe7E_anYStCxj6KPJWodaZxxVyC7-E/edit](https://docs.google.com/presentation/d/1c0D8SAtrsh3eQIe7E_anYStCxj6KPJWodaZxxVyC7-E/edit)



# Pengenalan Vitest
## Pengenalan Vitest
- Vitest adalah unit test framework yang sangat cepat yang dipersembahkan oleh Vite
- Vitest mirip dengan unit test framework lainnya, seperti Jest, Mocha, dan lain-lain
- Vitest secara default mendukung JavaScript Module
- Vitest juga terintegrasi dengan baik dengan TypeScript
- [https://vitest.dev/](https://vitest.dev/)

## Kenapa Vitest
- Vitest sangat cepat, mendukung parallel testing, sehingga bisa menjalankan unit test dengan sangat cepat
- Compatible dengan Jest, sehingga kita tidak perlu belajar lagi jika sudah terbiasa menggunakan Jest
- Vitest sangat ringan, dan sangat berhati-hati ketika menambahkan dependency, agar tetap cepat
- Terintegrasi baik dengan Vite

# Membuat Project
## Membuat Project
```bash
npm create vite@latest
```

## Menambah Vitest
```bash
npm install --save-dev vitest
```

# Menjalankan Unit Test
## Default Configuration
- Secara default, kita tidak butuh menambahkan konfigurasi apapun ketika menggunakan Vitest
- Setelah menginstall Vitest, kita bisa langsung menggunakan Vitest untuk menjalankan file unit test
- Sama seperti Jest, Vitest secara default akan menjalankan unit test untuk file dengan akhiran test.js/ts atau spec.js/ts
- Untuk menjalankan unit test menggunakan Vitest, kita bisa menggunakan perintah :
```bash
npx vitest --run nama/file.test.js
```

## Watch Mode
- Vitest memiliki fitur Watch Mode, yaitu bisa mendeteksi perubahan yang terjadi pada file Unit Test, dan secara otomatis akan menjalankan unit test ulang
- Kita bisa menggunakan perintah berikut untuk menjalankan Vitest dalam Watch Mode :
```bash
npx vitest
```

contoh di file:
- [tests/sample.test.ts](tests/sample.test.ts)

# Configuration
## Configuration
- Walaupun Vitest tidak butuh konfigurasi file untuk digunakan secara default
- Namun kadang kita ingin menambahkan konfigurasi yang berbeda dari default nya
- Kita bisa tambahkan file vitest.config.js
- Semua konfigurasi yang bisa kita lakukan, bisa kita lihat di halaman ini :
- [https://vitest.dev/config/](https://vitest.dev/config/)

contoh di file:
- [vitest.config.js](vitest.config.js)

# Jest Compatible
## Jest Compatible
- API yang dibuat Vitest kompatibel dengan API Jest, dengan begitu untuk menggunakan Vitest, sama seperti kita menggunakan Jest
- Namun pada kode sebelumnya, kita melakukan import describe, it, dan expect dari package Vitest, sedangkan di Jest, secara default function-function tersebut sudah terdaftar di global scope
- Kita juga bisa melakukan hal yang sama dengan mengubah konfigurasi dari Vitest

## Fitur Jest Lainnya
- Hampir semua fitur Jest didukung oleh Vitest, dan cara penggunaannya sama, seperti
- Timeout pada Test Function
- Concurrent Test
- Skip Test
- Dan lain-lain


contoh di file:
- [vitest.config.js](vitest.config.js)
- [tests/global.test.js](tests/global.test.js)


# Multi-Threading
## Multi-Threading
- Secara default, Vitest menjalankan unit test menggunakan multi thread, dimana unit test akan dijalankan pada Worker Thread, berbeda dari Thread utama
- Walaupun dijalankan di Worker Thread yang berbeda, namun tetap secara default Vitest akan menjalankan unit test satu per satu, karena kebanyakan programmer membuat unit test yang sequential
- Namun, pada kasus jika kita tidak butuh berjalan secara sequential, kita bisa gunakan fitur Concurrent Test seperti di Jest

contoh di file:
- [tests/slow.test.ts](tests/slow.test.ts)
