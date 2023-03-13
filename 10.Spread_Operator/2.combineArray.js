// Todo Spread Operator
/*

    * Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...)

    * Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru. Jika tidak menggunakan spread operator ini maka hasilnya akan seperti ini:

*/


// Tanpa Spread Operator 
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [favorites, others];
console.log(allFavorites);

/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/



// Menggunakan Spread Operator
const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
const others2 = ["Cake", "Pie", "Donut"];

const allFavorites2 = [...favorites2, ...others2];
console.log(allFavorites2);

/* output
    [ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/