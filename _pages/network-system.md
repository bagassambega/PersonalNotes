---
layout: page-with-toc
title: Networks System
description: Computer networks and internet system
permalink: /network-system/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/network-system.md
---


# OSI Layer

  

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