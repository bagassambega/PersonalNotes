---
layout: page-with-toc
title: Database
description: "Database concept, implementation, and optimization"
permalink: /database/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/database.md
---
# Optimization

## Index

- Query get ke database adalah proses yang sangat resource consuming, terutama jika tabel memiliki data yang sangat banyak. Database perlu melakukan query satu per satu pada setiap row-nya
- Database index adalah collection of pointers, di mana tiap pointer merujuk pada sebuah full data record yang dijadikan acuan
- Saat kita mencari sebuah data dari database, kita akan mencari ke index terlebih dahulu. Ingat seharusnya index tidak berukuran sama atau lebih besar daripada database/tabel itu sendiri. Program akan menemukan indeks yang paling mendekati ke data yang kita cari, lalu database tinggal mencari memakai linear search biasa dimulai dari data yang ditunjuk pointer indeks tersebut


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
## SQL

# PostgreSQL

### Instalasi

1. Arch
	- `yay -S postgresql`
	- `initdb -D /var/lib/postgres/data`


### Data type

| Data type | Name in PostgreSQL | Description |
| --------- | ------------------ | ----------- |
| UUID      | uuid               |             |


### Basic Syntax

1. Connect to Psql shell
	- `psql`
2. Show/list databases
	- `\l`
3. Switch between databases
	- `\c database_name`
4. Lists /show tables/relations
	- `\dt`
5. 

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
4. Show/list collections
	- `show collections`
5. Create database
	- `use {non-existing_database_name}`
	- NOTE: database empty ga bakal muncul saat `show dbs`
6. Delete/drop database
	- `db.dropDatabase()`
7. Create collection
	- `db.createCollection("{nama_collection}")`
8. Delete collection
	- `db.dropCollection("{nama_collection}")`
9. Insert one data to collection
	```mongo
	db.collectionName.insertOne({
	  name: "John",
	  age: 29,
	  gpa: 3.2
	})
	```
	- Berhasil: acknowledged = true
10. Insert many data to collection
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
11. Select all data from collection
	- `db.{collection_name}.find()`
12. Select data from collection with condition
	- Syntax: `db.collectionName.find({condition}, {projection})`
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
	// Other format
	db.collectionName.find(
		{ fieldName: "value" }, { fieldToInclude: true, _id: false }
	); 
	```
	- By default `_id` sudah pasti masuk, jadi kalau mau di-exclude harus dispesifikkan `_id = 0`
13. Select data with limit and sort
	- Sort
	```mongodb
	db.collectionName.find().sort({name: -1}) // dari rendah ke tinggi (menaik, ascending)
	```
	- Limit
	```mongodb
	db.collectionName.find().limit(5)
	```
14. Update one data
	- Syntax: `db.collectionName.updateOne({condition/filter}, {update})`
	- Contoh: 
	```mongodb
	db.students.updateOne(
		{name: "Spongebob"}, 
		{$set: {fullTime: true}}
	)
	```
	```mongodb
	db.students.updateOne(
		{_id: ObjectId("374687326asd)},
		{$set: {fullTime: false}}
	)
	```
15. Update many data
	```mongodb
	db.students.updateMany(
		{}, 
		{$set: {fullTime: true}}
	)
	```
16. Remove field
	```mongodb
	db.students.updateOne(
		{name: "Spongebob"}, 
		{$unset: {fullTime: ""}}
	)
	```
17. Check if field exist
	```mongodb
	db.students.updateMany(
		{fullTime: {$exists: false}}, 
		{$set: {fullTime: true}}
	)
	```
18. Delete one data from collection
	```mongodb
	db.collectionName.deleteOne({name: "Larry"})
	```
19. Delete multiple data from collection
	```mongodb
	db.collectionName.deleteMany({fullTime: false})
	```

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