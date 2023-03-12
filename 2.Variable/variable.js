// Todo Variable
/* 
    * Pada JavaScript setidaknya ada tiga cara untuk mendeklarasikan sebuah variabel, yaitu menggunakan keyword var, let, dan const. Pada versi ECMAScript 2015 (ES6) dikenalkan deklarasi variabel dengan let dan const untuk menggantikan var yang dinilai kontroversial dan rawan menimbulkan bug. 
*/


// Todo Expression Dan Statement
/* 
    * Kode untuk mendeklarasikan variabel(var , let , const) dikenal dengan declaration statement.
    * Kode untuk menginisialisasikan nilai ke dalam sebuah variabel dengan tanda sama dengan (=) ini disebut dengan assignment expression. 
    * Sedangkan Statement atau pernyataan adalah suatu instruksi yang di tulis dalam program untuk menjalankan suatu program. 
*/



// Todo Berikut beberapa aturan dalam penamaan variabel
/*
    * Harus dimulai dengan huruf atau underscore (_).
    * Dapat terdiri dari huruf, angka, dan underscore (_) dengan berbagai kombinasi.
    * Tidak boleh mengandung spasi (whitespace). Jika penamaan variabel lebih dari dua kata,    tuliskan secara camelCase. Contoh firstName, lastName, catName, dll.
    * Tidak boleh mengandung karakter spesial (! . , / \ + * = dll.)
*/


// ==================== let ==========================

// Cara lama mendeklarasikan variable
let firstName; 
firstName = 'Thomas';
console.log(firstName); // Menampilkan Data Ke console


// Cara cepat mendeklarasikan variable 2
let lastName = 'Alberto';
console.log(lastName); // Menampilkan Data Ke console




// ! Error karena let lastName adalah sebuah statement(aksi) untuk deklarasi variabel. Statement tidak bisa berada di posisi expression.
// let fullName = let lastName;

// *  Kode di bawah merupakan expression, sehingga kode ini tidak error.
// let fullName = (lastName = "Skywalker");

// * "Luke" + "Skywalker" juga merupakan expression, sehingga kode ini tidak error.
// let fullName = "Luke" + "Skywalker";








// ==================== const ==========================

// Todo Const
/*
    * Const merupakan kependekan dari constant. Artinya, kita akan mendeklarasikan sebuah variabel dengan const ketika ingin variabel bernilai konstan dan tidak bisa diubah setelah diinisialisasi nilainya. Bayangkan variabel bernilai const sebagai sebuah kotak yang ditutup dan disegel setelah diisi, sehingga nilainya tidak bisa diubah lagi.
*/


const z = 100;
console.log(z);
z = 200; // ! TypeError: Assignment to constant variable.
console.log(z)
