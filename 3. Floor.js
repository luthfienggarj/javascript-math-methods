/* Fungsi Math.floor() membulatkan angka ke bawah 
ke bilangan bulat terkecil berikutnya. */

// Bisa Dikatakan Kebalikan Dari Math.Ceil

// Contoh Number Positif
let a = Math.floor(5.98);
console.log(a);
// Output : 5

// Contoh Number Negatif
let b = Math.floor(-3.55);
console.log(b);
// Output : -4

// Contoh Number String
let c = Math.floor("-9.87");
console.log(c);
// Output : -10

// Contoh Non-Number
let d = Math.floor("Non-Number");
console.log(d);
// Output : NaN

// Contoh Null
let e = Math.floor(null);
console.log(e);
// Output : 0