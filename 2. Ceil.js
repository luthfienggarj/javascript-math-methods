/* Metode ceil() membulatkan angka desimal hingga bilangan bulat terbesar 
berikutnya dan mengembalikannya. Artinya, 4,3 akan dibulatkan menjadi 5 
(bilangan bulat terbesar berikutnya). */

// Contoh Membulatkan Angka Postitif
let n = Math.ceil(3.1);
console.log(n);
// Output : 4

// Contoh Membulatkan Angka Negatif
let z = Math.ceil(-2.9);
console.log(z);
// Output : -2

// Contoh Angka String
let p = Math.ceil("-5.8986");
console.log(p);
// Output : -5

// Contoh Aphabet String
let str = Math.ceil("Non-Angka");
console.log(str);
// Output : NaN