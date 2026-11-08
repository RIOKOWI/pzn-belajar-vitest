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
