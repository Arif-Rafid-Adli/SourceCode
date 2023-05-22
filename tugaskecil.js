//TUGAS KECIL

/*
1. promp untuk mengusis salldo akhir dari apa yang diinputkan oleh user
2. mementkan hari dari tanggal yang ada saat ini di pc 
**/
let saldoawal =prompt('Masukkan saldo anda saat ini ',0)
let saldotambahan = prompt('Masukkan apabila ada saldo tambahan ')
const saldoakhir = saldoawal + saldotambahan

console.log (`saldo anda saat ini adalah Rp.${saldoawal},00, saldo tambahan anda sebesar Rp.${saldotambahan},00, total saldo anda saat ini adalah Rp.${saldoakhir}`)