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
	db.collectionName.insertOne({
	  name: "John",
	  age: 29,
	  gpa: 3.2
	})
	```
	- Berhasil: acknowledged = true
9. Insert many data to collection
	```mongo
	db.collectionName.insertMany([{
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
11. Select data from collection with condition
	- Equality condition: 
	```mongodb
	db.collectionName.find({ fieldName: "value" });
	```
	- Multiple condition (AND):
	```mongodb
	db.collectionName.find({ field1: "value1", field2: "value2" });
	```
	- Non-equality condition (misal di sini greater than, dilambangkan `$gt`, artinya price yang lebih besar dari 100):
	```mongodb
	db.collectionName.find({ price: { $gt: 100 } });
	```
	- OR condition (pakai tag `$or):
	```mongodb
	db.collectionName.find({ 
		$or: [{ status: "active" }, { quantity: { $lt: 10 } }] 
	});
	```
	- Select specific fields:
	```mongodb
	db.collectionName.find(
		{ fieldName: "value" }, { fieldToInclude: 1, _id: 0 }
	); 
	// Includes 'fieldToInclude', excludes '_id'
	```
	- By default `_id` sudah pasti masuk, jadi kalau mau di-exclude harus dispesifikkan `_id = 0`
12. Select data with limit and sort
	- Sort
	```mongodb
	db.collectionName.find({name: -1}) // dari rendah ke tinggi (menaik)
	```
	- Limit
13. Delete one data from collection

#### Data type

```mongodb
db.collectionName.insertOne({
	name: "Larry", // string
	age: 24, // integer
	gpa: 3.9 // float
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