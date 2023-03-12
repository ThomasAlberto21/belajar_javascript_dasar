// Todo Switch Case Statement
/*

    * SWITCH statement bisa menjadi alternatif percabangan IF yang memiliki kondisi sederhana Sama seperti IF, SWITCH merupakan percabangan yang digunkan untuk melakukan tindakan yang berbeda berdasarkan kondisi yang berbeda, Tapi, dalam kondisi tertentu switch bisa menjadi pilihan yang tepat, kode yang kita tulis bisa menjadi lebih mudah dibaca dan to the point.
 
*/

// Todo Cara Penggunaan Switch Case
/* 

    * Tanda kurung setelah keyword SWITCH berisi variabel atau expression yang akan dievaluasi. 

    * Kemudian untuk setiap kondisi yang mungkin terjadi, kita masukkan keyword CASE diikuti dengan nilai yang valid. Jika kondisi pada case sama dengan variabel pada switch, maka blok kode setelah titik dua (:) akan dijalankan. 

    * Keyword BREAK digunakan untuk keluar dari proses switch atau menghentikan program. 

    * Terdapat satu case bernama default yang memiliki fungsi yang sama dengan keyword else pada control flow if-else. Jika tidak ada nilai yang sama dengan variabel pada switch, maka blok kode ini akan dijalankan.

*/




// Contoh
let language = 'French';

switch (language) {
  case 'English':
    greeting = 'Good Morning!';
    break; // Break digunakan untuk menghentikan program jika program bernilai true
  case 'French':
    greeting = 'Bonjour!';
    break; // Break digunakan untuk menghentikan program jika program bernilai true
  case 'Japanese':
    greeting = 'Ohayou Gozaimasu!';
    break; // Break digunakan untuk menghentikan program jika program bernilai true
  default:
    greeting = 'Selamat Pagi!';
}

console.log(greeting);
