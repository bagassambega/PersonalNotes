---
layout: page-with-toc
title: Java
description: Java programming language notes
permalink: /java/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/java.md
---

# Perkenalan

- Java adalah bahasa pemrograman berorientasi objek, jadi semua hal di Java adalah sekumpulan kelas dan object
- Strongly typed: tipe data enforced, tidak bisa dimodifikasi dan tidak ada konversi langsung/otomatis, hanya bisa beroperasi sesuai tipe data yang benar-benar sesuai.
- Portable, selama perangkat memiliki JVM (Java Virtual Machine), program Java dapat berjalan
- Mendukung multithreading
- Memiliki Java garbage collection, sehingga memory management dilakukan secara otomatis oleh Java
## Java Garbage Collection

- Pada bahasa pemrograman C dan C++, setiap variabel yang digunakan dapat dialokasikan secara manual ataupun otomatis. Jika kita melakukannya secara manual, kita perlu manage memory tersebut agar dapat di-free ketika tidak digunakan lagi. Free unused memory ini dilakukan agar memory tidak penuh dan dapat digunakan oleh data/proses lain
- **Java garbage collector** adalah sebuah thread berprioritas rendah untuk memusnahkan objek yang sudah tidak digunakan (dengan cara mengembalikan ke pool memory)
- **Java interpreter** memeriksa apakah objek di memori masih diacu atau digunakan oleh program, jika tidak, maka object akan dimusnahkan
- Java garbage collector berjalan sebagai thread yang berprioritas rendah dan melakukan kerja saat tidak ada kerja lain di program, misalnya ketika idle menunggu input dari user.
- Tapi jika kekurangan memori, garbage collector akan bekerja dengan prioritas tinggi, tapi ini jarang kejadian karena biasanyah thread prioritas rendah juga sudah solve masalah

# Variabel dan Tipe Data

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
## Tipe Data

- Integer: bilangan bulat
- Float: bilangan desimal
- Char: karakter (misalkan 'A' atau '@')
- Double: float dengan kapasitas lebih besar
- String: kumpulan karakter yang berbentuk teks
- Boolean: True/False
## Konstanta

- Konstanta (variabel final yang tidak bisa diubah) bisa diinisialisasi dengan menambahkan keyword `final` sebelum nama variabel.

```java
final int x = 12;
```

- Di Java, `final` variable memiliki satu kesempatan assignment. Jadi misalkan kita inisialisasi variabel final, tapi belum isi nilainya, itu tidak apa-apa, selama nanti di akhirnya pasti diinisialisasi

```java
// Valid
final int x;
x = 10;

// Valid, karena bagaimanapun kondisinya, x akan selalu di-assign
final int x;
if (condition) {
    x = 10;
} else {
    x = 20;
}

// Valid, karena tetap ada kesempatan untuk menginisialisasi isi dari name ketika object di-construct, dan itu pasti terjadi (name pasti diisi ketika inisialisasi object User)
class User {
    private final String name;

    public User(String name) {
        this.name = name;
    }
}

// Valid, multiple constructor, semua inisialisasi name
class User {
    private final String name;

    public User() {
        name = "Anonymous";
    }

    public User(String name) {
        this.name = name;
    }
}

// Valid, meskipun ada constructor chaining, tapi name tetap pasti diisi
class User {
    private final String name;

    public User() {
        this("Anonymous");
    }

    public User(String name) {
        this.name = name;
    }
}

// Jika property final bersifat static di class, harus diinisialisasi secara static juga, tidak bisa lewat object instantiation. Hal ini akan dijalankan ketika class diinisialisasi oleh JVM
class Config {
    static final int MAX_CONNECTIONS;

    static {
        MAX_CONNECTIONS = 100;
    }
}

// Final juga bisa diisi dengan value saat runtime
static final int CPU_COUNT =
    Runtime.getRuntime().availableProcessors();

// Tidak valid, ada multiple constructor tetapi salah satu constructor tidak menginisialisasi name
class User {
    private final String name;

    public User() {
        name = "Anonymous";
    }

    public User(String name) {
        // tidak menginisialisasi name
    }
}

// Tidak valid, ada condition di mana x tidak akan diisi
final int x; 
if (condition) { x = 10; }
```

- Hal ini dikarenakan Java compiler akan melihat semua kemungkinan execution path. Lebih lengkapnya akan dijelaskan di [Java compiler](#Compiler)


# Loop



# Compiler