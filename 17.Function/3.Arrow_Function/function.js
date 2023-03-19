// Todo Arrow Function
/*

    * Arrow function mirip seperti regular function secara perilaku, tetapi berbeda dalam penulisannya. Sesuai namanya, fungsi didefinisikan menggunakan tanda panah atau fat arrow ( => ). Tentunya penulisan arrow function ini akan lebih singkat.

    * Selain perbedaan sintaksis, terdapat perbedaan perilaku antara arrow function dan regular function. Regular function dapat berupa function declaration dan function expression. Namun, arrow function hanya berupa expression function saja. Itu sebabnya arrow function memiliki nama lengkap “arrow function expression”.

*/



// Contoh 1
const sayName = (name) => {
  console.log(`Nama saya ${name}`);
};

sayName('Leia');

/* output
  Nama saya Leia
*/




// Contoh 2 (Jika tidak ada parameter)
const sayHello = () => {
  console.log('Selamat pagi semuanya!');
};

sayHello();

/* output
  Selamat pagi semuanya!
*/




// Contoh 3 (jika body dari function hanya satu baris kode saja)
const sayName2 = name => console.log(`Nama saya ${name}`);
sayName2("Leia");

const sayHello2 = () => console.log("Selamat pagi semuanya!");
sayHello2();

/* output
  Nama saya Leia
  Selamat pagi semuanya!
*/




// Contoh 4 (Ketika sebuah fungsi perlu mengembalikan nilai)
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));

/* output
12
 */