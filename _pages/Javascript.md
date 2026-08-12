---
layout: page-with-toc
title: Javascript
description: Javascript programming language notes
permalink: /javascript/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/javascript.md
---
# Basic
## Perkenalan

- Javascript adalah bahasa pemrograman cross-platform, object-oriented 
- Tujuan awal Javascript dikembangkan untuk membuat website/webpage menjadi interaktif, misalkan memiliki animasi yang kompleks, tombol yang memiliki custom behaviour, popup menu, mengubah webpage (DOM, domain object model) dll. Hal ini disebut **client-side JS**
- Namun Javascript juga bisa digunakan untuk mengembangkan server-side code, misalnya dengan Node.js yang memungkinkan kita untuk mengembangkan aplikasi server. Hal ini disebut **server-side JS**
- Standar JavaScript adalah Ecma International melalui [ECMAScript specification](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

## Assignment dan Tipe Data

- JS **case-sensitive** dan memakai unicode character set.
- Sebuah instruction di Javascript bisa disebut sebagai **statement**, dan setiap statement dipisahkan oleh semikolon atau baris baru. **Semicolon optional**, tapi merupakan best practive
- Comments:
```js
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

### Variabel

- `var`: inisialisasi variabel, nilai awal opsional jadi bisa declare biasa dulu. Bisa digunakan untuk declare variabel local maupun global, tergantung posisi inisialisasi
- `let`: variabel local, terikat block-scoped, nilai awal opsional
- `const`: konstanta, block-scoped, harus diinisialisasi di awal nilainya
- Naming variable umumnya **`camelCase`**
#### Scope Variabel

- Global: scope default untuk code yang running di script mode
- Module scope: scope code yang hanya berjalan di suatu module
- Function scope: scope code hanya di sebuah fungsi
- Block scope: scope code yang ada di sebuah curly braces saja
- `let` dan `const` itu block scope, bersifat local. Contoh:

```js
if (Math.random() > 0.5) {
  const y = 5;
}
console.log(y); // ReferenceError: y is not defined
```

- Tetapi `var` itu tidak block scoped, dia local terhadap fungsi atau global
```js
if (true) {
  var x = 5;
}
console.log(x); // x is 5
```
### Tipe Data

#### Primitif

- Boolean: true/false
- null value
- undefined, ketika suatu properti atau nilai belum didefinisikan
- Number: integer atau floating point
- BigInt: integer dengan batas besar
- String: sekumpulan karakter
- Symbol: tipe data unik dan immutable. Contoh:
```js
const sym1 = Symbol();
const sym2 = Symbol("foo");
const sym3 = Symbol("foo");
```

#### Konversi Tipe Data
