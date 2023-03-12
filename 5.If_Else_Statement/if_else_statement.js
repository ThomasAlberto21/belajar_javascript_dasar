// Todo If / Else Statement
/*

    * IF digunakan untuk menentukan kondisi pertama, dan akan di eksekusi jika kondisinya benar. ELSE IF digunakan untuk menentukan kondisi kedua, apabila setelah pengujian pada kondisi yang pertama salah, dan akan di eksekusi jika kondisinya benar , dan ELSE akan dieksekusi jika kedua statement IF dan ELSE IF bernilai false.

*/



// Contoh 1 (Hanya menggunakan if)
const isRaining = true;
console.log('Persiapan sebelum berangkat kegiatan.');

if (isRaining) {
  console.log('Hari ini hujan. Bawa payung.');
}
console.log('Berangkat kegiatan.');




// Contoh 2 (Menggunakan if else)
let x = 80;

if (x > 70) {
  console.log("Nilai lebih dari 70");
} else {
  console.log('Nilai kurang dari 70');
}


// Contoh 3 (Menggunakan if else)
let language = "French";

if(language === "English") {
    greeting = "Good Morning!";
} else if(language === "French") {
    greeting = "Bonjour!"
} else if(language === "Japanese") {
    greeting = "Ohayou Gozaimasu!"
}

console.log(greeting);
