// Todo Destructuring Object
/*

    * Pada contoh di atas tanda kurung kurawal merepresentasikan object yang akan didestrukturisasi. Di dalamnya terdapat firstName, lastName, dan age yang merupakan variabel untuk menyimpan nilai properti dari object profile. Kita juga perlu perhatikan penamaan variabelnya. Pastikan penamaannya sama seperti properti object-nya. Melalui nama variabel inilah nilai-nilai properti object akan dimasukkan secara otomatis. Sehingga variabel firstName akan berisikan nilai profile.firstName, lastName akan berisikan nilai profile.lastName, begitu juga dengan variabel age akan berisikan nilai profile.age.

*/





// Cara cepat
const profile = {
  firstName: 'John',
  lastName: 'Doe',
  age: 18,
};

const { firstName, lastName, age } = profile; // OBject Literal

console.log(firstName, lastName, age);

/* output:
  John Doe 18
*/
