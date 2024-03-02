/* Metode Math.log() mengembalikan logaritma natural suatu angka. 
Ini setara dengan ln(x) dalam matematika. */

// Normal Log
let a = Math.log(1);
console.log(a);
// Output : 0

let b = Math.log(10);
console.log(b);
// Output : 2.302

// Log Nol (0)
let c = Math.log(0);
console.log(c);
// Output : -Infinity

// Angka Negatif
let d = Math.log(-1);
console.log(d);
// Output : NaN

// log() Dengan Euler's constant e
var value = Math.log(Math.E);
console.log(value); 
// Output: 1