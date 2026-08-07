---
layout: page-with-toc
title: Tools
description: "List of useful tools. Beware of virus or malicious contents"
permalink: "/tools/"  
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/tools.md
---
# Basic
## Perkenalan

- Java adalah bahasa pemrograman berorientasi objek, jadi semua hal di Java adalah sekumpulan kelas dan object
- Strongly typed: tipe data enforced, tidak bisa dimodifikasi dan tidak ada konversi langsung/otomatis, hanya bisa beroperasi sesuai tipe data yang benar-benar sesuai.
- Portable, selama perangkat memiliki JVM (Java Virtual Machine), program Java dapat berjalan
- Mendukung multithreading
- Memiliki Java garbage collection, sehingga memory management dilakukan secara otomatis oleh Java
### Java Garbage Collection

- Pada bahasa pemrograman C dan C++, setiap variabel yang digunakan dapat dialokasikan secara manual ataupun otomatis. Jika kita melakukannya secara manual, kita perlu manage memory tersebut agar dapat di-free ketika tidak digunakan lagi. Free unused memory ini dilakukan agar memory tidak penuh dan dapat digunakan oleh data/proses lain
- **Java garbage collector** adalah sebuah thread berprioritas rendah untuk memusnahkan objek yang sudah tidak digunakan (dengan cara mengembalikan ke pool memory)
- **Java interpreter** memeriksa apakah objek di memori masih diacu atau digunakan oleh program, jika tidak, maka object akan dimusnahkan
- Java garbage collector berjalan sebagai thread yang berprioritas rendah dan melakukan kerja saat tidak ada kerja lain di program, misalnya ketika idle menunggu input dari user.
- Tapi jika kekurangan memori, garbage collector akan bekerja dengan prioritas tinggi, tapi ini jarang kejadian karena biasanyah thread prioritas rendah juga sudah solve masalah

## Variabel dan Tipe Data

- Inisialisasi variabel menggunakan format:
```java
tipeVariabel data = value;
```
- Jika inisialisasi variabel berasal dari kelas, maka inisialisasi dilakukan dalam bentuk:
```java
tipeVariabel data = new constructor(value);
```
- Inisialisasi variabel bisa tidak menggunakan initial value juga
```java
tipeVariabel data;
float x;
x = 12.45;
```
- Penulisan nama variabel, fungsi menggunakan camelCase.
- Konstanta (variabel final yang tidak bisa diubah) bisa diinisialisasi dengan menambahkan keyword `final` sebelum inisialisasi. Tapi inisialisasi tidak bisa dipisah dengan 
```java
final int x = 12;
```