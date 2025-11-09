---
layout: page-with-toc
title: Rubik Cube
description: Complete guide to solving Rubik's cube including terminology, algorithms, and advanced techniques.
permalink: /rubik/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/rubic.md
---


# Istilah Rubik

- Terdiri dari 6 sisi, berbentuk kubus
- Warna: putih, oranye, merah, kuning, hijau, biru

## Terminologi

![Struktur layer rubik](https://i.imgur.com/YIcjn0a.png)

- Center: bagian tengah dari suatu sisi. Patokan warna untuk cell-cell lainnya
- Side: bagian ujung/pinggir tengah dari suatu sisi. Tersusun dari 2 warna
- Corner: pojok. Tersusun dari 3 warna

## Direction

Dilihat dari depan muka kita (perspektif dilihat langsung oleh kita)

- Clockwise (X): searah jarum jam
- Counterclockwise (X’): berlawanan arah jarum jam

## Layer

- First layer: layer paling bawah (biasanya center putih)
- Second layer: layer tengah
- Third layer: layer paling atas (biasanya center kuning)

## Face

- Front (F): bagian yang berhadapan dengan muka kita
- Right (R): sisi sebelah kanan dari sisi rubik yang berhadapan dengan muka kita
- Left (L): sisi sebelah kiri dari sisi rubik yang berhadapan dengan muka kita
- Up (U): layer/lapisan paling atas dari perspektif depan muka kita
- Down (D): layer/lapisan paling bawah dari perspektif depan muka kita
- Bottom (B): bagian belakang dari sisi yang berhadapan dengan muka kita

## Combination

![Arah gerak rubik](https://media1.tenor.com/m/oSG5IlhHbqoAAAAd/rubiks-cube-rubiks-formula.gif)

- R: bagian sisi kanan kubus diputar searah jarum jam (cara: coba liat/pindah sementara ke sisi kanan dari perspektif muka kita (jadi kita menghadap sisi kanan sekarang), terus putar searah jarum jam)
- R’: bagian sisi kanan kubus diputar berlawanan arah jarum jam (cara: coba liat/pindah sementara ke sisi kanan dari perspektif muka kita (jadi kita menghadap sisi kanan sekarang), terus putar berlawanan jarum jam)
- U: layer paling atas kubus diputar searah jarum jam (cara: coba liat/pindah sementara ke sisi atas dari perspektif muka kita (jadi kita menghadap sisi atas sekarang), terus putar searah jarum jam)
- U’: layer paling atas kubus diputar berlawanan arah jarum jam (cara: coba liat/pindah sementara ke sisi atas dari perspektif muka kita (jadi kita menghadap sisi atas sekarang), terus putar berlawanan jarum jam)
- L: bagian sisi kiri kubus diputar searah jarum jam (cara: coba liat/pindah sementara ke sisi kiri dari perspektif muka kita (jadi kita menghadap sisi kiri sekarang), terus putar searah jarum jam)
- L’: bagian sisi kiri kubus diputar berlawanan arah jarum jam (cara: coba liat/pindah sementara ke sisi kiri dari perspektif muka kita (jadi kita menghadap sisi kiri sekarang), terus putar berlawanan jarum jam)
- D: layer paling bawah kubus diputar searah jarum jam (cara: coba liat/pindah sementara ke sisi bawah dari perspektif muka kita (jadi kita menghadap sisi bawah sekarang), terus putar searah jarum jam)
- D’: layer paling bawah kubus diputar berlawanan jarum jam (cara: coba liat/pindah sementara ke sisi bawah dari perspektif muka kita (jadi kita menghadap sisi bawah sekarang), terus putar berlawanan jarum jam)

# 3x3 Cube

## Main Solve Method

### Video

2 Bottom Layers:

[CARA MENYELESAIKAN RUBIK 3X3 - TUTORIAL RUBIK BAHASA INDONESIA](https://youtu.be/-Wxrs4MbiFc?si=DSj6LBTx5W4XRDC-)

Last/Top/Third Layer:

[Solve the Last Layer / Third Layer - 3x3 Cube Tutorial - Only 4 moves to learn - Easy Instructions](https://youtu.be/637mYMLUf8s?si=W9N9oqTVMA1unZ6C)

### Algoritma

Position:

Lihat [layer](#layer). Center kuning third layer, center putih first layer

Algoritma Utama:

1. White cross in yellow center
2. Fix white side so it match the side color’s center
3. Fix all the white sides into the bottom/white center (third layer done)
4. Fix the white corner into the bottom
5. Fix second layer side so all side in correct position (second layer done)
6. Create yellow cross on top
7. Fix all yellow corners on top
8. Fix all yellow corners on side
9. Fix all yellow sides

### Detailed step by step

1. **Buat white cross di center yellow** (jadi center nya yellow, tapi warna putih semua di edge-edge nya)
![White-yellow cross image](https://i.imgur.com/kIdBxTi.png)

2. Setelah membuat white cross di yellow, **cocokkan salah satu sisi edge supaya warna edge nya cocok dengan center yang ada di bawahnya**. Misal ada edge dengan warna sisi putih dan biru, putih posisinya di atas (center kuning), tinggal lakukan U/U’ sampai sisi edge satunya lagi sesuai dengan center di bawahnya yaitu biru, tapi warna putih di edge tetep di atas

3. **Setelah edge nya cocok, hadapkan edge itu jadi front kita** (jadi tetap menjadikan kuning di paling atas). **Kemudian lakukan F2/F2’** (putar front 2 kali) supaya si edge putih biru tadi jadi ke bawah. Perhatikan bahwa kalau di atas center nya kuning, kebalikannya/bawahnya pasti center putih.

4. **Ulangi langkah 2-3 satu per satu sampai seluruh edge putih ada di bawah**
![White cross](https://i.imgur.com/xiNbFf8.png)

5. Sekarang kita udah punya sisi putih dengan edge yang benar semua (edge putih juga sudah sesuai dengan warna-warna lainnya). Tinggal **benerin corner supaya warna putih ada di sisi putih dan pojok-pojoknya sesuai**

6. Kita bakal lakuin satu corner satu corner. **Pertama posisikan white corner ada di layer atas, dan posisinya ada di antara sisi-sisi dengan warna center yang sama-sama dimiliki corner tersebut**. Misalnya ada white corner dengan kombinasi warna oranye dan biru, maka posisi si white corner harus nempel ke sisi oranye dan biru, tapi kita ga perlu peduli mau oranye sekarang ada di sisi center biru atau biru ada di sisi center oranye, **yang penting warna putih ga boleh menghadap ke atas/depan, jadi cuman boleh menghadap kanan/kiri** (atau kalau dilihat dari sisi front, white corner bakal ada di kanan atas/kiri atas tapi si warna putihnya menghadap kanan/kiri.

7. Masih dengan posisi kuning menghadap atas dan pojok putih udah menghadap kiri/kanan dan di layer atas, dan warna-warna lain punya si white corner udah ada di antara center-center yang dimiliki keduanya, maka jika:

	- **White corner ada di sisi sebelah kanan** (artinya bagian putih menghadap kanan juga), **lakukan: R U R’**
	- **White corner ada di sisi sebelah kiri** (artinya bagian putih menghadap kiri juga), **lakukan L’ U’ L**

8. White corner akan ada di posisi yang tepat setiap pojoknya dengan center-center nya juga. **Lakukan langkah 5-7 sampai semua corner warna putih sesuai dengan center putih dan center lainnya juga**

	**Edge Case**: corner putih ada di bottom layer, maka otak atik sampai white corner ada di top layer dan tidak menghadap atas

9. Layer terbawah done. Sekarang **solve layer kedua/tengah**. Ingat kalau di layer tengah ga ada corner, kita cuman perlu solve side aja

10. Perhatikan top layer (center kuning), **cari side yang ga ada warna kuningnya sama sekali tapi posisinya ada di top layer**.

11. **Posisiin bagian bawah side itu supaya sesuai dengan center color bawahnya**. Misalnya ada side oranye-biru (oranye hadap atas, biru hadap depan/sisi), maka lakukan U/U’ sampai si side sisi biru itu nempel dengan center biru

12. Setelah side itu nempel dengan warna biru, kita jadiin center biru sebagai front, kemudian lihat side oranye itu relatif terhadap center nya

	- **Kalau center oranye ada di sebelah kiri dari front kita sekarang, maka putar top layer ke kanan (U’), lalu lakukan: L’ U’ L**
	- **Kalau center oranye ada di sebelah kanan dari front kita sekarang, maka putar top layer ke kiri (U), lalu lakukan: R U R’**

	**NOTE**: Ingat kalau side itu ga mungkin center nya depan belakang, misal putih dan kuning itu berlawanan arah, ga mungkin ada side/corner putih kuning

13. Perhatikan kalau sekarang corner putih jadi berantakan, benerin lagi corner putih pakai langkah 5-7

14. Lakukan **berulang sampai seluruh side/layer 2 selesai**

	**Edge Case**: Bisa jadi seluruh side di top layer itu ada warna kuningnya, alias ada posisi side yang kebalik (misal side oranye-biru, side oranye nempel ke center biru dan side biru nempel ke center oranye). Maka ubah posisi side sampai harus ada di top layer

15. Sisa last layer/top layer warna kuning. Pertama kita harus bikin dulu **yellow cross**. Ada 3 kemungkinan state awal:

	- Dot

	<table>
	<tr><td></td><td></td><td></td></tr>
	<tr><td></td><td style="background-color:yellow;"></td><td></td></tr>
	<tr><td></td><td></td><td></td></tr>
	</table>

	- Horizontal (kalau vertikal, tinggal rotate jadi horizontal dulu)

	<table>
	<tr><td></td><td></td><td></td></tr>
	<tr><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td></tr>
	<tr><td></td><td></td><td></td></tr>
	</table>

	- L (posisi kaya di gambar, L ada di kiri atas)

	<table>
	<tr><td></td><td style="background-color:yellow;"></td><td></td></tr>
	<tr><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td><td></td></tr>
	<tr><td></td><td></td><td></td></tr>
	</table>

16. Lakukan: **F R U R’ U’ F’ berulang kali sampai bentuknya seperti cross**. Misal di awal itu bentuknya dot, kemudian kita pakai formula dan ketemu bentuk L, maka pertama sesuain lagi posisi si pola kaya di nomor 15, lalu lanjut ulang formula-nya

	<table>
	<tr><td></td><td style="background-color:yellow;"></td><td></td></tr>
	<tr><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td></tr>
	<tr><td></td><td style="background-color:yellow;"></td><td></td></tr>
	</table>

17. Setelah membuat yellow cross, **kita harus solve corner nya supaya yellow semua atasnya**. Ada 3 state kemungkinan:

	- **0 yellow corner**, pure cross, pergi ke step 18

	<table>
	<tr><td></td><td style="background-color:yellow;"></td><td></td></tr>
	<tr><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td></tr>
	<tr><td></td><td style="background-color:yellow;"></td><td></td></tr>
	</table>

	- **Ikan**, cross kuning dengan 1 corner kuning, pergi ke step 19

	<table>
	<tr><td></td><td style="background-color:yellow;"></td><td></td></tr>
	<tr><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td></tr>
	<tr><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td><td></td></tr>
	</table>

	- **Cross kuning dengan 2 corner kuning**, pergi ke step 20

	Possibility 1:

	<table>
	<tr><td></td><td style="background-color:yellow;"></td><td></td></tr>
	<tr><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td></tr>
	<tr><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td></tr>
	</table>

	Possibility 2:

	<table>
	<tr><td></td><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td></tr>
	<tr><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td></tr>
	<tr><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td><td></td></tr>
	</table>

18. Pada **state yellow cross with 0 yellow corner**, pertama **posisikan top layer supaya ada pojok kuning di sebelah kiri (dan di lapisan terdepan)**. Sebagai ilustrasi (dilihat dari atas), kaya gini:


	<table>
	<tr><td></td><td style="background-color:yellow;"></td><td></td></tr>
	<tr><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td></tr>
	<tr><td style="border-left:2px solid yellow;"></td><td style="background-color:yellow;"></td><td></td></tr>
	</table>


	Solve dengan: **R U R’ U R U2 R’**

19. Pada **state ikan, posisikan si kepala ikan di kiri bawah** (dilihat dari perspektif atas). Ilustrasi:

	<table>
	<tr><td></td><td style="background-color:yellow;"></td><td></td></tr>
	<tr><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td></tr>
	<tr><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td><td></td></tr>
	</table>

	Solve dengan: **R U R’ U R U2 R’**

20. Pada **state 2 pojok yellow**, **posisikan top layer supaya ada pojok kuning di depan dan di bagian kiri**, sebagai ilustrasi:

	<table>
	<tr><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td></tr>
	<tr><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td><td style="background-color:yellow;"></td></tr>
	<tr><td style="border-bottom:2px solid yellow;"></td><td style="background-color:yellow;"></td><td></td></tr>
	</table>

	Solve dengan: **R U R’ U R U2 R’**

21. Selanjutnya, **benerin posisi corner di top layer (yang menghadap ke sisi-sisi) supaya ada di blok yang sesuai dan sama warnanya dengan center)**. Ada 2 state:

	- Kalau **udah ada salah satu sisi yang dua dua corner atasnya udah bener, posisiin corner itu sesuai dengan center nya** (misal ada sisi yang corner atasnya sama2 hijau, pindahin 2 corner itu ke sisi yang center nya hijau), kemudian **pindahkan sisi yang corner nya udah bener itu ke sebelah kiri**, jalankan rumus:

		**R U2 R’ U’ R U2 L’ U R’ U’ L**

	- Kalau **belum ada sisi yang corner nya betul dua duanya**, jalankan **rumus ini dua kali**:
	
		**R U2 R’ U’ R U2 L’ U R’ U’ L**

22. Sekarang pojoknya udah bener, tinggal **benerin edge nya**. Ada 2 state:

	- **Ada satu sisi yang udah bener secara keseluruhan** (edge, corner udah bener juga). **Posisiin sisi ini di belakang. Kemudian lihat sisi di depannya, dan lihat warna edge nya.**
	
	1. Kalau misal warna **edge itu harusnya di sisi sebelah kanan**, jalankan
	
		**F2 U’ L R’ F2 L’ R U’ F2**
	
	1. Kalau warna **edge itu harusnya di sisi sebelah kiri**, jalankan
	
		**F2 U L R’ F2 L’ R U F2**

	- Kalau **ga ada sisi yang bener**, tinggal **ikutin rumus di atas (bebas mau kiri atau kanan), kemudian setelah ada satu sisi yang bener, ulang sesuai dengan arah menggunakan rumus di atas.**

## Special Move

### Sexy Move

**R U R’ U**

Kalau dilakukan 6 kali berturut-turut, bakal balik ke state awal


<style>
td {
width: 10px;
height: 20px;
}
</style>