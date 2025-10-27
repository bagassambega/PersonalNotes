---
layout: page-with-toc
title: Linear and Geometry Algebra
description: Linear algebra + geometry algebra
permalink: /lin-geo-algebra/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/linear-geometry-algebra.md
---
# Matriks

## Perkenalan dan Operasi

### Operasi Dasar

- Penjumlahan pengurangan
    

- Syarat: ukuran matriks A dan B sama
    
- Jumlahkan saja semua cells yang corresponding di Aij + Bij
    

- Perkalian matriks
    

- Syarat: Matriks A (m x n) dan B (o x p), n = o
    
- Hasil: Matriks A (m x n) x B (n x p) = C (m x p)
    

  

Misal A (2 x 3):

|   |   |   |
|---|---|---|
|p|q|r|
|s|t|u|

  

Matriks B (3 x 4):

|   |   |   |   |
|---|---|---|---|
|a|b|c|d|
|e|f|g|h|
|i|j|k|l|

  

= C (2 x 4)

|   |   |   |   |
|---|---|---|---|
|pa + qe + ri|pb + qf + rj|pc + qg + rk|pd + qh + rl|
|sa + te + ui|sb + tf + uj|sc + tg + uk|sd + th + ul|

### Transpose

- Baris → kolom, kolom → matriks
    
- Transpose matriks B = AT : bij = aij
    
- Sifat:
    

### Trace

### Sifat Operasi

### Matriks Identitas dan Matriks Nol

## Determinan

Syarat:

- Matriks persegi
    

  

Misal matriks M berukuran 3x3 atau lebih seperti sebagai berikut,

|   |   |   |
|---|---|---|
|a|b|c|
|d|e|f|
|g|h|i|

  

Maka untuk mencari determinan matriks M, pertama buat matriks semu seperti:  
  

|   |   |   |   |   |
|---|---|---|---|---|
|a|b|c|a|b|
|d|e|f|d|e|
|g|h|i|g|h|

  

D = aei +  + bfg + cdh - (ceg + afh + bdi)

  

Jika berukuran 2x2:

  

|   |   |
|---|---|
|a|b|
|c|d|

  

D = ad - bc

  

Metode lain: Determinan matriks [metode kofaktor](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.67u77g919b2g#heading=h.yrxte4p4jvmz)

## Matriks Minor

### Minor

Mij  = minor untuk entri aij

 = Determinan submatriks yang elemen-elemennya tidak berada di baris i dan j

i, j dimulai dari 0

### Matriks Minor

Matriks minor: kumpulan dari minor entri

  

|   |   |   |
|---|---|---|
|M11|M12|M13|
|M21|M22|M23|
|M31|M32|M33|

  

## Matriks Kofaktor

### Kofaktor

Cij = kofaktor untuk entri aij

 = (-1)i+j Mij

Mij  adalah minor untuk baris i dan kolom j, i j dimulai dari 0

### Matriks Kofaktor

Kumpulan dari kofaktor

  

|   |   |   |
|---|---|---|
|C11|C12|C13|
|C21|C22|C23|
|C31|C32|C33|

### Determinan Metode Kofaktor

Misal matriks A sebagai berikut,

  

Determinan ditentukan dengan,

  

Ada tambahan: tanda untuk perhitungan:  

## Matriks Adjoint

[Transpose](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.67u77g919b2g#heading=h.6dd7bg3g04hu) dari matriks [kofaktor](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.67u77g919b2g#heading=h.i91eg17ifauy)

## Invers Matriks

Syarat:

- Memiliki determinan ≠ 0
    

  

Untuk matriks 2x2:

  

|   |   |
|---|---|
|a|b|
|c|d|

  

Invers = 1det(A)x

|   |   |
|---|---|
|-d|b|
|c|a|

  
  

Untuk matriks 3x3 dan lebih:

Invers = 1det(A)x adj(A)

Dengan Adj = [adjoint](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.67u77g919b2g#heading=h.25x7fusvjn2i) matriks A

  

Sifat: