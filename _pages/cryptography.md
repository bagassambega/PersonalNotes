---
layout: page-with-toc
title: Cryptography
description: Cryptography
permalink: /cryptography/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/cryptography.md
---

# Perkenalan {#perkenalan-kriptografi}

- Kriptografi: Ilmu pengamanan data

- Prinsip: confidentiality (memastikan tidak ada orang lain yang bisa buka pesannya atau menyadap), autentikasi (berasal dari pihak yang asli), integritas (tidak dimanipulasi), tidak ada penyangkalan (tidak bisa disangkal kalau pesan dikirim oleh pengirim dan diterima oleh penerima)

- Kriptografi: cara menyembunyikan pesan secara rahasia

- **Plaintext** (P): teks yang mau dienkripsi

- **Ciphertext** (C): plaintext yang sudah dienkripsi

- **Key** (K): kunci buat melakukan enkripsi

- **Kriptogram**: Potongan <term href="/PersonalNotes/glossary#ciphertext">ciphertext</term>

- **Cryptanalysis**: Analisis untuk mencari kunci/plaintext dari ciphertext yang diketahui, tapi plaintext dan key nya ga diketahui

# Dasar Matematika

- Teori bilangan: [matematika diskrit]({{ "/discrete-math/" | relative_url }})

- Probabilitas dan statistik

- Kompleksitas algoritma: [matematika diskrit]({{ "/discrete-math/" | relative_url }})

- Teori informasi
  Cabang ilmu yang mempelajari kuantisasi, penyimpanan, transmisi, dan pengolahan informasi
  Contoh kuantisasi: 1 bit untuk mengkodekan jenis kelamin, 3 bit untuk mengkodekan nama hari (7 hari, butuh 3 bit = 0-7)

- Entropi sistem kriptografi adalah ukuran kunci, K.

![Entropi](https://i.imgur.com/ttx5cCC.png)

- Misal, sistem kriptografi dengan kunci 64-bit mempunyai entropi 64 bit.

- Makin besar entropi, makin sulit memecahkan cipherteks.

![Contoh entropi](https://i.imgur.com/VSVKRY6.png)

- Aljabar abstrak

# Cipher Klasik {#cipher-klasik}

## Klasifikasi Cipher {#klasifikasi-cipher-klasik}

Berdasarkan tekniknya:

- Cipher substitusi: enkripsi dekripsi ngeganti huruf-hurufnya

- Cipher transposisi: enkripsi dekripsi dengan mengganti dan scramble arah baca hurufnya. Misal: nge-transpose matrix of word

- Product cipher/super-enkripsi = cipher substitusi + cipher transposisi

### Cipher Substitusi {#cipher-substitusi}

- **Monoalphabetic substitution cipher** (cipher abjad tunggal): Suatu plainteks dienkripsi pake huruf yang sama semua. Contoh: [Caesar Cipher](#caesar-cipher)

- **Homophonic substitution cipher** (cipher substitusi homofonik): Setiap huruf plaintext diganti dengan salah satu huruf atau pasangan huruf yang mungkin. Jadi hubungannya one to many. Misal huruf E dikodekan menjadi AB, TQ, YT, UX (satu bisa jadi banyak saat enkripsi, tapi dekripsi hanya bisa menghasilkan satu. AB hanya bisa menjadi hasil enkripsi satu huruf)

- **Polyalphabetic substitution cipher** (cipher abjad majemuk): Setiap huruf plainteks diganti menggunakan kunci yang berbeda. Contoh: [Vigenere Cipher](#vigenere-cipher)

![Contoh polyalphabetic substitution](https://i.imgur.com/nFrPQFa.png)

- **Polygram substitution cipher** (cipher substitusi poligram): Kumpulan huruf plaintext diganti dengan kumpulan huruf plaintext lagi. Misalnya AS → RT, BY → SL

### Cipher Transposisi {#cipher-transposisi}

- Mengubah posisi huruf pada plaintext dengan melakukan transpose terhadap rangkaian huruf di dalam plaintext

- Biasa disebut cipher permutasi

#### Columnar Transposition Cipher {#columnar-transposition-cipher}
![Columnar cipher transposition 1](https://i.imgur.com/JGyzX8h.png)
![Columnar cipher transposition 2](https://i.imgur.com/w7i1zuB.png)

#### Rail Fence Transposition Cipher {#rail-fence-transposition-cipher}
![Rail fence transposition cipher](https://i.imgur.com/8r3plV3.png)

### Super-enkripsi {#super-enkripsi}

- Gabungan cipher substitusi dan transposisi (product cipher)

- Alur: pesan dienkripsi pakai cipher substitusi → baru enkripsi pakai transposisi. Bisa sebaliknya juga

![Contoh super cipher](https://i.imgur.com/os0WKK1.png)

## Caesar Cipher {#caesar-cipher}

- Cipher abjad tunggal, satu huruf diganti satu huruf dengan cara digeser nilainya sejauh k huruf. Misal k = 2, huruf A → C, B → D, Z → B

- Bisa juga digesernya ga berpola pakai tabel substitusi custom. Kemungkinan banyak tabel substitusi: 26!

### Enkripsi {#caesar-cipher-enkripsi}

- Kalau pakai k (bukan tabel substitusi), enkripsi:  
    C = (P + k) mod 26

- Kalau pakai tabel substitusi, misal tabelnya:

![Contoh tabel substitusi](https://i.imgur.com/G4mqSka.png)

Kata “AKU” dienkripsi jadi “IWN”

### Dekripsi {#caesar-cipher-dekripsi}

- Kalau pakai k (bukan tabel susbtitusi), dekripsi:

P = (C - k) mod 26

- Kalau pakai tabel substitusi, misal tabelnya:  

![Contoh tabel substitusi](https://i.imgur.com/G4mqSka.png)

Ciphertext “IWN” didekripsi jadi “AKU”

### Cryptanalysis {#caesar-cipher-cryptanalysis}

Kalau ga tau key ataupun plaintext, kita bisa menerka/menganalisis plaintext nya apa menggunakan:

#### Frequency Analysis {#caesar-cipher-frequency-analysis}

- Karena satu karakter plaintext hanya bakal dikodekan ke satu karakter ciphertext saja (hasilnya pasti sama), kita bisa menebak karakter itu apa berdasarkan frekuensi kemunculannya

- Misal k = 2, maka kata “BACA” dienkripsi jadi “DCEC”, dan kita lihat karakter A pasti dienkripsi jadi C

- Semakin sering karakter muncul di ciphertext, berarti semakin sering juga karakter itu muncul di plaintext

- Kita bisa tebak bahwa: kemungkinan karakter yang paling sering muncul di suatu ciphertext itu adalah karakter yang paling sering muncul di suatu bahasa

- Misalnya suatu teks bahasa Inggris dienkripsi, dan dari analisis yang sudah ada, karakter E, T, H, dan A adalah karakter yang paling sering muncul di teks bahasa Inggris. Setelah dienkripsi, karakter yang paling sering muncul adalah V, C, Z, dan G. Maka kemungkinan E dikodekan jadi V, T jadi C, dst

- Lihat: lampiran [most frequent letters](#mosto-frequent-n-gram)

## Vigenere Cipher {#vigenere-cipher}

- Cipher abjad-majemuk ([polyalphabetic substitution cipher](#cipher-substitusi))

- Menggunakan matriks Vigenere untuk enkripsi dan dekripsi, namun sebetulnya sama seperti Caesar, bisa memakai (n + p) mod 26

![Tabel Vigenere](https://i.imgur.com/NN7u4c3.png)

- Ciri: key defined, tapi misalkan plaintext lebih panjang daripada key, maka key nya diulang-ulang sampai bisa mengenkripsi seluruh karakter di plaintext

- Misal: key = test, plaintext = halohalobandung, maka untuk enkripsi key nya adalah testtesttesttes

### Enkripsi {#vigenere-cipher-enkripsi}

- Enkripsi karakter per karakter

- Dapat menggunakan formula substitusi biasa atau matriks Vigenere

- Formula: Misal diketahui plainteks ***P*** terdiri dari kumpulan karakter $p_1, p_2, p_3, …$ dan key ***K*** terdiri dari $k_1, k_2, k_3, …,$ maka ciphertext ***C*** = $c_1, c_2, c_3, …,$ di mana $c_i = p_i + k_i \pmod{26}$.

- Kalau pakai matriks Vigenere, tinggal cocokkin aja plainteks atas, dipakein kunci yang di kiri

- Seandainya panjang key < panjang plaintext, maka key diulang sampai sepanjang plaintext. Misal:

Key: kunci

Plainteks: hidupjokowi

Maka kunci yang digunakan: kuncikuncik

### Dekripsi {#vigenere-cipher-dekripsi}

- Dekripsi karakter per karakter

- Formula: Misal diketahui ciphertext ***C*** dari kumpulan karakter $c_1, c_2, c_3, …,$ dan key ***K*** terdiri dari $k_1, k_2, k_3, …,$ maka plaintext ***P*** = $p_1, p_2, p_3, …,$ di mana **$p_i = (c_i - k_i) \pmod{26}$**

- Kalau kata kunci lebih pendek dari plaintext, key diulang sampai sepanjang plaintext seperti pada [enkripsi](#vigenere-cipher-enkripsi)

### Cryptanalisis {#vigenere-cipher-cryptanalysis}

#### Kasiski Method {#vigenere-cipher-kasiski-method}

- Pola kunci bisa ditemukan dengan menemukan perulangan huruf atau beberapa huruf di ciphertext

- Seperti yang kita tahu, kalau di bahasa Inggris ada perulangan kata yang selalu ada, misalnya kata THE, EN, dll

- Dan untuk kuncinya juga terus-terusan diulang, misal key nya SONY, nanti key nya jadi SONYSONYSONY…

- Ada kemungkinan menghasilkan ciphertext yang memiliki kriptogram berulang, misal di plaintext ada THEYSHOTTHEM, terus ketemu ciphertext SONYSONYSONY, trigram THE di “THEY” dan “THEM” bakal dienkripsi oleh key “SON”, jadi hasilnya sama

![Contoh Kasiski method](https://i.imgur.com/0oqx5l8.png)

- Kalau kita lihat, jarak antara perulangan kriptogram “CSASTP” di ciphertext itu 16 huruf (antara C dengan C nya), sementara itu kita tau kalau kuncinya itu perulangan dari key 4 karakter. 16 merupakan perulangan/faktor dari 4. Makanya ketika ada perulangan kriptogram dengan jarak *n*, ada **kemungkinan** key nya itu salah satu faktor dari *n*

- Metode menemukan kemungkinan panjang key disebut **Kasiski Method**

- **Algoritma**:

	1. Tentukan semua kriptogram berulang yang ada di ciphertext
	
	2. Hitung jarak antar kriptogram yang berulang
	
	3. Hitung semua faktor dari jarak tersebut
	
	4. Tentukan irisan dari semua faktor pembagi tersebut. Nilai irisan tersebut kemungkinan adalah panjang kunci

- Contoh:

![Contoh Kasiski Method](https://i.imgur.com/9mYChq2.png)

#### Frequency Analysis {#vigenere-cipher-frequency-analysis}

- Setelah menemukan kemungkinan panjang kunci, tinggal cari kemungkinan value key nya apa

- Bisa aja pake exhaustive search (bruteforce), tapi lebih gampang frequency analysis

- Metodenya sama dengan frequency analysis seperti di [Caesar Cipher](#caesar-cipher-frequency-analysis)

- Algoritma:

1. Misalkan panjang kunci yang berhasil ditemukan kemungkinannya adalah n. Setiap huruf kelipatan ke-n plaintext pasti dienkripsi pake huruf yang sama

2. Kelompokkan setiap huruf ke-n bersama-sama sehingga menjadi n-buah potongan pesan yang baru

3. Masing-masing pesan ini dienkripsi memakai huruf yang sama semua, jadi metode cryptanalysis untuk tiap pesan pakai [monoalphabetic substitution](#cipher-substitusi), sama dengan Caesar Cipher

4. Cari huruf-huruf atau kriptogram yang paling sering muncul di satu atau setiap pesannya, terus tinggal try and error

- Contoh:

![Contoh frequency analysis vigenere](https://i.imgur.com/hJgpeEp.png)

![Contoh freq analysis vigenere](https://i.imgur.com/SXmpLnz.png)

![Contoh freq analysis Vigenere](https://i.imgur.com/s2uyDjU.png)

### Varian {#varian-vigenere-cipher}

#### Full Vigenere Cipher {#full-vigenere-cipher}

- Matriks Vigenere juga teracak, tidak berurutan hasil enkripsinya

![Matriks full vigenere](https://i.imgur.com/L09onmL.png)

#### Auto-Key Vigenere Cipher {#auto-key-vigenere-cipher}

- Kalau panjang key < panjang plaintext, si key disambung dengan plaintext itu sendiri

![Auto key vigenere](https://i.imgur.com/9nmQUjg.png)

#### Running-Key Vigenere Cipher {#running-key-vigenere-cipher}

- Kunci diambil dari teks lain yang juga punya makna. Kalau kunci kepanjangan, dipotong supaya panjangnya sama dengan plaintext

![Running key vigenere](https://i.imgur.com/IMjT1lv.png)

## Playfair Cipher {#playfair-cipher}

- Polygram cipher

- Enkripsi bigram (dua huruf-dua huruf)

### Enkripsi {#playfair-cipher-enkripsi}

- Kunci kriptografi berbentuk bujur sangkar ukuran 5x5 (25 buah) dengan huruf J dibuang

![Matriks playfair](https://i.imgur.com/dPkjtHC.png)

- Kunci juga bisa berasal dari input, misalnya kata kuncinya JALAN GANESHA SEPULUH

1. Buang huruf J jika ada dan hilangkan perulangan huruf: ALAN GANESHA SEPULUH → ALNGESHPU

2. Tambahkan sisa huruf yang belum ada (berurutan alfabetikal: ALNGESHPUBCDFKMOQRTVWXYZ

3. Masukkan ke bujur sangkar kunci (terurut penuhin satu baris dulu)

![Matriks playfair](https://i.imgur.com/WtP8I5d.png)

- Langkah enkripsi:

1. Plaintext dihapus semua spasinya

2. Ganti semua huruf j dengan i

3. Tulis plaintext dalam bentuk pasangan dua huruf (bigram)

4. Jika ada suatu bigram tersusun atas huruf yang sama, sisipkan x di tengahnya

5. Jika jumlah huruf ganjil, tambahkan huruf x di akhir

6. Algoritma:

- Jika dua huruf terdapat pada baris kunci yang sama maka tiap huruf diganti dengan huruf di kanannya (bersifat siklik).

![Matriks siklik 1](https://i.imgur.com/ATRu9OA.png)

- Jika dua huruf terdapat pada kolom yang sama maka tiap huruf diganti dengan huruf di bawahnya

![Matriks siklik 2](https://i.imgur.com/vFr9jrF.png)


- Jika dua huruf tidak terletak di baris dan kolkom yang sama, maka:

1. Huruf ciphertext pertama berasal dari huruf yang menjadi titik perpotongan baris huruf pertama dengan kolom huruf kedua

2. Huruf ciphertext kedua berasal dari huruf yang menjadi titik perpotongan kolom huruf pertama dengan baris huruf kedua

![Matriks perpotongan playfair](https://i.imgur.com/na7Sso7.png)

- Contoh: plaintext ‘temui ibu nanti malam’, kunci: ‘jalan ganesha sepuluh’

1. Hapus semua karakter j di plaintext dan hapus spasi, bentuk jadi bigram

`te mu ii bu na nt im al am`

2. Ada huruf berulang ii, sisipkan x di tengahnya

`te mu ix ib un an ti ma la m`

3. Bigram terakhir ganjil, kita tambah huruf x di akhir

4. Gunakan metode algoritma matriks seperti di atas

![Contoh playfair enkripsi](https://i.imgur.com/QywIf6y.png)

### Dekripsi {#playfair-cipher-dekripsi}

1. Jika dua huruf terdapat pada baris bujursangkar yang sama maka tiap huruf diganti dengan huruf di kirinya.

2. Jika dua huruf terdapat pada kolom bujursangkar yang sama maka tiap huruf diganti dengan huruf di atasnya.

3. Jika dua huruf tidak pada baris yang sama atau kolom yang sama, maka huruf pertama diganti dengan huruf pada perpotongan baris huruf pertama dengan kolom huruf kedua. Huruf kedua diganti dengan huruf pada perpotongan kolom huruf pertama dan baris huruf kedua

4. Buanglah huruf X yang tidak mengandung makna.

### Cryptanalysis {#playfair-cipher-cryptanalysis}

#### Frequency Analysis {#playfair-cipher-frequency-analysis}

- Pakai metode bigram untuk lihat bigram mana yang paling sering muncul

- Ukuran poligram di dalam Playfair cipher tidak cukup besar, hanya dua huruf sehingga Playfair cipher tetap tidak aman.

- Kelemahan lainnya, bigram dan kebalikannya (misal AB dan BA) akan didekripsi menjadi pola huruf plainteks yang sama (misal RE dan ER). Di dalam bahasa Inggris terdapat banyak kata yang mengandung bigram terbalik seperti REceivER dan DEpartED.

## Affine Cipher {#affine-cipher}

### Enkripsi {#affine-cipher-enkripsi}

- Enkripsi: $C \equiv mP + b \pmod n$, di mana *n* adalah ukuran alfabet (biasanya 26), *m* adalah bilangan bulat yang [relatif prima]({{ "/discrete-math#relatif-prima" | relative_url }}) terhadap *n*, dan *b* adalah jumlah pergeseran

![Contoh enkripsi affine cipher](https://i.imgur.com/HFvlYTF.png)

- [Caesar cipher](#caesar-cipher) adalah bentuk khusus dari [Affine cipher](#affine-cipher) dengan *m* = 1

### Dekripsi {#affine-cipher-dekripsi}

- $P \equiv m^{-1} \; (C - b) \pmod n$, di mana m-1 adalah [inversi]({{ "/discrete-math#invers-modulo" | relative_url }}) m (mod n)

- Untuk mendekripsi dibutuhkan nilai *m* dan *b*

### Cryptanalysis {#affine-cipher-cryptanalysis}

#### Known Plaintext Attack {#affine-cipher-known-plaintext-attack}

- Untuk mengetahui nilai *m* dan *n*, diperlukan setidaknya dua [kekongruenan]({{ "/discrete-math#kekongruenan-modulo" | relative_url }}) variabel:

$$C_1 \equiv mP_1 + b \pmod n$$

$$C_2 \equiv mP_2 + b \pmod n$$

- Eliminasi jadi $(C_1 + C_2) = (P_1 + P_2) \, m \pmod n$

- Setelah solve *m*, substitusi dan cari nilai *n*

## Hill Cipher {$hill-cipher}

### Enkripsi {#hill-cipher-enkripsi}

- Menggunakan kunci berbentuk matriks

- Melakukan enkripsi untuk setiap *m* buah karakter, menggunakan kunci berbentuk matriks persegi berukuran m x m

- Formula:  **$C = KP \pmod{26}$**

- Misal enkripsi setiap 3 huruf (m = 3), maka persamaannya:

![Contoh enkripsi Hill Cipher](https://i.imgur.com/CdqondN.png)

### Dekripsi {#hill-cipher-dekripsi}

- Formula: $P = K^{-1}C \pmod{26}$

- Perlu mencari [invers matriks]({{ "/discrete-math#invers-modulo" | relative_url }})

- Jika salah satu nilai ***P*** atau $K^{-1}$ lebih dari 26, modulo dulu dengan 26

![Contoh dekripsi Hill cipher](https://i.imgur.com/vakh0AX.png)

![Contoh dekripsi Hill Cipher](https://i.imgur.com/DhBAUSf.png)

- Contoh: dekripsi `LNS` (lihat contoh [enkripsi](#hill-cipher-enkripsi)) memakai matriks ***K*** yang sama

### Cryptanalysis {#hill-cipher-cryptanalysis}

#### Known Plaintext Attack {#hill-cipher-known-plaintext-attack}

- Kita cukup temukan sebuah known plaintext dan hasil enkripsinya untuk nanti menemukan key-nya

- Misal known plaintext adalah serangkaian karakter dengan panjang *n*, maka **kemungkinan** ukuran *m* adalah *m* yang memenuhi $m \times m \le n$

- Coba semua kemungkinan dengan memakai *m* dari 1..*m*. Jika tidak ada yang memenuhi, coba temukan plaintext dan ciphertext yang lebih besar

- Ingat bahwa $C = KP$, maka **$K = CP^{-1} \pmod{26}$**

- Contoh: [13522071_13522091_Tucil1_IF4020.pdf](https://drive.google.com/file/d/11VvgWBMuAUB-hES9bah-fPluB7i13TA5/view?usp=sharing)

## Enigma Cipher {#enigma-cipher}

# One Time Pad dan Keamanan Kriptografi {otp-dan-keamanan-kriptografi}

## One Time Pad {#one-time-pad}

### Unbreakable Cipher {#unbreakable-cipher}

- **Unbreakable cipher** adalah klaim yang disematkan kriptografer terhadap algoritma kriptografi yang diciptakannya

- Namun faktanya kebanyakan algoritma kriptografi yang ditemukan itu breakable cipher

- Syarat cipher unbreakable:

1. Kunci harus benar-benar acak (truly random) (tidak dapat diprediksi nilainya dan tidak dapat diulang pembangkitannya)

2. Panjang kunci = panjang plaintext

3. Kunci hanya boleh digunakan sekali, tidak boleh digunakan ulang untuk mengenkripsi pesan yang lain

- Karena point 1 dan 2, ciphertext yang dihasilkan pasti berbeda

### One Time Pad {#otp}

- Satu-satunya algoritma kriptografi **sempurna aman** ([perfect secrecy](#unbreakable-cipher)) sehingga tidak dapat dipecahkan
- Panjang key = panjang plaintext
- Algoritma enkripsi-dekripsi: [Vigenere cipher](#vigenere-cipher)
- Setelah kunci terpakai, kunci di-destroy
- Pengirim dan penerima harus memiliki salinan pad yang sama

- Kelebihan:

1. Kunci acak + plaintext tidak acak = ciphertext acak

2. Hanya terdapat satu kunci yang memetakan plaintext ke ciphertext (known plaintext attack, Kasiski method tidak berpengaruh)

- Kekurangan:

1. Tidak efisien, panjang kunci = panjang pesan

2. Kunci tidak bisa dibangkitkan oleh penerima

## Serangan terhadap Kriptografi {#serangan-terhadap-kriptografi}

- Keseluruhan point dari kriptografi adalah menjaga kerahasiaan pesan atau kunci dari penyadap ([eavesdropper]({{ "/cybersecurity/#eavesdropper" | relative_url }})) atau dari kriptanalis (cryptanalyst)

- Serangan adalah usaha yang dilakukan cryptanalysis untuk menemukan kunci atau menemukan plaintext dari ciphertext-nya

- **Prinsip Kerchoff**: semua algoritma kriptografi harus publik, kuncinya yang privat

- Lebih lanjut: [Type of Attack - Cybersecurity]({{ "/cybersecurity#type-of-attack" | relative_url }})

# Steganografi {#steganografi}

## Definisi dan Terminologi {#definisi-terminologi-steganografi}

### Definisi {#definisi-steganografi}

- Ilmu yang mempelajari cara menyembunyikan pesan di dalam suatu media/media pesan lainnya

- Misalnya kita menyembunyikan teks di dalam sebuah file audio, atau teks di sebuah gambar

- Kalau kriptografi **menyembunyikan makna** dari sebuah pesan, steganografi **menyembunyikan keberadaan** sebuah pesan

- Sebagai contoh: ada pesan “MARI KABUR”, itu disembunyikan dalam kalimat “Makan Ayam Rebus Itu Kemahalan Ah. Beli Udang Rebus Di Alfamart Rembang”. Setiap karakter pesan disembunyikan di awal kata pesan yang dikirim

### Terminologi {#terminologi-steganografi}

- ***Embedded message***: Pesan yang akan disisipkan

- ***Cover-object*** (covertext): Media yang akan dipakai untuk menyembunyikan pesan (bisa teks, gambar, video, audio)

- ***Stego-object*** (stego-text): Cover-object yang sudah disisipi pesan

- ***Stego-key***: Kunci yang digunakan untuk menyisipkan dan mengekstraksi pesan dari stego-text

### Proses Pembuatan {#proses-pembuatan-steganografi}


![Diagram pembuatan steganografi](https://i.imgur.com/OpuRryN.png)

### Kriteria Steganografi {#kriteria-steganografi}

- **Imperceptible**: Keberadaan pesan rahasia tidak dapat dipersepsi secara visual atau secara audial

- **Fidelity**: Kualitas cover-object tidak jauh berubah akibat penyisipan pesan rahasia.

- **Recovery**: Pesan yang disembunyikan harus dapat diekstraksi kembali.

- **Capacity**: Ukuran pesan yang disembunyikan sedapat mungkin besar (supaya muat embedded text nya sebanyak mungkin)

## Metode LSB {#metode-lsb-steganografi}

- <b>Menyimpan satu data di bagian <term href="/PersonalNotes/glossary#lsb">least significant byte</term></b> (byte yang kalau diubah nilainya, paling kecil pengaruhnya). Misal ada byte 1001 0011. Maka LSB nya adalah angka 1 di paling kanan, karena kalau kita ubah value nya jadi 1001 0010, awalnya 147 → 146

- Kebalikan: <term href="/PersonalNotes/glossary#msb">MSB</term> (most significant byte). Byte yang pengaruhnya paling besar (kalau contoh di atas angka 1 di paling kiri, selisihnya 128 kalau diubah: 1001 0010 → 0001 0010 berarti 147 → 18)

### LSB pada Citra Digital {#lsb-citra-digital}

- Pada gambar monokrom (hitam putih), 1 pixel hanya menyimpan 2 buah value: 0 dan 1 (1 bit)

- Pada gambar grayscale (ada abu), 1 pixel berisi 8-bit value (0 - 255)

- Pada gambar berwarna (RGB), ada 24 bit value (R 0-255, G 0-255, B 0-255)

![RGB](https://i.imgur.com/rEibigD.png)

- Misalkan sebuah image 24-bit memiliki sebuah pixel sebagai berikut:

![Pemecahan RGB LSB](https://i.imgur.com/alV2JIY.png)

- Ekstraksi pesan dari stego-image:

![Ekstraksi pesan dari embedded message](https://i.imgur.com/0kAFxh5.png)

- Ukuran pesan yang bisa disembunyikan bergantung pada ukuran cover-object

![Maximum stego size](https://i.imgur.com/LOwXTG9.png)

### Varian LSB {#varian-lsb}

#### Sequential {#sequential-lsb}

- Bit-bit pesan disembunyikan secara sekuensial pada pixel-pixel citra.

- Ekstraksi pesan: pixel-pixel dibaca secara sekuensial dari pixel pertama sampai terakhir. Ambil setiap byte dari pixel, ekstraksi bit LSB-nya, lalu satukan

![Sequential LSB](https://i.imgur.com/L3X91pK.png)

#### Acak {#random-lsb}

- Supaya lebih aman, bit-bit pesan tidak disimpan di pixel yang berurutan, tapi dipilih secara acak

![Random LSB](https://i.imgur.com/cYucsDs.png)

- Pembangkit bilangan acak-semu (**PRNG: pseudo-random number generator**) digunakan untuk membangkitkan bilangan acak.

- **Umpan** (seed) untuk pembangkit bilangan acak berlaku sebagai kunci (stego-key).

- Ekstraksi: Posisi pixel yang menyimpan bit pesan dapat diketahui dari bilangan acak yang dibangkitkan oleh PRNG.

- Jika kunci yang digunakan pada waktu ekstraksi sama dengan kunci pada waktu penyisipan, maka bilangan acak yang dibangkitkan juga sama.

- Dengan demikian, bit-bit pesan yang bertaburan di dalam citra dapat dikumpulkan kembali.

#### m-bit LSB {#m-bit-lsb}

- Untuk meningkatkan ukuran pesan yang disembunyikan, maka digunakan lebih dari 1 bit LSB untuk setiap byte.

- Susunan bit pada setiap byte adalah b7b6b5b4b3b2b1b0. Jika diambil 2-bit LSB, maka bit yang digunakan adalah bit b1 dan bit b0

- Trade-off: Semakin banyak bit LSB yang digunakan, semakin besar ukuran pesan yang dapat disembunyikan, tetapi semakin turun kualitas stego-image.

- Pesan dapat disembunyikan secara sekuensial atau secara acak pada pixel-pixel di dalam citra.

#### Enkripsi {#enkripsi-lsb}

- Pesan dapat dienkripsi terlebih dahulu sebelum disembunyikan ke dalam citra.

- Teknik enkripsi yang sederhana misalnya dengan meng-XOR-kan bit-bit pesan dengan bit-bit kunci. Jumlah bit-bit kunci sama dengan jumlah bit pesan.

- Bit-bit kunci dibangkitkan secara acak.

- Kunci untuk pembangkitan bit-bit kunci menjadi stego-key.

- Jika dipakai teknik acak dalam memilih pixel-pixel, maka ada dua stego-key: satu untuk pembangkitan bit-bit kunci, satu lagi untuk pembangkitan posisi pixel yang dipilih untuk menyembunyikan pesan.

# Algoritma Kriptografi Modern {#kriptografi-modern}

- Kriptografi setelah menemukan komputer digital

- Representasi data dan informasi dalam bentuk [biner](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.jpr3u1wrmv9s#heading=h.c6c7bk15vt3i)

- Menggunakan operasi [bitwise](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.jpr3u1wrmv9s#heading=h.totf3uqow7h) (kunci, plaintext, ciphertext diproses dalam rangkaian bit, dan operasi yang biasa digunakan adalah XOR)

- Teknik dasar yang digunakan tetap sama: teknik [substitusi](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.j5sznqfcf6uw) dan teknik [transposisi](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.oxatpjuoieao)

- Teknik lain yang digunakan: rotasi, kompresi, ekspansi, penjumlahan modulo, dll

- Contoh cipher sederhana memakai XOR untuk operasi bitwise:

- Cipher bitwise dibagi 2:

1. Cipher alir (stream cipher)

- Beroperasi pada bit individual

- Enkripsi/dekripsi pesan secara bit per bit memakai operasi XOR

2. Cipher block (block cipher)

- Operasinya dilakukan per sekumpulan bit (blok-blok bit)

- Enkripsi/dekripsi pesan dilakukan secara blok per blok bit (misal setiap 128-bit)

## Stream Cipher

- Enkripsi plaintext menjadi ciphertext setiap bit per bit atau byte per byte

- Keystream: bit-bit aliran kunci untuk enkripsi/dekripsi

- Keystream dibangkitkan oleh keystream generator berdasarkan umpan (seed) U

- Umpan yang sama akan menghasilkan keystream yang sama baik di pengirim maupun penerima

- Enkripsi: ci  = pi ⊕ ki

- Dekripsi: pi = ci ⊕ ki

- Ada 3 kasus keystream yang dihasilkan:

1. Jika keystream yang dihasilkan = 00000…, maka ciphertext yang dihasilkan akan sama dengan plaintext

2. Jika keystream yang dihasilkan berulang secara periodik (mis. 11000110…), maka keamanannya rendah dan bisa ditebak polanya pakai [Kasiski method](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.eyzfqlpnlywp)

3. Jika keystream pure random, maka algoritmanya [one time pad](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.ooczhm571v2n) dan tingkat keamanan sempurna

- Tingkat keamanan stream cipher didapatkan dari cipher XOR sederhana yang dihasilkan antara kasus 2 (keystream berulang) dan kasus 3 (keystream pure random)

- Stream cipher cocok untuk enkripsi aliran data yang terus menerus, misalnya saluran komunikasi saat telepon, streaming, dll

### Keystream Generator

- Keystream generator dapat membangkitkan keystream bit per bit byte per byte, atau blok-blok bit

- Keystream: bit-bit aliran kunci untuk enkripsi/dekripsi

- Bit-bit keystream adalah bit-bit acak, namun bukan true random, tetapi pseudorandom, karena bit-bit keystream dapat dibangkitkan ulang baik di sisi pengirim maupun di sisi penerima pesan asalkan umpan (seed) U yang digunakan sama

- Di bawah ini algoritma-algoritmanya

### Feedback Shift Register

- Biasa diimplementasikan di level hardware

- Terdiri dari dua bagian: register geser (n bit) dan fungsi umpan balik

- Awalnya diinisiasi oleh bit-bit bn, bn-1, …, b2, b1. Lalu untuk setiap ki, bentuk nilai bn yang baru dari fungsi umpan balik sehingga bn’ = f(bn, bn-1, … b2, b1)

- Bit luaran (yang akan jadi ki) akan berasal dari b1, dan b2 digeser ke b1, bn digeser ke bn-1, dst. Nilai bn yang kini kosong akan diisi oleh bn’

#### Linear Feedback Shift Register

- Bit-bit di dalam register digeser satu bit ke kanan setiap kali pembangkitan bit luaran (= bit kunci alir atau keystream)

- Fungsi umpan balik: bn’ = f(bn, bn-1, … b2, b1) = bn ⊕ bn-1 ⊕ … ⊕ b2 ⊕ b1

- Terjadi perulangan pola bit luaran setiap 2n - 1 bit

### RC4

- Ron code/rivest cipher, cipher stream paling populer

- Digunakan dalam: protokol SSL (Secure Socket Layer), TLS (Transport Layer Security), standar IEEE 802.11 wireless LAN (WEP, Wired Equivalent Privacy), WPA (Wi-Fi Protocol Access) untuk wireless

- Secret key (sebagai umpan) memiliki panjang maksimal 256 karakter (dengan 1 karakter = 1 byte). Jika secret key yang digunakan panjangnya < 256, akan diulang secara periodik (kaya [Vigenere](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.pzurqhey8nzb))

- RC4 menghasilkan [keystream](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.rbd9661bzck) dalam satuan byte setiap kalinya, lalu di XOR dengan byte plaintext memakai operasi bitwise XOR

- RC4 cocok digunakan untuk mengenkripsi file citra (image) tanpa merusak header filenya, karena citra terdiri atas sejumlah pixel, setiap pixel berukuran 1 byte (grayscale image) sampai 3 byte (color image)

- Untuk membangkitkan kunci-alir, cipher menggunakan status internal yang terdiri dari:

1.  Permutasi angka 0 sampai 255 di dalam array S (S0, S1, .., S255). Permutasi merupakan fungsi dari kunci rahasia K dengan panjang variabel

2. Dua buah iterator, i dan j

- RC4 terdiri dari dua subproses:

1. Key-Scheduling Algorithm ([KSA](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.3xzl12i14261))

2. Pseudo-random Generation Algorithm ([PRGA](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.77dppgmijbjw))

#### Key-Scheduling Algorithm

1. Inisialisasi array S: S0 = -, S1 = 1, …, S255 = 255

2. Lakukan pengacakan (permutasi) nilai-nilai dalam array S berdasarkan kunci rahasia K (kunci eksternal dari pengguna sebagai seed)

- K[i mod length(K)] menyatakan karakter-karakter kunci diulang secara periodik jika panjangnya kurang dari 256

#### Pseudo-random Generator Algorithm

- PRGA membangkitkan keystream dengan cara mengambil nilai S[i] dan S[j], mempertukarkannya, lalu menjumlahkan keduanya dalam modulus 256

- Keystream kemudian di-XOR-kan dengan sebuah karakter plainteks

#### Keamanan RC4

- Kelemahan: beberapa byte-byte awal pada keystream sangat berkorelasi dengan beberapa byte awal kunci

- Untuk mengatasinya, biasanya direkomendasikan membuang 256-512 byte keystream awal

- Tidak kuat terhadap [flip-bit attack](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.0#heading=h.2bdcgeie6q4u) maupun serangan-serangan stream lainnya

- RC4 resmi dilarang penggunaannya dalam TLS karena bisa dipecahkan dalam hitungan jam atau hari (RFC 7465)

### A5

- Stream cipher yang digunakan untuk mengenkripsi transmisi sinyal percakapan dari standard sinyal telepon seluler GSM (Group Special Mobile)

- Sinyal GSM dikirim dalam barisan frame, satu frame panjangnya 228 bit dan dikirim setiap 4.6 milidetik

- A5 menghasilkan keystream sepanjang 228 bit yang kemudian bit-bitnya di-XOR-kan dengan bit-bit frame pesan sepanjang 228 bit juga.

- Kunci eksternal (external session, seed) panjangnya 64 bit

- A5 terdiri dari 3 buah [LFSR](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.q7ztxcrwnox2), masing-masing [panjangnya](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.87ijbox6gsdu) 19, 22, dan 23 bit (total 19+22+23 = 64 bit)

- Bit-bit di dalam register diindeks di mana bit paling tidak penting ([LSB](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.ogca79jh5z9w)) diindeks dengan 0 (elemen paling kanan, yang akan keluar duluan)

- Luaran dari A5 adalah hasil XOR ketiga buah LSFR ini

## Block Cipher

# Algoritma Block Cipher

## Data Encryption Standard (DES)

- Algoritma: Data Encryption Algorithm (DEA)

- Termasuk algoritma kunci simetri (kunci enkripsi = kunci dekripsi)

- Panjang kunci 64 bit (hanya 56 yang digunakan, 8 bit parity tidak digunakan: bit ke-8, 16, 24, dst), ukuran block 64 bit, 16 putaran

- Setiap blok plainteks dienkripsi dalam 16 putaran enciphering (enkripsi 16 kali)

- Setiap putaran menggunakan kunci internal (kunci putaran) yang berbeda

- Kunci internal sepanjang 48-bit dibangkitkan dari kunci eksternal

- Setiap blok plainteks mengalami permutasi awal (IP), 16 kali putaran enciphering, dan inversi permutasi awal (IP-1)

## Advanced Encryption Standard (AES)

# Algoritma Kunci-Publik

- Di algoritma zaman dulu, kunci enkripsi dan dekripsi biasanya sama. Jadi kalau kunci enkripsi ketahuan, otomatis orang itu bisa mendekripsi pesan juga

- Jika kunci enkripsi = kunci dekripsi, disebut sebagai kunci simetri (symmetrical key)

- Algoritma kunci publik: ada kunci publik yang digunakan untuk mengenkripsi, dan kunci privat yang digunakan untuk mendekripsi

- Dua kunci yang berbeda untuk enkripsi dan dekripsi: kunci asimetri (asymmetrical key)

- Kunci publik: disebar bersama message, kunci privat: dimiliki target penerima pesan supaya bisa dekripsi

- Signed message: message yang sudah dienkripsi oleh public key

- Algoritma ini bisa dikombinasikan dengan hash menjadi [digital signature](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.q5rbk1nnw231)

- Hybrid cryptography

## Algoritma RSA

- [Algoritma kunci-publik](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.jseieyi8vtim) paling terkenal dan paling banyak aplikasinya

- Berdasarkan kepada [teorema Euler](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.hc97psoycyvj#heading=h.ju5sh58cur38)

- Algoritma ini menggunakan dua buah bilangan prima, p dan q (sebaiknya p ≠ q)

- Kunci publik: e, kunci privat: d

### Pembangkitan Kunci

1. Tentukan bilangan prima p dan q (sebaiknya p ≠ q)

2. Hitung nilai n = pq

3. Hitung ϕ(n) = (p - 1)(q - 1)

4. Pilih sebuah bilangan e sebagai kunci publik, dan e harus [relatif prima](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.hc97psoycyvj#heading=h.mhr4cbmh1a2shttps://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.hc97psoycyvj#heading=h.mhr4cbmh1a2s) terhadap ϕ(n)

5. Hitung kunci dekripsi (privat) d dengan persamaan:

ed ≅ 1 (mod ϕ(n)) → d ≅ e-1 (mod ϕ(n))

- Hasil dari pembangkitan kunci:

- Kunci publik adalah pasangan (e, n)

- Kunci privat adalah pasangan (d, n)

- Komponen:

- p dan q adalah bilangan prima (rahasia)

- n = pq (tidak rahasia)

- ϕ(n) = (p - 1)(q - 1) (rahasia)

- e (kunci enkripsi, [PBB](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.hc97psoycyvj#heading=h.fdvppp46evjb)(e, ϕ(n) = 1, antara e dan ϕ(n) relatif prima) (tidak rahasia)

- d (kunci dekripsi), didapat dari d ≅ e-1 (mod ϕ(n)) (rahasia)

- m (plainteks) (rahasia)

- c (ciphertext) (tidak rahasia)

### Enkripsi

- Jika pesan berukuran besar, nyatakan pesan menjadi blok-blok plainteks yang lebih kecil: m1, m2, m3, … dengan syarat (0 ≤ mi < n -1)

- Hitung cipherteks ci untuk plainteks mi menggunakan kunci publik e dengan persamaan:

ci = mie mod n dengan m adalah plainteks, c adalah cipherteks, e adalah kunci publik, dan n adalah pq

### Dekripsi

- Misalkan cipherteks c1, c2, c3, …

- Plainteks mi = cid mod n, di mana m adalah plainteks, c adalah cipherteks, d adalah kunci privat, dan n adalah pq

### Keamanan

- Terletak pada kesulitan memfaktorkan bilangan bulat n menjadi faktor-faktor prima p dan q

- Disarankan nilai p dan q panjangnya lebih dari 100 digit, jadi nilai n nantinya 200 digit lebih

- Usaha untuk mencari faktor bilangan 200 digit: membutuhkan waktu komputasi 4 miliar tahun

### Kelemahan

- RSA lebih lambat daripada algoritma kriptografi kunci simetri seperti [DES](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.e7q9z7t1k5xf) dan [AES](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.t04m42jm4irh)

- Dalam prakteknya, RSA tidak digunakan untuk mengenkripsi pesan berukuran besar, melainkan untuk mengenkripsi kunci simetri yang digunakan untuk mengenkripsi pesan

- Kombinasi kunci simetri dan kunci asimetri: hybrid cryptography

- Masalah lain: [man in the middle attack](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.0#heading=h.rwe7eh1fk3yt) untuk mendapatkan kunci publik seseorang, lalu berpura-pura mengirimkan pesan menggunakan public key tersebut

## Algoritma Elgamal

- Memakai persoalan [logaritma diskrit](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.hc97psoycyvj#heading=h.rdfcqg8nshu5) dan [akar primitif](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.hc97psoycyvj#heading=h.4dz127vyf14t)

- Properti algoritma Elgamal:

- Bilangan prima p (tidak rahasia)

- Bilangan acak g (g < p, g adalah akar primitif dari p) (tidak rahasia)

- Bilangan acak x (2 ≤ x ≤ p - 2) (rahasia, kunci privat)

- y = gx mod p (tidak rahasia, kunci publik)

- m (plainteks) (rahasia)

- a dan b (ciphertext) (tidak rahasia)

### Pembangkitan Kunci

1. Pilih sembarang bilangan prima p (p bisa dikirim)

2. Pilih dua bilangan acak, g dan x, dengan syarat g < p, g [akar primitif](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.hc97psoycyvj#heading=h.4dz127vyf14t) dari p, dan 2 ≤ x ≤ p - 2

3. Hitung y = gx mod p (kunci publik)

- Hasil dari pembangkitan kunci:

- Kunci publik: tripel (y, g, p)

- Kunci privat: pasangan (x, p)

### Enkripsi

- Susun plaintext menjadi blok-blok m1, m2, …, (nilai setiap blok harus berada di dalam selang [0, p - 1])

- Pilih bilangan acak k (1 ≤ k ≤ p - 1)

- Setiap blok m dienkripsi dengan rumus

1. a = gk mod p

2. b = ykm mod p

- Pasangan a dan b adalah ciphertext hasil blok pesan m, jadi ukuran ciphertext 2 kali ukuran plaintext nya

### Dekripsi

- Gunakan kunci privat x untuk menghitung (ax)-1 = ap-1-x mod p

- Hitung plainteks m dengan persamaan: m = b(ax)-1 mod p

## Algoritma Kriptografi Knapsack

- Menggunakan persoalan [Knapsack problem](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.3bbgwzv4vylk#heading=h.u468rfp7hbq8)

- Setiap bobot wi adalah kunci rahasia, dan bit-bit plainteks menyatakan bi

- Misalkan n = 6 dan w1 = 1, w2 = 5, w3 = 6, w4 = 11, w5 = 14, dan w6 = 20, plainteks = 111001010110000000011000. Plainteks dibagi menjadi blok yang panjangnya 6 (n), kemudian setiap bit di dalam blok dikalikan dengan wi

- Metode di atas cuman bisa buat enkripsi aja, ga bisa dekripsi

### Superincreasing Knapsack

- Solusi supaya persoalan knapsack bisa diselesaikan jadi orde O(n) (polinomial), tapi efeknya bukan menjadi kriptografi yang kuat

- Barisan superincreasing: suatu barisan di mana setiap nilai di dalam barisan lebih besar daripada jumlah semua nilai sebelumnya

- Contoh: {1, 3, 6, 13, 27, 52} → barisan superincreasing,  
    {1, 3, 4, 9, 15, 25} → bukan barisan superincreasing

- Barisan superincreasing ada di bobot-bobotnya (array w), dan kita solve mencari array bit-nya (b)

- Algoritma penyelesaian:

1. Jumlahkan semua bobot di dalam barisan

2. Bandingkan bobot total dengan bobot terbesar di dalam barisan. Jika bobot terbesar lebih kecil atau sama dengan bobot total, maka ia dimasukkan ke dalam knapsack, jika tidak, maka ia tidak dimasukkan (jadi lihat dari paling belakang)

3. Kurangi bobot total dengan bobot yang telah dimasukkan, kemudian bandingkan bobot total sekarang dengan bobot terbesar selanjutnya. Demikian seterusnya sampai seluruh bobot di dalam barisan selesai dibandingkan

4. Jika bobot total menjadi nol, maka terdapat solusi persoalan superincreasing knapsack , tetapi jika tidak nol, maka tidak ada solusinya

- Contoh: Misalkan bobot-bobot yang membentuk barisan superincreasing adalah {2, 3, 6, 13, 27, 52}, dan diketahui bobot knapsack (M) = 70. Kita akan mencari b1, b2, …, b6 sedemikian sehingga 70 = 2b1 + 3b2 + 6b3 + 13b4 + 27b5 + 52b6

- Bandingkan 70 dengan bobot terbesar, yaitu 52. Karena 52 ≤ 70, maka 52 dimasukkan ke dalam knapsack (b6 = 1)

- Bobot total sekarang menjadi 70 – 52 = 18. Bandingkan 18 dengan bobot terbesar kedua, yaitu 27. Karena 27 > 18, maka 27 tidak dimasukkan ke dalam knapsack (b5 = 0)

- Bandingkan 18 dengan bobot terbesar berikutnya, yaitu 13. Karena 13 ≤ 18, maka 13 dimasukkan ke dalam knapsack (b4 = 1)

- Bobot total sekarang menjadi 18 – 13 = 5

- Bandingkan 5 dengan bobot terbesar kedua, yaitu 6. Karena 6 > 5, maka 6 tidak dimasukkan ke dalam knapsack (b3 = 0)

- Bandingkan 5 dengan bobot terbesar berikutnya, yaitu 3. Karena 3 ≤ 5, maka 3 dimasukkan ke dalam knapsack (b2 = 1)

- Bobot total sekarang menjadi 5 – 3 = 2

- Bandingkan 2 dengan bobot terbesar berikutnya, yaitu 2. Karena 2 ≤ 2, maka 2 dimasukkan ke dalam knapsack (b1 = 0)

- Bobot total sekarang menjadi 2 – 2 = 0

- Karena bobot total tersisa = 0, maka solusi persoalan superincreasing knapsack ditemukan. Barisan bobot yang dimasukkan ke dalam knapsack adalah {2, 3, – , 13, – , 52}

- Sehingga 70 = (1 x 2) + (1 x 3) + (0 x 6) + (1 x 13) + (0 x 27) + (1 x 52) Dengan kata lain, plainteks dari kriptogram 70 adalah 110101

### Algoritma Knapsack Kunci Publik

- Algoritma superincreasing knapsack adalah algoritma yang lemah, karena cipherteks dapat didekripsi menjadi plainteksnya secara mudah dalam waktu linear

- Algoritma non-superincreasing knapsack atau normal knapsack adalah kelompok algoritma knapsack yang sulit (dari segi komputasi) karena membutuhkan waktu dalam orde eksponensial untuk memecahkannya

- Namun, superincreasing knapsack dapat dimodifikasi menjadi non-superincreasing knapsack dengan menggunakan kunci publik (untuk enkripsi) dan kunci privat (untuk dekripsi)

- Kunci publik merupakan barisan non-superincreasing, sedangkan kunci privat tetap merupakan barisan superincreasing

#### Pembangkitan Kunci

1. Tentukan barisan superincreasing

2. Kalikan setiap elemen di dalam barisan tersebut dengan n (mod m) (Modulus m seharusnya angka yang lebih besar daripada jumlah semua elemen di dalam barisan, sedangkan pengali n seharusnya tidak mempunyai faktor persekutuan dengan m, atau PBB(n, m) = 1 atau n [relatif prima](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.hc97psoycyvj#heading=h.mhr4cbmh1a2s) terhadap m)

3. Hasil perkalian akan menjadi kunci publik sedangkan barisan superincreasing semula menjadi kunci privat

#### Enkripsi

- Enkripsi dilakukan dengan cara yang sama seperti [algoritma knapsack](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.az7ptxc034en) sebelumnya.

- Mula-mula plainteks dipecah menjadi blok bit yang panjangnya sama dengan kardinalitas barisan kunci publik.

- Kalikan setiap bit di dalam blok dengan elemen yang berkoresponden di dalam barisan kunci publik

#### Dekripsi

- Memakai kunci privat

- Awalnya penerima pesan menghitung n-1 (invers n mod m) supaya nn-1 ≌ 1 mod m

- Kalikan setiap kriptogram dengan n-1 lalu nyatakan hasil kalinya sebagai  penjumlahan elemen-elemen kunci privat untuk memperoleh plainteks dengan menggunakan algoritma pencarian solusi superincreasing knapsack

#### Implementasi Knapsack Kriptografi

- Ukuran cipherteks yang dihasilkan lebih besar daripada plainteksnya, karena enkripsi dapat menghasilkan kriptogram yang nilai desimalnya lebih besar daripada nilai desimal blok plainteks yang dienkripsikan.

- Untuk menambah kekuatan algoritma knapsack, kunci publik maupun kunci privat seharusnya paling sedikit 250 elemen, nilai setiap elemen antara 200 sampai 400 bit panjangnya, nilai modulus antara 100 sampai 200 bit.

- Dengan nilai-nilai knapsack sepanjang itu, dibutuhkan 1046 tahun untuk menemukan kunci secara brute force, dengan asumsi satu juta percobaan setiap detik.

# Algoritma Hybrid Cryptography

- Misalkan Alice dan Bob berkirim pesan. Mereka sepakat mengenkripsi dan mendekripsi pesan dengan algoritma kriptografi simetri (misalkan AES)

- Bagaimana cara Bob dapat mengetahui kunci untuk mendekripsi pesan dari Alice (kunci AES)?

- Solusinya adalah dengan menggunakan hybrid cryptography

- Hybrid cryptography: menggabungkan kriptografi kunci-simetri (misalkan AES) dengan kriptografi kunci-publik (misalkan RSA)

- Jadi yang dienkripsi pakai kunci publik-privat itu kunci simetrinya. Nanti si encrypted kunci simetri (CK) dikirim bersamaan dengan encrypted message nya (CM, CM dienkripsi pakai kunci simetri)

## Algoritma Umum

1. Alice memiliki sepasang kunci privat (SKAlice) dan kunci publik (PKAlice) miliknya.

2. Bob juga memiliki sepasang kunci privat (SKBob) dan kunci publik (PKBob) miliknya.

3. Alice membangkitkan kunci rahasia (K) untuk enkripsi pesan dengan AES

4. Alice mengenkripsi K dengan RSA menggunakan kunci publik Bob (PKBob)

E_RSAPKbob(K) = CK

5. Alice mengenkripsi pesan M dengan AES menggunakan K,

E_AESK(M) = CM

lalu mengirim CK dan CM kepada Bob

6. Bob mendekripsi CK dengan RSA menggunakan kunci privatnya (SKBob)

D_RSASKbob(CK) = K

7. Selanjutnya Bob mendekripsi pesan CM dengan AES menggunakan K

D_AESK(CM) = M

## Algoritma Pertukaran Kunci Diffie-Hellman

- Protokol untuk berbagi kunci simetri antara dua entitas

- Keamanan algoritma DH didasarkan pada sulit menghitung logaritma diskrit dari sebuah bilangan bulat besar

### Algoritma Pertukaran

- Pada awalnya Alice dan Bob menyepakati sebuah bilangan prima p dan bilangan bulat g di mana g < p dan g adalah [akar primitif](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.hc97psoycyvj#heading=h.4dz127vyf14t) dari p

- Nilai g dan p tidak perlu rahasia (warna kuning)

1. Alice membangkitkan bilangan bulat acak a dan mengirim hasil perhitungan A = ga mod p, di mana a adalah kunci privat Alice dan A adalah kunci publik Alice

2. Bob membangkitkan bilangan bulat acak b dan mengirim hasil perhitungan B = gb mod p, di mana b adalah kunci privat Bob dan B adalah kunci publik Bob

3. Alice menerima B kemudian menghitung K = Ba mod p. Hal ini sama dengan K = gab mod p

4. Bob menerima A kemudian menghitung K = Ab mod p

- K ini adalah kunci simetri yang dihasilkan (bisa dipakai sebagai seed untuk pembangkitan kunci simetri dengan algoritma apapun)

### Algoritma Pertukaran Tiga Pihak

1. Alice, Bob, dan Carol menyepakati p dan g

2. Alice, Bob, dan Carol membangkitkan kunci privat masing-masing, a, b, dan c

3. Alice menghitung ga mod p dan mengirimkannya kepada Bob

4. Bob menghitung (ga)b mod p = gab mod p dan mengirimkannya kepada Carol

5. Carol menghitung K = (gab)c mod p = gabc mod p

6. Bob menghitung gb mod p dan mengirimkannya kepada Carol

7. Carol menghitung (gb)c mod p = gbc mod p dan mengirimkannya kepada Alice

8. Alice menghitung K = (gbc)a mod p = gbca mod p = gabc mod p

9. Carol menghitung gc mod p dan mengirimkannya kepada Alice.

10. Alice menghitung (gc)a mod p = gca mod p dan mengirimkannya kepada Bob

11. Bob menghitung K = (gca)b mod p = gcab mod p = gabc mod p

12. Sekarang Alice, Bob, dan Carol sudah memiliki kunci rahasia yang sama, yaitu K

# Message Digest

- Digital fingerprint dari suatu message

- Di-generate oleh fungsi hash

- Nilai dari message yang sudah di-hash tidak bisa dikembalikan ke nilai aslinya

- Berfungsi sebagai penjaga integritas untuk memastikan message tidak berubah dari nilai aslinya.

- Kalau message yang dikirim dihitung kembali hash-nya dan berbeda dengan hash aslinya, maka ketahuan kalau message nya diubah

- Disebut juga sebagai message signature

- Fungsi hash H() bersifat many to one, artinya beberapa value bisa di-hash jadi satu value yang sama

## Digital Signature {#digital-signature}

- Penggunaan hash bisa dikombinasikan dengan algoritma public key supaya selain integritas pesan terjamin, orang yang tidak berhak ga mudah buat nge-bruteforce value yang kemungkinan bakal menghasilkan hash yang sama

- Proses enkripsi:  
    Menghitung hash dari pesan, kemudian si hash nya ini dienkripsi pakai public key

- Proses dekripsi:  
    Ambil encrypted hash, dekripsi pakai kunci privat, lalu hitung hash dari message yang diterima, bandingkan dengan decrypted hash yang dikirim. Kalau sama, berarti message masih bagus

-

# LAMPIRAN: Most Frequent N-Gram {#most-frequent-n-gram}

## English

### Monogram

### Bigram

### Trigram

the, and, are,for, not, but, had, has, was, all, any, one, man, out, you, his, her, and can.

### Fourgram

that, with, have, this, will, your, from, they, want, been, good, much, some, and very.

## Indonesian

### Monogram

### Bigram

### Trigram

### Fourgram
