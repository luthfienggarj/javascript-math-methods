/* Metode min() menemukan nilai minimum di antara 
nilai yang ditentukan dan mengembalikannya. */

// Bisa Berfungsi Di Array (Gunakan Spread Operator)

// Contoh Dengan Array
const number = [1, -9, 8, -6, 30, 8, 1];
const a = Math.min(...number);
console.log(a);
// Output : -9

// Contoh Non-Array
const b = Math.min(12, 2, 9, 5);
console.log(b);
// Output : 2

// Soal Mencari Nilai Tertinggi Dari Ketiga Array
const num1 = -40;
const num2 = 100;
const num3 = -10;

const result = Math.min(num1, num2, num3);
console.log(result);
// Output : -40