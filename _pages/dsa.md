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

# Map

- Berisi sekumpulan pasangan **key-value**. Kita mengakses value menggunakan key tersebut
- Key haruslah unik dan tidak colliding dengan key yang lain (penggunaan key yang sama harus menghasilkan/mengakses value yang sama juga)
- Contoh map:

```js

const map = {
	"person1": "alex",
	"person2": "john",
	"person3": "fiona"
}

// Access
console.log(map.person2); // john
console.log(map["person2"]); // john
```

## Operasi dan Kompleksitas

- Search: O(1), karena tinggal input key dan dapat value-nya
- Insert: O(1), karena tinggal allocate menggunakan key
- Delete: O(1)

# Hashmap

- Hash: perubahan informasi satu arah menghasilkan value acak yang bersifat deterministik dan one-way (value -> hash, hash -/-> value)
- Penjelasan lebih lengkap mengenai hash dapat dilihat di [Matematika Diskrit](/discrete-math/hash)
- Hashmap menggabungkan map dengan fungsi hash, tapi pembentukan key-nya menggunakan fungsi hash yang berasal dari value
- Misal: value = "Hello world", hash = "ax78228", maka di map: `map["ax78228"] = "Hello world"`

# Queue

# Stack

# Deque (Two-way Queue)

# String

## Palindrome

- Palindrom adalah tipe string yang ketika dibolak-balik/di-invers, hasilnya tetap sama
- Contoh: "kasur rusak", "ababa", "b", "aaaa"
- Untuk memeriksa sebuah string palindrom atau tidak, ada beberapa algoritma yang bisa digunakan, tapi umumnya yang digunakan adalah: 

### Reverse First Then Check

- Buat string baru dengan membalikkan string awal, kemudian cek apakah string kebalikan sama dengan string awal
- Algoritma:

```java
bool isPalyndrome(String s) {
	String reverse = new String();
	
	for (int i = s.length - 1; i >= 0; i--) {
		reverse = reverse + s[i];
	}
	
	if (s.equals(reverse)) {
		return True;
	} else {
		return False;
	}
}
```

- Time complexity: O(n) karena setiap karakter diiterasi dan disimpan di variabel baru
- Space complexity: O(n) karena menyimpan string baru dengan panjang string tersebut

### Bruteforce

- Gunakan **two pointers**, satu dari awal, satu dari akhir. Yang dari awal, cek setiap karaketer apakah sama dengan karakter dari akhir. Kemudian cek string kedua dari awal dan kedua dari akhir, dst. sampai pointer awal mencapai akhir, dan pointer akhir mencapai awal

```java
bool isPalyndrome(String s) {
	int left = 0;
	int right = s.length() - 1;
	
	while (left <= s.length() - 1 || right >= 0) {
		if (s[left] != s[right]) {
			return False;
		}
		left++;
		right--;
	}
	
	return True;
}
```

- Time complexity: O(n) karena iterasi string dari awal sampai akhir
- Space complexity: O(1) karena hanya menyimpan variabel left dan right

### Optimalisasi

- Masih menggunakan two pointers seperti bruteforce, tapi kita cukup memeriksa setengah bagian awal dari pointer awal, dan setengah bagian akhir dari pointer akhir
- Metode ini cukup karena kita hanya harus memeriksa apakah setengah awal = setengah akhir, karena string palindrom kalau kita invers setengah akhir, hasilnya pasti sama dengan setengah awal

```java
bool isPalyndrome(String s) {
	int left = 0;
	int right = s.length() - 1;
	
	while (left < right) {
		if (s[left] != s[right]) {
			return False;
		}
		left++;
		right--;
	}
	
	return True;
}
```

- Time complexity: O(n/2), tapi karena 1/2 itu konstan, jadi sebetulnya tetap O(n), tapi practically better
- Space complexity: O(n)

## Searching/Substring



## Searching Palindromes in String/Substring




# Graf

## Jenis Graf

### Graf Berarah {#graf-berarah}

#### Graf Asiklik {#graf-asiklik}


### Graf Tidak Berarah

# Tree

## Search

## Insert



# Balanced Tree

## Search

## Insert

# Linked List

## Search dan Insert

## Reverse

# Two Way Linked List


# NP-Complete Problem {#np-complete-problem}

Non-polynomial problem: persoalan yang tidak bisa diselesaikan dengan kompleksitas waktu linear (mis. O(n) = 2n)

## Knapsack Problem {#knapsack-problem}

Diberikan bobot knapsack (bobot maksimal yang bisa dibawa ransel) adalah M. Diketahui terdapat n buah objek dengan masing-masing bobot wi akan dimasukkan ke dalam tas. Tentukan apakah barang ke-i dibawa atau tidak (bi menunjukkan apakah barang dibawa (1) atau tidak (0)) sehingga kita bisa membawa barang sebanyak mungkin
