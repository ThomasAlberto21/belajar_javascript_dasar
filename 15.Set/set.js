// Todo Set
/*

    * Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah data pada Set tidak berurutan dan juga tidak diindeks. Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi. 

    * Pada kode di bawah terdapat beberapa angka yang duplikat, yaitu angka 1 dan 4. Secara otomatis Set akan membuang angka yang sama, sehingga nilai yang tersimpan adalah {1, 4, 6 , 5}.

    * Fungsi add() hanya menerima satu argumen. Jika Anda memasukkan array, maka array tersebut akan dianggap sebagai satu elemen sendiri. Nilai yang duplikat akan diabaikan.

    * Ingat bahwa Set tidak memiliki urutan atau index, sehingga argumen yang dimasukkan ke dalam fungsi delete adalah nilai yang ingin dihapus, bukan index-nya.

*/

// Contoh 1
const numberSet = new Set([1, 4, 6, 4, 1, 5, 6]);
console.log(numberSet);



// Contoh 2 Menambahkan data ke array
const numberSet2 = new Set([1, 4, 6, 4, 1, 5, 6]);
numberSet2.add(10);
numberSet2.add(2);
numberSet2.add(7);

console.log(numberSet2);



// Contoh 3 Menghapus data
const numberSet3 = new Set([1, 4, 6, 4, 1, 5, 6]);
numberSet3.delete(10);
numberSet3.delete(2);
numberSet3.delete(7);

console.log(numberSet3);