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


# Chai
## Jest Expect
- Saat kita menggunakan Expect di Vitest, cara penggunaannya mirip dengan di Jest Expect
- Namun, selain kompatibel dengan Jest Expect, Vitest juga menggunakan library Chai untuk fitur Expect


## Chai
- Chai adalah test assertions yang populer, karena penggunaannya sangat mudah dan mudah untuk dibaca juga
- [https://www.chaijs.com/](https://www.chaijs.com/)
- Chai memiliki fitur expect dan juga assert, dan kita bisa import dari package vitest, dan secara otomatis kita bisa menggunakan fitur expect dan assert Chai
- [https://www.chaijs.com/api/bdd/](https://www.chaijs.com/api/bdd/)
- [https://www.chaijs.com/api/assert/](https://www.chaijs.com/api/assert/)

contoh di file:
- [tests/chai.test.ts](tests/chai.test.ts)


# Mocking
## Mocking
- Di materi Jest, kita sudah bahas tentang Mocking, yaitu membuat object tiruan / palsu, sehingga memudahkan ketika kita mau melakukan test interaksi dengan object lain
- Vitest juga mendukung Mocking
- Vitest Mocking penggunaannya kompatibel dengan penggunakan Jest Mocking, sehingga kita bisa melakukan Mock Function, Mock Module dan Mock Class, seperti yang sudah dibahas di kelas NodeJS Unit Test


contoh di file:
- [tests/mock.test.ts](tests/mock.test.ts)

# Benchmarking
## Benchmarking
- Salah satu fitur yang menarik di Vitest adalah, Benchmarking
- Benchmarking adalah melakukan performance test terhadap kode yang kita buat
- Benchmarking bisa digunakan untuk menjalankan kode kita berulang kali, sehingga kita bisa melihat performa kecepatan dari kode yang sudah kita buat
- Untuk membuat benchmark, kita harus menggunakan format file dengan akhiran .bench.ts/js atau .benchmark.js/ts
- Dan untuk menjalankan Benchmarking, kita harus menggunakan perintah :
```bash
npx vitest bench --run namafile
```
- PERLU DIINGAT, fitur Benchmarking masih experimental, jadi bisa dimungkinkan kedepannya akan berubah

contoh di file:
- [vitest.config.js](vitest.config.js)
- [tests/sayHello.bench.ts](tests/sayHello.bench.ts)



# Coverage
## Coverage
- Sama seperti di Jest, Vitest juga memiliki fitur Coverage untuk mendeteksi Coverage Unit Test yang sudah kita buat
- Dengan begitu kita bisa lihat kode mana yang belum ter-cover oleh Unit Test yang sudah kita buat
- Vitest support library V8 atau Istambul sebagai library untuk melakukan Code Coverage
- [https://v8.dev/blog/javascript-code-coverage](https://v8.dev/blog/javascript-code-coverage)
- [https://istanbul.js.org/](https://istanbul.js.org/)
- Kita bisa memilih library apa yang mau kita gunakan pada file konfigurasi, namun secara default yang dipilih adalah V8
- Untuk melakukan Code Coverage tambahkan --coverage ketika menjalankan vitest, misal :
```bash
npx vitest --run --coverage namafile
```

contoh di file:
- [vitest.config.js](vitest.config.js)
- [src/scripts/sayHello.ts](src/scripts/sayHello.ts)
- [tests/coverage.test.ts](tests/coverage.test.ts)


# Vitest UI
## Vitest UI
- Salah satu fitur menarik di Vitest adalah Vitest UI
- Vitest UI adalah Web Dashboard untuk memonitor Unit Test yang kita buat, mana yang sukses , mana yang gagal
- Kita juga bisa menjalankan Unit Test melalui web yang sudah disediakan oleh Vitest UI
- Kita bisa menjalankan Vitest UI ketika menjalankan Vitest dengan tambahkan parameter --ui, misal :
```bash
npx vitest --ui
```

