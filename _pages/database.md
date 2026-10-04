---
layout: page-with-toc
title: Database
description: "Database concept, implementation, and optimization"
permalink: /database/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/database.md
---
# Data

- Data adalah representasi fakta dunia nyata yang mewakilkan suatu objek yang diwujudkan dalam angka, huruf, simbol, teks, gambar, bunyi, dan objek digital lainnya
- Informasi:
- Pengetahuan: 

# Sistem Basis Data

## Definisi

- Basis adalah markas, tempat peenyimpanan, tempat berkumpul
- **Basis data** (database) adalah kumpulan data yang saling berhubungan dalam media penyimpanan elektronis
- Basis data diciptakan untuk menyimpan, mencari, memodifikasi, mengelola, dan mengatur data
- Tujuan dari penggunaan basis data adalah,
1. Kemudahan dan kecepatan. Mengakses data menjadi lebih mudah, karena kita tidak perlu membuka file dulu, mencari data di dalam file, atau dalam format lain
2. Keakuratan dan pengaturan data. Dengan constraint dan properti seperti ACID, transaction, data type, keys, data tidak bisa sembarangan ditambahkan/dihapus/dimodifikasi, harus mengikuti aturan tertentu
3. Keamanan. Basis data dapat diatur keamanan, level of privilege untuk access dan permissions terhadap data dan basis datanya
4. Penggunaan data yang luas. Basis data bisa diakses oleh banyak aplikasi sekaligus dan dari berbagai tempat sekaligus

- Sistem adalah sebuah tatanan dan keterpaduan yang terdiri  dari sejumlah komponen fungsional (dengan satuan dan fungsi khusus) dan secara bersama-sama bertujuan untuk memenuhi suatu proses tertentu
- Basis data sebetulnya hanyalah penyimpanan biasa, pasif, oleh karenanya akan jadi lebih bermanfaat dan bisa lebih berguna jika ada aplikasi atau hal yang mengelolanya, mengaksesnya, dan menggerakannya. Hal inilah yang disebut sebagai **Database Management System** (DBMS)
- DBMS hanyalah penggerak basis data. Kesatuan antara DBMS sebagai pengelola dan database yang dikelola disebut sebaga **Sistem Basis Data** (Database System)

## Struktur Basis Data

- Secara struktural, sistem basis data dapat dbagi menjadi beberapa layer:

![](../assets/images/lectures/database_20261004-202219.png)

- Setiap data akan disimpan dalam media penyimpanan fisik di hardware, seperti pada disk
- Sistem operasi akan melakukan I/O (input/output) process ke level fisik, mengendalikan resources hardware, pengelolaan file dan threads, dll
- Database akan menjadi abstraksi, format data, membentuk bagaimana data direpresentasikan kepada DBMS dan aplikasi
- DBMS akan menggunakan fungsi-fungsi OS untuk mengakses data di level physical tersebut
- DBMS mengelola data dalam level database management, mengakses data ke hardware melalui command OS, dan di-return/diolah dalam bentuk yang basis data inginkan/provide
- App akan menggunakan DBMS tersebut untuk berkomunikasi dengan basis data, sehingga aplikasi dapat mengakses data dari basis data tersebut
- Users akan mengakses data yang sudah diolah oleh aplkasi agar dapat disajikan kepada user dalam bentuk yang diinginkan oleh user/aplikasi

## Abstraksi dan Representasi Data

- Setiap data direpresentasikan dalam bentuk yang berbeda:
1. Physical level, level terendah abstraksi data. Bentuk asli data akan disajikan di sini, yaitu binary, string, integer, JSON, dll
2. Logical level, abstraksi yang menggambarkan data dan hubungan antardata, juga fungsional dari data, misalnya dalam bentuk tabel, relasi antartabel
3. View level, data yang sudah diolah agar dipahami oleh user, misalnya dengan menggunakan aplikasi data diolah menjadi visualisasi, data integer diolah menjadi string, dll

- Data sendiri dioperasikan dan diakses menggunakan 2 jenis bahasa, yaitu:
1. **Data Definition Language** (DDL): bahasa yang digunakan untuk membuat skema, tabel, menentukan bagaimana format data disimpan dan diakses nantinya, constraint, batasan, pengaturan data, dan hubungan antar data, disimpan di sini. Format data, tabel, constraint, dll akan disimpan di **Data Dictionary** yang berisi metadata
2. **Data Manipulation Language** (DML): bahasa yang digunakan untuk membuat dan menambahkan data, mengakses data, memodifikasi dan menghapus instance data

## Struktur Sistem Basis Data

- Suatu sistem basis data umumnya terdiri dari:
1. File manager/data manager, yang mengelola alokasi dan struktur, format penyimpanan data
2. Database manager, yang menyediakan interface dan menjadi connector antara low level data di database dengan aplikasi yang mengaksesnya
3. Query processor, yang mengubah dan mentransformasikan perintah yang kita minta ke database manager menjadi perintah low-level untuk mengakses dan mengolah data di low-level
4. DML precompiler: mengkonversi dan memeriksa perintah DML dari aplikasi ke database manager
5. DDL compiiler: mengkonversi dan memeriksa perintah DDL dari aplikasi ke database manager dan data dictionary

# Relational Database

- Relational database adalah basis data yang didasarkan pada fungsi relasi seperti pada matematika
- Data modelnya berbentuk collections of table yang merepresentasikan data dan hubungannya (relasinya) dengan tabel/data yang lain

# Optimization

## Index

- Query get ke database adalah proses yang sangat resource consuming, terutama jika tabel memiliki data yang sangat banyak. Database perlu melakukan query satu per satu pada setiap row-nya
- Database index adalah collection of pointers, di mana tiap pointer merujuk pada sebuah full data record yang dijadikan acuan
- Saat kita mencari sebuah data dari database, kita akan mencari ke index terlebih dahulu. Ingat seharusnya index tidak berukuran sama atau lebih besar daripada database/tabel itu sendiri. Program akan menemukan indeks yang paling mendekati ke data yang kita cari, lalu database tinggal mencari memakai linear search biasa dimulai dari data yang ditunjuk pointer indeks tersebut


# Application

## SQL vs MongoDB

| Aspect            | MySQL                                                                                   | MongoDB                                                                                                                                                                 |
| ----------------- | --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bentuk            | Tabel                                                                                   | Document                                                                                                                                                                |
| Acronym           | Standard query language                                                                 | Humongous database (bisa menyimpan data berukuran sangat besar)                                                                                                         |
| Formatting        | Schema, karena setiap row akan memiliki format data dan kolom yang sama                 | JSON, karena object based                                                                                                                                               |
| Style             | Rigid, karena formatnya sudah hardcoded dan sudah didefinisikan schemanya               | Fleksibel                                                                                                                                                               |
| Data format       | Row-based                                                                               | BSON, JSON yang dikonversi ke binary via Mongo driver                                                                                                                   |
| Struktur komponen | Sebuah database terdiri dari kumpulan tabel, dan sebuah tabel terdiri dari kumpulan row | Sebuah database terdiri dari kumpulan **collection** (ekuivalen dengan table), dan setiap collection terdiri dari kumpulan dokumen/BSON document (ekuivalen dengan row) |

# SQL

- Terdapat dua jenis query/syntax dari SQL, yaitu DDL (Data Definition Language) dan DML (Data Manipulation Language)
- DDL digunakan untuk mendefinisikan skema data, relasi antardata, dan juga mendefinisikan constraint terhadap data tersebut

## Schema Definition

- Secara umum, syntax penulisan skema database dapat ditulis sebagai berikut,

```sql
create table r
	(A1 D1,
	A2 D2,
	...,
	An Dn,
	⟨integrity-constraint1⟩,
	...,
	⟨integrity-constraintk⟩);
```

- Dengan *r* adalah nama relation/table, $A_i$ adalah atribut atau kolom dari *r*, $D_i$ adalah domain atau tipe data dari $A_i$ beserta juga batasan/spesifikasi tipe data tersebut, dan integrity-constraint berarti batasan atau spesifikasi tabel tersebut

- Contoh syntax:

```sql
create table department
	(dept name varchar (20),
	building varchar (15),
	budget numeric (12,2),
	primary key (dept name));
```

## Constraints

- Constraint adalah regulasi atau hal yang mengikat database/column/key/row/data types

### Domain Constraints

- 

## Select

- Basic query to select column(s) data from a table:

```sql
-- Get single column
SELECT column_name
FROM table_name;

SELECT name
FROM users;

-- Get multiple column
SELECT column1, column2, column3
FROM table_name;
```

- Select all column from a single table:

```sql
SELECT *
FROM table_name;
```

- Select data uniquely, no duplicated data

```sql
SELECT DISTINCT column_name
FROM table_name;

-- Uniquely from a combination of multiple columns
SELECT DISTINCT (column1, column2, column3)
FROM table_name;
```

- Select with mathematical operation

```sql
SELECT ID, name, dept name, salary * 1.1 
FROM instructor;
```

## Where (Filter) Condition

- Using `WHERE` command to specify what data need to be filtered to do some operation

```sql
-- Select
SELECT column1
FROM table_name
WHERE condition;

SELECT name
FROM users
WHERE age > 20;

-- Update
UPDATE table_name
SET column1 = newValue
WHERE condition;

UPDATE person
SET salary = salary * 2
WHERE salary < 100;

-- Delete
DELETE table_name
WHERE condition;

DELETE users
WHERE is_active = FALSE;
```

## Combining Condition

### AND

- Combine two condition, where first condition and second condition must be fulfilled so the statement is true
- True-ish table

| S1  | S2  | AND |
| --- | --- | --- |
| T   | T   | T   |
| T   | F   | F   |
| F   | T   | F   |
| F   | F   | F   |

### OR

- Combine two condition, if at least one of the condition is true, the statement is true
- True-ish table:

| S1  | S2  | OR  |
| --- | --- | --- |
| T   | T   | T   |
| T   | F   | T   |
| F   | T   | T   |
| F   | F   | F   |


### PostgreSQL

#### Instalasi

- Arch

```bash
yay -S postgresql
initdb -D /var/lib/postgres/data
```

#### Data type

| Data type          | Name in PostgreSQL | Description                                                                                                                                                                                  |
| ------------------ | ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| UUID               | `uuid`             | UUID                                                                                                                                                                                         |
| Character          | `char(n)`          | List of character dengan panjang fixed *n* (harus betul-betul pas segitu)                                                                                                                    |
| Variable character | `varchar(n)`       | List of character dengan maksimal panjang *n* dan bisa variatif selama tidak melebihi panjang maksimal karakter                                                                              |
| Integer            | `int`              | Bilangan bulat                                                                                                                                                                               |
| Small integer      | `smallint`         | Bilangan bulat yang range-nya lebih kecil agar lebih hemat memori                                                                                                                            |
| Real               | `real/double`      | Bilangan real                                                                                                                                                                                |
| Float              | `float(n)`         | Bilangan real, dengan presisi sampai *n* digit                                                                                                                                               |
| Numerik            | `numeric(p,d)`     | Bilangan numerik dengan panjang *p*, dan *d* digit dari total *p* digit tersebut adalah kepresisian desimal. Misal numeric(3,1) memungkinkan 44.5 untuk disimpan, tapi 444.5 atau 0.32 tidak |

#### Basic Syntax

- Connect to Psql shell

```text
psql
```

- Show/list databases

```text
\l
```

- Switch between databases

```text
\c database_name
```

- Lists/show tables/relations

```text
\dt
```

- Create database

```
CREATE DATABASE database_name;
```

#### Query



## NoSQL

### MongoDB

#### Instalasi

- Arch

```bash
yay -S mongodb
```

- Windows

#### Basic syntax

- Connect to Mongo shell

```bash
mongosh
```

Mulai dari sini, command dijalankan di mongo shell.

- Show/list databases

```js
show dbs
```

- Switch between database

```js
use database_name
```

- Show/list collections

```js
show collections
```

- Create database

```js
use non_existing_database_name
```

NOTE: database kosong tidak akan muncul saat `show dbs`.

- Delete/drop database

```js
db.dropDatabase()
```

- Create collection

```js
db.createCollection("nama_collection")
```

- Delete collection

```js
db.dropCollection("nama_collection")
```

- Insert one data to collection

```js
db.collectionName.insertOne({
  name: "John",
  age: 29,
  gpa: 3.2
})
```

Berhasil jika `acknowledged = true`.

- Insert many data to collection

```js
db.collectionName.insertMany([
  {
    name: "John",
    age: 29,
    gpa: 3.2
  },
  {
    name: "Alice",
    age: 29,
    gpa: 2.8
  }
])
```

- Select all data from collection

```js
db.collection_name.find()
```

- Select data from collection with condition

Syntax:

```js
db.collectionName.find({ condition }, { projection })
```

Equality condition:

```js
db.collectionName.find({ fieldName: "value" })
```

Multiple condition (AND):

```js
db.collectionName.find({ field1: "value1", field2: "value2" })
```

Non-equality condition, misalnya greater than dengan `$gt`:

```js
db.collectionName.find({ price: { $gt: 100 } })
```

OR condition dengan `$or`:

```js
db.collectionName.find({
  $or: [{ status: "active" }, { quantity: { $lt: 10 } }]
})
```

Select specific fields:

```js
db.collectionName.find(
  { fieldName: "value" },
  { fieldToInclude: 1, _id: 0 }
)

// Includes fieldToInclude, excludes _id.
// Other format:
db.collectionName.find(
  { fieldName: "value" },
  { fieldToInclude: true, _id: false }
)
```

By default `_id` sudah pasti masuk, jadi kalau mau di-exclude harus dispesifikkan `_id = 0`.

- Select data with limit and sort

Sort:

```js
db.collectionName.find().sort({ name: -1 }) // dari tinggi ke rendah (descending)
```

Limit:

```js
db.collectionName.find().limit(5)
```

- Update one data

Syntax:

```js
db.collectionName.updateOne({ condition }, { update })
```

Contoh:

```js
db.students.updateOne(
  { name: "Spongebob" },
  { $set: { fullTime: true } }
)
```

```js
db.students.updateOne(
  { _id: ObjectId("374687326asd") },
  { $set: { fullTime: false } }
)
```

- Update many data

```js
db.students.updateMany(
  {},
  { $set: { fullTime: true } }
)
```

- Remove field

```js
db.students.updateOne(
  { name: "Spongebob" },
  { $unset: { fullTime: "" } }
)
```

- Check if field exist

```js
db.students.updateMany(
  { fullTime: { $exists: false } },
  { $set: { fullTime: true } }
)
```

- Delete one data from collection

```js
db.collectionName.deleteOne({ name: "Larry" })
```

- Delete multiple data from collection

```js
db.collectionName.deleteMany({ fullTime: false })
```

#### Data type

```js
db.collectionName.insertOne({
  name: "Larry", // string
  age: 24, // integer
  gpa: 3.9, // float
  isWorking: false, // boolean
  registerDate: new Date(), // date
  wife: null, // null object
  courses: ["Biology", "Math", "Physics"], // array
  address: {
    city: "Queens",d
    province: "New York",
    zip: 12789
  } // nested document
})
```
