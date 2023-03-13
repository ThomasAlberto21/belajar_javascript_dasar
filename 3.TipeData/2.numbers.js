// Todo Tipe Data
/*

    * Pada materi sebelumnya kita telah belajar tentang variabel untuk menyimpan nilai. Nilai yang kita tetapkan pada variabel pasti memiliki tipe data. Tipe data merupakan pengklasifikasian data berdasarkan jenisnya.

*/




// Todo Numbers
/* 

    * Nilai dari tipe data number adalah angka. Variabel bertipe data number dituliskan seperti angka pada umumnya
    * Pada tipe data number, kita juga dapat melakukan perhitungan aritmatika seperti penjumlahan, pengurangan, perkalian, dsb. Berikut operator yang dapat kita gunakan dalam perhitungan aritmatika pada tipe data number:
    
    Operator           |         Fungsi
    ----------------------------------------------           
    +                  |         Penjumlahan
    -                  |         Pengurangan
    /                  |         Pembagian
    *                  |         Perkalian
    %                  |         Sisa Hasil Bagi
    **                 |         Perpangkatan

*/

let x = 10;
console.log(typeof x); // Fungsi typeof() digunakan untuk memastikan tipe data pada variabel dengan mengembalikan tipe data tersebut dalam bentuk teks.

let y = 17.25;
console.log(typeof y); // Fungsi typeof() digunakan untuk memastikan tipe data pada variabel dengan mengembalikan tipe data tersebut dalam bentuk teks.

let a = 3;
let b = 3;

console.log(a + b); // Hasilnya adalah 6
console.log(a - b); // Hasilnya adalah 0
console.log(a * b); // Hasilnya adalah 9
console.log(a / b); // Hasilnya adalah 1
console.log(a % b); // Hasilnya adalah 0
console.log(a ** b); // Hasilnya adalah 27





// Todo Increment Dan Dencrement
/*

    * Pada operator aritmatika juga terdapat operator increment (++) dan decrement (--). Operator increment dan decrement digunakan untuk menambahkan atau mengurangi nilai 1 pada nilai variabel yang ada sekarang.  
    * Operator ini dapat dituliskan sebelum atau sesudah variabel, tetapi hal tersebut bukan berarti sama. Berikut ketentuannya : 

        * Jika dituliskan setelah variabel (x++), expression akan menghasilkan nilai variabel sebelum ditingkatkan nilainya.

        * Jika dituliskan sebelum variabel (++x), expression akan menghasilkan nilai variabel setelah ditingkatkan nilainya.

*/

// Increment
let postfix = 5;
console.log(postfix++); // Ditampilkan ke console terlebih dahulu dan setelah itu dilakukan increment (Output : 5)
console.log(postfix); // Output : 6

let prefix = 5;
console.log(++prefix); // Dilakukan Increment terlebih dahulu dan setelah itu nilai akan ditampilkan ke console (Output : 6)






// Decrement
let postfix2 = 5;
console.log(postfix2--); // Ditampilkan ke console terlebih dahulu dan setelah itu dilakukan Decrement (Output : 5)
console.log(postfix2); // Output : 4

let prefix2 = 5;
console.log(--prefix2); // Dilakukan Decrement terlebih dahulu dan setelah itu nilai akan ditampilkan ke console (Output : 4)
