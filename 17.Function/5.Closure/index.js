// Todo Closure
/*

    * Sebelumnya kita telah tahu bahwa fungsi dapat didefinisikan dalam lingkup global atau di dalam fungsi lain. Suatu fungsi yang dapat mengakses variabel di dalam lexical scope-nya disebut dengan closure.

    * Lexical scope berarti pada sebuah fungsi bersarang, fungsi yang berada di dalam memiliki akses ke variabel parent function nya.

    * Fungsi init() memiliki variabel lokal name dan fungsi greet(). Fungsi greet() adalah inner function yang didefinisikan di dalam init() dan hanya bisa diakses dari dalam fungsi init(). Perhatikan bahwa fungsi greet() tidak memiliki variabel lokal. Namun, karena inner function memiliki akses ke variabel di parent function-nya, sehingga greet() dapat mengakses variabel name. Itulah yang dimaksud dengan lexical scope.
*/

// Contoh 1 (Lexical Scope)
function init() {
  const name = 'Obi Wan'; // Variabel lokal di dalam scope fungsi init

  function greet() {
    // Inner function, merupakan contoh closure
    console.log(`Halo, ${name}`); // Memanggil variabel yang dideklarasikan di parent function
  }

  greet(); // Fungsi greet hanya bisa diakses di dalan parent function nya
}

init();

/* output
  Halo, Obi Wan
*/





// Contoh 2
/*
    Kode di bawah akan menghasilkan output yang sama seperti yang di atas. Perbedaannya adalah fungsi greet() dikembalikan (return) dari outer function-nya sebelum dieksekusi. Karena variabel name berada dalam scope init(), maka umumnya variabel tersebut akan hilang atau dihapus ketika fungsinya selesai dijalankan. Namun, pada kasus di bawah fungsi greet() yang diakses melalui fungsi MyFunction() masih memiliki referensi atau akses ke variabel name. Variabel pada mekanisme di bawah telah tertutup (close covered), yang berarti variabel tersebut berada di dalam closure.
*/
function init() {
  const name = 'Obi Wan';

  function greet() {
    console.log(`Halo, ${name}`);
  }

  return greet;
}

const myFunction = init();
myFunction();

/* output
  Halo, Obi Wan
*/






// Closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private. Seperti inilah contoh program counter yang dibuat dengan closure:

const add = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
};

const addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());

/* output
  1
  2
  3
*/
