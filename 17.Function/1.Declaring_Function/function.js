// Todo Declaring Function
/*

    * Function merupakan fungsi yang digunakan untuk menghasilkan output berdasarkan input tertentu.

    * Namun, fungsi juga bisa digunakan sebagai blok kode atau prosedur yang dapat digunakan secara berulang. Dalam arti lain, kita dapat berpikir bahwa function merupakan sebuah variabel yang berisi blok logika. Blok logika tersebut akan dieksekusi ketika variabelnya dipanggil.
    
    * Semua fungsi memiliki struktur yang sama. Fungsi dideklarasikan dengan keyword function dan nama fungsinya. Nama fungsi selalu diikuti dengan tanda kurung (parentheses) tanpa spasi, lalu terdapat sepasang kurung kurawal yang berisi logika dari fungsi tersebut.

    * Terkadang di dalam tanda kurung kita membutuhkan sebuah informasi tambahan yang disebut dengan parameter. Parameter merupakan data yang digunakan pada fungsi untuk diproses di dalamnya.

    * Parameter merupakan variabel yang didefinisikan sebagai inputan dari sebuah fungsi. 

*/

// Contoh 1
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 3));
/* output
  12
*/



// Contoh 2
function greeting() {
  console.log('Good Morning!');
}

greeting();

/* output
  Good Morning!
*/




// Contoh 3
function greeting(name, language) {
  if (language === 'English') {
    console.log(`Good Morning ${name}`);
  } else if (language === 'Indonesia') {
    console.log(`Selamat Pagi ${name}`);
  } else if (language === 'French') {
    console.log(`Bonjour ${name}`);
  }
}

greeting('Thomas', 'English');

/* output
  Good Morning Thomas!
*/


// Todo Expression Function
/*

    * expression adalah kode atau instruksi yang mengembalikan nilai, sehingga expression function bisa disimpan dalam sebuah variabel.

    * Pada expression function umumnya kita tidak perlu menuliskan nama fungsinya. Fungsi yang tidak bernama juga dikenal dengan anonymous function.

*/


// Contoh Expression Function
const greeting2 = function (name, language) {
  if (language === 'English') {
    return 'Good Morning ' + name + '!';
  } else if (language === 'French') {
    return 'Bonjour ' + name + '!';
  } else {
    return 'Selamat Pagi ' + name + '!';
  }
};

console.log(greeting2('Thomas', 'English'));

/* output
  Good Morning Thomas!
*/
