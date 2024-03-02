/* Fungsi Math.round() mengembalikan angka yang dibulatkan ke bilangan bulat terdekat. 
Artinya, 3,87 dibulatkan menjadi 4 dan 3,45 dibulatkan menjadi 3. */

// Round Lebih Menargetkan Yang Terdekat

// Contoh Number Positif Ke Angka Yang Lebih Besar
let a = Math.round(3.68);
console.log(a);
// Outptut : 4

// Contoh Number Positif Ke Angka Yang Lebih Kecil
let b = Math.round(3.33);
console.log(b);
// Output : 3

// Contoh Number Negatif Ke Angka Yang Lebih Besar
let c = Math.round(-6.7);
console.log(c);
// Output : -7

// Contoh Number Negatif Ke Angka Yang Lebih Kecil
let d = Math.round(-9.1);
console.log(d);
// Output : -9