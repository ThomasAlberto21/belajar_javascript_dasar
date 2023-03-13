// Todo Array
/*

    * Array merupakan tipe data yang dapat mengelompokkan lebih dari satu nilai dan menempatkannya dalam satu variabel.

    * Perbedaan array dengan object adalah data pada array disusun secara berurutan dan diakses menggunakan index. Untuk mengakses nilai di dalam array, kita gunakan tanda kurung siku [] yang di dalamnya berisi angka yang merupakan posisi nilai yang ingin diakses.

*/


// Contoh 1 (Cara mengakses index di dalam sebuah array)
let myArray = ['Cokelat', 42.5, 22, true, 'Programming'];
console.log(myArray[1]);
/* output:
42.5
*/



// Contoh 2 (Cara mengakses index di dalam sebuah array)
let myArray2 = ['Cokelat', 42.5, 22, true, 'Programming'];
console.log(myArray2[0]);
console.log(myArray2[1]);
console.log(myArray2[2]);
console.log(myArray2[3]);
console.log(myArray2[4]);
console.log(myArray2[5]);
console.log('Panjang nilai myArray adalah ' + myArray2.length + '.');
/* output:
Cokelat
42.5
22
true
Programming
undefined (karena index 5 tidak ada di dalam array)
Panjang nilai myArray adalah 5.
*/
