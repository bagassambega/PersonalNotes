---
layout: page-with-toc
title: C dan C++
description: Pedoman proglang C dan C++
permalink: /c-cpp/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/tools.md
---
# Struktur Project
Baik C dan C++ memisahkan deklarasi dan juga implementasi. Deklarasi disimpan di **header** file, sementara implementasi disimpan di C/CPP file.

## Header File

Header file berisi deklarasi dan inisiasi fungsi, struct, dan global variabel. Header file digunakan agar compiler dapat **memastikan implementasi dari suatu fungsi/hal itu valid/exist**.

Sebagai contoh, kita memiliki file `math.c` yang berisi implementasi operasi matematika (misalnya fungsi `int add(int a, int b)`, dan salah satu operasinya dipanggil oleh `main.c`. Ketika file `main.c` di-compile, maka jika compiler belum pernah membaca atau compile `math.c`, ini akan menghasilkan error karena implementasi tidak ditemukan. Namun jika menggunakan header, yaitu menambahkan `#include math.h` di file `main.c`, kita dapat memberitahu compiler bahwa fungsi `int add` itu ada dan sudah diimplementasikan.

Pertanyaan klasik, bagaimana jika ternyata di header ada, tapi implementasinya tidak ada? Maka nanti linker akan memberitahu error: `undefined reference to add`, yang artinya tidak ada implementasi dari fungsi `add`. 

Lalu mengapa kita tidak memastikan compiler membaca file `math.cpp` dulu saja sebelum membaca file `main.cpp`? Karena proses compiling nantinya tidak bisa paralel. Kedua, bisa mengakibatkan circular dependency. Misalnya A.c memakai fungsi dari B.c, B.c memakai fungsi dari C.c, C.c memakai fungsi dari A.c. Oleh karenanya, dengan header, setiap file hanya membutuhkan **interface** (deklarasi), bukan implementasi.

### Struktur Header File

#### Include Guard

Header file biasanya berisi deklarasi tipe data khusus seperti struct, fungsi, variabel global, dan lain-lain. Biasanya dalam header file ada **include guard**, yang berisi struktur sebagai berikut,

```c
#ifndef OBJECT_H
#define OBJECT_H

datatype function(type a, type b);

// Deklarasi lainnya....
#endif
```

Include guard digunakan agar tidak ada redefinition jika misalkan kita melakukan include header file dua kali atau lebih, apalagi ketika adanya circular dependency.

#### Typedef

``typedef`` atau type definition adalah proses untuk membuat alias terhadap suatu tipe data. Sebagai contoh:
`unsigned int a` dapat ditulis sebagai `uint a` jika kita menggunakan typedef berikut:
```c
typedef unsigned int uint;
```

Contoh lain yang lebih eksplisit adalah ketika kita mendefinisikan sebuah tipe data baru menggunakan struct, misalnya Time. Jika tanpa typedef atau alias, kita harus melakukan penulisan berikut ketika mendefinisikan variabel baru:

```c
struct Time
{
    int hours;
    int minutes;
    int seconds;
};

// penggunaan di variabel harus selalu menggunakan 'struct Time'
struct Time t1;
```

Tetapi jika kita menggunakan typedef alias, kita cukup menggunakan alias terseebut ketika menginisialisasi variabel:

```c
typedef struct Time
{
    int hours;
    int minutes;
    int seconds;
} time;

// inisialisasi variabel cukup tulis tipe data 'time'
time t1;
```