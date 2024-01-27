// let days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];

// let daysCounter = 0;
// while (daysCounter < days.length) {
// console.log(`Today is` + days[daysCounter]);
// // console.log(`Today is ${days[daysCounter]}`);
// daysCounter++;
// }

// const nizZaProveru = [2, 4, 1, 5, 2, 10, 7, 9];
// const duzinaNiza = nizZaProveru.length; //duzina niza

// console.log(nizZaProveru[2]);

// function naveciBrojFunkcija(nizZaProveru) {

//   let brojac = 0; //pomocna promenljiva za povecavanje indexa tj pozicije u nizu
//   let najveci = 0; //pomocna promenljiva za cuvanje najveceg broja

//   while (brojac < duzinaNiza) {
    
//     if (nizZaProveru[brojac] > najveci) {
//       najveci = nizZaProveru[brojac];

//     }
//     brojac++;
//   }
//   return najveci;
// }
// const najveciBroj = naveciBrojFunkcija(nizZaProveru);
// //********************** */
// console.log(
//   Math.max(...nizZaProveru)
// )

// console.log(Math.max(...nizStringova));

// let nizStringova = [ 'Danas', 'je', 'bio', 'lep', 'dan', '!' ];
// let brojacStringa = 0;
// function StringoviFunkcija(nizStringova) {

//   while (brojacStringa < nizStringova.length) {
//     console.log(nizStringova[brojacStringa]);
//     brojacStringa++;
//   }
// }

// StringoviFunkcija(nizStringova);
//************************* */
//let broj = 123456
//napisi zadatak uz pomocu funkcije koja ce kao argument da primi broj, smesti svaku cifru u niz i ispisati taj niz
//********************************** */

// DO WHILE (Practically never used)
// The code in the block will run at least once
// let iResult = "";
// let iCounter = 0;

// do {
//   iResult += `${iCounter}`;
//   iCounter++;
// } while (iCounter > 0 && iCounter < 5);
// console.log(iResult);

// let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// 	for (let i=0; i < days.length; i++) {    
// 	console.log(days[i] + ', '); 
// 	}

  // let example = ['first','second','third','last']; 
  // for (let j = example.length ; j > 0; j--) {    
  //   console.log(example[j-1]); 
  // }

  // const authors = [
  //   "Joe Abercrombie",
  //   "J.R.R. Tolkien",
  //   "G.R.R. Martin",
  //   "Brandon Sanderson",
  //   "Ursula K. Le Guin",
  // ];
  // for (let index = 0; index < authors.length; index++) {
  //   authors[index] += ` Author:[${index}]`;
  // }
  // console.log(authors);

  // function multiplyByTen(arrayToMultiply) {
  //   const resultArray = [];
  //   for (let index = 0; index < arrayToMultiply.length; index++) {
  //     const newVal = (arrayToMultiply[index] *= 10);
  //     resultArray.push(newVal);
  //   }
  //   return resultArray;
  // }
  // const multiplied = multiplyByTen([1, 2, 3, 4]);
  // console.log(multiplied);

  // FOR OF LOOP
// let names = ["Bojan", "Ivan", "Dalibor", "Anita", "Marija", "Tosho"];
// let arrayOne = [];
// let arrayTwo = [];
// for (let i = 0; i < names.length; i++) {
//   arrayOne.push(`${i + 1} ${names[i]}`);
// }
// for (let name of names) {
//   arrayTwo.push(`${names.indexOf(name) + 1} ${name}`);
// }


// console.log("===========================");
// console.log(arrayOne);
// console.log(arrayTwo);
// console.log("===========================");
// This only gets the index of the elements
// for (let name in names) {
//   console.log(name);
// }

let cars = ["BMW", "Mercedes", "VW", "Citroen", "Honda"];

function breakExample(array) {
  for (let i = array.length - 1; i > 0; i--) { //must have length-1 because it will start from a non existing element
    if (array[i] === "VW") {
      break;
    }
    console.log(array[i]);
  }
}
breakExample(cars);
console.log("============================");
function continueExample(array) {
    for (let i = array.length - 1; i >= 0; i--) { // must be >=0 so it can reach the element with index 0
        if (array[i] === "VW") {
          continue;
        }
        console.log(array[i]);
      }
}
continueExample(cars);
console.log("============================");

  
  