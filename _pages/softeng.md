---
layout: page-with-toc
title: Software Engineering
description: Software engineering concepts, software development lifecyle and all related process
permalink: /softeng/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/softeng.md
---
# Software Testing

- Bagian dari software development lifecycle untuk memastikan sistem/software berjalan tanpa ada masalah dengan mengetahui sumber masalah lebih awal dengan melakukan testing

## Software Testing Lifecycle

![](../assets/images/lectures/softeng_20260821-143629.png)

### Requirement Analysis

- Mengumpulkan informasi mengenai software, document terkait software, dan informasi seperti functional dan non-functional requirements
- Identifikasi dan verifikasi ambigu yang ada agar testing terarah, bertanya ke product manager, developer, stakeholder untuk mengumpulkan informasi

### Test Planning

- Definisikan tujuan dan scope testing, urutan prioritasnya, strategy untuk melakukan testing, technique-technique-nya, dan kita akan melakukan testing menggunakan apa, tools-nya, apakah automated atau manual
- Definisikan kriteria seperti input dan output, estimasi waktu eksekusi testing, cost-nya, resources requirement

## Testing Technique

### White Box Testing

- Pengujian dengan memiliki akses/melihat source code atau dilakukan untuk memeriksa struktur logika dan code internal

### Black Box Testing

- Pengujian dilakukan terhadap fungsionalitas luar sistem, berdasarkan input dan output tanpa melihat alur logika dan tanpa melihat kode

### Gray Box Testing

- Tester memiliki sebagian informasi atas sistem dan kode sistem, tapi mengetes dari perspektif user (fungsionalitas sistem, black box testing)
- Kombinasi white box dan black box

## Testing Purposes

### Functional Testing

#### Unit Testing

- Testing individual function, class, module, secara isolated (masing-masing).
- Digunakan untuk memeriksa masalah di tahap development

#### Integration Testing

- Memverifikasi modul yang digabungkan/bekerja bersama dapat bekerja dengan baik
- Memastikan integrasi dan komunikasi antar modul/services berjalan

#### System Testing

- Test keseluruhan aplikasi/sistem secara lengkap, verifikasi seluruh fungsionalitas dari sistem/aplikasi

#### User Acceptance Test (UAT)

- Dilakukan oleh user/stakeholder untuk memastikan software/sistem berjalan sesuai dengan proses bisnis yang diharapkan.
- Biasanya final testing sebelum deployment

#### Smoke Testing

- Pengujian terhadap functional paling penting/critical functionality
- Dilakukan untuk memastikan aplikasi cukup bagus untuk melanjutkan testing di tahap selanjutnya

#### Sanity Testing

- Pemeriksaan terhadap fungsionalitas terhadap perubahan yang sudah diterapkan
- Memastikan tidak ada error/bug setelah code change pada fungsionalitas yang diubah

#### Regression Testing

- Regression (software engineering): fitur yang sebelumnya bekerja dengan benar menjadi rusak setelah terjadi perubahan pada software
- Regression testing: pengujian untuk memastikan perubahan baru tidak membuat functionality yang sebelumnya benar menjadi rusak
- Perbedaan dengan sanity: sanity memeriksa fitur yang memang diubah/mengalami code change, regression memeriksa sistem secara keseluruhan/fitur lain yang tidak kena langsung code change

#### API Testing

- Pemeriksaan API

#### Interface Testing

- Pemeriksaan terhadap interaksi terhadap sistem/fitur/interface lain
- Memastikan data exchange berjalan dengan baik antar-interface

### Non-Functional Testing

#### Performance Testing

- Memeriksa performa, kecepatan, responsiveness dan stabiliitas sistem di bawah workload/beban yang berbeda-beda

#### Usability Testing

- Memastikan seberapa mudah dan intuitif aplikasi
- Digunakan untuk memeriksa user experience dan expectation

#### Security Testing

- 

#### Reliability Testing

- 

#### Compatibility Testing

- Memastikan sistem berjalan di berbagai lingkungan penggunaan seperti browser, perangkat, OS berbeda

### Performance Testing

#### Load Testing

- Memeriksa sistem ketika bekerja di bawah tekanan/beban normal
- Memeriksa apakah ada bottleneck atau penurunan performance sebelum masuk ke testing yang lebih berat

#### Stress Test

- Memeriksa sistem ketika bekerja di bawah tekanan/beban berat (bahkan sampai limit) untuk memeriksa batas/breaking points



## Deployment/Rollout Testing

- Testing yang dilakukan terhadap release software secara aman, yaitu dengan melakukan release bertahap terhadap sebagian users terlebih dahulu, instead of release software ke semua orang secara sekaigus, supaya jika terjadi error/unwanted accident di versi yang baru, tidak semua orang akan terkena masalah ini sekaligus

![](../assets/images/lectures/softeng_20260821-141950.png)


### Blue-Green Strategy

- Kita mempersiapkan dua buah environment, yaitu environment blue dan environment green. Keduanya berjalan bersamaan dan selalu aktif. Misalkan env blue adalah env versi terbaru, maka ketika saat ini sistem masih berjalan di env green, env blue akan mulai dijalankan dan di-testing untuk memastikan seluruh env berjalan baik dan tanpa masalah
- Kemudian sistem dapat secara langsung mengganti environment live mereka ke env blue sekaligus, sementara env green yang merupakan env lama tetap idle supaya jika terjadi masalah di env blue, akan langsung di-switch ke env lama di env green
- Strategi ini disebut sebagai zero downtime strategy, karena kita ingin update env secara sekaligus tanpa downtime, tapi jika terjadi masalah langsung bisa switch/balik lagi ke env lama
- Bagus digunakan jika kita ingin downtime rendah, tapi masalahnya biaya resource sangat tinggi karena harus maintain 2 live env

### Canary Testing

- Sama seperti canary application, akan ada grup khusus bagi sejumlah user dalam ukuran kecil yang terdaftar sebagai user canary. User ini akan mendapatkan fitur terbaru dan dites di mereka sebelum akhirnya dites ke jumlah user yang lebih besar.
- Jika ada masalah di user canary, maka user yang terdampak hanya sedikit dan bisa diatasi di tingkat canary tersebut (tidak banyak user jadi korban)
- Tujuannya adalah menghindari problem terhadap jumlah user yang besar, sehingga masalah dapat dideteksi lebih awal terhadap sekelompok kecil user

### A/B Testing

- Seperti blue-green strategy, dua buah env: env A dan env B (bisa lebih) akan dijalankan secara bersamaan tapi untuk kelompok user yang berbeda. User A mendapatkan env A, dan user B akan mendapatkan env B. Kemudian developer akan membandingkan performa dan juga keberjalanan env A terhadap user A dan env B terhadap user B
- Metode ini digunakan untuk membandingkan/mendapatkan metrik mengenai bagaimana env A dan env B (atau fitur A dan fitur B) terhadap live user, bukan untuk memeriksa apakah sistem berjalan aman tanpa error