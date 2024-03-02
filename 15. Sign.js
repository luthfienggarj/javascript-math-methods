/* Metode sign() menghitung tanda dari angka yang ditentukan dan 
mengembalikan 1 jika angkanya positif dan -1 jika angkanya negatif. */

// Positif Number
let a = Math.sign(54);
console.log(a);
// Output : 1

// Negatif Number
let b = Math.sign(-4);
console.log(b);
// Output : -1

// String Number
let c = Math.sign("55");
console.log(c);
// Output : 1

// String Alphabet
let d = Math.sign("Non-Angka");
console.log(d);
// Output : NaN

// Zero Positif Value
let e = Math.sign(0);
console.log(e);
// Output : 0

// Zero Negatif Value
let f = Math.sign(-0);
console.log(f);
// Output : -0