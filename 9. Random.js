/* Fungsi Math.random() mengembalikan bilangan floating-point, 
bilangan pseudo-acak antara 0 (inklusif) dan 1 (eksklusif). */

// Normal Random (Antara 0 - 1)
let a = Math.random();
console.log(a);
// Output : 0.030267236095870453 (Angka Bisa Berubah Karena Menggunakan Random)


// Dua Angka Random (Desimal)
function randomNumbers(min, max) {
    return Math.random() * (max - min) + min
}

var number = randomNumbers(0, 9); // Antara dari angka 0 - 9
console.log(number);
// Output : 1.5332480279411684 (Angka Bisa Berubah Karena Menggunakan Random)

var number = randomNumbers(10, 100); // Antara dari angka 10 - 100
console.log(number);
// Output : 29.994673244826156 (Angka Bisa Berubah Karena Menggunakan Random)


// Dua Angka Random (Angka Bukan Desimal)
function randomMyNumbers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

var myNumbers = randomMyNumbers(10, 25); // Antara dari angka 10 - 25
console.log(myNumbers);
// Output : 10 (Angka Bisa Berubah Karena Menggunakan Random)

var myNumbers = randomMyNumbers(100, 200); // Antara dari angka 100 - 200
console.log(myNumbers);
// Output : 181 (Angka Bisa Berubah Karena Menggunakan Random)


console.log("--- Exercises ---");

// Soal 1 (Angka 0 - 1)
let b = Math.random();
console.log(b);

// Soal 2 (Angka 0 - 10)
function soalDua(min, max) {
    return Math.random() * (max - min) + min
}
let outputNumberTwo = soalDua(0, 10);
console.log(outputNumberTwo);

// Soal 3 (Angka 20 - 30)
function soalTiga(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}
let outputNumberThree = soalTiga(20, 30);
console.log(outputNumberThree);

// Soal 4 (Angka -50 - 50)
function soalEmpat(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}
let outputNumberFour = soalEmpat(-50, 50);
console.log(outputNumberFour);

// Soal 5 (Angka Dadu 1 - 6)
function soalLima(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min
}
let outputNumberFive = soalLima(1, 6);
console.log(outputNumberFive);