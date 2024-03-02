// Metode trunc() memotong (memperpendek) sebuah angka dan mengembalikan bagian bilangan bulatnya.

// Angka Positif Trunc
let a = Math.trunc(52.364);
console.log(a);
// Output : 52

// Angka Negatif Trunc
let b = Math.trunc(-64.1);
console.log(b);
// Output : -64

// Angka String Trunc
let c = Math.trunc("12.50");
console.log(c);
// Output : 12

// Non - Angka Trunc
let d = Math.trunc("Non - Angka");
console.log(d);
// Output : NaN