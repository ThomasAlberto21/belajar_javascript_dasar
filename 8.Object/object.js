// Todo Object
/*

    * Object adalah sebuah tipe data yang mampu menyimpan nilai dari beragam tipe data dan membentuk data yang lebih kompleks.

    * Object berisi pasangan key dan value yang juga dikenal dengan property. Key berperan mirip seperti nama variabel yang menyimpan sebuah nilai. Sementara, value berisi nilai dengan tipe data apa pun termasuk objek lain.

    * Key harus berupa string dan dituliskan sebelum titik dua (:), lalu diikuti dengan value-nya. Meskipun key merupakan string, kita tidak perlu menuliskan tanda petik kecuali ada karakter khusus seperti spasi. 

    * let object = {key1: "value1", key2: "value2", key3: "value3"}

*/

// Contoh
const user = {
  firstName: 'Thomas',
  lastName: 'Alberto',
  age: 19,
  isStudent: true,
  'Home World': 'Bumi',
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);
console.log(`Saya berasal dari ${user['Home World']}`);



// Contoh 2 (Memodifikasi Object)
const spaceship = {
  name: 'Millenium Falcon',
  manufacturer: 'Corellian Engineering Corporation',
  maxSpeed: 1200,
  color: 'Light gray',
};

spaceship['maxSpeed'] = 1300; // Mengubah nilai
spaceship.color = 'Glossy red'; // Mengubah nilai
spaceship.class = 'Light freighter'; // Menambahkan property karena property class tidak ada di object
spaceship = { name: 'New Millenium Falcon' }; // ! Error karena bukan mengubah nilai tetapi menginisialisasi ulang nilai

delete spaceship.manufacturer; // Menghapus property di dalam object

console.log(spaceship);
