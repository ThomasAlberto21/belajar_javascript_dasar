// Todo Default Values
/*

    * Ketika melakukan destructuring array, tetapi terdapat variabel yang posisinya tidak dapat terjangkau oleh array, maka variabel tersebut akan bernilai undefined

    * Sama seperti object, pada destructuring array kita juga dapat memberikan nilai default pada variabel yang tidak dapat terjangkau oleh array, sehingga nilai pada variabel tidak akan menjadi undefined.

*/



// Sebelum menambahkan default Values
const favorites = ["Seafood"];
const [myFood, herFood] = favorites
 
console.log(myFood);
console.log(herFood);
 
/* output:
Seafood
undefined
*/



// Sesudah menambahkan default values
const favorites2 = ["Seafood"];
 
const [myFood2, herFood2 = "Salad"] = favorites
 
console.log(myFood2);
console.log(herFood2);
 
/* output:
Seafood
Salad
*/