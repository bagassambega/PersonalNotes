---
layout: page-with-toc
title: Glossary
description: List of technical terms and their definition
permalink: /glossary/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/glossary.md
---

<div class="glossary-page" markdown="1">

# A

---

## Authentication

Mengautentikasi dengan cara:
- Something that you know (password)
- Something that you have (token)
- Something that you are (biometrics)
Autentikasi bisa dipakai untuk mengidentifikasi apakah seseorang yang ingin mengakses resource adalah orang yang valid atau bukan

## Authorization

Memeriksa apakah seseorang memiliki akses atau otorisasi yang cukup untuk mengakses resources. Biasanya dilakukan setelah proses [autentikasi](#autentikasi) selesai

# B

---

## Blockchain {#blockchain}

A distributed ledger technology for recording transactions across multiple computers in a way that ensures security, transparency, and immutability.

## Bounce Rate {#bounce-rate}

Persentase visitor mengunjungi sebuah web/aplikasi kemudian langsung leave tanpa melakukan klik/interaksi di dalam web/aplikasi tersebut

# C

---

## Ciphertext {#ciphertext}

Plainteks (teks asli) yang sudah dienkripsi dan diamankan

## Consent (Medical Record) {#consent-medical-record}

A patient's authorization for sharing medical data with healthcare providers or third parties.

## Cloud (Cloud Computing) {#cloud-computing}

Cloud refers to large collections of servers that provide services over the internet, rather than making/serving the servers directly in place. For example, instead of a software house company buying their own servers, manage the servers on their own in their office, they rent servers from AWS Cloud that placed in US and to access them, we need to access via the internet


## CVE

Common Vulnerability and Exposure. Daftar vulnerability yang ditemukan di sistem-sistem, lingkungan/bahasa pengembangan, dikelola oleh pemerintah US

## CVSS

Common Vulnerability Scoring System. Scoring system dari 0-10 (0 paling aman, 10 paling tidak aman). Detail: [CVSS](https://www.first.org/cvss/v4-0/specification-document)

## Closed Review (Journal) {#closed-review-journal}

Proses review hanya bisa dilakukan oleh authorized/verified reviewer. Kebalikan: [open review](#open-review-journal)

# D

---

## Digital Signature

Menyelesaikan masalah Accountability dan Non Repudiation. Enkripsi dari hash/digest dari suatu message. Enkripsi menggunakan private key, validasi pakai public key (kebalikan *asymmetric encryption*)

# E

---

## Ephemeral {#ephemeral}

Tidak statik. Berganti-ganti


# F

---

## Finality {#finality}

Keadaan ketika suatu blok dianggap tidak dapat dibatalkan atau digantikan oleh cabang lain. Setelah blok mencapai finality, seluruh transaksi di dalamnya dianggap permanen dan tidak bisa di-reorganize.

# G

---

# H

---

## Hard Delete

Menghapus entry/pointer item sekaligus objek aslinya juga. Kebalikan:  [soft delete](#soft-delete")

# I

---

## IOTA {#iota}

A distributed ledger designed for the Internet of Things (IoT), using the Tangle data structure instead of a traditional blockchain.

# J

---


# K

---

## Keystream

Bit-bit aliran kunci yang di-generate untuk enkripsi/dekripsi


# L

---

## LSB {#lsb}

**Least significant bit**. Bagian dari bit yang nilainya paling kecil (insignifikan) dan perubahannya tidak membuat value berubah drastis. Contoh: $255 \;(1111 \;1111) \rightarrow 254 \;(1111 \;1110)$, digit paling kanan adalah LSB.
Antonim: [MSB](#msb)

# M

---

## MARC {#marc-record}

MARC, MARC record, Machine-Readable Cataloging record. Format data digital untuk menyimpan dan membagikan buku atau media katalog yang sering digunakan di perpustakaan. 

## MSB {#msb}

**Most significant bit**. Bagian dari bit yang nilainya paling besar (signifikan) dan perubahannya membuat value berubah drastis. Contoh: $255 \;(1111 \;1111) \rightarrow 127 \;(0111 \;1111)$, digit paling kiri adalah MSB.
Antonim: [LSB](#lsb)

## Message Digest

Menyelesaikan masalah integrity.

# O

---

## Open Review (Journal) {#open-review-journal}

Siapapun bisa melakukan review jurnal, meskipun tidak verified/authorized. Kekurangan: bisa saja ada review palsu/asal-asalan/salah. Kebalikan: [closed review](#closed-review-journal)

## On-Chain (Blockchain) {#on-chain-blockchain}

Operasi dan data dilakukan/disimpan di dalam jaringan blockchain. Data bisa diakses oleh semua peserta jaringan, dan data bersifat *immutable* (lihat [blockchain]({{ "/blockchain/" | relative_url }}))

## Off-Chain (Blockchain) {#off-chain-blockchain}

Operasi dan data dilakukan di luar jaringan blockchain. Jadi terkoneksi dengan blockchain, tapi eksekusi dan penyimpanan datanya tidak di jaringan blockchain (lihat [blockchain]({{ "/blockchain/" | relative_url }}))

# P

---

## Passkey



## Permissioned Blockchain

Blockchain dengan akses terbatas, dengan adanya pengaturan role dan pembatasan akses untuk role tertentu

## PLU

Price Look-Up. Identifier produk terhadap harganya. Biasa digunakan oleh [POS](##POS) system

## POS {#pos-point-of-sale}

Point of Sale. Sistem yang bertujuan untuk mengelola, mencatat, dan memproses pembayaran, sales/penjualan, inventory/stok, dan pencatatan/pelaporan. 

## Private Blockchain

Hanya orang-orang tertentu saja/yang diundang yang bisa akses. Kebalikan: [public blockchain](#public-blockchain)

## Public Blockchain

Seluruh orang bisa berpartisipasi dalam blockchain. Kebalikan: [private blockchain](#private-blockchain)

# R

---

## Rainbow Attack

Attacker menyimpan list of strings (password, etc) dan juga hash-nya. Kalau tau hash-nya, bisa di-reverse dan tau password-nya

## Rate Limiting

Membatasi jumlah request untuk setiap user, IP, atau token dikirim ke server untuk jangka waktu tertentu. Hal ini untuk melindungi server dari overload, menghindari DoS dan memastikan setiap orang bisa mengakses resources secara adil

# S

---

## SaaS

Software as a Service. Maksudnya layanan cloud yang disediakan oleh produk/company tersebut berbentuk software. Contohnya adalah ILovePDF atau Microsoft Teams. Jadi daripada produknya di-maintain, di-develop oleh perusahaan/customer secara langsung, lebih baik menggunakan software online yang sudah di-develop oleh online provider tersebut, dan biarkan mereka yang develop feature, update, dan maintain

## Salt

Tambahan value random ke dalam teks (misal ditempel di awal password) yang akan di-hash supaya hash-nya tidak sama terus setiap saat di-hash. Menghindari [rainbow attack](#rainbow-attack)

## Seed

Value random yang digunakan untuk me-generate suatu value baru

## SKU

Stock Keeping Unit

## SPU, SKU, PLU

Product identifier yang biasa digunakan di retail, warehouse, dan e-commerce untuk mengorganisasikan, menyimpan, dan mencatat produk/data sales. Lihat:

## SPU

Standard Product Unit

## Soft Delete

Menghapus entry/pointer item tapi tidak menghapus objek sebenarnya. Kebalikan: [hard-delete](#hard-delete)


</div>
