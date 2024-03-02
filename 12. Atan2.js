// Metode atan2() membagi dua argumennya dan menghitung arctan (kebalikan dari garis singgung) dari hasilnya.
// Hasil pembagian koordinat y dan x.

// Normal atan2
let a = Math.atan2(4, 3);
console.log(a);
// Output : 0.92

let b = Math.atan2(5, 3);
console.log(b);
// Output : 1.03

let c = Math.atan2(0, 5);
console.log(c);
// Output : 0

// String atan2
let d = Math.atan2("Non-Angka");
console.log(d);
// Output : NaN

// Infinity atan2
// atan2() positif infinity
let num = Math.atan2(Infinity, 0);
console.log(num);   

// atan2() negatif infinity 
let num2 = Math.atan2(-Infinity, 0);
console.log(num2);    

// atan2() keduanya infinities
let num3 = Math.atan2(Infinity, -Infinity);
console.log(num3); 

// Output:
// 1.5707963267948966 (π/2)
// -1.5707963267948966 (-π/2)
// 2.356194490192345 (3*π/4)