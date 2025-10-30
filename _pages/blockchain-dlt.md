---
layout: page-with-toc
title: Blockchain and Distributed Ledger Technology
description: Distributed Ledger Technology (DLT) and their implementation, mainly focused on Blockchain
permalink: /blockchain-dlt/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/blockchain-dlt.md
---

# Distributed Ledger Technology

- Distributed ledger tuh mendistribusikan database dan log transaksi
- Ledger: catatan data dan transaksi
- Untuk dasar konsep distribusi, lihat [Sister]({{ "/parallel-distributed/" | relative_url }})

# Perkenalan Blockchain

## Tujuan

- Apakah kalian bisa percaya gitu aja sama perusahaan besar yang nyimpen data kalian? Misal nyimpen data di Google. Gimana kalian tau datanya ga diubah2 atau dibaca oleh karyawan Google? Atau saat mau transfer uang, uang itu harus ke suatu instansi dulu yaitu bank baru bisa diproses. Dari mana kita bisa percaya kalau bank betul-betul ngirim uang kita ke bank lain? Kalau ternyata pengirim dan penerima beda bank, ada biaya tambahan + pihak lain terlibat, dan ada overhead waktu + birokrasi
- Di sistem kita sekarang, kita mempercayakan data dan transaksi kita ke suatu pihak (third party) yang berperan sebagai pihak yang kita percayai
- Sistem lama kaya gini butuh:

- Intermediary trust: third party dipercayakan buat bikin keputusan yang adil dan rasional
- Issuance trust: third party dipercayakan buat jaga keamanan data kita

- Oleh karenanya, dihapus sistem centralized ledger, dan dijadiin distributed.
- Hal ini bikin biaya transaksi lebih rendah dan faster transaction reconciliation (penyamaan data transaksi antar pihak berlangsung lebih cepat)

## Definisi

- Kumpulan/rantai blok yang berisi informasi. Saat suatu blok diisi oleh suatu informasi, informasi tersebut sangat sulit untuk diubah atau diganti-ganti

- Blockchain adalah teknologi yang dibuat untuk membuat suatu sistem yang dapat dipercaya, bukan orang/organisasi yang dapat dipercaya.
- Memakai kriptografi untuk mengotomasi dan membangun integritas data
- Karakteristik (DFPIAT):

1. [Distributed](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.55nywy8g1vzh): Ledger disimpan di banyak node dalam jaringan. Semua node memiliki salinan yang sama dan berpartisipasi dalam validasi transaksi. Tidak ada server pusat, sehingga data tersebar merata di seluruh jaringan.
2. Fault-tolerant: satu down, yang lain bisa handle. [Konsensus](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.ed3xq88sa6ik) memastikan ledger tetap konsisten walau sebagian node bermasalah.
3. (Pseudo)-privacy: Blockchain publik tidak anonim penuh, tetapi pseudonymous: Identitas pengguna diwakili oleh alamat publik (public key / wallet address), bukan nama asli. Transaksi dapat dilacak antar alamat, tetapi tidak langsung terhubung ke identitas dunia nyata kecuali pengguna mengungkapkannya.
4. Immutable: data yang sudah di-write amat sangat sulit diubah karena harus nge-rewrite seluruh node terkait. Setiap blok berisi hash dari blok sebelumnya. Mengubah satu data akan mengubah hash dan memutus rantai, sehingga deteksi perubahan langsung  terlihat.Sementara itu transaksi ga bisa diubah (non-tampered) (ibarat write sama read only, ga bisa update/delete). Hasilnya: data yang sudah dikonfirmasi tidak bisa diubah atau dihapus tanpa mengubah seluruh rantai dan mendapatkan konsensus baru.
5. Autonomy: tidak ada node pusat. Aturan ditentukan oleh protokol dan konsensus algoritma, bukan oleh lembaga tunggal.

Setiap node: Dapat memverifikasi transaksi sendiri, dapat berpartisipasi dalam konsensus, tidak bergantung pada izin dari entitas tertentu.

Artinya sistem mengatur dirinya sendiri secara otomatis melalui kode dan kriptografi, bukan perintah manusia.

6. Transparent: Semua transaksi yang telah divalidasi dapat dilihat oleh semua node. Ledger publik seperti Bitcoin dan Ethereum memungkinkan siapapun memverifikasi isi transaksi dan saldo tanpa otoritas pusat.

## Struktur

- Tersusun atas chain yang menghubungkan block-block

### Chain

- Rantai yang menghubungkan [blocks](#block-blockchain)
- Komponen utama:

1. Address

- Unique identifiers yang merujuk pada sender/recipient, dan dirujuk dalam transaksi sebagai alamat penerima/pengirim.
- Menggunakan Base58 encoding.
- Base58 digunakan supaya kemungkinan value tetap banyak tapi tetap bisa dibaca manusia, dengan menghilangkan karakter ambigu dan mirip, misalnya angka 0 dan huruf O besar, I kapital dan angka 1

2. Transaction

- Representasi transaksi atau transfer value dari satu address ke address lainnya

3. Block

- Tersusun dari block header dan beberapa transaksi yang disimpan di satu blok yang sama

4. Genesys block

- Block paling awal yang menjadi dasar rantai/chain.
- Bisa di-hardcode saat pertama kali dibuat

### Block {#block-blockchain}

- Tersusun dari block header, block body, dan hash

#### Block Header

1. Version: blockchain protocol version
2. Previous block hash: link ke block sebelumnya
3. Merkle root: hash dari seluruh transaksi di dalam block. Ingat kalau dalam satu block itu nyimpen banyak transaksi

4. Timestamp: waktu pembuatan block
5. Difficulty target: mining difficulty level
6. Nonce: random number yang sangat besar dan digunakan untuk mining. Nonce ini yang angkanya akan digunakan oleh miner-miner untuk menghasilkan hash yang valid dan kalau berhasil ditemukan nonce yang dapat menghasilkan hash yang valid, dapat reward. Lihat [mining proof of work](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.e10vg3occfr6)

#### Block Body

- Berisi list of all transactions di dalam block

#### Hash

- Berisi block hash, unique identifier block yang dihitung dari hash block itu sendiri
- Block hash ini yang akan di-refer atau dijadikan previous block hash oleh block selanjutnya
- Cek [digital signature](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr#heading=h.q5rbk1nnw231) di [kriptografi](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.2dxd14c185hr)
- Signature ini juga bisa ada beragam:

1. Blind signature: cek autentikasi tapi dia ga memberitahu siapa orang yang nge-sign itu. Yang penting sistem tau itu dari orang asli dan orang yang tepat. Sistem ini bagus misalnya pada sistem editorial jurnal. Supaya editor dan verifikator tau kalau jurnalnya valid, pakai signature ini. Tapi kalau editor tau siapa yang bikin jurnal itu, bisa aja penilaiannya jadi bias. Makanya pakai blind signature supaya ga ketauan itu jurnal siapa
2. Multi-signature: beberapa sign sekaligus atau beberapa orang sign sekaligus. Contoh: openchain, multichain
3. Threshold signature: skema tanda tangan digital terdistribusi di mana k dari n pihak yang berwenang harus berkolaborasi untuk menghasilkan tanda tangan yang valid. Mekanisme umum:

4. Key generation:  
   Kunci privat dibagi menggunakan secret sharing (mis. Shamir’s Secret Sharing). Tiap peserta menyimpan satu share dari kunci.
5. Signing:  
   Minimal t peserta membuat partial signature. Partial signatures digabung → membentuk satu signature utuh yang identik dengan hasil tanda tangan dari kunci privat asli.
6. Verification:  
   Pihak penerima hanya melihat satu signature normal, tidak tahu bahwa itu dibuat secara kolaboratif. Signature diverifikasi menggunakan public key biasa.

7. Aggregate signature: menggabungkan beberapa tanda tangan digital dari banyak penanda tangan dan/atau banyak pesan menjadi satu tanda tangan tunggal yang bisa diverifikasi secara kolektif. Biasanya, jika ada n pesan dari n penanda tangan, verifikasi biasa butuh n tanda tangan terpisah. Dengan aggregate signature, semua tanda tangan dapat digabung → menghasilkan satu signature. Verifikasi cukup dilakukan sekali terhadap signature gabungan itu.

## Architectural Layer

|                    |                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------- |
| Application        | Smart contracts, dApps (distributed apps), DAO (database access object), autonomous agent |
| Execution          | Virtual machine, blocks, transactions, oracle                                             |
| Consensus          | Fault-tolerant, proof-of-X (bisa stake, work, etc), state machine                         |
| Cryptography       | Public-key crypto, digital signature, hash                                                |
| P2P (peer to peer) | Komunikasi antar node di sistem. Protocols: gossip, epidemic, routing, flooding           |
| Network            | TCP/IP, internet                                                                          |

## Alur Transaksi dan Chain

1. Seseorang melakukan transaksi atau melakukan trigger dari fungsi smart contract. Transaksi ini perlu dicatat di suatu block dan kemudian di-announce ke ledger yang lain, jadi dianggapnya masih belum sah
2. Transaksi dikirim ke jaringan blockchain, kemudian node-node lain menerima dan memverifikasi autentikasi melalui digital signature, cek juga apakah pengirim punya saldo yang cukup, jumlah nilai atau data kontrak
3. Transaksi yang sudah valid masuk ke memory pool (mempool), di mana daftar transaksi menunggu konfirmasi dan dimasukkan ke block
4. Miner melakukan [mining](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.e10vg3occfr6) (di [PoS](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.e8uj4swkhb5) validator melakukan [minting](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.g2n8m1i7hec)), yaitu proses membentuk block baru dan menambahkan block itu ke jaringan
5. Setelah [mining](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.e10vg3occfr6)/[minting](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.g2n8m1i7hec) berhasil dilakukan (mendapatkan hash yang valid), nonce disimpan di candidate block (yang sekarang sudah menjadi block yang sah). Miner menyebarkan block baru ke seluruh [jaringan](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.sief9nrz7ha), dan node-node lain memverifikasi apakah hash valid dan seluruh transaksi di block valid dan belum pernah digunakan. Jika valid, block diterima dan ditambahkan ke chain. Miner mendapatkan block reward (awal-awal 50 BTC, tapi setiap halving dibagi 2, sekarang kira-kira 3.125 BTC), plus semua transactions fees dalam block tersebut
6. Block baru yang terbentuk akan memiliki hash block sebelumnya (prev hash), merkle root dari transaksi-transaksi di dalam block, timestamp, nonce yang ditemukan oleh miner, dan difficulty target. Block ini masuk ke dalam jaringan

## Distributed Element

- Node: komputer yang menjalankan blockchain dan terhubung ke jaringan peer to peer
- Setiap node dapat menerima, memverifikasi, dan menyebarkan transaksi serta blok.
- Jenis:

|                       |                                                                                                                                                                                                                                                                                                                                 |                                                                                 |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Jenis                 | Fungsi Utama                                                                                                                                                                                                                                                                                                                    | Ciri Khas                                                                       |
| Full node             | Menyimpan seluruh salinan blockchain sejak block genesys dan memverifikasi setiap transaksi serta blok sesuai aturan protokol                                                                                                                                                                                                   | Punya seluruh riwayat blockchain dan berperan dalam menjaga integritas jaringan |
| Light mode (SPV mode) | Simplified Payment Verification. Tidak menyimpan seluruh blockchain, hanya menyimpan header block. Mengandalkan full node untuk memverifikasi transaksi                                                                                                                                                                         | Ringan dan cocok untuk perangkat low-end                                        |
| Mining/minting node   | Menjalankan fungsi full node plus proses [mining](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.e10vg3occfr6) atau [minting](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.g2n8m1i7hec) | Mengonsumsi daya tinggi, biasanya bergabung dalam suatu pool                    |

- Penjelasan mengenai recovery dilihat di [konsensus](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.ed3xq88sa6ik)

## Cryptocurrency

- Karena tidak terafiliasi dengan bank atau mata uang manapun, memakai sistem sendiri dan lintas negara

### Transaksi

- Transaksi pada cryptocurrency seperti [Bitcoin](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.tbe3xc9p1pwk) biasanya menghasilkan output yang bisa dijadikan input untuk transaksi selanjutnya (ibarat ngasih informasi sisa berapa duitnya. Sisa duit itu bisa dipakai di transaksi selanjutnya)
- Output transaksi yang belum terpakai disebut sebagai unspent
- Output transaksi yang sudah terpakai disebut sebagai spent
- Unspent Transaction Outputs (UTXO) adalah kumpulan semua output transaksi yang belum terpakai
- Node akan memverifikasi transaksi juga dengan mengecek apakah input yang digunakan pada transaksi tersebut masih ada di UTXO atau tidak untuk mencegah [double spending](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.ed3xq88sa6ik)

### Wallet

- Software yang menyimpan semua private keys yang dimiliki oleh user
- Non-deterministic wallet: Wallet berisi koleksi dari berbagai private key random yang tidak memiliki hubungan satu sama lain
- Deterministic wallet (seed wallet): semua key di wallet ini berasal dari sebuah single seed

# Consensus

- Cara untuk mencapai kesepakatan antar-anggota supaya mencapai tujuan dan value yang sama
- Memastikan seluruh node di distributed network memiliki state atau data yang sama
- Berguna untuk mencegah double spending (sebuah transaksi terjadi dua kali. Misal Andi punya uang 10000, mau transfer uang ke orang lain sebanyak 4000. Transfer ini dieksekusi oleh dua node secara bersamaan, jadinya saldonya berkurangnya malah 8000 alias ke transfer dua kali), memastikan data integrity, dan keamanan jaringan blockchain
- Algoritma utama:

1. Transaksi baru di-broadcast ke seluruh nodes
2. Setiap node menerima transaksi baru ke blok yang dimilikinya
3. Untuk setiap round selanjutnya, random node broadcast block yang dimiliki dia
4. Node-node lain ngecek block itu hanya jika semua transaksi di dalamnya valid (signature valid, unspent)
5. Node-node kemudian menyatakan kalau block diterima. Block selanjutnya yang akan dibuatnya akan memakai hash block yang diterima tersebut

## Proof of Work

- Proof-of-work: karena komputasinya mahal, maka mubazir juga kalau mau nge-spam blockchain karena satu operasi aja udah mahal banget. That’s why supaya punya hak di ledger, maka kita harus bayar dengan cost komputasi yang nyata dan mahal, jadi hanya yang mau berusaha keras yang bisa mengubah value di ledger
- Kalaupun ada attacker, dia harus ngeluarin cost juga.
- Mining != membuat bitcoin baru
- Ciri PoW:

- Security: prone to attack, karena membutuhkan computational power yang besar, sulit bagi attacker untuk mengubah blockchain
- Decentralized dan tahan terhadap censorship karena tidak ada otoritas pusat
- Sangat boros tenaga, karena mining sangat berat

- Contoh: [Bitcoin](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.tbe3xc9p1pwk)

### Mining

1. Miner mengumpulkan transaksi dari [mempool](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.d7se62ukrd38) dan menggabungkannya menjadi satu candidate block
2. Miner membuat [merkle tree](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.uvnh49dmg97e) dan disimpan di candidate block header
3. Miner mencari nonce yang tepat supaya hash dari candidate block header < target difficulty (ibarat nonce itu seed saat hash). Nonce di-bruteforce atau ditebak

- Jadi memang pada awal block dibuat, nonce itu belum ditemukan dan belum ada di block. Miner bertugas mencari nonce supaya hasil dari hash itu harus selalu berada di bawah target difficulty (bentuknya seperti menghasilkan hash dengan sejumlah nol di awal, misal 000000abc…)
- Mining begitu sulit karena fungsi [hash](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.hc97psoycyvj) menghasilkan nilai yang sangat tidak bisa diprediksi, dengan rentang (pada [Bitcoin](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.tbe3xc9p1pwk)) 0 - 2256, sementara target bisa saja lebih rendah dari 2220. Probabilitas valid hanya 1 banding 1020.
- Difficulty target (nBits) berasal dari jaringan Bitcoin itu sendiri. Semua node menghitung target yang sama berdasarkan aturan konsensus: Setiap 2016 blok (~2 minggu), jaringan menyesuaikan target agar rata-rata waktu antar-blok tetap 10 menit.
- Jadi setiap miner tahu nilai target difficulty yang sedang berlaku.
- Field nBits pada header berisi encoded difficulty target dari blok sebelumnya. Miner membaca nBits dari block terakhir yang valid di chain → itulah difficulty target yang harus dikalahkan oleh hash block berikutnya.
- Target dikodekan dalam field nBits di header block sebelumnya. Bitcoin menyesuaikan difficulty setiap 2016 blok (sekitar 2 minggu, karena target waktu 1 blok = 10 menit).
- Rumus dasar difficulty target:  
   new target = old target actual time to mine 2016 blocks2016 10 menit
- Batas maksimum perubahan hanya 4× naik atau ¼× turun.
- Jika jaringan lebih cepat → difficulty naik.
- Jika lambat → difficulty turun.
- Jika setelah 2 minggu (2016 blok) belum juga tercapai jumlah blok yang diharapkan, maka:

1. Difficulty tidak langsung berubah.
2. Penyesuaian baru akan dilakukan setelah block ke-2016 berikutnya berhasil ditemukan, tidak peduli berapa lama waktunya.
3. Baru setelah itu target berikutnya dihitung ulang memakai total waktu yang dibutuhkan untuk 2016 blok tersebut.

- Format nBits: nBits = [exponent (1 byte)] [coefficient (3 bytes)]
- Rumus konversi nBits

target = coefficient 28 (exponent - 3)  
Contoh: Jika nBits = 0x1b0404cb, maka exponent = 0x1b, coefficient = 0x0404cb. Maka target = 0x0404cb × 2^(8×(0x1b−3))

- Nonce adalah bilangan 32-bit (0–4,294,967,295).
- Miner memilihnya sendiri dan mengubah-ubahnya untuk mencari hash valid.
- Jika semua kemungkinan nonce sudah dicoba tapi hash block masih belum < target:

1. Miner bisa mengubah nilai timestamp (beberapa detik maju) karena timestamp termasuk dalam header → hash berubah total.
2. Miner juga bisa mengubah coinbase transaction (transaksi pertama di blok, tempat reward dan pesan unik disimpan).

- Coinbase transaction adalah transaksi pertama di setiap block, dan dibuat oleh miner itu sendiri, bukan pengguna biasa. Karena transaksi ini belum ada di jaringan  sebelum block dibuat, miner bebas membuat coinbase nya sendiri, selama total reward ≤ block reward yang diizinkan.
- Coinbase transaction memberikan block reward kepada miner yang menemukan block tersebut (sejumlah BTC reward + biaya transaksi)
- Coinbase transaction memengaruhi Merkle root, yang juga bagian dari block header, sehingga hash berubah lagi.
- Dengan dua parameter ini, ruang pencarian hampir tak terbatas.

4. Jika miner berhasil menemukan nonce yang tepat, block itu akan jadi miliknya. Miner dapat block rewards (dulu 50 BTC, tapi karena kena halving seiring semakin banyak ditemukannya block, sekarang kisaran 3.125 BTC) + seluruh transaction fees yang ada pada block body tersebut
5. Block kemudian akan di-announce ke seluruh ledger/node untuk diverifikasi dan ditambahkan ke jaringan. Syarat: block valid dan seluruh transaksi di dalamnya valid (termasuk verifikasi digital signature untuk melihat output transaksi)

### Conflict Resolution

- Jika pada saat yang bersamaan block yang sama ditemukan oleh dua miners, maka akan dibuat percabangan baru dari rantai utama
- Jika ada percabangan, chain yang akan dipilih oleh keseluruhan sistem adalah chain yang sudah memiliki block terbanyak atau chain terpanjang (berarti proof-of-work terbanyak juga)

### Recovery

- Konsensus yang digunakan pada Bitcoin adalah [Proof of Work](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.ajw9578l98n1), yaitu chain terpanjang dengan total proof-of-work terbanyak-lah yang dianggap benar.
- Jadi misal ada percabangan atau satu node offline selama beberapa waktu, alhasil jadi muncul 2 chain, chain yang akan dipilih oleh keseluruhan sistem adalah chain yang sudah memiliki block terbanyak (berarti proof-of-work terbanyak juga).
- Kemudian node yang mati atau menghapus chain yang kalah tadi, akan melakukan update chain yang dimilikinya dengan meminta chain terpanjang yang valid dari node-node lain, memverifikasinya kemudian memperbarui state ledger dia

## Proof of Stake

- Motivasi: proof of work sangat energy-exhausting. Dibuat algoritma yang less energy-intensive. Selain itu, ada juga konsep mining pool: beberapa orang mengumpulkan resource yang dimilikinya supaya computational power-nya lebih besar, alhasil kemungkinan dapetnya lebih besar juga, nanti reward-nya dibagi rata ke orang-orang itu. Tapi hal ini malah merusak esensi decentralized itu sendiri karena malah jadi tersentralisasi di suatu pool
- Di proof-of-stake, tidak ada miner, adanya validator. Tidak ada mining block, adanya mint/forge block
- Mekanismenya: validator adalah orang yang akan membuat block. Validator dipilih oleh sistem secara pseudo-random dengan pertimbangan utama yaitu banyak koin yang di-deposit/disimpan oleh validator di dalam sistem (stake, kepemilikan). Semakin banyak koin yang dimiliki oleh validator, peluangnya terpilih menjadi validator suatu block semakin besar.
- Contoh: Ethereum
- Genesys block dibuat oleh developer dan berisi total token awal
- Finality adalah keadaan ketika suatu blok dianggap tidak dapat dibatalkan atau digantikan oleh cabang lain. Setelah blok mencapai finality, seluruh transaksi di dalamnya dianggap permanen dan tidak bisa di-reorganize.
- Di PoW, finality bersifat probabilistik (semakin banyak blok baru di atasnya, semakin kecil peluang dibatalkan).

Di PoS modern, finality bisa deterministik, ditentukan oleh suara validator.

### Minting/Forging

1. Staking: node menyimpan koin-koin ke dalam jaringan sebagai jaminan. Semakin besar koin yang disimpan di jaringan, semakin besar peluangnya terpilih menjadi validator. Faktor lain seperti usia koin juga memungkinkan untuk menjadi faktor penentu validator
2. Selection: sistem memilih validator secara random namun tetap berasaskan peluang di atas. Node yang terpilih menjadi validator
3. Block creation: validator/forger yang terpilih memverifikasi transaksi-transaksi di dalam block, dan membuat block tersebut menjadi block selanjutnya di jaringan jika valid
4. Reward/penalty: jika validator jujur, maka validator menerima reward setelah berhasil membuat block baru (biasanya proporsional terhadap stake/koin yang disimpannya). Jika tidak jujur, maka menerima [penalti](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.su3vi24m1hac)
5. Consensus: block disebarkan ke seluruh jaringan peer-to-peer

### Penalti Kecurangan

- Block forging ganda (double signing). Validator menandatangani dua blok untuk slot yang sama agar punya dua versi rantai.

→ Hukuman: slashing (stake dipotong atau dihapus).

- Nothing-at-stake. Validator bisa dengan mudah menandatangani beberapa cabang karena tidak ada biaya energi seperti di PoW.

→ Solusi: sistem penalti dan finality (misal Casper FFG di Ethereum).

- Stake concentration. Validator besar bisa menguasai proses pemilihan blok.

→ Solusi: randomization, delegasi, atau batasan voting.

- Long-range attack. Validator lama mencoba membuat rantai baru dari jauh di masa lalu.

→ Solusi: checkpointing dan weak subjectivity (node baru percaya pada blok final tertentu. Jika ada transaksi yang berasal dari block yang lebih lama dari block final itu, tidak akan dipercaya). Hal ini disebut sebagai finality

### Tipe PoS

1. Simple PoS

- Stake yang dimiliki node betul-betul menentukan peluang dia terpilih

2. Delegated PoS

- Pemilik token memilih delegasi (validator) melalui voting.
- Hanya sejumlah kecil validator terpilih (mis. 21–100) yang berhak membuat blok.
- Proses blok berlangsung cepat karena sedikit node aktif, efisien, Partisipasi ‘demokratik’
- Kekurangan: Sentralisasi, Kolusi
- Contoh: EOS, Tron, Steem, BitShares.

3. Casper

- Campuran PoS dan [PoW](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.ajw9578l98n1)
- Tidak ada voting publik; siapa pun bisa menjadi validator dengan staking langsung (32 ETH minimal)
- Semua validator berpartisipasi proporsional terhadap jumlah stake.
- Kelebihan: keamanan tinggi, finality deterministik, lebih desentralistik dibanding DPoS.
- Kelemahan: throughput lebih rendah dibanding DPoS.

### Recovery

- Jika dua blok terbentuk di slot yang sama (dua validator membuat blok bersamaan), maka muncul fork/percabangan.
- Penyelesaian tergantung protokol yang digunakan
- Pada Ethereum, digunakan [LMD-Ghost](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.mq71kvlp80w3) untuk mengatasi percabangan
- Contoh lain: [finality](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.e8uj4swkhb5) gadget: Blok dianggap final setelah mendapat cukup banyak tanda tangan validator (2/3 atau lebih). Setelah final, blok itu tidak bisa diganti.

## Consensus Lain

### Proof of Authority

- Hanya node yang terpercaya dan terverifikasi yang dapat menambahkan blok ke blockchain.
- Kelebihan: Cepat dan Efisien, Ideal untuk Blockchain Private
- Kekurangan: Sentralisasi
- Contoh: VeChain, Azure Blockchain

### Proof of Elapsed Time

- Algoritma konsensus berbasis trusted execution environment (TEE), dikembangkan oleh Intel
- Mekanisme konsensus yang mengandalkan waktu tunggu yang acak untuk menentukan siapa yang berhak memvalidasi blok berikutnya
- Algoritma:

1. Setiap node meminta waktu tunggu acak dari TEE (biasanya Intel SGX).
2. Node menunggu waktu tersebut berlalu tanpa aktivitas tambahan.
3. Node dengan waktu tunggu terpendek menang dan berhak membuat blok berikut.
4. TEE memastikan waktu tunggu benar-benar acak dan tidak bisa dimanipulasi.

- Mirip dengan Proof-of-Work (PoW), tetapi mengganti kerja komputasi mahal dengan penundaan terverifikasi
- Kelebihan: Konsumsi energi rendah dibandung PoW, Skalabilitas tinggi.
- Kekurangan: Memerlukan perangkat khusus, bergantung pihak ketiga (hardware)
- Contoh: Hyperledger Sawtooth

### Proof of History

- Mekanisme konsensus yang digunakan untuk menciptakan urutan waktu yang dapat diverifikasi untuk transaksi.
- Algoritma timekeeping (penjaga waktu kriptografis) yang digunakan oleh Solana untuk menyusun urutan transaksi secara deterministik tanpa menunggu sinkronisasi global antar-node.
- Algoritma:

1. PoH membuat urutan hash berantai menggunakan fungsi hash verifiable delay function (misal SHA-256 berulang).
2. Setiap hash berikutnya tergantung pada hasil hash sebelumnya, sehingga membentuk urutan waktu yang tidak bisa dimanipulasi.
3. Transaksi diberi stempel waktu (timestamp) di dalam urutan hash tersebut.
4. Validator lain bisa memverifikasi bahwa transaksi terjadi dalam urutan tertentu tanpa harus menunggu konfirmasi dari semua node.

- Kelebihan: mempercepat throughput jaringan
- Kekurangan: Lebih efisien dibandingkan PoW atau PoS.
- Contoh: Solana
- PoH bukan mekanisme konsensus tunggal, tetapi komponen pendukung untuk algoritma Proof-of-Stake Solana.
- Validator masih dipilih berdasarkan stake (PoS), tetapi PoH mempercepat urutan blok dan meminimalkan komunikasi antar-node.
- Kombinasi PoH + PoS memungkinkan throughput sangat tinggi (ribuan TPS).
- Batasan:

- Memerlukan sinkronisasi waktu yang sangat presisi antar-node.
- Bergantung pada leader node untuk menjaga urutan hash, sehingga bisa terjadi ketergantungan sementara.
- Keamanan tetap bergantung pada PoS validator dan tanda tangan digital.

# Smart Contract

- Program otomatis yang berjalan di atas blockchain dan mengeksekusi perintah sesuai logika yang telah ditentukan tanpa campur tangan manusia
- Kode yang berisi kondisi if–then dan aturan transaksi. Setelah disimpan di blockchain, kontrak akan berjalan secara deterministik di semua node dan hasilnya tidak bisa diubah
- Definisi: protokol transaksi elektronik yang dieksekusi berdasarkan kontrak
- Tujuan: layaknya di kontrak/transaksi umum (seperti ketentuan pembayaran, hak gadai, kerahasiaan, dan bahkan penegakan hukum), meminimalkan pengecualian baik yang disengaja maupun tidak disengaja, dan meminimalkan kebutuhan akan perantara terpercaya. Tujuan ekonomi terkait meliputi menurunkan kerugian akibat penipuan, biaya arbitrase dan penegakan hukum, serta biaya transaksi lainnya.
- Misal: smart contract transfer. Saat seseorang melakukan transfer, maka blockchain akan memeriksa apakah koin yang dimilikinya cukup, kemudian secara otomatis mengurangi koin yang dimiliki pengirim dan menambahkan koin yang dimiliki penerima sebanyak koin yang ditransfer. Contoh kode:

|                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| // SPDX-License-Identifier: MIT<br><br>pragma solidity ^0.8.0;<br><br> <br><br>contract SimpleToken {<br><br>    mapping(address => uint256) public balance;<br><br>    string public name = "SimpleToken";<br><br>    string public symbol = "SIM";<br><br>    uint8 public decimals = 18;<br><br> <br><br>    constructor(uint256 initialSupply) {<br><br>        balance[msg.sender] = initialSupply;<br><br>    }<br><br> <br><br>    function transfer(address to, uint256 amount) public returns (bool) {<br><br>        require(balance[msg.sender] >= amount, "Not enough balance");<br><br>        balance[msg.sender] -= amount;<br><br>        balance[to] += amount;<br><br>        return true;<br><br>    }<br><br>} |

### Alur dan Implementasi

- Cara kerja:

1. Trigger-nya: setiap kali ada transaksi yang memanggil fungsi di kontrak.
2. Tidak ada proses berjalan di latar; blockchain tidak memiliki event loop atau scheduler.
3. “Otomatis” berarti: jika kondisi dalam kontrak terpenuhi, maka eksekusi terjadi secara deterministik di seluruh node tanpa bisa dibatalkan atau diubah.

- Implementasi:

1. Deploy

- Pengembang mengirim bytecode kontrak ke blockchain melalui transaksi.
- Setelah transaksi dikonfirmasi, kontrak tersimpan permanen di blockchain dan memiliki alamat unik.

2. Interaksi

- Pengguna berinteraksi dengan kontrak (mis. memanggil transfer) lewat transaksi blockchain.
- Node eksekusi (EVM) menjalankan kode kontrak di semua node, memverifikasi hasil identik, lalu mencatat perubahan (mis. saldo).

- Contoh:

1. Alice memanggil fungsi transfer(bob, 100) lewat wallet.
2. Transaksi dikirim ke mempool, lalu dimasukkan ke blok oleh validator.
3. Saat blok diproses, semua node menjalankan bytecode kontrak dan memperbarui state.
4. Hasil tersimpan di ledger, diverifikasi seluruh jaringan.

### Oracle

- Jembatan data antara blockchain dan dunia luar.
- Blockchain bersifat tertutup dan hanya mengenali data internal (on-chain), sedangkan oracle menyediakan data eksternal (off-chain) agar dapat digunakan oleh smart contract.
- Smart contract tidak bisa langsung mengakses API, web, atau sensor karena tidak ada koneksi keluar dari blockchain. Oracle memecahkan masalah ini dengan:

- Mengambil data dari sumber eksternal (harga, cuaca, hasil pertandingan, dsb).
- Memverifikasi dan mengirimkannya ke blockchain dalam bentuk transaksi.
- Smart contract membaca data tersebut dan mengeksekusi logika yang tergantung pada nilainya.

- Jenis:

- Software oracle: ambil data digital (API, situs web).
- Hardware oracle: ambil data dari sensor fisik atau IoT.
- Inbound oracle: membawa data dari luar ke blockchain.
- Outbound oracle: mengirim data dari blockchain ke dunia luar (misal memicu pembayaran fiat).
- Decentralized oracle: data diverifikasi oleh banyak node oracle untuk mencegah manipulasi (contoh: Chainlink, Band Protocol).

- Contoh kasus: Misal, smart contract asuransi cuaca: Kontrak membayar klaim otomatis jika curah hujan > 100 mm → Oracle mengirim data cuaca dari BMKG ke blockchain → Smart contract membaca nilai itu dan mengeksekusi pembayaran jika kondisi terpenuhi.

### Development Best Practice

- Use the latest compiler version
- Limit Contract Size and Complexity: Large contracts are harder to audit and more expensive to deploy
- Avoid Loops and Recursions: Lead to high gas costs and potential out-of-gas errors.
- Conduct Regular Audits: Regularly audit your smart contracts to identify and fix vulnerabilities.
- Consider third-party audits for critical contracts
- Gas Optimization: Optimize gas usage by packing variables and minimizing storage operations. Use constant and immutable keywords where applicable
- Use Explicit Visibility Specifiers: Always specify the visibility of functions and state variables (public, private, internal, external) to avoid unintended access

|                                                                                                    |
| -------------------------------------------------------------------------------------------------- |
| uint private data;<br><br>function setData(uint \_data) public { <br><br>  data = \_data;<br><br>} |

- Implement SafeMath for Arithmetic Operations: Use libraries like SafeMath to prevent integer overflow and underflow issues

|                                                                |
| -------------------------------------------------------------- |
| using SafeMath for uint256; uint256 public<br><br>totalSupply; |

- Implement Access Control: Use access control mechanisms like onlyOwner or role-based access to restrict function execution to authorized users

|                                                                                      |
| ------------------------------------------------------------------------------------ |
| modifier onlyOwner() { <br><br>  require(msg.sender == owner);<br><br>  \_;<br><br>} |

- Follow the Chect-Effect-Interaction Patterns: Prevent re-entrancy attacks (penggunaan require di Solidity misalnya)

|                                                                                                                                                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| function withdraw(uint amount) public {<br><br>  require(balances[msg.sender] >= amount);<br><br>  balances[msg.sender] -= amount;<br><br> (bool success, ) = msg.sender.call{value: amount}("");<br><br>  require(success);<br><br>} |

# dApps dan Token

## dApps

- dApps: Decentralized apps: aplikasi yang berjalan di jaringan blockchain. Menggunakan smart contracts untuk mengeksekusi transaksi, open source, dan berjalan secara anonim
- Tidak memiliki central point of failure karena terdesentralisasi

### Karakteristik

- Desentralisasi – dApps beroperasi pada jaringan terdesentralisasi, yang berarti tidak ada satu entitas pun yang memiliki kendali atas keseluruhan sistem. Hal ini biasanya dicapai melalui teknologi blockchain.
- Open source – Source code dApps seringkali bersifat open source, yang memungkinkan siapa pun untuk melihat, menggunakan, dan berkontribusi pada kode tersebut. Transparansi ini membantu membangun kepercayaan di antara pengguna.
- Smart contract – dApps menggunakan [smart contract](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.ooaoqd33ec5x) untuk mengotomatiskan proses dan mengeksekusi transaksi. Smart contract adalah kontrak yang dapat dieksekusi sendiri dengan ketentuan perjanjian yang tertulis langsung ke dalam kode.
- Mekanisme Insentif – Banyak dApps memiliki mekanisme insentif bawaan, yang seringkali melibatkan [token](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.ppir8fffovmm), untuk memberi penghargaan kepada pengguna dan kontributor atas partisipasi dan upaya mereka.
- Mekanisme Konsensus – dApps mengandalkan mekanisme konsensus (seperti Proof of Work atau Proof of Stake) untuk memvalidasi transaksi dan menjaga integritas jaringan.
- Immutability – Setelah data tercatat di blockchain, data tersebut tidak dapat diubah atau dihapus, menjamin integritas dan keamanan data.

### Benefit

- Transparansi – Semua transaksi dan operasi dicatat dalam public [ledger](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.e6qtdx6m0wcz), memberikan transparansi dan mengurangi risiko penipuan.
- Keamanan – Sifat desentralisasi dan keamanan kriptografi blockchain membuat dApp tahan terhadap peretasan dan unauthorized access.
- Censorship resistance  – Tidak ada otoritas pusat yang dapat mengontrol atau mematikan dApp, sehingga tahan terhadap sensor dan memastikan ketersediaan berkelanjutan.
- Trustless environment – Pengguna tidak perlu mempercayai otoritas pusat atau perantara, karena blockchain dan [smart contract](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.ooaoqd33ec5x) memastikan eksekusi transaksi yang benar.
- Mengurangi downtime – dApp lebih kecil kemungkinannya mengalami downtime karena didistribusikan melalui jaringan node, alih-alih bergantung pada satu server.
- Pemberdayaan Pengguna/User empowerment – Pengguna memiliki kendali lebih besar atas data dan aset mereka, karena mereka berinteraksi langsung dengan blockchain tanpa perantara.
- Inovasi dan Fleksibilitas – Sifat sumber terbuka dan modularitas dApps mendorong inovasi dan memungkinkan pengembang untuk mengembangkan aplikasi yang sudah ada guna menciptakan fungsionalitas baru.

### Komponen

- Jaringan Blockchain – Backbone dApp, menyediakan decentralized ledger tempat semua transaksi dan data dicatat.
- Smart contract – Kontrak yang dapat dieksekusi sendiri dengan ketentuan perjanjian yang langsung ditulis ke dalam kode. Kontrak ini mengotomatiskan proses dan memastikan bahwa transaksi hanya terjadi ketika kondisi yang telah ditentukan terpenuhi.
- Front-end interface – Antarmuka pengguna dApp, yang dapat mirip dengan aplikasi web atau mobile. Antarmuka ini berinteraksi dengan blockchain melalui smart contract.
- Decentralized storage – Meskipun blockchain menyimpan data transaksi, solusi penyimpanan terdesentralisasi lainnya (seperti IPFS) dapat digunakan untuk menyimpan berkas atau data besar yang tidak muat di blockchain.
- Dompet – Dompet digital digunakan untuk mengelola kunci pribadi pengguna dan berinteraksi dengan blockchain. Dompet ini memungkinkan pengguna untuk mengirim, menerima, dan menyimpan token.

### Eksekusi

1. User interaction – Pengguna berinteraksi dengan dApp melalui front-end, yang bisa berupa aplikasi web atau mobile. UI ini berkomunikasi dengan blockchain melalui smart contract.
2. Inisiasi Transaksi – Ketika pengguna melakukan suatu tindakan (misalnya, mengirim token, mengeksekusi perdagangan), dApp membuat permintaan transaksi. Permintaan ini dikirim ke jaringan blockchain.
3. Eksekusi Smart Contract – Transaksi memicu kontrak pintar di blockchain. Smart contract memproses transaksi sesuai dengan logika kodenya, memastikan bahwa semua kondisi terpenuhi sebelum eksekusi.
4. Konsensus dan Validasi – Transaksi disiarkan ke jaringan, di mana node memvalidasinya melalui mekanisme konsensus (misalnya, Proof of Work, Proof of Stake). Hal ini memastikan transaksi tersebut sah dan dapat ditambahkan ke blockchain.
5. Pencatatan Transaksi – Setelah divalidasi, transaksi dicatat di blockchain. Catatan ini bersifat permanen dan transparan, sehingga siapa pun dapat memverifikasinya.
6. Feedback ke User – dApp memperbarui UI pengguna untuk mencerminkan status baru (misalnya, saldo terbaru, konfirmasi tindakan). Feedback ini memastikan pengguna mengetahui status transaksi.

## Token

- Token adalah digital asset yang dibuat, dikelola dan ditransfer/diolah oleh blockchain
- Token merepresentasikan currency, property, voting rights, data, atau akses ke suatu layanan
- Token mewakili nilai, hak, atau kepemilikan yang ditentukan oleh smart contract.
- Token berbeda dengan native coin seperti BTC atau ETH, karena token dihasilkan oleh smart contract, sementara native coin dihasilkan oleh protokol blockchain itu sendiri
- Sebagai contoh, BTC dan ETH adalah currency dan dasar dari arsitektur blockchain Bitcoin dan Ethereum. Mereka adalah hal yang menjaga blockchain tetap hidup dengan menjadi insentif untuk miner. Token di sisi lain hanyalah asset yang berdiri di atas teknologi blockchain yang sudah ada. Sebagai contoh aset gambar NFT itu bukan reward untuk miner di blockchain, cuman barang yang diperjualbelikan tapi pakai teknologi blockchain aja untuk currency nya
- Contoh:

|                |                                                                          |                                                                             |
| -------------- | ------------------------------------------------------------------------ | --------------------------------------------------------------------------- |
| Aspek          | Native Coin                                                              | Token                                                                       |
| Definisi       | Aset utama yang dimiliki blockchain itu sendiri                          | Aset yang dibuat di atas blockchain lain (melalui smart contract)           |
| Contoh         | Bitcoin (BTC) di Bitcoin, Ether (ETH) di Ethereum, IOTA coin di IOTA     | USDT, UNI, LINK, DAI (dibuat di Ethereum)                                   |
| Pembuatan      | Didefinisikan dan diatur langsung oleh protokol blockchain               | Dibuat melalui smart contract di blockchain yang sudah ada                  |
| Pembuatan      | Didefinisikan dan diatur langsung oleh protokol blockchain               | Dibuat melalui smart contract di blockchain yang sudah ada                  |
| Kegunaan utama | Digunakan untuk membayar biaya transaksi (gas fee) dan keamanan jaringan | Digunakan untuk fungsi aplikasi tertentu seperti stablecoin, voting, reward |
| Kontrol        | Dikelola oleh konsensus blockchain                                       | Dikelola oleh pemilik atau penerbit kontrak                                 |
| Fungibility    | Selalu fungible (1 ETH = 1 ETH)                                          | Bisa fungible (misal ERC-20) atau non-fungible (misal ERC-721)              |

- Use case token:

- Cryptocurrencies – Tokens can serve as digital currencies for transactions.
- Utility Tokens – Provide access to a product or service within a blockchain ecosystem.
- Security Tokens – Represent ownership in an asset, such as shares in a company.
- Governance Tokens – Allow holders to participate in the decision-making process of a decentralized organization.

### Tipe Token

1. Fungible token: token yang nilainya sama semua, bisa dipertukarkan dan identikal (mirip seperti currency biasa). Standard: ERC-20, contoh: DAI dan USDC
2. Non-Fungible Token (NFT): token yang bersifat unik dan tidak bisa digantikan atau ditukar dengan yang sama. Biasanya merepresentasikan ownership dan unique items seperti digital art dan collectible items. Standard: ERC-721 dan ERC-1155

### Hubungan Token dan Smart Contract

- Smart contract adalah dasar pembentuk token.  
   Token tidak berdiri sendiri; ia ada karena dibuat dan dikelola oleh smart contract yang menentukan aturan seperti minting, transfer, dan burning. Dengan kata lain, token hanyalah representasi digital dari nilai atau hak yang dikontrol oleh program (smart contract)
- Smart contract menyediakan standarisasi token.  
   Standar seperti ERC-20, ERC-721, atau IRC-20 menetapkan fungsi dan event wajib agar token bisa digunakan lintas platform dan aplikasi (wallet, exchange, dApp). Smart contract menjamin setiap token mengikuti format yang sama, sehingga kompatibel secara universal.
- Smart contract menjamin keamanan dan kepercayaan tanpa pihak ketiga.  
   Begitu kontrak ter-deploy di blockchain, kodenya bersifat immutable (tidak dapat diubah). Ini menjamin setiap transaksi token akan mengikuti logika yang sama tanpa manipulasi, menggantikan peran lembaga keuangan atau otoritas pusat.
- Smart contract mengotomatiskan seluruh proses tokenisasi.  
   Semua operasi seperti transfer saldo, verifikasi kepemilikan, atau pembakaran token terjadi otomatis sesuai kode kontrak, tanpa campur tangan manusia.
- Smart contract bertindak sebagai ledger logic buatan pengguna.
- Dengan menulis kode yang mendefinisikan: total supply, saldo setiap akun, aturan transfer, dan event transaksi, kontrak dapat membuat token yang sifatnya fungible (setiap unit bernilai sama seperti pada standar ERC-20 (Ethereum) atau IRC-20 (IOTA Smart Contract Protocol).
- Contoh:

# Bitcoin

- Memakai [proof-of-work consensus](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.ajw9578l98n1)
- Hash yang dipakai adalah SHA-256.

# Ethereum

- Implementasi atau ekstensi terhadap konsensus [Proof of Stake](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.e8uj4swkhb5), untuk me-enhance keamanan
- Menggunakan Solidity

## Meta Consensus (Protokol)

### LMD-Ghost

- LMD-GHOST (Latest Message Driven – Greediest Heaviest Observed SubTree) adalah algoritma fork-choice rule yang digunakan untuk menentukan rantai mana yang dianggap sah saat terjadi percabangan
- Cara kerja:

1. Tiap validator terus mengirim pesan (attestation) yang menunjukkan blok mana yang mereka anggap kepala rantai
2. Setiap node menyimpan pesan terakhir (latest message) dari tiap validator.
3. Untuk memilih kepala rantai, node memulai dari blok justified terakhir, lalu secara rekursif memilih cabang dengan total bobot suara (stake) terbesar dari semua pesan validator yang masih mendukung cabang itu

- “GHOST” = pilih rantai dengan subtree terberat (paling banyak dukungan validator).
- “LMD” = hanya pesan terakhir dari setiap validator yang dihitung agar efisien dan mencegah manipulasi.

- LMD-GHOST memastikan semua validator secara cepat konvergen pada satu rantai dengan bobot dukungan terbanyak, sambil [Casper FFG](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.6bxhe0rz7qns) menjamin finality di atasnya.

### Casper FFG

- Protokol [finality](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.e8uj4swkhb5) yang digunakan Ethereum PoS
- Mekanisme:

1. Waktu dibagi menjadi epoch (misal 32 slot).
2. Validator mengirim vote untuk dua blok: source (blok final sebelumnya) dan target (blok yang mereka ingin finalkan).
3. Jika ≥ 2/3 total stake mendukung target yang sama, blok tersebut menjadi justified, lalu blok sebelumnya menjadi finalized.
4. Jika validator menandatangani dua vote yang saling bertentangan → [slashing](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.su3vi24m1hac).

- Dua algoritma ini berjalan bersama:

- LMD-GHOST memilih blok kepala terbaru.
- Casper FFG menandai blok final yang tak bisa diubah.

# IOTA

- Jika [blockchain](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.yoz247j9atql) menggunakan chain of blocks, IOTA menggunakan [directed acyclic graph](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.hc97psoycyvj#heading=h.k9ehe7rfm42d)
- Directed acyclic graph: tersusun dari sekumpulan nodes yang dihubungkan oleh arc/edges yang menunjuk satu arah, dan node yang sudah dilalui tidak akan dilalui lagi oleh jalur yang sama (tidak ada loop)

## Jaringan

- Sebuah node bisa menunjuk hingga 8 future nodes (8 node selanjutnya)
- Transaksi dikonfirmasi jika memiliki setidaknya 2 future nodes (di-reference oleh 2 node lainnya)
- Berbeda dengan blockchain yang semakin banyak user semakin lama proses validasi transaksinya (karena seluruh block harus validasi transaksinya), di IOTA, semakin banyak usernya semakin cepat validasinya karena semakin banyak node yang memungkinkan untuk memvalidasi node sebelumnya
-

# IPFS

# Lampiran: Contoh DeFi

- Decentralized financial currency
- Komponen:

- User Action: A user manages to token balances/transaction (deposit, withdrawal, transfer)
- Smart Contract: The dApp uses a smart contract to facilitate the transaction, checking for sufficient balance and executing the transaction.
- Blockchain Interaction: The transaction is sent to the blockchain, validated, and recorded.
- User Feedback: The dApp updates the user's balance and transaction history.

- E-wallet membutuhkan pengembangan smart contract untuk manage token balances dan transaksi-transaksinya (deposit, withdrawal, transfer)
- Step by step:

1. Create Client App
2. Create a Smart Contract
3. Deploy the contract
4. Integrate the Client-App to the contract
5. Test

- UI:

- Backend logic (smart contract) contohnya bisa dilihat di [smart contract](https://docs.google.com/document/d/1IS3ZYiWKAOwm_tbL2iZwnQh6amLIpN1ZiSLYdkCY92o/edit?tab=t.w230vt95g0t8#heading=h.ooaoqd33ec5x)

# Daftar Referensi

- Hash pada Litecoin: Scrypt
- Proof of work: [http://www.hashcash.org/papers/bread-pudding.pdf](http://www.hashcash.org/papers/bread-pudding.pdf)
