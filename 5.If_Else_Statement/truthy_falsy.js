// Todo Truthy & Falsy
/*

    * Setiap nilai pada JavaScript pada dasarnya juga mewarisi sifat boolean. Nilai ini dikenal dengan truthy atau falsy. Nilai truthy berarti nilai yang ketika dievaluasi akan menghasilkan nilai true, begitu pula falsy bernilai false. Jadi manakah yang termasuk truthy dan falsy? Selain nilai boolean false, tipe data atau nilai yang dianggap falsy, antara lain:

    * Number 0
    * BigInt 0n
    * String kosong seperti “” atau ‘’
    * null
    * undefined
    * NaN, atau Not a Number

*/



// Contoh 1
let name = '';

if (name) {
  console.log(`Halo, ${name}`);
} else {
  console.log('Nama masih kosong');
}
