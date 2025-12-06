---
layout: page-with-toc
title: System Design
description: System design principles including parallel, distributed systems, and application architecture
permalink: /system-design/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/system-design.md
---

# Perkenalan Sistem Terdistribusi

- Penyebab distributed technology:

1. Geografi tersebar

2. Parallelism: multicore process

3. Reliability: Data direplikasi di mesin berbeda supaya mencegah kehilangan data

4. Availability: Data direplikasi di mesin berbeda supaya data bisa diakses lebih cepat tanpa bottlenecks

- Seperti yang kita tahu, kalau suatu sistem itu terpusat (cuman ada satu pusat data doang, jadi kalau server itu down, maka server dan data-datanya ga bisa diakses sama sekali dari manapun itu

- Tujuan sistem terdistribusi:

- Scalability: kemampuan sistem untuk tumbuh

- Performance: jumlah pekerjaan yang dapat diselesaikan sistem komputer berdasarkan jumlah waktu dan resources yang digunakan

- Availability: persentase sistem berada dalam kondisi berfungsi baik

- Tapi ada masalah baru yang muncul saat sistem tidak terpusat: koordinasi antar mesin

# Streaming Processing

- Stream adalah unbounded data; data yang dikirim **mengalir terus menerus**, infinitely
- Menggunakan **model push**, jadi produksi data dikendalikan oleh sumber, bukan di-request oleh penerima
- Disebut **publish/subscribe model**

| Perbedaan      | Database                                                                                | Data Stream                                                                  |
| -------------- | --------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| **Model**      | **Pull**. Data ditarik secara manual atau berdasarkan request penerima dari sumber data | **Push**. Data dikirim dari sumber data meskipun tanpa diminta oleh penerima |
| **Trigger**    | **Manual**. Di-invoke oleh penerima dengan request                                      | **Tidak ada trigger**. Data dikirim terus menerus oleh pengirim data         |
| **Sifat Data** | Menyimpan state saat ini saja, disimpan di dalam database (persistent collection)       | Realtime. Ephemeral stream (ephemeral: berganti-ganti)                       |
|                |                                                                                         |                                                                              |
## Apache Kafka

### Struktur Data

- Sebuah message berisi sebuah record data terdiri dari:
	- Header (informasi topik dan partisi)
	- Key
	- Value
- Sebuah message tidak dikirimkan begitu saja ke Kafka. Mereka di-organize berdasarkan **topic**-nya. Setiap topic dipecah lagi menjadi partitions.

