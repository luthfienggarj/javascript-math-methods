// Metode sqrt() menghitung akar kuadrat dari angka tertentu dan mengembalikannya.

// Angka Positif
let a = Math.sqrt(16);
console.log(a);
// Output : 4

// Angka Negatif
let b = Math.sqrt(-30);
console.log(b);
// Output : NaN

// Angka Desimal
let c = Math.sqrt(122.12);
console.log(c);
// Output : 11.05

// Angka String
let d = Math.sqrt("80");
console.log(d);
// Output : 8.94

// String
let e = Math.sqrt("Bukan Angka");
console.log(e);
// Output : NaN

// Infinity Positif
let f = Math.sqrt(Infinity);
console.log(f);
// Output : Infinity

// Infinity Negatif
let g = Math.sqrt(-Infinity);
console.log(g);
// Output : NaN


// API Numbers Sqrt
function Fetching() {
    fetch("https://api.mockaroo.com/api/5a5ff980?count=2&key=8d282330")
        .then(response => response.json())
        .then(data => {

            // Map Data
            const mappingData = data.map(item => {
                return item
            });
            console.log(mappingData);
        })
        .catch(error => { console.log("Data Tidak Berhasil Ditarik"), error })
}
Fetching();