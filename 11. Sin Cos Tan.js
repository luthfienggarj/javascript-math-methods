// Metode sin() menghitung sinus trigonometri dari sudut tertentu dan mengembalikannya.
// Metode cos() menghitung cos trigonometri dari sudut tertentu dan mengembalikannya.
// Metode tan() menghitung tan trigonometri dari sudut tertentu dan mengembalikannya.

// Rumus Dasar
// Sudut * PI / 180
// Berlaku untuk Sin Cos & Tan. (Berapapun Sudutnya tetap gunakan 180)

/* <--- Sin ---> */

// Angka Positif
var sin1 = Math.sin(1);
console.log(sin1);
// Output : 0.8414709848078965

// Angka Negatif
var sin2 = Math.sin(-9);
console.log(sin2);
// Output : -0.4121184852417566

// Angka Constants (PI)
var sin3 = Math.sin(Math.PI);
console.log(sin3);
// Output : 1.2246467


/* <--- Cos ---> */

// Angka Positif
var cos1 = Math.cos(1);
console.log(cos1);
// Output : 0.5403023

// Angka Negatif
var cos2 = Math.cos(-9);
console.log(cos2);
// Output : -0.9111

// Angka Constants (PI)
var cos3 = Math.cos(Math.PI);
console.log(cos3);
// Output : -1


/* <--- Tan ---> */

// Angka Positif
var tan1 = Math.tan(1);
console.log(tan1);
// Output : 1.557407

// Angka Negatif
var tan2 = Math.tan(-9);
console.log(tan2);
// Output : 0.452315

// Angka Constants (PI)
var tan3 = Math.tan(Math.PI);
console.log(tan3);
// Output : -1.2246467


console.log("<--- Exercises --->");

// Soal 1 (Menghitung Sin 30 Derajat)
var a = 30 * Math.PI / 180;
var resA = Math.sin(a);
console.log(resA);
// Output : 0.5

// Soal 2 (Menghitung Tan 45 Derajat)
var b = 45 * Math.PI / 180;
var resB = Math.tan(b);
console.log(resB);
// Output : 0.7

// Soal 3 (Sin, Sisi Tegak 3 dan Panjang Sisi Miring 5)
var c = 3 / 5;
var resC = Math.asin(c);
console.log(resC);

// Soal 4 (Tan 60 derajat dengan panjang sisi tegak 4)
var d = Math.tan(60 * Math.PI / 180 );
var resD = 4 * d;
console.log(resD);

// Soal 5 (Tan Sudut 45 dan Sisi Miring 10)
var e = Math.tan(45 * Math.PI / 180);
var resE = 10 * e;
console.log(resE);