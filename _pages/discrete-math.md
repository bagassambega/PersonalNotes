---
layout: page-with-toc
title: Discrete Mathematics
description: Essential mathematical concepts for computer science including number theory, modular arithmetic, graph theory, combinatorics, and discrete structures.
permalink: /discrete-math/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/discrete-math.md
---

# Teori Bilangan

## Modulo

### Definisi

$$
a \pmod{b}= x \tag{Definisi modulo}
$$

artinya ***a* dibagi *b* bersisa *x***

$$13\pmod{5} = 2$$

12 dibagi 5 itu 2 bersisa 2

### Teorema Euclidean

>Misalkan *m* dan *n* bilangan bulat, *n* > 0. Jika *m* dibagi dengan *n* maka hasil pembagiannya adalah *q* (*quotient*/pengali) dan sisanya *r* (remainder), sedemikian sehingga:
>
> $$ m = nq + r, 0 ≤ r < n $$

$$ 3001 \div 3 = 1000, \text{sisa } 1 $$

$$ 3001 = 1000 \times 3 + 1 $$

$$ m = 3001, n = 1000, q = 3, r = 1 $$

$$ -22 \div 3 = 7, \text{sisa } -1 $$


Remainder harus positif, jadi ubah caranya jadi:

$$ m = (n+1)q + (r+q) $$

Atau pas diproses, jadi -22 / 3 = 7 sisa -1, diubah jadi 8 sisa (-1 + 3) = 2

$$ (-8) \times 3 + 2 = -24 + 2 $$

## PBB/FPB (GCD, Greatest Common Divisor)

Pembagi terbesar yang sama untuk 2 atau lebih bilangan

$$ PBB(18, 24) = 6 \\ $$

$$ m = nq + r , 0 \le r < n \\ $$

maka 

$$ PBB(m, n) = PBB(n, r) \\ $$

$$ 60 = 3 \times 18 + 6 \\ $$

$$ m = 60, n = 18, q = 3, r = 6 $$

$$ PBB(60, 18) = PBB(18, 6) = 6 $$

$$ 18 = 3 \times 6 + 0 $$

### Algoritma Euclidean

Diberikan dua buah bilangan bulat tak-negatif *m* dan *n* (*m* ≥ *n*). Algoritma Euclidean berikut mencari pembagi bersama terbesar dari *m* dan *n*.

**Algoritma Euclidean**

1. Jika *n* = 0 maka *m* adalah, $$PBB(m, n)$$, kemudian stop. Tetapi jika, $$ n \gt 0 $$, lanjutkan ke langkah 2.
2. Bagilah *m* dengan *n* dan misalkan *r* adalah sisanya.
3. Ganti nilai *m* dengan nilai n dan nilai *n* dengan nilai *r*, lalu ulang kembali ke langkah 1.

Contoh:
a. Nyatakan PBB(21, 45) sebagai kombinasi linier dari 21 dan 45. 
**Penyelesaian**:

$$45 = 2  21 + 3 (i)$$

$$21 = 7  3 + 0 (ii)$$

Sisa pembagian terakhir sebelum 0 adalah 3, maka **PBB(45, 21) = 3**

Dari persamaan (i) dapat dituliskan:

$$3 = 45 – 2  21 = 1  45 – 2  21$$

Jadi 3 merupakan kombinasi linier dari 45 dan 21

b. Nyatakan PBB(312, 70) sebagai kombinasi linier 312 dan 70.
**Jawaban**: Terapkan algoritma Euclidean untuk memperoleh PBB(312, 70):

$$312 = 4  70 + 32 (i)$$

$$70 = 2  32 + 6 (ii)$$

$$32 = 5  6 + 2 (iii)$$

$$6 = 3  2 + 0 (iv)$$

Sisa pembagian terakhir sebelum 0 adalah 2, maka **PBB(312, 70) = 2**

### Kombinasi Linear

*PBB(a, b)* bisa dinyatakan sebagai kombinasi linear seperti berikut:  $PBB(80, 12) = 4$

$4 = (-1) \times 80 + 12$

>**Teorema**. Misalkan a dan b bilangan bulat positif, maka terdapat bilangan bulat *m* dan *n* sedemikian sehingga 
>
>$$PBB(a, b) = ma + nb$$


1. Nyatakan PBB(21, 45) sebagai kombinasi linier dari 21 dan 45.
**Penyelesaian**:

$$45 = 2  21 + 3 (i)$$

$$21 = 7  3 + 0 (ii)$$

Sisa pembagian terakhir sebelum 0 adalah 3, maka PBB(45, 21) = 3
Dari persamaan (*i*) dapat dituliskan:

$$3 = 45 – 2  21 = 1  45 – 2  21$$

2. Nyatakan PBB(312, 70) sebagai kombinasi linier 312 dan 70.
Jawaban: Terapkan algoritma Euclidean untuk memperoleh PBB(312, 70):

$$ 312 = 4  70 + 32 (i)$$

$$70 = 2  32 + 6 (ii)$$

$$32 = 5  6 + 2 (iii)$$

$$6 = 3  2 + 0 (iv)$$

Sisa pembagian terakhir sebelum 0 adalah 2, maka PBB(312, 70) = 2

Susun pembagian nomor (iii) dan (ii) masing-masing menjadi

$$2 = 32 – 5  6 \text{ (iv)}$$

$$6 = 70 – 2  32 (v)$$

Sulihkan (v) ke dalam (iv) menjadi

$$2 = 32 – 5(70 – 232) = 132 – 570 + 1032 = 11  32 – 5  70 (vi)$$

Susun pembagian nomor (i) menjadi

$$32 = 312 – 4  70 (vii)$$

Jadi, PBB(312, 70) = 2 = 11  312 – 49  70

Jadi 3 merupakan kombinasi linier dari 45 dan 21

## Aritmatika Modulo

### Relatif Prima

Dua buah bilangan b≠ulat a dan b dikatakan relatif prima jika PBB(a, b) = 1.

Contoh:

(i) 7 dan 11 relatif prima karena PBB(7, 11) = 1

(ii) 20 dan 5 tidak relatif prima sebab PBB(20, 5) = 5  1

(iii) 31 dan 0 tidak relative prima sebab PBB(31, 0) = 31

Dikaitkan dengan kombinasi linier, jika a dan b relatif prima, maka

terdapat bilangan bulat m dan n sedemikian sehingga

ma + nb = 1

• Contoh 10. Bilangan 20 dan 3 adalah relatif prima karena PBB(20, 3) =1,

atau dapat ditulis

2 . 20 + (–13) . 3 = 1 (m = 2, n = –13)

### Kekongruenan Modulo

Misalkan a dan b bilangan bulat dan m adalah bilangan > 0, maka a ≅ b (mod m) jika dan hanya jika m | (a – b) (dibaca m bisa dibagi atau memiliki keterbagian terhadap (a - b))

Jika a tidak kongruen dengan b dalam modulus m, maka ditulis a !≅ b (mod m) .

17 ≅ 2 mod 3 (3 habis membagi 17 - 2 = 15)

21 ≅ 9 mod 12 (12 habis membagi 21 - 9 = 12)

15 ≅ 3 mod 6 (15 dibagi 6 bersisa 3) → 15 = 3 + 6k, k yang memenuhi adalah 2 (3 + 2.6 = 15)

Misalkan x ≅ 5 mod 11, maka semua x yang memenuhi adalah x-511 yang menghasilkan bilangan bulat, yaitu 16, 27. 38, dst

Kalau bentuk lain (mis 58 ≅ 18 mod 20) dengan persamaan 58 ≅ 3x mod 20, bisa disederhanakan jadi 18 ≅ 3x mod 20 (58 mod 20 ≅ 18 mod 20, maka 18 ≅ 3x mod 20 (lihat [sifat komutatif](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.hc97psoycyvj#heading=h.gl21eoh5ahka))), kemudian 3x ≅ 18 mod 20 → x=18 + 20k3, k = 0 maka x = 6 (atau k = 3, x = 26, 26 mod 20 = 6)

Misal ada operasi a ≅ b mod m, dengan m bilangan bulat positif dan c bilangan bulat, maka:

- Jika a ≅ b mod m, maka b ≅ a mod m  
   Jika a ≅ b mod m, maka artinya a dibagi m akan memiliki sisa yang sama saat b dibagi m, artinya a dan b komutatif. Misal 20 ≅ 2 mod 3, hal ini berarti 20 mod 3 akan memiliki nilai yang sama dengan 2 mod 3, yaitu 2. Begitupun 20 ≅ 17 mod 3

Jika a ≅ b mod m, dan c ≅ d mod m, maka:

- (a + c) ≅ (b + d) mod m
- (ac) ≅ (bd) mod m

### Invers Modulo

- Ingat: misal a = 4, maka invers a = a-1 = ¼, karena a \* a-1 = 1
- Syarat: Jika a dan m relatif prima dan m > 1, maka balikan (invers) dari a (mod m) ada.
- Balikan dari a (mod m) adalah bilangan bulat x sedemikian sehingga:

xa ≅ 1 (mod m)

- Dalam notasi lainnya, a–1 (mod m) = x
- Misal 4 mod 9, 4 dan 9 relatif prima (PBB nya 1), nah angka pengali berapa buat ngebikin 4x = 1 mod 9? Nilainya yaitu -2 (4 _ -2 = -8, sisa 1 kalau di mod 9), 7 (4 _ 7 = 28, 28 mod 9 = 1), 16, dst
- Cara lain selain bruteforce: pakai kekongruenan linear

![Soal invers modulo 1](https://i.imgur.com/zq51PwH.png)



- Cara lain: formula

Ingat kalau invers a mod m itu: ax = 1 mod m. Maka x = 1 + kma

Cara lain: pakai invers modulo dan sifat modulo (ac) = (bc) mod m

## Akar Primitif dan Logaritma Diskrit

### Akar Primitif

- Jika diketahui n adalah bilangan bulat, maka a disebut akar primitif dari n jika perpangkatan a, a2., …, aϕ(n) (dalam modulus n) menghasilkan nilai yang berbeda dan semuanya relatif prima dengan n
- Secara khusus, jika p adalah bilangan prima, maka a disebut akar primitif dari p jika perpangkatan a, a2, …, ap-1 (dalam modulus p) menghasilkan nilai yang berbeda (lihat fungsi [toitient Euler](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.hc97psoycyvj#heading=h.ju5sh58cur38))
- Contoh: misalkan p = 7, maka a = 3 adalah akar primitif dari 7 karena,  
   31 mod 7 = 3; 32 mod 7 = 2, 33 mod 7 = 6, 34 mod 7 = 4, 35 mod 7 = 5, 36 mod 7 = 1
- Jadi semua perpangkatan dari 3 menghasilkan nilai-nilai yang berbeda-beda saat diberikan modulus 7 (3, 2, 6, 4, 5, 1)
- Biasanya siklus perulangannya bakal ditemukan lagi di setiap p - 1 kali
- Untuk menemukan semua akar primitif dari p harus di-bruteforce

### Logaritma Diskrit

- Jika p adalah bilangan prima dan g dan y adalah sembarang bilangan bulat, carilah nilai x yang memenuhi:

gx ≅ y (mod p)

- Contoh: Carilah nilai x yang memenuhi 7x ≅ 15 (mod 41)
- Definisi: jika a adalah [akar primitif](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.hc97psoycyvj#heading=h.4dz127vyf14t) dari bilangan prima p, maka untuk bilangan bulat b kita dapat menemukan pangkat nilai x sedemikian sehingga

b ≅ ax (mod p), 0 ≤ x ≤ (p - 1)

- Pangkat x adalah logaritma diskrit dari b untuk basis a (mod p)
- Contoh: 7 adalah akar primitif dari bilangan prima p = 41, maka carilah x sedemikian sehingga 15 ≅ 7x (mod 41)  
   Jawab: x = 3, karena 73 = 343 ≅ 15 mod 41

# Teorema

## Teorema Euler

# Graf

## Jenis Graf

### Graf Berarah

#### Graf Asiklik


### Graf Tidak Berarah
