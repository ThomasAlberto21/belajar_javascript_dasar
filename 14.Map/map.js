// Todo Map
/*

    * Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object. Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, dibandingkan Object yang hanya mengizinkan key bertipe String atau Symbol.

    * Array pertama (yang berada di luar) berfungsi untuk menyimpan masing-masing elemen atau pasangan key-value dari Map. Kemudian array di dalamnya, memiliki dua elemen, di mana elemen pertama adalah key dan elemen keduanya merupakan value.

    * Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().

*/

// Contoh
const myMap = new Map([
  ['1', 'a String key'],
  [1, 'a number key'],
  [true, true],
]);

console.log(myMap);

/* output
Map(3) { '1' => 'a String key', 1 => 'a number key', true => true }
*/

// Contoh 2
const capital = new Map([
  ['Jakarta', 'Indonesia'],
  ['New Delhi', 'India'],
  ['Tokyo', 'Japan'],
]);

console.log(capital.size); // 3
console.log(capital.get('Tokyo')); // Japan
capital.set('London', 'England'); // Menambahkan data baru
console.log(capital.size); // 4
console.log(capital.get("New Delhi")); // india



/*

    * Meskipun kita bisa menetapkan dan mendapatkan data pada map seperti ini Namun, kode di bawah bukanlah cara yang sesuai untuk mengoperasikan Map. Ketika kita menetapkan nilai map seperti di bawah, data akan disimpan sebagai generic object. Ini akan mengakibatkan data tidak tersimpan dalam Map query dan tidak bisa menggunakan fitur dari Map seperti .has atau .delete. Jadi, pastikan untuk menggunakan metode .set() dan .get() untuk Map.

*/


// Contoh 2
const wrongMap = new Map();
wrongMap["My Key"] = "My Value";

console.log(wrongMap["My Key"]);
console.log(wrongMap.has("My Key"));
console.log(wrongMap.delete("My Key"));
