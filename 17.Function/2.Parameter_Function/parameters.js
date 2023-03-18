// Todo Function Parameter
/*

    * Parameter merupakan variabel yang didefinisikan sebagai inputan dari sebuah fungsi.
    * Argument merupakan nilai atau expression yang dimasukkan ke dalam fungsi.

*/

// Jika parameter dari fungsi adalah sebuah object, kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya.
const user = {
  id: 1,
  firstName: 'Thomas',
  lastName: 'Alberto',
};

function fullName({ firstName, lastName }) {
  console.log(`Hello ${firstName} ${lastName}`);
}

fullName(user);

/* Output
Hello Thomas Alberto
*/




