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

Header file berisi deklarasi dan inisiasi fungsi, struct, dan global variabel. Header file digunakan agar compiler dapat menemukan 
```c
#ifndef OBJECT_H
#define OBJECT_H

#endif
```