// Todo Array
/*

    * Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel.

    * Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses menggunakan index. Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan posisi nilai yang ingin diakses.

*/


// menambahkan data dan mengeluarkan data di elemen pertama
const myArray = ['Cokelat', 42.5, 22, true, 'Programming'];

myArray.shift(); // Fungsi shift  digunakan untuk mengeluarkan elemen pertama dari array
myArray.unshift('Apple'); // Fungsi unshift digunakan untuk menambahkan elemen di awal array.
console.log(myArray);
/* output
    [ 'Apple', 42.5, 22, true, 'Programming' ]
*/