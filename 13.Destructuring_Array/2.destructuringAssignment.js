// Todo Destructuring Assigment
/*

    * Kita juga bisa melakukan destructuring assignment pada array. Namun, tidak seperti object, kita tidak perlu membungkusnya dengan tanda kurung.

    * Array destructuring assignment sangat berguna ketika kita hendak menukar nilai antara dua variabel. 

*/


// Contoh
const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
 
let myFood = "Ice Cream";
let herFood = "Noodles";
 
[myFood, herFood] = favorites;
 
console.log(myFood);
console.log(herFood);
 
/* output:
Seafood
Salad
*/





// Contoh 2 (Menukar Nilai Antara Dua Variabel)
let a = 1;
let b = 2;
 
console.log("Sebelum swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
[a, b] = [b, a] // menetapkan nilai a dengan nilai b dan nilai b dengan nilai a.
 
console.log("Setelah swap");
console.log("Nilai a: " + a);
console.log("Nilai b: " + b);
 
/* output
Sebelum swap
Nilai a: 1
Nilai b: 2
Setelah swap
Nilai a: 2
Nilai b: 1
*/