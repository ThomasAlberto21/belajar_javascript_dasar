// Todo Defalut Values
/*

    * Ketika kita mendestruksikan objek dan menetapkan variabel dengan nama yang bukan merupakan properti dari objek, maka nilai dari variabel tersebut menjadi undefined.

    * Alternatifnya, kita bisa secara opsional mendefinisikan nilai default pada properti tertentu jika tidak ditemukan. Untuk melakukanya, tambahkan tanda assignment (=) setelah nama variabel dan tentukan nilai default-nya seperti ini:

*/

// Sebelum menambahkan default values
const profile = {
  firstName: "John",
  lastName: "Doe",
  age: 18
}
 
 
const { firstName, age, isMale } = profile;
 
console.log(firstName)
console.log(age)
console.log(isMale)
 
/* output:
John
18
undefined
*/





// Sesudah Menambahkan Default Values
const profile2 = {
  firstName: 'John',
  lastName: 'Doe',
  age: 18,
};

const { firstName2, age2, isMale2 = true } = profile; // Menambahkan nilai default langsung

console.log(firstName2);
console.log(age2);
console.log(isMale2);

/* output:
  John
  18
  undefined
*/
