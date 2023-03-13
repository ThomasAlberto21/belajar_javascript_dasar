// Todo Array
/*

    * Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel.

    * Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses menggunakan index. Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan posisi nilai yang ingin diakses.

*/



// Menghapus data di dalam array (keyword delete hanya menghapus data pada index yang ditentukan lalu membiarkan posisi tersebut kosong)
const myArray = ['Cokelat', 42.5, 22, true, 'Programming'];

delete myArray[1]; // Fungsi delete digunakan untuk menghapus data
console.log(myArray);
/* output
    [ 'Cokelat', <1 empty item>, 22, true, 'Programming' ]
*/