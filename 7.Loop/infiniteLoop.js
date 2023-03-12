// Todo Loop
/*

    * Ketika menulis program komputer, akan ada situasi di mana kita perlu melakukan hal yang sama berkali-kali. Misalnya kita ingin menampilkan semua nama pengguna yang terdaftar di aplikasi atau sesederhana menampilkan angka 1 sampai 10. Tentunya tidak praktis jika kita menulis kode satu per satu  

*/




// Todo Infinite Loop
/*

    * Ketika menerapkan perulangan pada program, ada satu kondisi yang perlu kita hindari yaitu infinite loop. Infinite loop atau endless loop adalah kondisi di mana program kita stucked di dalam perulangan. Ia akan berjalan terus hingga menyebabkan crash pada aplikasi dan komputer kecuali ada intervensi secara eksternal, seperti mematikan aplikasi dan untuk menghentikan infinite loop kita bisa menggunakan increment atau decrement.

*/



// Contoh 1 (Menggunakan While)
let i = 1;

while (i <= 5) {
  console.log(i);
}



// Contoh 2 (Menggunakan For)
for (let i = 1; i <= 5; i = 1) {
  console.log(i);
}
