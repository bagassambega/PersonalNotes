---
layout: page-with-toc
title: Networks System
description: Computer networks and internet system
permalink: /network-system/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/network-system.md
---


# OSI Layer

  

# Parameters

- Bandwidth:
- Throughput:
- Latency:
- Jitter:

# Presentation Layer

## SSL/TLS

-   

# Application Layer

## HTTP/HTTPS

- HTTP: Hypertext Transfer Protocol, HTTPS: Hypertext Transfer Protocol Secure
- Berjalan di application layer (layer 7)
- Base-nya berjalan di TCP supaya reliable
- Contoh flow:

|                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------------------- |
| Client: TCP handshake with server<br><br>Client: "GET /index.html HTTP/1.1"<br><br>Server: "HTTP/1.1 200 OK ... (HTML data)" |

- HTTPS secure karena ada TLS handshake sebelum HTTP message saling dikirim
- TLS:

## HTTP/1.0

- Awal mula HTTP, mulai ada request headers
- Digunakan untuk fetch document awalnya
- Untuk melakukan fetch document yang berbeda, maka akan dibuka TCP connection yang baru pula. Jadi misalkan akan mengambil total 15 files, maka akan ada 15 TCP connection baru
- Masalahnya ketika kita membuka sebuah TCP connection, kita harus melakukan three way handshake dulu, lalu certificate check untuk memastikan server valid dan menggunakan TLS, kemudian key exchange untuk enkripsi HTTPS, barulah data transmission dilakukan

![](../assets/images/lectures/network-system_20260823-212428.png)

## HTTP/1.1

- Untuk mengatasi masalah di HTTP/1.0 yang selalu membuka connection untuk fetch/transfer data baru, HTTP/1.1 memperkanalkan persistent connection
- Ketika new TCP connection dibuka, koneksi itu akan terus terbuka sampai disuruh close. Selama connection itu terbuka, data bahkan dari file/resources yang berbeda dapat terus dikirim dari sana
- Ilustrasi HTTP/1.0 vs HTTP/1.1:

![](../assets/images/lectures/network-system_20260823-212219.png)

- Kemudian diperkenalkan juga pipelining. Client tidak perlu menunggu response dari server untuk melakukan request terhadap resource yang berbeda di 1 TCP connection yang sama
- Selain itu ada juga chunk server encoding, yaitu server bisa mengirim data dalam bentuk chunk/potongan data instead of whole file sekaligus.
- Perbaikan untuk caching juga, ada header Cache-Control misalnya untuk mengontrol expiry cache di local client dan If-Modified-Since untuk memeriksa apakah content di server sudah diperbarui agar client bisa mengambil data terbaru dari server dan memperbarui cache di local client
- Masalahnya dari pipelining, meskipun kita bisa membuat request baru tanpa harus menunggu response dari server, response yang diterima tetap harus sekuensial. Jadi misalkan ketika response kedua sudah sampai tapi response pertama belum, maka response kedua jadi blocked karena response pertama blockin

## HTTP/2.0

- Memungkinkan binary format data transfer menggunakan binary framing, dibandingkan HTTP/1.1 yang menggunakan pure text
- Multiplexing, jadi client dan server bisa breakdown/memecah request dan response menjadi individual frames, dan bisa disusun kembali di tujuan. Hal ini menyebabkan 1 TCP connection bisa dipakai untuk mengirimkan data untuk resources yang berbeda-beda dalam satu waktu yang sama tanpa harus saling menunggu/blocking
- Mendukung server push, jadi misalkan client me-request 1 file saja, server bisa mengembalikan lebih dari 1 file dari request tersebut

![](../assets/images/lectures/network-system_20260823-213352.png)

- Ada header compression. Di HTTP/1.0, hanya datanya saja yang bisa di-compress. Di HTTP/2.0, header juga bisa memakai HPACK dengan mengingat request sebelumnya

## HTTP/3.0

- Menggunakan QUIC yang berbasis UDP

### Web Request

Under the hood, web request bekerja dengan cara berikut,

1. **Client mempersiapkan HTTP/S request**, berisi seperti resource yang akan diminta (URL), request method (GET, POST), additional headers, body
2. JIka menggunakan **HTTPS**, akan dilakukan **SSL/TLS handshake** terlebih dahulu. SSL/TLS handshake adalah operasi pertukaran parameter atau nilai kriptografis sebagai key untuk membangun secure connection. Tahap-tahap:
      - Client mengirim "ClientHello" ke servers, memberitahu server algoritma enkripsi yang di-support client, random generated value, dan konfigurasi lainnya
	   - Server menjawab "ServerHello", mengkonfirmasi settings yang disetujui kedua belah pihak
	   - Dalam kedua proses di atas juga server dan client memeriksa certificate, dan setelahnya secure connection established
3. Client akan mengubah nama domain menjadi IP address menggunakan local cached domain-IP mappings. Local DNS resolver akan 



### HTTPS Certificate



## SSH

- Secure shell
    

  

## Firewall

# Web
## World Wide Web

