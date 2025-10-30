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

$$ m = (n+1)\;q + (r+q) $$

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

$$45 = 2 \times 21 + 3 \tag{1}$$

$$21 = 7 \times 3 + 0 \tag{2}$$

Sisa pembagian terakhir sebelum 0 adalah 3, maka **PBB(45, 21) = 3**

Dari persamaan (i) dapat dituliskan:

$$3 = 45 \;–\; 2 \times 21 = 1 \times 45 \;–\; 2 \times 21$$

Jadi 3 merupakan kombinasi linier dari 45 dan 21

b. Nyatakan PBB(312, 70) sebagai kombinasi linier 312 dan 70.
**Jawaban**: Terapkan algoritma Euclidean untuk memperoleh PBB(312, 70):

$$312 = 4 \times 70 + 32 \tag{i}$$

$$70 = 2 \times 32 + 6 \tag{ii}$$

$$32 = 5 \times 6 + 2 \tag{iii}$$

$$6 = 3 \times 2 + 0 \tag{iv}$$

Sisa pembagian terakhir sebelum 0 adalah 2, maka **PBB(312, 70) = 2**

### Kombinasi Linear

*PBB(a, b)* bisa dinyatakan sebagai kombinasi linear seperti berikut:  $PBB(80, 12) = 4$

$4 = (-1) \times 80 + 12$

>**Teorema**. Misalkan a dan b bilangan bulat positif, maka terdapat bilangan bulat *m* dan *n* sedemikian sehingga 
>
>$$PBB(a, b) = ma + nb$$


1. Nyatakan PBB(21, 45) sebagai kombinasi linier dari 21 dan 45.
**Penyelesaian**:

$$45 = 2 \times 21 + 3 \tag{i}$$

$$21 = 7 \times 3 + 0 \tag{ii}$$

Sisa pembagian terakhir sebelum 0 adalah 3, maka PBB(45, 21) = 3
Dari persamaan (*i*) dapat dituliskan:

$$3 = 45 \;–\; 2 \times 21 = 1 \times 45 \;–\; 2 \times 21$$

Jadi 3 merupakan kombinasi linier dari 45 dan 21

2. Nyatakan PBB(312, 70) sebagai kombinasi linier 312 dan 70.
Jawaban: Terapkan algoritma Euclidean untuk memperoleh PBB(312, 70):

$$ 312 = 4 \times 70 + 32 \tag{i}$$

$$70 = 2 \times 32 + 6 \tag{ii}$$

$$32 = 5 \times 6 + 2 \tag{iii}$$

$$6 = 3 \times 2 + 0 \tag{iv}$$

Sisa pembagian terakhir sebelum 0 adalah 2, maka PBB(312, 70) = 2

Susun pembagian nomor (*iii*) dan (*ii*) masing-masing menjadi

$$2 = 32 \;–\; 5 \times 6 \tag{v}$$

$$6 = 70 – 2 \times 32 \tag{vi}$$

Sulihkan (*vi*) ke dalam (*v*) menjadi

$$2 = 32 \;–\; 5\;(70 – 232) = 132 \;–\; 570 + 1032 = 11 \times 32 \;–\; 5 \times 70 \tag{vii}$$

Susun pembagian nomor (*i*) menjadi

$$32 = 312 \;–\; 4 \times 70 \tag{viii}$$

Jadi, PBB(312, 70) = 2 = $11 \times 312 \;–\; 49 \times 70$

## Aritmatika Modulo

### Relatif Prima {#relatif-prima}

> Dua buah bilangan bulat *a* dan *b* dikatakan relatif prima jika **PBB(*a*, *b*) = 1**.

Contoh:

(i) 7 dan 11 relatif prima karena PBB(7, 11) = 1

(ii) 20 dan 5 tidak relatif prima sebab PBB(20, 5) = 5  1

(iii) 31 dan 0 tidak relative prima sebab PBB(31, 0) = 31

Dikaitkan dengan kombinasi linier, jika a dan b relatif prima, maka terdapat bilangan bulat m dan n sedemikian sehingga

> $$ ma + nb = 1 $$

• Contoh 10. Bilangan 20 dan 3 adalah relatif prima karena PBB(20, 3) =1,

atau dapat ditulis

$$ 2 \times 20 + (–13) \times 3 = 1 \tag{m = 2, n = –13} $$

### Kekongruenan Modulo

> Misalkan *a* dan *b* bilangan bulat dan *m* adalah bilangan > 0, maka $a \equiv b \pmod{m}$ jika dan hanya jika $m \mid (a \;–\; b)$ (dibaca *m* bisa dibagi atau memiliki keterbagian terhadap (*a* - *b*))

> Jika a tidak kongruen dengan b dalam modulus m, maka ditulis $a \not\equiv b\pmod{m}$

$$17 \equiv 2 \pmod{3} \tag{3 habis membagi 17 - 2 = 15}$$

$$21 \equiv 9\pmod{12} \tag{12 habis membagi 21 - 9 = 12}$$

$$15 \equiv 3 \pmod{6} \tag{15 dibagi 6 bersisa 3}$$
atau 
$$15 = 3 + 6k$$

k yang memenuhi adalah 2

$$(3 + 2 \times 6 = 15)$$

Misalkan $x \equiv 5 \pmod{11}$, maka semua *x* yang memenuhi adalah $\frac{x-5}{11}$yang menghasilkan bilangan bulat, yaitu 16, 27. 38, dst

Kalau bentuk lain (mis $58 \equiv 18 \pmod{20}$) dengan persamaan $58 \equiv 3x \pmod{20}$, 
bisa disederhanakan jadi $18 \equiv 3x \pmod{20}$ ($58 \pmod{20} \equiv 18\pmod{20}$, 
maka $18 \equiv 3x \pmod{20}$ (lihat [sifat komutatif](#sifat-kekongruenan-modulo))), 
kemudian $3x \equiv 18\pmod{20}$ → $x = \frac{18 + 20k}{3}$, 
*k* = 0 maka *x* = 6 
(atau *k* = *3*, *x* = 26, 26 mod 20 = 6)

### Persamaan Linear Kekongruenan n-Variabel



### Sifat Kekongruenan Modulo {#sifat-kekongruenan-modulo}

1. Misal ada operasi $a \equiv b\pmod{m}$, dengan *m* bilangan bulat positif dan *c* bilangan bulat, maka:

- $(a + c) \equiv (b + c) \pmod m$
- $(ac) \equiv (bc) \pmod m$
- $ap \equiv bp \pmod m$, dengan *p* bilangan bulat tak negatif
- Jika $a \equiv b \pmod{m}$, maka $b \equiv a \pmod{m}$
   Jika $a \equiv b\pmod{m}$, maka artinya *a* dibagi *m* akan memiliki sisa yang sama saat *b* dibagi *m*, artinya *a* dan *b* komutatif. Misal $20 \equiv 2 \pmod 3$, hal ini berarti 20 mod 3 akan memiliki nilai yang sama dengan 2 mod 3, yaitu 2. Begitupun $20 \equiv 17 \pmod 3$

2. Jika $a \equiv b \pmod m$, dan $c \equiv d \pmod m$, maka:

- $(a + c) \equiv (b + d) \pmod m$
- $(ac) \equiv (bd) \pmod m$

### Invers Modulo {#invers-modulo}

- Ingat: misal *a* = 4, maka $\text{invers } a = a^{-1} = ¼$, karena $a \times a^{-1} = 1$
- Syarat: Jika *a* dan *m* [relatif prima](#relatif-prima) dan *m* > 1, maka balikan (invers) dari *a* (mod *m*) ada.
- Balikan dari *a* (mod *m*) adalah bilangan bulat *x* sedemikian sehingga:

$$xa \equiv 1 \pmod m$$
#### Metode Bruteforce

- Dalam notasi lainnya, $a^{–1} \pmod m = x$

- Misal 4 mod 9, 4 dan 9 relatif prima (PBB nya 1), nah angka pengali berapa buat ngebikin 4x = 1 mod 9? Nilainya yaitu -2 ($4 \times (-2) = -8$, sisa 1 kalau di mod 9), 7 ($4 \times 7 = 28$, 28 mod 9 = 1), 16, dst

#### Metode Kekongruenan Linear

![Soal invers modulo 1](https://i.imgur.com/zq51PwH.png)

![Contoh invers modulo metode kekongruenan](https://i.imgur.com/lgBx1JD.png)
#### Metode Formula

Ingat kalau invers a = p mod m itu adalah $ax = 1 \pmod m$. Maka $ax = 1 \pmod m \implies x = 1 + kma$


**Contoh**

![Contoh invers metode bruteforce formula](https://i.imgur.com/GUnHjxD.png)


## Kekongruenan Linear

> Bentuk:
> $$ax \equiv b \pmod m$$
> dengan *m* > 0, *a* dan *b* bilangan bulat, dan *x* adalah variabel


Pemecahan: 

$$ax \equiv b + km \implies x = b + kma$$

, dengan mencoba *k* = 0, 1, 2, dst

Contoh:

![Contoh penyelesaian kekongruenan linear memakai bruteforce](https://i.imgur.com/OQB4duu.png)

Cara lain: pakai [invers modulo](#invers-modulo) dan [sifat modulo](#sifat-kekongruenan-modulo) $(ac) = (bc) \pmod m$
![Penyelesaian kekongruenan memakai invers modulo](https://i.imgur.com/jxHnbE1.png)

## Akar Primitif dan Logaritma Diskrit

### Akar Primitif

> Jika diketahui *n* adalah bilangan bulat, maka *a* disebut **akar primitif** dari *n* jika perpangkatan $a, a_2., …, a_{ϕ(n)}$ (dalam modulus n) menghasilkan nilai yang berbeda dan semuanya [relatif prima](#relatif-prima) dengan *n*

- Secara khusus, jika *p* adalah bilangan prima, maka *a* disebut **akar primitif** dari *p* jika perpangkatan $a, a_2, …, a_{p-1}$ (dalam modulus *p*) menghasilkan nilai yang berbeda (lihat fungsi [toitient Euler](#teorema-euler-modulo))

- Contoh: misalkan *p* = 7, maka *a* = 3 adalah akar primitif dari 7 karena,  

| Sisa modulo       | $3^x \pmod 7$     |
| ----------------- | ----------------- |
| $3^1 \pmod 7 = 3$ | $3^4 \pmod 7 = 4$ |
| $3^2 \pmod 7 = 2$ | $3^5 \pmod 7 = 5$ |
| $3^3 \pmod 7 = 6$ | $3^6 \pmod 7 = 1$ |

- Jadi semua perpangkatan dari 3 menghasilkan nilai-nilai yang berbeda-beda saat diberikan modulus 7 (3, 2, 6, 4, 5, 1)
- Biasanya siklus perulangannya bakal ditemukan lagi di setiap *p - 1* kali
- Untuk menemukan semua [akar primitif](#akar-primitif) dari *p* harus di-bruteforce

### Logaritma Diskrit

> Jika *p* adalah bilangan prima dan *g* dan *y* adalah sembarang bilangan bulat, carilah nilai x yang memenuhi:
> 
> $$ g^x \;\equiv\; y \pmod p $$

- Contoh: Carilah nilai x yang memenuhi $7x \equiv 15 \pmod 41$


> **Definisi**: jika *a* adalah [akar primitif](#akar-primitif) dari bilangan prima p, maka untuk bilangan bulat b kita dapat menemukan pangkat nilai x sedemikian sehingga
> 
> $$b \;\equiv\; a^x \pmod p, \tag{0 ≤ x ≤ (p - 1)}$$

- Pangkat *x* adalah logaritma diskrit dari *b* untuk basis *a* (mod *p*)
- Contoh: 7 adalah akar primitif dari bilangan prima *p* = 41, maka carilah *x* sedemikian sehingga $15 \equiv 7^x \pmod 41$  
- Jawab: *x* = 3, karena $7^3 = 343 \equiv 15 \pmod 41$

# Teorema

## Teorema Euler {#teorema-euler-modulo}

# Graf

## Jenis Graf

### Graf Berarah {#graf-berarah}

#### Graf Asiklik {#graf-asiklik}


### Graf Tidak Berarah
