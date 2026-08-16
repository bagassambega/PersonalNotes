---
layout: page-with-toc
title: App and System Development
description: Application and system development across web and native platforms
permalink: /app-system-dev/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/app-system-dev.md
---
# Library dan Framework

- Perbedaan keduanya ada di **Inversion of Control (IoC)**, yaitu software design principle di mana flow program, object creation, dan dependency management dikelola oleh framework atau container, jadi framework-lah yang memanggil/menggunakan code kita. Urusan flow, struktur project, sudah ada di mereka. Sementara pada traditional code, kita yang mengimplementasikan seluruh kode dan memanggil fungsi helper atau parameter dari library

| Features     | Library                                                                                     | Framework                                                         |
| ------------ | ------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Control flow | Kita yang mengontrol flow, kita yang menentukan kapan suatu fungsi/alur/parameter digunakan | Framework yang mengontrol flow dan memanggil code kita            |
| Structure    | Tidak ada yang mengatur arsitektur dan struktur folder seperti apa                          | Ada arsitektur dan convention folder structure yang wajib diikuti |
| Contoh       | ExpressJS                                                                                   | LaravelPHP                                                        |
