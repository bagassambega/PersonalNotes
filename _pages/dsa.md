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

A = {1, 2, 3, 4}, B = {"Satu", "Dua", "TIga"}

### Keanggotaan

$x \in A$ : x merupakan anggota dari himpunan A
$x \notin A$: x bukan merupakan anggota dari himpunan A

### Bagian Dari

$x \subset A$ : x merupakan himpunan bagian dari A
$x \subsetin A$ 

# NP-Complete Problem {#np-complete-problem}

Non-polynomial problem: persoalan yang tidak bisa diselesaikan dengan kompleksitas waktu linear (mis. O(n) = 2n)

## Knapsack Problem {#knapsack-problem}

Diberikan bobot knapsack (bobot maksimal yang bisa dibawa ransel) adalah M. Diketahui terdapat n buah objek dengan masing-masing bobot wi akan dimasukkan ke dalam tas. Tentukan apakah barang ke-i dibawa atau tidak (bi menunjukkan apakah barang dibawa (1) atau tidak (0)) sehingga kita bisa membawa barang sebanyak mungkin
