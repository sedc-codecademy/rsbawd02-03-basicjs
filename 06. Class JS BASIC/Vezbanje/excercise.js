

// let duzina = prompt("Unesi duzinu niza");
// // let niz = [];
// let niz = new Array(duzina);

// function unosNiza() {
//   for (let i = 0; i < duzina; i++) {
//     niz[i] = prompt("Unesi element niza");
//     console.log(niz);
//   }
//   console.log("================")
// }

// function ispisNiz() {
//   for (let i = 0; i < duzina; i++) {
//     console.log(niz[i]);
//   }
//   console.log("================")
// }


// function paranBroj() {
//   for(let i = 0; i <= niz.length; i++) {
//       if(niz[i] % 2 === 0) {
//           console.log(niz[i])
//        }
//   }
//   console.log("================")
// }

// unosNiza();
// ispisNiz();
// paranBroj();


//bez funkcija
// let duzina = prompt("Unesi duzinu niza");
// let niz = new Array(duzina);

//   for (let i = 0; i < duzina; i++) {//popunjavanje niza
//     niz[i] = prompt("Unesi element niza");
//   }

//   for (let i = 0; i < duzina; i++) { //ispisivanje niza
//     console.log(niz[i]);
//   }


//   for(let i = 0; i <= niz.length; i++) {//ispisivanje parnih brojeva
//       if(niz[i] % 2 === 0) {
//           console.log(niz[i])
//        }
//   }

  //**************** */

  //2. zadatak

// function prostBroj(num) {
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//       console.log(`${num} nije prost broj.`);
//       return false;
//     }
//   }
//   console.log(`${num} je prost broj.`);
//   return true;
// }

// const checkPrime = prostBroj(18);

// // ************************
// function sumaNeparnih(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 !== 0) {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// const numbers = [2, 4, 6, 8, 10, 11, 13];
// const result = sumaNeparnih(numbers);
// console.log("Sum of Odd Numbers:", result);
// // ************************
// function isPalindrome(str) {
//   const cleanStr = str.toLowerCase().replace(/[^a-z]/g, '');
//   const reversedStr = cleanStr.split('').reverse().join('');
//   return cleanStr === reversedStr;
// }

// const word = "radar";
// const checkPalindrome = isPalindrome(word);
// console.log(`Is "${word}" a Palindrome?`, checkPalindrome); 

// // ************************

// // ************************

// // ************************


