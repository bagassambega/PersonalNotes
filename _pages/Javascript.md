---
layout: page-with-toc
title: Javascript
description: Javascript programming language notes
permalink: /javascript/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/javascript.md
---
# Perkenalan

- Javascript adalah bahasa pemrograman cross-platform, object-oriented 
- Tujuan awal Javascript dikembangkan untuk membuat website/webpage menjadi interaktif, misalkan memiliki animasi yang kompleks, tombol yang memiliki custom behaviour, popup menu, mengubah webpage (DOM, domain object model) dll. Hal ini disebut **client-side JS**
- Namun Javascript juga bisa digunakan untuk mengembangkan server-side code, misalnya dengan Node.js yang memungkinkan kita untuk mengembangkan aplikasi server. Hal ini disebut **server-side JS**
- Standar JavaScript adalah Ecma International melalui [ECMAScript specification](https://ecma-international.org/publications-and-standards/standards/ecma-262/)

# Assignment dan Tipe Data

- JS **case-sensitive** dan memakai unicode character set.
- Sebuah instruction di Javascript bisa disebut sebagai **statement**, dan setiap statement dipisahkan oleh semikolon atau baris baru. **Semicolon optional**, tapi merupakan best practive
- Comments:
```js
// a one line comment

/* this is a longer,
 * multi-line comment
 */
```

## Variabel

- `var`: inisialisasi variabel, nilai awal opsional jadi bisa declare biasa dulu. Bisa digunakan untuk declare variabel local maupun global, tergantung posisi inisialisasi
- `let`: variabel local, terikat block-scoped, nilai awal opsional
- `const`: konstanta, block-scoped, harus diinisialisasi di awal nilainya
- Naming variable umumnya **`camelCase`**
## Scope Variabel

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
## Tipe Data

## Primitif

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

## Konversi Tipe Data

- JS adalah dynamically typed language, jadi kita tidak perlu specify tipe data ketika di-declare, JS akan otomatis convert dan infer tipe datanya
- Kode seperti ini tidak akan error meskipun tipe datanya berubah
```js
let answer = 42;
answer = "String pengganti";
```

- Konversi tipe data bisa dilakukan misalnya dengan fungsi berikut: `parseInt`, `parseFloat`, `Number`, `String`, atau `Number.toString`
```js
console.log(parseInt("123")); // 123
console.log(parseInt("077")); // 77 (leading zeros are ignored)

console.log(Number("12")); // 12
console.log(String(12)); // "12"

let num = 12;
console.log(num.toString()); // "12"
```

- Kombinasi number dengan string menggunakan `+` operator akan menghasilkan string
```js
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; // "377"
```

- Kombinasi number dengan string menggunakan operator lain tidak akan mengkonversi number menjadi string, misalnya:
```js
"37" - 7; // 30
"37" * 7; // 259
```

## Literals

### Array

- Array bisa menampung berbagai tipe data berbeda di dalam satu array, karena setiap variabel di JS di-treat sebagai object, dan array adalah kumpulan object
```js
let array = [Date.now(), "cars", 1, 2];
```

- Bisa memberikan space kosong juga di array agar nantinya bisa diisi
```js
const myList = ["home", , "school", ,]; // Array index ke-1, 3 bisa diisi
```

### Numbers

- Format dasar: `[digits].[digits][(E|e)[(+|-)]digits]`
- Contoh:
```js
3.1415926
.123456789
3.1E+12
.1e-23
```

### Objects

- Objects adalah list of zero atau lebih pairs antara property name dengan value-nya. Bentuk umum:
```js
obj = { key: value }
```

- Contoh:
```js
const sales = "Toyota";

function carTypes(name) {
  return name === "Honda" ? name : `Sorry, we don't sell ${name}.`;
}

const car = { myCar: "Saturn", getCar: carTypes("Honda"), special: sales };

console.log(car.myCar); // Saturn
console.log(car.getCar); // Honda
console.log(car.special); // Toyota
```

- Kita juga bisa nest object dan assign key dalam bentuk angka
```js
const car = { manyCars: { a: "Saab", b: "Jeep" }, 7: "Mazda" };

console.log(car.manyCars.b); // Jeep
console.log(car[7]); // Mazda
```

- Object property name (key) bisa berbentuk empty string, tapi untuk mengakses arbitrary name harus menggunakan bracket notation (\[\]])
```js
const unusualPropertyNames = {
  "": "An empty string",
  "!": "Bang!",
};
console.log(unusualPropertyNames.""); // SyntaxError: Unexpected string
console.log(unusualPropertyNames.!); // SyntaxError: Unexpected token !

console.log(unusualPropertyNames[""]); // An empty string
console.log(unusualPropertyNames["!"]); // Bang!
```

- Semenjak ES6, sebuah key bisa dibuat dyamic
```js
const dynamicKey = "name"
const index = 1

const person = {
	[dynamicKey]: "John", // "name": "John"
	["age" + index]: 25, // "age1": 25
}
```

### Strings

- String literal:
```js
// Basic literal string creation
`In JavaScript '\n' is a line-feed.`;

// Multiline strings
`In JavaScript, template strings can run
 over multiple lines, but double and single
 quoted strings cannot.`;

// String interpolation
const name = "Lev",
  time = "today";
`Hello ${name}, how are you ${time}?`;
```

### Regex

- Bentuk contoh:
```js
const re = /ab+c/;
```

# Control Flow

- Sebuah block didefinisikan sebagai sekumpulan statement yang berada di antara curly braces, baik itu di dalam sebuah function, if-else, dll
```js
{
  statement1;
  statement2;
  // …
  statementN;
} // Statement 1 - N adalah block statements
```

## Conditional Statement

```js
if (condition) {
	statement1;
} else if (condition2) {
	statement2;
} else if (conditionN) {
	statementN;
} else {
	statement3;
}
```

## Switch Statement

```js
switch (expression) {
  case label1:
    statements1;
    break;
  case label2:
    statements2;
    break;
  // …
  default:
    statementsDefault; // Fallback jika tidak ada match ke case lain
}
```

- Break digunakan supaya jika suatu case match, maka tidak akan cek case lain ke bawahnya

### Try-Catch-Throw Exception

```js
function getMonthName(mo) {
  mo--; // Adjust month number for array index (so that 0 = Jan, 11 = Dec)
  // prettier-ignore
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  if (!months[mo]) {
    throw new Error("Invalid month code"); // throw keyword is used here
  }
  return months[mo];
}

try {
  // statements to try
  monthName = getMonthName(myMonth); // function could throw exception
} catch (e) {
  monthName = "unknown";
  logMyErrors(e); // pass exception object to error handler (i.e. your own function)
}
```

- Bisa menambahkan fungsi finally, jadi flow-nya: `try`...`catch`...`finally`. Baik masuk ke try ataupun masuk ke catch, finally akan dijalankan di akhir

# Loop dan Iterasi

## `for`

- Sintaks dasar:
```js
for (initialization; condition; afterthought)
  statement
```

- Contoh:
```js
for (let step = 0; step < 5; step++) {
  // Runs 5 times, with values of step 0 through 4.
  console.log("Walking east one step");
}
```

- Contoh lain di HTML DOM manipulation:
```html
<form name="selectForm">
  <label for="musicTypes"
    >Choose some music types, then click the button below:</label
  >
  <select id="musicTypes" name="musicTypes" multiple>
    <option selected>R&amp;B</option>
    <option>Jazz</option>
    <option>Blues</option>
    <option>New Age</option>
    <option>Classical</option>
    <option>Opera</option>
  </select>
  <button id="btn" type="button">How many are selected?</button>
</form>
```

```js
function countSelected(selectObject) {
  let numberSelected = 0;
  for (let i = 0; i < selectObject.options.length; i++) {
    if (selectObject.options[i].selected) {
      numberSelected++;
    }
  }
  return numberSelected;
}

const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const musicTypes = document.selectForm.musicTypes;
  console.log(`You have selected ${countSelected(musicTypes)} option(s).`);
});
```

## `for`..`in`

- Iterasi objek dengan mengakses objek secara langsung. Sintaks dasar:
```js
for (variable in object)
  statement
```

- Contoh:
```js
const fruits = ["Apple", "Oranges", "Blueberry"];
for (fruit in fruits) {
	console.log(fruit + " "); // "Apple Oranges Blueberry "
}

const car = {
	"make": "Ford",
	"model": "Mustang",
}

function dumpProps(obj, objName) {
  let result = "";
  for (const i in obj) {
    result += `${objName}.${i} = ${obj[i]}<br>`;
  }
  result += "<hr>";
  return result;
  // car.make = Ford
  // car.model = Mustang
}
```

- `for in` mengiterasi key atau property name, jadi `i` di situ adalah iterasi terhadap property name-nya

## `for`..`of`

- Jika `for in` mengiterasi key/property name, maka `for of` mengiterasi value-nya
```js
const arr = [3, 5, 7];
arr.foo = "hello";

for (const i in arr) { // for in
  console.log(i);
}
// Output:  "0" "1" "2" "foo" (0 1 2 adalah index array yang jadi key)

for (const i of arr) { // for of
  console.log(i);
}
// Logs: 3 5 7 (value)
```
Pada kode di atas, "hello" tidak di-print karena ketika diinisialisasi. `arr` merupakan sebuah  array, dan ketika kita menambahkan `arr.foo = "hello"`, kita menambahkan properti, bukan menambahkan item. Jadi sebetulnya panjang `arr` tetap 3 dengan index 0,1,2, tapi ada tambahan properti (bukan isi array) yaitu foo.

- `for in` juga digunakan untuk destructuring object. Di sini baru object bisa mengakses key dan value
```js
const obj = { foo: 1, bar: 2 };

for (const [key, val] of Object.entries(obj)) {
  console.log(key, val);
}
// "foo" 1
// "bar" 2
```

## `while`

- Sintaks dasar:
```js
while (condition)
  statement
```

- Akan berjalan sampai condition bernilai false atau mencapai break. Contoh:
```js
let n = 0;
let x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

- Infinite loop
```js
while (true) {
  console.log("Hello, world!");
}
```

## `do`..`while`

- Perbedaan dengan `while` adalah kalau `while` itu cek kondisi dulu sebelum kode berjalan, tapi `do`..`while` itu berjalan dulu baru cek kondisi. Jadi `while` mungkin saja tidak pernah menjalankan kode block sama sekali. tapi `do`..`while` pasti minimal sekali berjalan code block-nya
- Sintaks dasar:
```js
do {
	statement
} while (condition)
```

- Contoh:
```js
let i = 0;
do {
  i += 1;
  console.log(i);
} while (i < 5);
```

## Labeled Statement

- Kita bisa melabeli/memberi identifier pada suatu statement yang bisa di-refer di kode
- Penggunaan spesifik biasanya dilakukan di `break` dan `continue`

## `break` dan `continue`

- `break` untuk terminate whole loop, jadi kode di bawahnya tidak akan dijalankan lagi
- `continue` untuk skip statement di bawahnya, lanjut ke iterasi berikutnya
- Bisa mengkombinasikan dengan labeled statement untuk melakukan operasi spesifik

```js
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
  console.log("Outer loops:", x);
  x += 1;
  z = 1;
  while (true) {
    console.log("Inner loops:", z);
    z += 1;
    if (z === 10 && x === 10) {
      break labelCancelLoops;
    } else if (z === 10) {
      break;
    }
  }
}
```

# Object

Referensi utama: [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
