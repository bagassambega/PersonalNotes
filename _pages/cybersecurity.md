---
layout: page-with-toc
title: Cybersecurity
description: Concept, implementation, and execution of cybersecurity
permalink: /cybersecurity/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/cybersecurity.md
---

# Perkenalan

Menjamin kerahasiaan, keutuhan, ketersediaan (CIA triads: confidentiality, integrity, availability). Harus tau kapan confidentiality penting, dan availability penting. Misal saat sistem negara kebobolan, mending sistem dimatiin (tapi orang2 ga bisa akses semua) atau enggak. Contoh lain: di sistem pemilu itu integrity, karena datanya harus terjamin ga berubah. Contoh lain: e-commerce seperti Tokopedia itu availability, karena yang penting tuh pertama bisa jualan dulu, bank itu confidentiality

## Mitigasi Keamanan

- Prevention: cegah sebelum terjadi
- Detection: deteksi (aktif), misal saat suatu attack masuk ke payload API, langsung di drop di sana
- Response: misal saat udah mau dieksekusi database, ketauan ada SQL injection, langsung ngasih response di situ (aktif)

## Insiden, Threat, Attack

![](cybersecurity_20251221-200312.png)

- Incident: terjadi compromise/kebobolan terhadap CIA (membuat CIA gagal. Ini sudah terjadi. Sudah pasti ada konsekuensi)
- Threat: potensi pelanggaran keamanan, punya kemungkinan. Bisa disengaja atau disengaja
- Attack: serangan terhadap keamanan. Ini belum tentu berhasil. Kalau sudah berhasil, itu jadi incident.
- Control: proactive measure (mitigasi aktif)
- Zero-day attack: serangan baru yang memanfaatkan vulnerability yang baru dan belum ada fix/patch dari developernya

## Vulnerability dan Threat

- **Vulnerability**: celah keamanan, kelemahan sistem
- **Threat**: memiliki potensi pengrusakan/dirusak

- Vulnerability: retakan di dinding
- Tinggi air: level of threat/risk

- Ibarat: energi potensial: threat, energi kinetik: attack. Semakin tinggi threat, kalau berhasil berubah jadi attack, semakin besar dampaknya
- APT tipe serangan juga, hanya emang istilahnya aja yang salah

- Contoh kasus: di kebocoran data SatuSehat, mereka hanya validasi cookies nya ada atau enggak, tapi ga validasi cookies itu harusnya bisa akses mana aja. Misal kita login dengan NIM 13522001, nah kalau URL nya kita ganti ke 13522002, harusnya ga boleh karena kita ga login sebagai 002, tapi karena hanya validasi ada cookies atau enggak, jadi tetep bisa akses

## Prinsip dan Atribut Keamanan (CIA-AAA-NR)

### CIA Triads

- **Confidentiality**: Kerahasiaan data
- **Integrity**: message/data integrity, data tidak berubah atau dimanipulasi
- **Availability**: ketersediaan. Kalau kita pengen mengakses data, data tersebut bisa diakses kapanpun

### Triple-A

- **Authentication**: proses memastikan yang mau masuk itu orang yang betul atau bukan
- Verification of claim of identity. Verifikasi identitas kita (bagaimana cara Bob mengetahui kalau dia sebetulnya sedang berkomunikasi dengan Alice?)

- Tiga cara verifikasi

1. Something that you know: sesuatu yang kamu tahu sendiri, misalnya password
2. Something that you have: sesuatu yang kamu miliki sendiri, misalnya token session
3. Something that you are: sesuatu yang menunjukkan itu kamu, misalnya biometrics seperti fingerprint

- Person to computer: misal kode OTP yang dikirim ke user lewat SMS. Diminta buat masukin lagi
- Computer to computer: Google login

- Contoh two factor authentication: mesin ATM, what you have (kartu ATM) + PIN ATM
- OTP: one time password

- **Authorization**: proses memastikan orang yang mau akses itu punya hak akses atau enggak
- Salah satu cara pengecekan authorization: access control
- Access control mendefinisikan three-tuples berikut: {User, Resources, Privileges}
- Secara umum dan dasar, ada tiga model utama access control models:
 1. Mandatory: computer system yang menentukan siapa yang memiliki akses ke resources
 2. Discretionary: user dapat menentukan user lain mana yang dapat mengakses data/resources
 3. Role-based (non-discretionary): akses dan privilege user ditentukan oleh role
 4. Lain-lain: ABAC, ReBAC, Location-Based

- Contoh kasus: Concerns for a digital marketplace:
	- Availability of service: DDoS
	- Security of accounts: account takeover
	- Authorization of user actions: jangan sampai ada customer yang bisa melakukan activity dari seller
	- Integrity of financial transactions: jangan sampai ada transaksi yang malah merugikan pengguna
	- Confidentiality of payment data: jangan sampai data pribadi/transaksi diketahui oleh pihak lain
	- Integrity of marketplace goods: jangan sampai ada penjualan palsu, barang palsu, toko palsu, dsb

- **Accountability**: bisa mengetahui siapa yang melakukan sesuatu
- Contoh: logging, audit trails

- **Non-repudiation**: transaction yang tidak bisa ditolak lagi. Misal saat di kelas, buat bukti kehadiran ada TTD, yang bisa TTD itu hanya orangnya sendiri dan sebagai bukti kalau dia itu hadir

## Information Security Threat

- **Interception**: ada komunikasi dicegat diambil datanya (**confidentiality**)
- **Interruption**: mengganggu komunikasi (**availability**)
- **Modification**: mengubah data (dari ada ke ada lagi tapi bentuk berbeda) (**integrity**)
- **Fabrication**: menambahkan/insert sesuatu, dari yang sebelumnya ga ada jadi ada (**integrity**)

# Threat Analysis

- Mengevaluasi sistem, asset dan security tools untuk mendapatkan informasi penting, dengan tujuan akhir melakukan asesmen terhadap risiko tersebut, dan menentukan apakah threat itu perlu diurus atau tidak, perlu dimitigasi atau tidak
- Tujuan:
	- Mengevaluasi sistem, aset dan security tools terhadap informasi yang diterima
	- Mengidentifikasi potential threat, melakukan assessment probabilitas hal itu terjadi, dan memperkirakan dampaknya jika terjadi
	- Mengidentifikasi attack vector (bagaimana threat bisa sampai atau masuk ke device, system, atau network)

- General flow:

1. Apa yang berharga dari organisasi kalian (**asset identification**)
2. Threat apa saja yang perlu diidentifikasi (**threat identification**)
3. Modelkan menjadi sebuah struktur dan analisis vulnerability nya (**threat modelling**)
4. Decision making
5. Desain mitigasi atau penanganan (control/countermeasure design)

- Threat bisa mengurangi value dari asset. Control berfungsi untuk melindungi aset, dan control berfungsi untuk mengurangi tingkat kesuksesan dari threat

## Threat Model

- Cara untuk mengidentifikasi, mengkomunikasikan, dan memahami threats dan mitigasi pada konteks melindungi asset
- Threat model berisi:
	- Deskripsi dari subjek yang dimodelkan (benda, orang atau sistem yang akan dimodelkan) (asset identification)
	- Asumsi yang harus dicek di kemudian hari karena threat bisa saja berubah
	- Potensi threat ke sistem (threat identification, structuring, vulnerability analysis)
	- Action yang bisa dilakukan untuk memitigasi threat (risk based, trade-off)
	- Validasi model dan threat, dan verifikasi apakah hal2 yang dilakukan sudah tepat terhadap threat yang akan datang

- Threat model biasanya dipakai untuk memodelkan security threats. Sebaiknya threat modelling dilakukan saat melakukan desain arsitektur, implementasinya, dsb. Bisa saja setiap tahap muncul threat baru
- Komponen dari threat model:
1. Asset (yang akan kita protect)
2. Vulnerabilities (kelemahan dari sistem)
3. Threat (kemungkinan terjadinya hal yang tidak diinginkan/ancaman terjadinya incident)
4. Exploit/attack (serangan, ketika threat terjadi)
5. Countermeasures (tindakan atau hal yang dilakukan untuk menghilangkan vulnerabilities atau mengurangi attack surface atau dampak dari attack)

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

1. [STRIDE](#stride)
2. [Attack tree](#attack-tree)
3. Attack surface
4. Kill chain
5. Diamond method
6. Abuse case
7. Misuse case

### STRIDE

- Spoofing: problem of authentication (a situation in which a person or program successfully identifies as another by falsifying data, to gain an illegitimate advantage)
- Tampering: problem of integrity (manipulation of data)
- Repudiation: problem of non-repudiation (seseorang bisa menyangkal kalau dia enggak melakukan sesuatu)
- Information Disclosure: problem of confidentiality (informasi leaked)
- Denial of Service: problem of availability (membuat service ga bisa diakses)
- Elevation of privilege: problem of authorization (a process in which a user or process in a system or application gains higher privileges than originally intended)

Message digest: [https://www.geeksforgeeks.org/computer-networks/message-digest-in-information-security/](https://www.geeksforgeeks.org/computer-networks/message-digest-in-information-security/)

### Attack Tree {#attack-tree}

![cybersecurity_20251221-203201.png](cybersecurity_20251221-203201.png)

- Evaluasi based on various threats.
- Satu atau lebih vulnerabilities bisa dimanfaatkan untuk membangun sebuah attack tree
- Dibangun berdasarkan dekomposisi threat yang besar menjadi threat-threat yang kecil
- Sebuah serangan menunjukkan berbagai vulnerabilities dan compromises
- Akar pohon menunjukkan insiden atau kehancuran yang terjadi
- Setiap pohon menunjukkan CARA bagaimana attacker menyebabkan suatu insiden. Tiap path pada attack tree menunjukkan attack yang unik dan berbeda pula. Sebuah sistem bisa memiliki forest (numerous trees) yang menunjukkan kumpulan attack tree
- Attack tree bisa didekomposisi memakai AND-decomposition (semua path harus berhasil dulu baru attack bisa dilaksanakan) atau OR-decomposition (salah satu path cukup)

[Replay attack](#replay-attack): A replay attack is a cyberattack where a malicious actor intercepts a valid data transmission, such as login credentials or session tokens, and then retransmits it to deceive a system into granting unauthorized access or performing an unauthorized action.

### Attack Surface

If you want to attack an enemy target, the target must be visible or exposed

- Attack surface: bagian dari program, kode, interface, service, protocol, sistem dkk yang exposed ke public dan bisa diakses/di-attack oleh orang. Misalnya API
- Dengan attack surface, kita bisa tau top level tackle dan vulnerability nya, tapi dengan attack tree, kita bisa melihat ketergantungan sebuah vulnerability atau threat terhadap insiden

- Relative attack surface is a comparative measure, such as Howard's Relative Attack Surface Quotient (RASQ), that quantifies the "attackability" of a system by measuring its exposed entry points, channels, protocols, and access rights, enabling a comparison between different versions of a system or between separate systems to identify which is more vulnerable. It provides a way to assess how much more difficult or easier it is to attack one system versus another based on its components and interfaces that are available to potential threats
- Bisa saja saat kita mau meminimalisir attack surface, kita malah menambahkan attack surface lain karena menambah library atau fungsi baru. Makanya usahakan kita semakin menutup attack surface, bukan menambahkan

### Abuse and Misuse Case

Abuse and misuse cases are security techniques that document how an application or system could be used maliciously or incorrectly to exploit vulnerabilities, leading to a negative outcome for the system or users. They involve defining scenarios from an attacker's perspective, contrasting with traditional "use cases" that focus on legitimate operations, to uncover security weaknesses and drive the design of robust security controls and countermeasures.

#### Misuse Cases

Penyalahgunaan sistem namun sebetulnya tidak ada larangan untuk melakukan hal tersebut. Contoh: pas lagi rebutan promo olshop, kita memakai bot. Ga ada larangan, tapi itu penyalahgunaan

#### Abuse Cases

- Penyalahgunaan sistem yang merusak atau mengganggu sistem. Contoh: DDoS, hijacking
- Contoh: nge-hack ke akun orang lain

# Firewall

## Firewall Rules pfSense

## IPTables

Setup maintain dan inspect tabel dari paket filter rules untuk IP di Linux Kernel

## Virtual Firewall

- Berjalan pada lingkungan virtual untuk melindungi traffic jaringan east-west dan north-south traffic

## TC (Traffic Control)

- Sistem mekanisme antrian untuk mengatur cara paket diterima dan dikirimkan pada perangkat jaringan

### TLS Verification Process

1. Verifikasi signature
2. Verifikasi CA
3. Verifikasi expiration
4. Verifikasi revocation

# Access Control

# Authorization Framework

## SAML

![](cybersecurity_20251221-211801.png)

### SSO

![](cybersecurity_20251221-212504.png)

## OAuth2.0

- Dulu ketika kita akan mengakses sebuah aplikasi atau meminta data yang disimpan di website Y dari website X, maka jika X pengen akses sebagian data kita di aplikasi Y, kita harus login menggunakan akun dan password kita di akun Y via website X, memaksa aplikasi X untuk mengetahui password dari aplikasi Y.
- Masalah yang muncul dari mekanisme client-server normal dan mekanisme requesting access biasa adalah:
 1. Third party app yang meminta data harus menyimpan kredensial kita
 2. Server harus menyediakan mekanisme autentikasi memakai password
 3. Third party app ketika telah mendapatkan password dan akses ke akun kita, memiliki akses tidak terbatas terhadap resources
 4. Tidak bisa revoke atau cabut akses third-party terhadap server
 5. Kalau data password di third party ter-compromise, password kita di server juga compromised dan begitupun dengan data-datanya
- OAuth mengatasi masalah ini dengan memperkenalkan authorization layer dan memisahkan role dari client dengan resource owner, di mana **client** (client di sini siapapun yang ingin mengakses **server**, bisa saja third party app) melakukan **request access** ke **resource controlled** dan di-hosting oleh **resource server** dan diberikan set of credential yang diberikan oleh **resource owner**.
- Jadi dengan ini

### Pihak Terlibat

- Sebagai contoh, kita menyimpan foto-foto kita di Google Drive. Lalu kita berniat print foto-foto tersebut melalui online printing application bernama HPrinter. Instead of kita nge-upload foto-foto kita manual ke HPrint, kita bisa kasih akses ke sebagian foto kita di Google Drive kepada HPrint.
- Dalam hal ini, kita sebagai pemilik asli data adalah **resource owner**
- Google Drive adalah **resource server**, yaitu tempat yang menyimpan data kita
- HPrint adalah **client**, pihak luar yang ingin mengakses data kita
- Lalu bagaimana cara kita memberikan token kepada HPint supaya kita bisa membuat HPrint mengakses foto-foto di Google Drive kita? Di sinilah ada **authorization server**, yaitu server yang bertugas memberikan akses token ke client yang akan mengakses data kita

### Alur

- Kita (user) menginstruksikan HPrint (client) untuk print foto $\rightarrow$ HPrint meminta akses ke Google Auth agar bisa akses foto yang ingin kita print dari Google Drive, dengan parameter permintaan client ID dari HPrint dan permission/scope yang diminta $\rightarrow$ Google Auth request permission dari kita untuk memberikan HPrint akses yang diminta scope-nya $\rightarrow$ Kita memberikan akses dan menyetujui permintaan Google Auth $\rightarrow$ Google Auth memberitahukan izin diterima kepada HPrint $\rightarrow$ HPrint meminta accesss token ke Google Auth $\rightarrow$ Google Auth memberikan akses token ke HPrint $\rightarrow$ HPrint bisa mengakses foto di Google Drive

### OpenID

![](cybersecurity_20251221-211451.png)

# Digital Forensic

# Security Monitoring and Analytics

## SOC, SIEM, SOAR

1. **SIEM**: Security Information and Event Management
 - Security event analysis tools untuk membantu investigasi, early threat detection, dan incident response
 - Platform sentralisasi log dari banyak sumber seperti server, firewall, dll
 - Digunakan oleh tim SOC
 - Kelemahan: Deteksi cenderung reaktif, Respons masih manual (tanpa SOAR), deteksi berbasis pattern/rule
 - Contoh: Microsoft Sentinel, IBM QRadar

2. **SOC**: Security Operation Center
 - Tim/fungsi organisasi yang bertanggung jawab untuk monitoring, detection, analysis, response, dan recovery terhadap insiden keamanan.
 - Semua tool (SIEM, SOAR, EDR, XDR, dll.) digunakan oleh SOC

3. **SOAR**: Security Orchestration, Automation, and Response
 - Platform otomasi dan orkestrasi respons insiden
 - Hubungan dengan SIEM: SIEM > deteksi dan alert, SOAR: eksekusi respons
 - Contoh: IBM Resilient, Tines

## XDR, EDR, MDR

1. **EDR**: Endpoint Detection and Response
 - Hanya deteksi dan react terhadap suspicious behaviour dan malicious activity di level endpoint
2. **XDR**: Extended Detection and Response
 - Deteksi dan respons cyberthreat di seluruh security stack
3. **MDR**: Managed Detection and Response
 - Sebuah layanan, bukan produk
 - Mengelola tools dan menyediakan analisis SOC
 - Umumnya dilakukan oleh eksternal team

## IDS

- **Intrusion Detection System**
- Sistem untuk mendeteksi aktivitas mencurigakan atau serangan pada jaringan atau host dengan analisis traffic atau event tanpa melakukan respons aktif

### Network IDS

- Memantau traffic jaringan dari seluruh device yang terhubung ke network

### Host IDS

- Monitor aktivitas dari sebuah host dan scan seluruh security policy violations dan aktivitasnya

### Hybrid IDS

- Kombinasi host-based dan network-based. Jadi monitor di host system dan monitor network traffic
- Bisa monitor sistem dan events aplikasi dan verifikasi integritas file system seperti host-based IDS, tapi hanya bisa menyajikan analisis network traffic ke device tersebut saja

![](cybersecurity_20251222-063246.png)

## UEBA

- **User and Entity Behaviour Analysis**
- Pengecekan menggunakan machine learning, analisis perilaku dari user untuk melihat tindakan perilaku mencurigakan atau abnormal user atau device
- Cara kerja: ambil dan analisis data dari berbagai sumber untuk membuat baseline dari normal behaviour, kemudian ML menyaring dan meng-enhance baseline, dan nanti digunakan untuk mendeteksi deviasi atau tindakan user yang jauh dari baseline
- Sumber data: network equipment, security tools, authentication database, threat intelligence feeds
- Use case: insider threat detection, monitoring device (servers, routers, IoT devices)

# Software Security

- Berbeda dengan network security, di sini kita fokusnya mengamankan custom code yang men-deliver aplikasi, mengamankan dependency, libraries, sistem, dan server aplikasi
- Setiap layer dari sebuah sistem harus diamankan, bukan hanya network dan infrastructure nya saja, tapi juga aplikasinya, dari segi kode, implementasi, dll

- Contoh kasus: simple web server
1. `main.java`
```java
/* This method is called when the program is run from the command
line. */
public static void main (String argv[]) throws Exception {
	/* Create a SimpleWebServer object, and run it */
	SimpleWebServer sws = new SimpleWebServer();
	sws.run();
}
```

2. `SimpleWebServer.java`
```java
public class SimpleWebServer {
/* Run the HTTP server on this TCP port. */
	private static final int PORT = 8080;
	/* The socket used to process incoming connections
	from web clients */
	private static ServerSocket dServerSocket;
	
	public SimpleWebServer () throws Exception {
		dServerSocket = new ServerSocket (PORT);
	}
	
	public void run() throws Exception {
		while (true) {
			/* wait for a connection from a client */
			Socket s = dServerSocket.accept();
		}
		/* then process the client's request */
		processRequest(s);
	}
	
	/* Reads the HTTP request from the client, and
	responds with the file the user requested or
	a HTTP error code. */
	public void processRequest(Socket s) throws Exception {
		/* used to read data from the client */
		BufferedReader br =
		new BufferedReader (new InputStreamReader (s.getInputStream()));
		/* used to write data to the client */
		OutputStreamWriter osw = new OutputStreamWriter (s.getOutputStream());
		/* read the HTTP request from the client */
		String request = br.readLine();
		String command = null;
		String pathname = null;
		
		/* parse the HTTP request */
		StringTokenizer st = new StringTokenizer (request, " ");
		command = st.nextToken();
		pathname = st.nextToken();
		if (command.equals("GET")) {
			/* if the request is a GET
			try to respond with the file
			the user is requesting */
			serveFile (osw,pathname);
		}
		else {
			/* if the request is a NOT a GET,
			return an error saying this server
			does not implement the requested command */
			osw.write ("HTTP/1.0 501 Not Implemented\n\n");
		}
		/* close the connection to the client */
		osw.close();
	}
	
	public void serveFile (OutputStreamWriter osw, String pathname) throws Exception {
		FileReader fr=null;
		int c=-1;
		StringBuffer sb = new StringBuffer();
		/* remove the initial slash at the beginning
		of the pathname in the request */
		if (pathname.charAt(0)=='/')
			pathname=pathname.substring(1);
		/* if there was no filename specified by the
		client, serve the "index.html" file */
		if (pathname.equals(""))
			pathname="index.html";
		/* try to open file specified by pathname */
		try {
			fr = new FileReader (pathname);
			c = fr.read();
		}
		catch (Exception e) {
			/* if the file is not found,return the
			appropriate HTTP response code */
			osw.write ("HTTP/1.0 404 Not Found\n\n");
			return;
		}
		/* if the requested file can be successfully opened and read, then return an OK response code and send the contents of the file */
		osw.write ("HTTP/1.0 200 OK\n\n");
		while (c != -1) {
			sb.append((char)c);
			c = fr.read();
		}
		osw.write (sb.toString());
	}
}
```

- Analisis kode kasus:
1. 
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

## Man in The Middle Attack (MITM) {#mitm}

## Flip-Bit Attack {#flip-bit-attack}

- Serangan terhadap kriptografi [stream cipher](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.rv1ybovolip1)
- Mengubah bit tertentu sehingga hasil dekripsinya berubah (dengan membolak-balikkan value bit nya)
## Injection

- Mengelabui aplikasi supaya bisa mengeksekusi atau memasukkan unitended (malicious atau tidak sesuai peruntukannya) command atau data, ke interpreter-nya
- Contoh paling lazim: **SQL Injection**
### SQL Injection

- Paling lazim, namun sebetulnya mudah dihindari
- Dampaknya severe, seluruh database bisa diakses atau dimodifikasi
- Tahapan-tahapannya biasanya:
1. Application presents a form to the attacker
2. Attacker sends an attack in the form data
3. Application forwards attack to the database in a SQL query
4. Database runs query containing attack and sends encrypted results back to application
5. Application decrypts data as normal and sends results to the user

- Pada umumnya database berjalan di port-port ini:
	- TCP/1433 in Microsoft SQL Server
	- TCP/1521 in Oracle
	- TCP/523 in IBM DB2
	- TCP/3306 in MySQL
- Karakteristik aplikasi atau sistem yang memiliki celah seperti ini:
	- Mengambil user input
	- Tidak melakukan validasi terhadap user input
	- User-input data dieksekusi atau dimasukkan ke query database
	- Menggunakan mekanisme string concatination atau replacement untuk membangun query
# LAMPIRAN: Threat Vectors

Same wifi name and password: orang2 bisa ketipu dengan wifi dan password yang sama

# LAMPIRAN: Tools

[https://builtwith.com/](https://builtwith.com/)

# Istilah

GDPR: mengatur kepemilikan atas hak data pribadi (UU PDP di Indonesia)
