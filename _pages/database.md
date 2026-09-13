---
layout: page-with-toc
title: Database
description: "Database concept, implementation, and optimization"
permalink: /database/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/database.md
---
# Relational Database

- Relational database adalah basis data yang didasarkan pada fungsi relasi seperti pada matematika
- Data modelnya berbentuk collections of table yang merepresentasikan data dan hubungannya (relasinya) dengan tabel/data yang lain
- 
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
    city: "Queens",
    province: "New York",
    zip: 12789
  } // nested document
})
```
