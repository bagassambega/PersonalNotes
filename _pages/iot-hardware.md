---
layout: page-with-toc
title: Internet of Things and Hardware
description: Notes on hardware and internet of things related
permalink: /iot-hardware/
github_edit_url: https://github.com/bagassambega/PersonalNotes/edit/main/_pages/iot-hardware.md
---
# RAM

- Random Access Memory. Digunakan untuk menyimpan data sementara (volatile memory), kecepatan akses tinggi, dan digunakan oleh CPU untuk menyimpan data ketika aplikasi berjalan. 
- Jadi ketika aplikasi membutuhkan data, data disimpan di RAM supaya nanti aplikasi bisa ambil data langsung, tidak perlu I/O latency karena ke disk.
- RAM disebut random karena

## SRAM

- Static RAM. 
- Sangat cepat, **digunakan oleh cache** CPU untuk menyimpan data untuk direct access dari CPU
- Harganya sangat mahal

## DRAM

- Dynamic RAM
- RAM inilah yang ukurannya lebih besar dari SRAM, ukurannya bergiga-giga
- Kecepatannya jauh lebih lambat dibandingkan SRAM, dan berfungsi sebagai main system memory

### ROM

- Read-only memory. Disebut read-only karena tidak ada mekanisme untuk write. 
- Disebut

# IoT: ESP32 Board

![](../assets/images/lectures/iot-hardware_20260503-153339.png)

## Specification

### Processor and System
- Xtensa Dual-Core 32-bit LX6 up to 240 MHz Clock frequency
- Bluetooth 4.2/BLE
- WiFI 2.4GHz up to 150 MbPs
- 520 kB internal SRAM
- 4 MB external flash memory

# IoT: Breadboard