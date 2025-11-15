---
layout: page-with-toc
title: Database
description: ",llk"
permalink: /database/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/database.md
---

# Application

## SQL vs MongoDB

| Aspect            | MySQL                                                                                           | MongoDB                                                                                                                                                                     |
| ----------------- | ----------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Bentuk            | Tabel                                                                                           | Document                                                                                                                                                                    |
| Acronym           | Standard query language                                                                         | Humongouos database (bisa menyimpan data berukuran sangat besar)                                                                                                            |
| Formatting        | **Schema**, karena setiap Row akan memiliki format data dan kolom yang sama                     | **JSON**, karena object based                                                                                                                                               |
| Style             | Rigid, karena formatnya sudah hardcoded dan sudah didefinisikan schemanya                       | Fleksibel                                                                                                                                                                   |
| Data format       | Row-based                                                                                       | BSON, JSON yang dikonversi ke binary via Mongo driver                                                                                                                       |
| Struktur komponen | Sebuah database terdiri dari kumpulan **tabel**, dan sebuah tabel terdiri dari kumpulan **row** | Sebuah database terdiri dari kumpulan **collection** (ekuivalen dengan table), dan setiap collection terdiri dari kumpulan **dokumen/BSON document** (ekuivalen dengan row) |

## NoSQL

### MongoDB

#### Instalasi

1. Arch
	- `yay -S mongodb`
2. Windows

#### Basic syntax

1. Connect to Mongo shell
	- `mongosh`
	- Starting from here, use mongo shell
2. Show/list databases
	- `show dbs`
3. Switch between database
	- `use {database_name}`
4. Create database
	- `use {non-existing_database_name}`
	- NOTE: database empty ga bakal muncul saat `show dbs`
5. Delete/drop database
	- `db.dropDatabase()`
6. Create collection
	- `db.createCollection("{nama_collection}")`
7. Delete collection
	- `db.dropCollection("{nama_collection}")`
8. Insert one data to collection
	```mongo
	db.{collection_name}.insertOne({
	  name: "John",
	  age: 29,
	  gpa: 3.2
	})
	```
	- Berhasil: acknowledged = true
9. Insert many data to collection
	```mongo
	db.{collection_name}.insertMany([{
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
10. Select all data from collection
	- `db.{collection_name}.find()`
11. Select data from collection
12. Delete one data from collection
