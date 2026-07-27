---
layout: page-with-toc
title: Makefile
description: Pedoman menggunakan Makefile
permalink: /makefile/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/Makefile.md
---
# Building Process

Ketika kita akan mem-build project C dan C++ kita, maka akan ada dua proses utama yang berjalan, yaitu compiling menggunakan compiler, lalu linking menggunakan linker. 

## Compiler

Compiler mengubah file kode (.cpp atau .c) menjadi object file (.ob atauy .o file). Setiap file di-compile menjadi object file terpisah. Object file ini berisi machine code dan tidak bisa dijalankan masing-masing jika terdapat dependency antar file. Oleh karenanya proses ini bisa dilakukan secara paralel karena setiap file di-compile secara terpisah dan tidak terikat dependency satu sama lain.

## Linker

Linker menggabungkan dan melakukan linking antarobject file menjadi satu kesatuan file/program yang bisa dijalankan. 