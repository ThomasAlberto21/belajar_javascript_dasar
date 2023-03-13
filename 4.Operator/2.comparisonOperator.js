// Todo Operator
/* 

    * Operator dalam bahasa pemrograman sendiri adalah simbol yang memberi tahu interpreter untuk melakukan operasi seperti matematika, relasional, atau logika untuk memberikan hasil tertentu.

*/



// Todo Comparison Operator
/* 

    * Comparison operator atau operasi perbandingan adalah sebuah operator yang bertujuan untuk membandingkan dua buah nilai, apakah suatu nilai sama dengan nilai lain, atau lebih besar dari nilai lain, dan sebagainya.

    Operator   |               Fungsi
    ----------------------------------------------------------------------
    ==         |   Membandingkan kedua nilai apakah sama (tidak identik).  
    !=         |   Membandingkan kedua nilai apakah tidak sama (tidak identik).
    ===        |   Membandingkan kedua nilai apakah identik.
    !==        |   Membandingkan kedua nilai apakah tidak identik.
    >          |   Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
    >=         |   Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.   
    <          |   Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
    <=         |   Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.

*/


// Contoh 1 (Menggunakan operator lebih dari dan kurang dari)
let a = 10;
let b = 12;

console.log(a < b); // True
console.log(a > b); // False




// Contoh 2 (Menggunakan operator sama(==) dan identik(===) )
const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda