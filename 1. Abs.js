// Metode abs() menemukan nilai absolut dari angka yang ditentukan (tanpa tanda apa pun) dan mengembalikannya.

// Jika Angka Negatif
let value = Math.abs(-3);
console.log(value);
// Output : 3

// Jika Angka Positif
let positif = Math.abs(30);
console.log(positif);
// Output : 30

// Jika String Tapi Berisi Angka
let str = Math.abs("10");
console.log(str);
// Output : 10

// Jika String Tapi Berisi Alphabet
let alphabet = Math.abs("JavaScript");
console.log(alphabet);
// Output : NaN


// Soal 1 
const num = -15;
console.log(Math.abs(num));
// Output : 15

// Soal 2
const numbers = [10, -20, 30, -40, 50];
const res = numbers.map(num => Math.abs(num))
console.log(res);
// Output : [10, 20, 30, 40, 50]

// Soal 3 (Kordinat)
const x = Math.abs(-8); // 8
const y = Math.abs(12); // 12
const xx = x**2 // Pangkat 2 Jadi = 64
const yy = y**2 // Pangkat 2 Jadi = 144
const plus = xx + yy // 208
const result = Math.sqrt(plus) // Diakarkan 
console.log(result); // 12
// Output : 14.422205101855956

// Code Ringkas
const xxx = -8;
const yyy = 12;
const results = Math.sqrt( Math.abs(xxx)**2 + Math.abs(yyy)**2 )
console.log(results);
// Output : 14.422205101855956