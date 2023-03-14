// Todo Destrucing Object Array
/*

    * Apa sebenarnya destructuring object dan array itu? Destructuring dalam JavaScript merupakan sintaksis yang dapat mengeluarkan nilai dari array atau properties dari sebuah object ke dalam satuan yang lebih kecil.

*/



// Cara rumit
const profile = {
  firstName: 'John',
  lastName: 'Doe',
  age: 18,
};

const firstName = profile.firstName;
const lastName = profile.lastName;
const age = profile.age;

console.log(firstName, lastName, age);

/* output:
  John Doe 18
*/
