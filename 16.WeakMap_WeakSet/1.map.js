// Todo Weak Map
/*

    * WeakMap merupakan varian dari Map yang mendukung garbage collection. Garbage collection adalah proses di mana interpreter JavaScript mengambil kembali memori yang tidak lagi “dapat dijangkau” dan tidak dapat digunakan oleh program [3]. Garbage collection di JavaScript dilakukan secara otomatis dan bukan menjadi urusan dari developer.

    * Yang dimaksud weak dalam WeakMap adalah referensi terhadap nilai yang disimpan. Apabila suatu nilai yang disimpan di WeakMap sudah tidak terjangkau atau tidak bisa lagi diakses, maka referensi ke memorinya akan dihapus.

    * Berikut ini adalah beberapa hal yang membedakan antara Map dan WeakMap:

    ? Key dari WeakMap harus berupa object atau array. Nilai primitif tidak bisa digunakan sebagai key karena tidak mendukung garbage collection.

    ? WeakMap memiliki method get(), set(), has(), dan delete(). Namun, WeakMap tidak termasuk kategori iterable sehingga tidak memiliki method keys(), values(), atau forEach().

    ? WeakMap juga tidak memiliki property size. Ini karena ukuran WeakMap dapat berubah karena proses garbage collection.

*/



// Contoh (Tanpa Menggunakan Weak Map)
const visitsCountMap = new Map(); // Menyimpan daftar user

function countUser(user) {
  let count = visitsCountMap.get(user) || 0;
  visitsCountMap.set(user, count + 1);
}

let jonas = { name: 'Jonas' };
countUser(jonas); // Menambahkan user "Jonas"

jonas = null; // Data object "Jonas" dihapus


// delay dibutuhkan untuk menunggu garbage collector bekerja
setTimeout(function () {
  console.log(visitsCountMap);
}, 5000); // setTimeout merupakan fungsi yang digunakan untuk menunda eksekusi kode yang ada di dalamnya hingga jangka waktu yang ditetapkan


/* output
Map(1) { { name: 'Jonas' } => 1 }
*/
