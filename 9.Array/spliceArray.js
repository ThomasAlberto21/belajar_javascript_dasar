// Todo Array
/*

    * Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel.

    * Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses menggunakan index. Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan posisi nilai yang ingin diakses.

*/


// Menghapus Data index tanpa membiarkan posisi yang dihapus kosong
const myArray = ['Cokelat', 42.5, 22, true, 'Programming'];

myArray.splice(2, 1); // Menghapus dari index 2 sebanyak 1 elemen
console.log(myArray);
/* output
    [ 'Cokelat', 42.5, true, 'Programming' ]
*/