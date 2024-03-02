/* Properti data statis Math.PI mewakili rasio keliling lingkaran terhadap diameternya, kira-kira 3,14159. */

// Contoh PI
let a = 2 * Math.PI * 10;
console.log(a);
// Output : 62.8

// Menghitung Sin
let b = 45 * Math.PI / 180
let resB = Math.sin(b);
console.log(resB);
// Output : 0.707

// Soal 1 (Menghitung Keliling Lingkaran, r=5)
let kll = 2 * Math.PI * 5;
console.log(kll);
// Output : 31.4

// Soal 2 (Menghitung Jari-Jari Lingkaran, keliling=20)
let jari = 20 / (2 * Math.PI)
console.log(jari);
// Output : 3.183

// Soal 3 (Menghitung Keliling Lingkaran, jari-jari=8)
let keliling = Math.PI * 8 * 8
console.log(keliling);
// Output : 201

// Soal 4 (Menghitung Volume Bola. r=10)
let vol = 4/3 * Math.PI * Math.pow(10, 3);
console.log(vol);
// Output : 4188

// Soal 5 (Menghitung Jari-Jari Lingkaran, jari-jari=50)
let jariJari = Math.PI / 50
console.log(jariJari);