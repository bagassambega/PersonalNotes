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

## Kompleksitas Operasi

- Kompleksitas dari operasi set sebetulnya tergantung pada implementasi dari set itu sendiri. Ada yang memakai hash table/hashmap, di mana average-nya bisa saja $O(1)$, ada yang memakai array biasa dengan average $O(n)$
- **Insert**: bisa $O(1)$, worst case $O(n)$
- **Search**: bisa $O(1)$, worst case $O(n)$
- **Delete**: bisa $O(1)$, worst case $O(n)$

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

## Operasi dan Kompleksitas

Sama seperti map:

- Search: O(1), karena tinggal input key dan dapat value-nya
- Insert: O(1), karena tinggal allocate menggunakan key
- Delete: O(1)

# Linked List

- Linked list adalah tipe data seperti rantai. Linked list berisi sekumpulan node di mana setiap node  menyimpan value dia sendiri, dan kemudian pointer ke node berikutnya

![593](../assets/images/lectures/dsa_20260829-194738.png)




# Double Linked List

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

## Reverse


# Balanced Tree

## Search

## Insert

## Reverse

# Linked List

## Search dan Insert

## Reverse

# Two Way Linked List


# NP-Complete Problem {#np-complete-problem}

Non-polynomial problem: persoalan yang tidak bisa diselesaikan dengan kompleksitas waktu linear (mis. $O(n) = 2^n$

## Knapsack Problem {#knapsack-problem}

Diberikan bobot knapsack (bobot maksimal yang bisa dibawa ransel) adalah M. Diketahui terdapat n buah objek dengan masing-masing bobot wi akan dimasukkan ke dalam tas. Tentukan apakah barang ke-i dibawa atau tidak (bi menunjukkan apakah barang dibawa (1) atau tidak (0)) sehingga kita bisa membawa barang sebanyak mungkin

# Algorithmic Thinking

## Two Pointers

- Pada suatu struktur data, dipersiapkan 2 buah pointer dari ujung yang berbeda-beda, kemudian keduanya bergerak saling berlawanan arah/saling mendekat untuk mencari indices/potongan dari tipe data tersebut sampai mendapatkan hasil yang diharapkan

### Container with Most Water

![](../assets/images/lectures/system-design_20260823-103754.png)

#### Problem

Diketahui sebuah array `height` berisi tiang-tiang pancang dengan tinggi `height[i]` pada titik `i`. Kita akan memasukkan air di antara dua tiang pancang, yang menghasilkan volume air terbanyak di antara dua tiang pancang yang ada. Carilah volume terbesar yang bisa ditampung oleh container tersebut

#### Logic

Untuk menyelesaikan masalah tersebut, kita perlu menghitung luas area terbesar yang bisa dihasilkan oleh tinggi dua tiang pancang (H, height) dan juga jarak antar tiang pancang (W, width):

$$ L = W \times H $$

Untuk mencari tingginya, kita akan menggunakan $H = min(h_1, h_2)$. Karena tinggi maksimal yang bisa digapai oleh air terhadap dua tiang pancang itu hanyalah tinggi tiang pancang terendah, kalau lebih dari itu airnya tumpah. Kemudian dikalikan dengan jarak antar tiang pancang

#### Bruteforce

- Kompleksitas: $O(n^2)$ time dan O(1) space
- Seperti biasa, bruteforce dengan menguji semua kemungkinan kombinasi 2 tiang pancang menggunakan double loop:

```java
static int maxWater(int[] arr) {
        int n = arr.length;
        int res = 0;
        for (int i = 0; i < n; i++) {
            for (int j = i + 1; j < n; j++) {
              
                // calculate the amount of water
                int amount = 
                    Math.min(arr[i], arr[j]) * (j - i);
              
                // keep track of maximum amount of water
                res = Math.max(amount, res);
            }
        }
        return res;
    }
```

#### Two Pointers

- Kompleksitas: $O(n)$ time dan O(1) space
- Jadi instead of kita coba setiap kemungkinan, kita akan simpan dua buah pointer di paling awal array `height` (left) dan di paling akhir (right)

![580](../assets/images/lectures/system-design_20260823-105404.png)

- Ketika kita akan mengecek kemungkinan selanjutnya, kita akan menggeser salah satu dari pointer left dan right untuk digeser saling mendekat. Namun pertanyaannya, pointer mana yang digeser?
- Karena kita tau kalau kita menggeser salah satu pointer, pastilah width akan selalu berkurang satu, baik yang digeser yang left maupun yang right. Oleh karenanya, kita akan menggeser pointer di tiang pancang terendah, karena kita ingin sebisa mungkin selalu menggunakan tiang pancang tertinggi, at least di salah satunya
- Keep track max volume-nya

```java
public static int maxArea(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int max = 0;

        while (left < right) {
            int currentHeight;

            if (height[left] < height[right]) {
                currentHeight = height[left];
            } else {
                currentHeight = height[right];
            }


            int width = right - left;
            int volume = width * currentHeight;

            if (volume > max) {
                max = volume;
            }

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return max;
    }
```


## Sliding Window

- Sama konsepnya seperti jendela yang digeser-geser, kita ingin menentukan bagian mana dari array/tipe data yang memenuhi suatu kriteria tertentu.
- Perbedaan utama dengan two pointers adalah jika two pointers itu menggunakan dua pointer dari arah yang berlawanan, sliding window itu seperti jendela yang digeser, arah geraknya sama, tapi ada jarak antara dua pointer itu (ibaratnya jarak antara ujung jendela dengan ujung jendela)
- Contoh: jendela ukurannya 5 (jarak antara pointer kanan dan kiri adalah 5). Iterasi pertama:

![629](../assets/images/lectures/system-design_20260823-110558.png)


Iterasi kedua:

![623](../assets/images/lectures/system-design_20260823-110647.png)

Iterasi ketiga:

![621](../assets/images/lectures/system-design_20260823-110711.png)

- Tipe sliding window di atas adalah **static sliding window**, jadi ukuran sliding window-nya static, jarak antar pointer tetap dipertahankan
- Ada juga **dynamic sliding window**, jadi ukuran sliding window-nya bisa diubah-ubah, alias jarak antara pointer kiri dan kanan bisa berubah-ubah, tapi arah gerak utamanya tetap sama

### Static Sliding Window: Maximum Sum Subarray of Size K

#### Problem

- Misalkan ada sebuah array `array`, dan kita ingin mengetahui subset/subarray dari array tersebut yang dapat menghasilkan sum/jumlah terbesar jika ukuran subarray nya adalah konstan, misalkan K = 5

![](../assets/images/lectures/system-design_20260823-111102.png)

#### Bruteforce

- Jika menggunakan bruteforce, maka kita akan menghitung setiap subarray dari array tersebut dengan menghitung:

`a[0:4] = a[0] + a[1] + a[2] + a[3] + a[4] = 18`
`a[1:5] = a[1] + a[2] + a[3] + a[4] + a[5] = 9`
`a[2:6] = a[2] + a[3] + a[4] + a[5] + a[6] = 6`
...

- Jika diformulasikan menjadi:

$a[0:k-1] = a_0 + a_1 + ... + a_{k-1}$

- Dengan bruteforce seperti ini, jika panjang array adalah $n$ dan panjang subset yang ingin dihitung adalah $k$, maka kompleksitasnya adalah: time $O(n \times k)$  dan space $O(1)$, karena kita mengiterasi sebanyak $n$ item dan untuk setiap item, kita menjumlahkan sebanyak $k$ kali

#### Static Sliding Window

- Coba perhatikan lagi perhitungan dari setiap step di proses bruteforce:

`a[0:4] = a[0] + a[1] + a[2] + a[3] + a[4] = 18`
`a[1:5] = a[1] + a[2] + a[3] + a[4] + a[5] = 9`
`a[2:6] = a[2] + a[3] + a[4] + a[5] + a[6] = 6`

Kalau dilihat, ada pattern yang diulang di outer loop. Setiap kali outer loop ke next iterasi, dia hanya menghilangkan penjumlahan item paling pertama, dan kemudian menambah item paling baru

- Maka misalkan $k = 5$, maka step by step di atas adalah:

1. `a[0:4] = a[0] + a[1] + a[2] + a[3] + a[4] = 18` 
2. `a[1:5] = a[1] + a[2] + a[3] + a[4] + a[5] = 9`, dan jika kita lihat dengan menghilangkan `a[0]` dan menambahkan `a[5]`, maka formulanya menjadi sum sebelumnya dikurangi dengan item yang hilang dijumlahkan dengan item yang baru nambah, yaitu 18 - 8 + (-1) = 9
3. `a[2:6] = a[2] + a[3] + a[4] + a[5] + a[6] = 6`, jika kita lihat dengan menghilangkan `a[1]` dan menambahkan `a[6]`, maka formulanya menjadi sum sebelumnya dikurangi dengan item yang hilang dijumlahkan dengan item yang baru nambah, yaitu 9 - 3 + 0 = 6

- Jadi kita bisa menulis formula baru:

$sum_i = sum_{i-1} - a_{deleted} + a_{added}$

- Jika dikodekan:

```python
current = best = sum(a[0:k])

for new in range(k, len(a)): # Dimulai dari ujung paling kanan, karena sum di sebelah kiri sudah ada semua
	current = current - a[new - k] + a[new] # [new - k] itu adalah item yang dihilangkan. Misalkan paling kanan adalah indeks ke-6, maka yang dihilangkan adalah (new - k) = (6 - 5) = indeks ke-1
	best = max(best, current)
```

### Dynamic Sliding Window: Longest Subarray with Sum < S

- Sekarang bagaimana jika kita ingin mencari subarray terpanjang yang mungkin dari original array, selama jumlah dari item di dalam subarray tersebut kurang dari $S$?
- Misalkan array:

![561](../assets/images/lectures/system-design_20260823-112709.png)

dengan $S = 15$

- Maka kita bisa mencari subarray tersebut dengan membuat dua pointer awal, yaitu pointer kiri di indeks -1 (sebelum indeks paling awal, bukan berarti -1 itu indeks array paling akhir untuk ini), kemudian pointer kanan di indeks 0, dan kita jumlahkan setiap item yang berada di antara kedua pointer tersebut.
- Initial state:

![575](../assets/images/lectures/system-design_20260823-112856.png)

- Kemudian kita perlebar pointer kanan terus menerus hingga kita mencapai total di dalam subarray lebih dari 15. Jika hal itu terjadi, maka kita tidak bisa memperbesar array-nya lagi, karena kita malah akan memperbesar total sum di dalam array
- Setelah hal itu terjadi, kita akan memperkecil ukuran subarray,  bukan dengan menggeser pointer right ke kiri, tapi menggeser pointer left ke kanan, sehingga ukuran subarray mengecil
- Jika jumlah item dalam subarray masih lebih besar dari 15, terus perkecil subarray dengan menggeser pointer left ke kanan, sampai total sum subarray < 15
- Setelah mencapai total sum kurang dari 15 lagi, kita bisa perbesar array lagi dengan menggeser pointer right ke kanan
- Proses berhenti sampai pointer kanan sampai di paling kanan **dan** total sum sudah kurang dari 15. Jika pointer sudah sampai paling kanan tapi sum masih >= 15, geser pointer kiri sampai dapat sum < 15, kemudian langsung stop
- Kode:

```python
left, current, best = -1, 0, 0

for right in range(len(array)):
	current += array[right] # Geser pointer right ke kanan, jumlahkan dengan yang kanan
	while cur >= sum: # Selagi sum-nya masih >= target, maka pointer left digeser untuk memperkecil ukuran array
		left += 1
		current -= array[left] # Jangan lupa hilangkan item paling kirinya
	best = max(best, right - left)
```

## Expanding

- Jika sebelumnya kita menggunakan dua pointer dari ujung, maka di metode ini pointer berasal dari tengah, dan kemudian di-expand, satu ke kiri, dan satu ke kanan
- Metode ini bagus untuk palindrom, hal-hal yang simetris seperti binary tree, dan graf

### Longest Palindrome Substring in a String

#### Problem

Kita ingin mencari sebuah substring dari string tersebut yang merupakan palindrom. Contoh dari string "babad" maka palindrom terpanjang adalah "aba", dan dari string "ananagrambell", maka substring palindrom terpanjangnya adalah "anana"

#### Bruteforce

- Dengan metode bruteforce, kita akan menggunakan 2 nested for loop untuk mencari substring, kemudian loop ketiga untuk memeriksa apakah substring yang dihasilkan adalah palindrom
- Kompleksitas: time $O(n^3)$ dan space $O(1)$

#### Expanding

- Pertama, metode expanding bisa digunakan untuk memeriksa apakah sebuah string itu palindrom atau bukan. Kita ambil titik tengah dari string, siapkan 2 buah pointer, left dan right, kemudian untuk setiap step, periksa apakah `s[left] == s[right]` , dan jika sama, maka `left--` dan `right++`. Early return false jika tidak sama
- Menggunakan pola yang sama, tapi kali ini karena substring tersebut bisa berada di mana saja, bisa saja di indeks pertama, indeks ke-n, maka kita tetap harus mengiterasi secara bruteforce titik tengahnya ada di mana
- Kode:

```java
String getLongestPal(String s) {
        int n = s.length();
        int start = 0, maxLen = 1;

        for (int i = 0; i < n; i++) {
            // this runs two times for both odd and even 
            // length palindromes. 
            // j = 0 means odd and j = 1 means even length
            for (int j = 0; j <= 1; j++) {
                int low = i;
                int high = i + j; 

                // expand substring while it is a palindrome
                // and in bounds
                while (low >= 0 && high < n && s.charAt(low) == s.charAt(high)) 
                {
                    int currLen = high - low + 1;
                    if (currLen > maxLen) {
                        start = low;
                        maxLen = currLen;
                    }
                    low--;
                    high++;
                }
            }
        }

        return s.substring(start, start + maxLen);
    }
```

## Fast Pointer - Slow Pointer

- Ada dua buah pointer, fast dan slow. Pointer fast akan berjalan dari titik start yang lebih besar daripada titik start untuk slow pointer, kemudian keduanya berjalan bersamaan
- Variasi lain adalah pointer bisa saja berawal dari titik start yang sama, tapi step yang dilangkahi oleh fast pointer lebih besar dari slow pointer (misalkan fast pointer bergerak setiap 3 node, sementara slow pointer bergerak setiap 1 node)

### Remove n-th Element of Node from The End

#### Problem

- Misalkan kita punya linked-list sebagai berikut: `[1,2,3,4,5]`, kemudian kita ingin menghapus node ke-2 dari akhir. Maka kita akan menghapus node (4) (karena node 4 adalah node ke-2 dari akhir), sehingga linked list akan berakhir seperti ini: `[1,2,3,5]`

#### Bruteforce

- Kita bisa saja menghitung dulu jumlah node dalam array/linked list, barulah kita bisa mengetahui posisi node yang perlu dihapus dengan posisi (length - n + 1)
- Misal pada soal di atas yang ingin dihapus adalah node kedua dari akhir, maka posisi node yang perlu dihapus adalah: (5 - 2 + 1) = node ke-4, yaitu indeks 3 atau node dengan value 4
- Tapi kita iterasi dua kali, sehingga time complexity: $O(2n) = O(n)$ dan kompleksitas space O(1)

#### Fast Pointer - Slow Pointer

- Pertama kita buat dulu dummy node sebelum first node/head node. Dummy node ini bertujuan supaya kita bisa return head-nya setelah nanti ada traversal
- Kemudian kita pindahkan dulu fast pointer sebanyak n node lebih depan dibandingkan slow pointer
- Kemudian kita jalankan fast pointer dan slow pointer bersama-sama satu per satu, hingga nantinya fast pointer sampai ujung lebih dulu (sampai null)
- Ketika fast pointer sampai lebih dulu, maka kita tahu fast pointer sudah sampai ujung, maka kita tahu slow pointer akan berjarak n dari fast pointer, dan kita mengetahui node setelahnya itulah yang perlu dihapus

```java
public ListNode removeNthFromEnd(ListNode head, int n) {
	ListNode dummy = new ListNode(0);
	dummy.next = head;

	ListNode fast = dummy;
	ListNode slow = dummy;

	for (int i = 0; i <= n; i++) {
		if (fast == null) {
			return head;
		}
		fast = fast.next;
	}

	while (fast != null) {
		fast = fast.next;
		slow = slow.next;
	}

	slow.next = slow.next.next;

	return dummy.next;
}
```


# Merge Intervals

- 

# Breadth First Search (BFS)



# Depth First Search (DFS)



# Dynamic Programming (DP)