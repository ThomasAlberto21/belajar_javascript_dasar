// Todo Defalut Values
/*

    * Ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti dari objek, maka nilai dari variabel tersebut menjadi undefined.

    * Alternatifnya, kita bisa secara opsional mendefinisikan nilai default pada properti tertentu jika tidak ditemukan. Untuk melakukanya, tambahkan tanda assignment (=) setelah nama variabel dan tentukan nilai default-nya seperti ini:

*/



// Contoh 1
const profile = {
  firstName: 'John',
  lastName: 'Doe',
  age: 18,
};

const { firstName, age, isMale = true } = profile; // Menambahkan nilai default langsung

console.log(firstName);
console.log(age);
console.log(isMale);

/* output:
  John
  18
  undefined
*/
