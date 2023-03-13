// Todo Operator
/* 

    * Operator dalam bahasa pemrograman sendiri adalah simbol yang memberi tahu interpreter untuk melakukan operasi seperti matematika, relasional, atau logika untuk memberikan hasil tertentu.

*/

// Todo Logical Operator
/*

    * Terdapat beberapa operator lain yang dapat kita gunakan untuk menetapkan logika yang lebih kompleks, yakni dengan logical operators. Dengan logical operator, kita dapat menggunakan kombinasi dari dua nilai boolean atau bahkan lebih dalam menetapkan logika.

    Operator   |               Fungsi
    ----------------------------------------------------------------------
    &&         |   Operator dan (and). Logika akan menghasilkan nilai true apabila semua 
                   kondisi terpenuhi (bernilai true).

    ||         |   Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah 
                   satu kondisi terpenuhi (bernilai true).
                   
    !          |   Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.
   
*/


// Contoh
let a = 10;
let b = 12;

// AND operator 
console.log(a < 15 && b > 10); // (true && true) -> true
console.log(a > 15 && b > 10); // (false && true) -> false


// OR operator 
console.log(a < 15 || b > 10); // (true || true) -> true
console.log(a > 15 || b > 10); // (false || true) -> true


// NOT operator 
console.log(!(a < 15)); // !(true) -> false
console.log(!(a < 15 && b > 10)); // !(true && true) -> !(true) -> false