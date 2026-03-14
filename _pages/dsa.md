---
layout: page-with-toc
title: Data Structures and Algorithms
description: Comprehensive notes on data structures, algorithms, algorithmic strategies, complexity analysis, and problem-solving techniques
permalink: /dsa/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/dsa.md
---
# Set / Himpunan

- Sekumpulan objek unik/objek yang berbeda-beda
- Tidak ada objek yang sama atau muncul lebih dari sekali pada sebuah himpunan
- Anggota himpunan: **elemen/unsur/anggota**
- Dalam himpunan, urutan tidak berpengaruh

## Notasi

1. A = {1, 2, 3, 4}, B = {"Satu", "Dua", "TIga"}
2. A = { $x |x \in \mathbb{N}, 1 \le x \lt 4$ } = Amerupakan himpunan dengan anggota yang berasal dari bilangan natural dari angka 1-3
3. Simbol baku dalam matematika. Lihat matematika diskrit

### Kardinalitas

Banyak anggota dalam sebuah himpunan
Notasi: $n(A)$ atau $| A |$

### Himpunan Kosong

Ditandai dengan {} atau $\emptyset$

## Keanggotaan

Misalkan x = 1, A = {1, 2, 3}, y = 12

$x \in A$ : x merupakan anggota dari himpunan A
$y \notin A$: y bukan merupakan anggota dari himpunan A

## Himpunan Bagian

Misalkan x = {1, 2, 3}, y = {1, 2, 3, 4, 5}, A = {1, 2, 3, 4, 5}

$x \subset A$ : x merupakan himpunan bagian dari A, tapi x tidak sama dengan A
$y \subseteq A$ : y merupakan himpunan bagian atau sama dengan A (seluruh anggota A ada juga di y)

x adalah **subset** dari A, dan A adalah **superset** dari x

Secara formal, $A \subseteq B \Leftrightarrow \forall z (x \in A \rightarrow x \in B)$ 
A merupakan himpunan bagian sama dengan B jika setiap anggota A merupakan anggota B

### Ekuivalensi dan Kesamaan Himpunan

#### Ekuivalensi

Himpunan A ekuivalen dengan himpunan B jika kardinal kedua himpunan sama (jumlah anggota keduanya sama)

A ~ B sama dengan $| A | = | B |$

#### Kesamaan

Himpunan A sama dengan himpunan B jika seluruh anggota A sama dengan seluruh anggota B

A = B sama dengan $A \subseteq B$ dan $B \subseteq A$

#### Saling Lepas

Himpunan A dan B (A // B) saling lepas jika tidak ada satupun anggota himpunan A yang ada di himpunan B dan juga sebaliknya (tidak intersect sama sekali)

# NP-Complete Problem {#np-complete-problem}

Non-polynomial problem: persoalan yang tidak bisa diselesaikan dengan kompleksitas waktu linear (mis. O(n) = 2n)

## Knapsack Problem {#knapsack-problem}

Diberikan bobot knapsack (bobot maksimal yang bisa dibawa ransel) adalah M. Diketahui terdapat n buah objek dengan masing-masing bobot wi akan dimasukkan ke dalam tas. Tentukan apakah barang ke-i dibawa atau tidak (bi menunjukkan apakah barang dibawa (1) atau tidak (0)) sehingga kita bisa membawa barang sebanyak mungkin
