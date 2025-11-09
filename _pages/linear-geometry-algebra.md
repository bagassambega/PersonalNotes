---
layout: page-with-toc
title: Linear and Geometry Algebra
description: Linear algebra + geometry algebra
permalink: /linear-geometry-algebra/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/linear-geometry-algebra.md
---

# Matriks

## Perkenalan dan Operasi

### Operasi Dasar

- **Penjumlahan pengurangan**

  - Syarat: ukuran matriks A dan B sama

  - Jumlahkan saja semua cells yang corresponding di $A_{ij} + B_{ij}$

- **Perkalian matriks**

  - Syarat: Matriks $A_{(m \times n)}$ dan $B_{(o \times p)}$, dengan syarat $n = o$

  - Hasil: Matriks $A_{(m x n)} \times B_{(n \times p)} = C_{(m \times p)}$

Misal $A_{(2 \times 3)}$:

<table>
<tr><td>p</td><td>q</td><td>r</td></tr>
<tr><td>s</td><td>t</td><td>u</td></tr>
</table>

Matriks $B_{(3 \times 4)}$:

<table>
<tr><td>a</td><td>b</td><td>c</td><td>d</td></tr>
<tr><td>e</td><td>f</td><td>g</td><td>h</td></tr>
<tr><td>i</td><td>j</td><td>k</td><td>l</td></tr>
</table>

$= C_{(2 \times 4)}$

<table>
<tr><td>pa + qe + ri</td><td>pb + qf + rj</td><td>pc + qg + rk</td><td>pd + qh + rl</td></tr>
<tr><td>sa + te + ui</td><td>sb + tf + uj</td><td>sc + tg + uk</td><td>sd + th + ul</td></tr>
</table>

### Transpose {#transpose-matriks}

- Baris → kolom, kolom → matriks

- Transpose matriks $B = A^T : b_{ij} = a_{ji}$

- Sifat:

### Trace

### Sifat Operasi

### Matriks Identitas dan Matriks Nol

## Determinan

Syarat:

- Matriks persegi

Misal matriks M berukuran 3x3 atau lebih seperti sebagai berikut,

<table>
<tr><td>a</td><td>b</td><td>c</td></tr>
<tr><td>d</td><td>e</td><td>f</td></tr>
<tr><td>g</td><td>h</td><td>i</td></tr>
</table>

Maka untuk mencari determinan matriks M, pertama buat matriks semu seperti:  
  
<table>
<tr><td>a</td><td>b</td><td style="border-right:solid 1px;">c</td><td>a</td><td>b</td></tr>
<tr><td>d</td><td>e</td><td style="border-right:solid 1px;">f</td><td>d</td><td>e</td></tr>
<tr><td>g</td><td>h</td><td style="border-right:solid 1px;">i</td><td>g</td><td>h</td></tr>
</table>

D = aei +  + bfg + cdh - (ceg + afh + bdi)

Jika berukuran 2x2:

<table>
<tr><td>a</td><td>b</td></tr>
<tr><td>c</td><td>d</td></tr>
</table>

D = ad - bc

Metode lain: Determinan matriks [metode kofaktor](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.67u77g919b2g#heading=h.yrxte4p4jvmz)

## Matriks Minor

### Minor

$M_{ij}$  = minor untuk entri $a_{ij}$

 = Determinan submatriks yang elemen-elemennya tidak berada di baris i dan j

i, j dimulai dari 0

### Matriks Minor

Matriks minor: kumpulan dari minor entri

<table>
<tr><td>M<sub>11</sub></td><td>M<sub>12</sub></td><td>M<sub>13</sub></td></tr>
<tr><td>M<sub>21</sub></td><td>M<sub>22</sub></td><td>M<sub>23</sub></td></tr>
<tr><td>M<sub>31</sub></td><td>M<sub>32</sub></td><td>M<sub>33</sub></td></tr>
</table>

## Kofaktor dan Matriks Kofaktor

### Kofaktor

$C_{ij}$ = kofaktor untuk entri $a_{ij} = (-1)^{i+j} M_{ij}$

$M_{ij}$  adalah minor untuk baris *i* dan kolom *j*, *i* dan *j* dimulai dari 0

### Matriks Kofaktor

Kumpulan dari kofaktor

<table>
<tr><td>C<sub>11</sub></td><td>C<sub>12</sub></td><td>C<sub>13</sub></td></tr>
<tr><td>C<sub>21</sub></td><td>C<sub>22</sub></td><td>C<sub>23</sub></td></tr>
<tr><td>C<sub>31</sub></td><td>C<sub>32</sub></td><td>C<sub>33</sub></td></tr>
</table>

### Determinan Metode Kofaktor

Misal matriks A sebagai berikut,

Determinan ditentukan dengan,

Ada tambahan: tanda untuk perhitungan:  

## Matriks Adjoint

[Transpose](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.67u77g919b2g#heading=h.6dd7bg3g04hu) dari matriks [kofaktor](#matriks-kofaktor)

## Invers Matriks

Syarat:

- Memiliki determinan ≠ 0

Untuk matriks 2x2:

<table>
<tr><td>a</td><td>b</td></tr>
<tr><td>c</td><td>d</td></tr>
</table>

$Invers = \frac{1}{det(A)} \times$

<table>
<tr><td>d</td><td>-b</td></tr>
<tr><td>-c</td><td>a</td></tr>
</table>

Untuk matriks 3x3 dan lebih:

$Invers = \frac{1}{det(A)} \times adj(A)$

Dengan Adj = [adjoint](#matriks-adjoint) matriks A

Sifat:
