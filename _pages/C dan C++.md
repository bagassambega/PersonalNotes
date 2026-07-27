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

Pertanyaan klasik, bagaimana jika ternyata di header ada, tapi implementasinya tidak ada? Maka nanti linker sebagai

```c
#ifndef OBJECT_H
#define OBJECT_H

datatype function(type a, type b);

#endif
```