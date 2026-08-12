---
layout: page-with-toc
title: Programming Concept
description: Basic and concept of programming
permalink: /programming-concept/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/programming-concept.md
---
# Functional Programming

## Higher-Order Level Function

- Fungsi yang menerima fungsi lainnya sebagai input atau return type-nya juga function, atau keduanya
## First-Class Function

- First class function adalah fungsi yang bisa diperlakukan dan memiliki behavior seperti variabel. 
- Sebagai contoh, function bisa di-pass sebagai argument/parameter of a function, bisa di-return oleh fungsi lain, dan bisa di-assign sebagai variabel
- Contoh bahasa pemrograman yang merupakan first class function adalah Javascript
- Contoh:
1. Assign function sebagai variabel
```js
const foo = () => {
  console.log("foobar");
};
foo(); // Invoke it using the variable
// foobar
```

2. Passing function sebagai argumen
```js
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!
```

3. Return function dari function lain
```js
function sayHello() {
  return () => {
    console.log("Hello!");
  };
}
```

## Callback Function

- Callback function adalah fungsi yang dimasukkan ke dalam fungsi lain sebagai argumen, yang kemudian di-invoke di dalam fungsi tersebut.
- Pengguna yang akan memakai callback API akan menulis sebuah fungsi yang nantinya akan dimasukkan ke dalam fungsi API. Fungsi API ini disebut sebagai **caller**
- Caller mengambil fungsi yang dimasukkan sebagai argument tersebut, kemudian memproses fungsi itu di dalam fungsi caller-nya.
- Proses callback function:
```md
Your code
   │
   │ processUser(greet)
   ▼
processUser()
   │
   │ melakukan sesuatu
   │
   │ callback(name)
   ▼
greet(name)
```

- Contoh callback function:
```js
// Fungsi dasar
function returnHello() {
	return "Hello";
}

// Fungsi caller
function printHelloName(helloFunction, name) {
	console.log(helloFunction() + " " + name);
}

// Passing returnHello sebagai parameter fungsi printHelloName
printHelloName(returnHello, "Mr. Wick")
```

### Synchronous Callback

- Fungsi akan langsung dijalankan saat itu juga setelah invocation atau fungsi di-trigger, tidak terpengaruh oleh asynchronous task, contohnya pada fungsi di atas, atau melalui contoh di bawah ini:
```js
let value = 1;

doSomething(() => {
  value = 2;
});

console.log(value); // Result is 2 because synchronously executed
```
### Asynchronous Callback

- Fungsi baru akan dijalankan baru akan dijalankan setelah asynchronous task selesai dijalankan ketika fungsi di-invoke.
- Contoh:
```js
const message = function() {  
    console.log("This message is shown after 3 seconds");
}

setTimeout(message, 3000); // Message baru akan dijalankan setelah 3 detik setelah fungsi ini di-invoke
```

# Object-Oriented Programming
- Object oriented programming (OOP) adalah konsep pemrograman di mana setiap item/variabel di-treat sebagai objek.
- Dalam OOP, object merupakan instance dari sebuah kelas, dan kelas adalah blueprint/cetakan dari object yang akan dibuat.
- Enkapsulasi: melindungi data dari direct access, melindungi internal state of object dari luar. Ada beberapa level dari enkapsulasi:
1. Private: member/item tidak dapat diakses dari luar kelas
2. Protected: member/item hanya bisa diakses di dalam kelas dan juga turunannya
3. Public: member/item yang bisa diakses dari manapun
