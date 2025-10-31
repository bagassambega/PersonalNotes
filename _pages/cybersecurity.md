---
layout: page-with-toc
title: Cybersecurity
description: Concept, implementation, and execution of cybersecurity
permalink: /cybersecurity/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/cybersecurity.md
---

# Perkenalan

Menjamin kerahasiaan, keutuhan, ketersediaan (CIA triads: confidentiality, integrity, availability). Harus tau kapan confidentiality penting, dan availability penting. Misal saat sistem negara kebobolan, mending sistem dimatiin (tapi orang2 ga bisa akses semua) atau enggak. Contoh lain: di sistem pemilu itu integrity, karena datanya harus terjamin ga berubah. Contoh lain: e-commerce seperti Tokopedia itu availability, karena yang penting tuh pertama bisa jualan dulu, bank itu confidentiality

- Prevention: cegah sebelum terjadi
- Detection: misal saat masuk ke payload API, langsung di drop di sana
- Response: misal saat udah mau dieksekusi database, ketauan ada SQL injection, langsung ngasih response di situ

- Incident: terjadi compromise/kebobolan terhadap CIA (membuat CIA gagal. Ini sudah terjadi. Sudah pasti ada konsekuensi)
- Threat: potensi pelanggaran keamanan, punya kemungkinan. Bisa disengaja atau disengaja
- Attack: serangan terhadap keamanan. Ini belum tentu berhasil. Kalau sudah berhasil, itu jadi incident.
- Zero-day attack: serangan baru yang memanfaatkan vulnerability yang baru dan belum ada fix/patch dari developernya

- Vulnerability: celah keamanan, kelemahan sistem
- Threat: memiliki potensi pengrusakan

- Vulnerability: retakan di dinding
- Tinggi air: level of threat/risk

- Ibarat: energi potensial: threat, energi kinetik: attack. Semakin tinggi threat, kalau berhasil berubah jadi attack, semakin besar dampaknya
- APT tipe serangan juga, hanya emang istilahnya aja yang salah

- Interception: ada komunikasi dicegat diambil datanya (confidentiality)
- Interruption: mengganggu komunikasi (availability)
- Modification: mengubah data (dari ada ke ada lagi tapi bentuk berbeda) (integrity)
- Fabrication: menambahkan/insert sesuatu, dari yang sebelumnya ga ada jadi ada (integrity)
- Contoh kasus: di kebocoran data SatuSehat, mereka hanya validasi cookies nya ada atau enggak, tapi ga validasi cookies itu harusnya bisa akses mana aja. Misal kita login dengan NIM 13522001, nah kalau URL nya kita ganti ke 13522002, harusnya ga boleh karena kita ga login sebagai 002, tapi karena hanya validasi ada cookies atau enggak, jadi tetep bisa akses
- Authentication: proses memastikan yang mau masuk itu orang yang betul atau bukan

- Person to computer: misal kode OTP yang dikirim ke user lewat SMS. Diminta buat masukin lagi
- Computer to computer: Google login

- Cara autentikasi: something that you know (password), something that you have (token), something what you are (biometrics) (ingat muka/fingerprint cuman analisis pola sidik jari atau muka, atau jarak antar fitur di pola. Bisa ditiru atau kalau orang yang mukanya mirip atau polanya mirip, malah bisa akses)
- Contoh two factor authentication: mesin ATM, what you have (kartu ATM) + PIN ATM
- OTP: one time password
- Authorization: proses memastikan orang yang mau akses itu punya hak akses atau enggak

- Concerns for a digital marketplace:

- Availability of service: DDoS
- Security of accounts: account takeover
- Authorization of user actions: jangan sampai ada customer yang bisa melakukan activity dari seller
- Integrity of financial transactions: jangan sampai ada transaksi yang malah merugikan pengguna
- Confidentiality of payment data: jangan sampai data pribadi/transaksi diketahui oleh pihak lain
- Integrity of marketplace goods: jangan sampai ada penjualan palsu, barang palsu, toko palsu, dsb

- Accountability: bisa mengetahui siapa yang melakukan sesuatu
- Non-repudiation: transaction yang tidak bisa ditolak lagi. Misal saat di kelas, buat bukti kehadiran ada TTD, yang bisa TTD itu hanya orangnya sendiri dan sebagai bukti kalau dia itu hadir

Tugas: masalah apa saja yang bisa muncul kalau kita punya marketplace namanya Black

# Threat Analysis

- Mengevaluasi sistem, asset dan security tools untuk mendapatkan informasi penting, dengan tujuan akhir melakukan asesmen terhadap risiko tersebut, dan menentukan apakah threat itu perlu diurus atau tidak, perlu dimitigasi atau tidak
- General flow:

1. Apa yang berharga dari organisasi kalian
2. Threat apa saja yang perlu diidentifikasi
3. Modelkan menjadi sebuah struktur dan analisis vulnerability nya
4. Decision making
5. Desain mitigasi atau penanganan

- Threat bisa mengurangi value dari asset. Control berfungsi untuk melindungi aset, dan control berfungsi untuk mengurangi tingkat kesuksesan dari threat

## Threat Model

- Threat model:

- Deskripsi dari subjek yang dimodelkan (benda, orang atau sistem yang akan dimodelkan)
- Asumsi yang harus dicek
- Potensi threat ke sistem
- Action yang bisa dilakukan untuk memitigasi threat
- Validasi model dan threat, dan verifikasi apakah hal2 yang dilakukan sudah tepat terhadap threat yang akan datang\

- Threat model biasanya dipakai untuk memodelkan security threats. Sebaiknya threat modelling dilakukan saat melakukan desain arsitektur, implementasinya, dsb. Bisa saja setiap tahap muncul threat baru

- Anything valuable can be vulnerabilities

- Asset type:

- Human
- Software
- Hardware, komputer, mesin, dsb
- Infrastructure: data center, network, dsb
- Data (intangible)
- Document, etc

\*PII: Personally Identifiable Information

## Threat Analysis Technique

- Technique for threat analysis:

1. [STRIDE](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.0#heading=h.gahbghvccp1h)
2. Attack tree
3. Attack surface
4. Abuse case
5. Misuse case

### STRIDE

- STRIDE:

- Spoofing: problem of authentication (a situation in which a person or program successfully identifies as another by falsifying data, to gain an illegitimate advantage)
- Tampering: problem of integrity (manipulation of data)
- Repudiation: problem of non-repudiation (seseorang bisa menyangkal kalau dia enggak melakukan sesuatu)
- Information Disclosure: problem of confidentiality (informasi leaked)
- Denial of Service: problem of availability (membuat service ga bisa diakses)
- Elevation of privilege: problem of authorization (a process in which a user or process in a system or application gains higher privileges than originally intended)

Message digest: [https://www.geeksforgeeks.org/computer-networks/message-digest-in-information-security/](https://www.geeksforgeeks.org/computer-networks/message-digest-in-information-security/)

### Attack Tree

- Attack tree

- Evaluasi based on various threats.
- Dibangun berdasarkan dekomposisi threat yang besar menjadi threat-threat yang kecil
- Sebuah serangan menunjukkan berbagai vulnerabilities dan compromises
- Akar pohon menunjukkan insiden atau kehancuran yang terjadi
- Setiap pohon menunjukkan CARA bagaimana attacker menyebabkan suatu insiden. Tiap path pada attack tree menunjukkan attack yang unik dan berbeda pula. Sebuah sistem bisa memiliki forest (numerous trees) yang menunjukkan kumpulan attack tree
- Attack tree bisa didekomposisi memakai AND-decomposition (semua path harus berhasil dulu baru attack bisa dilaksanakan) atau OR-decomposition (salah satu path cukup)

[Replay attack](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.0#heading=h.ovkhp49ejyfb): A replay attack is a cyberattack where a malicious actor intercepts a valid data transmission, such as login credentials or session tokens, and then retransmits it to deceive a system into granting unauthorized access or performing an unauthorized action.

### Attack Surface

If you want to attack an enemy target, the target must be visible or exposed

- Attack surface: bagian dari program, kode, interface, service, protocol, sistem dkk yang exposed ke public dan bisa diakses/di-attack oleh orang. Misalnya API
- Dengan attack surface, kita bisa tau top level tackle dan vulnerability nya, tapi dengan attack tree, kita bisa melihat ketergantungan sebuah vulnerability atau threat terhadap insiden

- Relative attack surface is a comparative measure, such as Howard's Relative Attack Surface Quotient (RASQ), that quantifies the "attackability" of a system by measuring its exposed entry points, channels, protocols, and access rights, enabling a comparison between different versions of a system or between separate systems to identify which is more vulnerable. It provides a way to assess how much more difficult or easier it is to attack one system versus another based on its components and interfaces that are available to potential threats
- Bisa saja saat kita mau meminimalisir attack surface, kita malah menambahkan attack surface lain karena menambah library atau fungsi baru. Makanya usahakan kita semakin menutup attack surface, bukan menambahkan

### Abuse and Misuse Case

Abuse and misuse cases are security techniques that document how an application or system could be used maliciously or incorrectly to exploit vulnerabilities, leading to a negative outcome for the system or users. They involve defining scenarios from an attacker's perspective, contrasting with traditional "use cases" that focus on legitimate operations, to uncover security weaknesses and drive the design of robust security controls and countermeasures.

Misuse Cases

specifically describe the unintended or malicious use of a system that results in a loss or negative impact. Contoh: orang yang punya akses ke akun orang lain bakal ngegunain akun itu buat beli barang ilegal

Abuse Cases

are a related concept that focuses on describing malicious or abusive interactions with a system to find security flaws.

Purpose:

They serve as a tool to identify security requirements, test systems against potential threats, and create a more secure product by understanding how attackers might exploit it.

# Firewall

## Firewall Rules pfSense

## IPTables
Setup maintain dan inspect tabel dari paket filter rules untuk IP di Linux Kernel

## Virtual Firewall

- Berjalan pada lingkungan virtual untuk melindungi traffic jaringan east-west dan north-south traffic

## TC (Traffic Control)

- Sistem mekanisme antrian untuk mengatur cara paket diterima dan dikirimkan pada perangkat jaringan


# LAMPIRAN: Type of Attacks {#type-of-attacks}

## STRIDE Attack {#stride-attack}

Spoofing: problem of authentication (a situation in which a person or program successfully identifies as another by falsifying data, to gain an illegitimate advantage)

Tampering: problem of integrity (manipulation of data)

Repudiation: problem of non-repudiation (seseorang bisa menyangkal kalau dia enggak melakukan sesuatu)

Information Disclosure: problem of confidentiality (informasi leaked)

Denial of Service: problem of availability (membuat service ga bisa diakses)

Elevation of privilege: problem of authorization (a process in which a user or process in a system or application gains higher privileges than originally intended)

## Replay Attack {#replay-attack}

A replay attack is a cyberattack where a malicious actor intercepts a valid data transmission, such as login credentials or session tokens, and then retransmits it to deceive a system into granting unauthorized access or performing an unauthorized action.

## Sniffing Attack {#sniffing-attack}

Sniffing refers to the process of intercepting and inspecting data packets as they travel across a network. It's like eavesdropping on a conversation between devices, allowing you to see the information being exchanged. Form of [eavesdropping](#eavesdropping-attack)

## Eavesdropping Attack {#eavesdropping-attack}

Eavesdropping is used by cyberattackers to intercept communication and steal sensitive data in transit. Eavesdropping is the broad act of secretly intercepting and listening to another's communications, while sniffing is a technical method of eavesdropping that involves using a packet sniffer to capture and analyze data packets as they travel across a network

The difference with sniffing: Both are same kind of attacks. The difference is Eavesdropping could be in any form (Physical to logical), where the sniffing is more electronics/network related term.

SYN Flooding

SYN Reflection

Zero day attack

Honeypot

## DNS Poisoning

## Man in The Middle Attack (MITM)

## Flip-Bit Attack

- Serangan terhadap kriptografi [stream cipher](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.rv1ybovolip1)
- Mengubah bit tertentu sehingga hasil dekripsinya berubah (dengan membolak-balikkan value bit nya)

# LAMPIRAN: Threat Vectors

Same wifi name and password: orang2 bisa ketipu dengan wifi dan password yang sama

# LAMPIRAN: Tools

[https://builtwith.com/](https://builtwith.com/)

# Istilah

GDPR: mengatur kepemilikan atas hak data pribadi (UU PDP di Indonesia)
