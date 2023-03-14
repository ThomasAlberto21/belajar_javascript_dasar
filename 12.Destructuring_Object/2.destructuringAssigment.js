// Todo Destructuring Assignment
/*

    * Pada contoh sebelumnya, kita telah melakukan destructuring object pada deklarasi variabel. Namun, pada kasus tertentu mungkin kita perlu melakukannya pada variabel yang sudah dideklarasikan.

    * Saat melakukan destructuring assignment, kita perlu menuliskan destructuring object di dalam tanda kurung. Jika tidak menuliskan tanda kurung, tanda kurung kurawal akan membuat JavaScript mengira kita membuat block statement, sementara block statement tidak bisa berada pada sisi kiri assignment.

*/

const profile = {
  firstName: 'John',
  lastName: 'Doe',
  age: 18,
};

let firstName = 'Dimas';
let age = 20;



// ! Error karena JavaScript mengira kita membuat block statement sementara itu block statement tidak bisa berada pada sisi kiri assignment

// { firstName, age } = profile;



// menginisialisasi nilai baru melalui destructuring object
({ firstName, age } = profile);

console.log(firstName);
console.log(age);



/* output:
  John
  18
*/
