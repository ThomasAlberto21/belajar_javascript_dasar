/*

    * 1. Buatlah variabel dengan nama restaurant yang bertipe object dengan ketentuan berikut:
    *       - Memiliki properti bernama "name"
    *           - Bertipe data string
    *               - Bernilai apa pun, asalkan tidak string kosong atau null.
    *       - Memiliki properti bernama "city"
    *           - Bertipe data string
    *               - Bernilai apa pun, asalkan tidak string kosong atau null.
    *       - Memiliki properti "favorite drink"
    *           - Bertipe data string
    *               - Bernilai apa pun, asalkan tidak string kosong atau null.
    *       - Memiliki properti "favorite food"
    *           - Bertipe data string
    *               - Bernilai apa pun, asalkan tidak string kosong atau null.
    *       - Memiliki properti "isVegan"
    *           - Bertipe data boolean
    *               - Bernilai boolean apa pun.

    * 2. Pangil variabel bernama name dari object restaurant.

    * 3. panggil variabel bernama favoriteDrink dari object restaurant.

 */



const restaurant = {
  name: 'Thomas Restaurant',
  city: 'Pontianak City',
  'favorite Drink': 'Teh Es',
  'favorite food': 'Nasi Goreng',
  isVegan: false,
};


console.log(restaurant);
console.log(restaurant.name);
console.log(restaurant["favorite Drink"]);