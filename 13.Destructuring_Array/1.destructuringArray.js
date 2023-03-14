// Todo Destructuring Array
/*

    * Destructuring array serupa dengan destructuring object. Object menggunakan tanda kurung kurawal { } sedangkan array menggunakan tanda kurung siku [ ]. Perbedaan lainnya adalah destructuring array bekerja berdasarkan posisi daripada penamaan propertinya. 

*/



// Contoh
const favorites = ['Seafood', 'Salad', 'Nugget', 'Soup'];

const [firstFood, secondFood, thirdFood, fourthFood] = favorites;

console.log(firstFood);
console.log(secondFood);
console.log(thirdFood);
console.log(fourthFood);

/* output:
Seafood
Salad
Nugget
Soup
*/




// Contoh 2 (Jika ingin memilih nilai pada index tertentu untuk destrukturisasi pada array)
const favorites2 = ["Seafood", "Salad", "Nugget", "Soup"];
 
const [, , thirdFood2 ] = favorites;
 
console.log(thirdFood2);
 
/* output:
Nugget
*/
