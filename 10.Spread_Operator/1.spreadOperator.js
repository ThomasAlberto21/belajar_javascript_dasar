// Todo Spread Operator
/*

    * Sesuai namanya “spread”, fitur ini digunakan untuk menyebarkan nilai array atau lebih tepatnya iterable object menjadi beberapa elemen. Spread operator dituliskan dengan tiga titik (...)

*/

// Menampilkan data dan juga kurung siku ke dalam console (Tanpa Spread Operator)
const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];
console.log(favorites);

/* output
    [ 'Seafood', 'Salad', 'Nugget', 'Soup' ]
*/


// Hanya menampilkan data tanpa menampilkan kurung siku juga di dalam console (Menggunakan Spread Operator)
const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(...favorites2);

/* output
    Seafood Salad Nugget Soup
*/