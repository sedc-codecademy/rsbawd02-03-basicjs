// // Can make a list of anything
// // DO NOT MIX TYPES
// const primes = [2, 3, 5, 7, 11, 13];

// // You can mix types in the array. But generally don't
// const mixedArray = [2, 3, "Hello", true];

// // You can create an empty array as well
// let studentGrades = [];

// // You can split the declaration in rows
// const socialMedia = [
//   "facebook",
//   "instagram",
//   "twitter",
//   "tiktok",
//   "myspace",
//   "linkedin",
// ];

// let days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
// alert(days [0]);

// ACCESSING ITEMS
// Arrays start at 0!
// const days = [
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
//   "Sunday",
// ];
// console.log(`First day of the week: ${days[0]}`);
// console.log(`Fifth day of the week: ${days[4]}`);

// // alert(days.length);

// days[0] = "Monday Again";
// days[days.length - 1] = 'Nedelja';
// //alert(days[6]);

// days[2*2] = 'Cetvrtak';
//alert(days[4]);

// alert(days[0]); //izmenili smo vrednost prvog elementa
// alert(days[1]);
// alert(days[2]);
// alert(days[3]);
// alert(days[4]);
// alert(days[5]);
// alert(days[6]);
// console.log(days);

// days.push('No more days in the week');
// days.push('Jos jedan element niza')

// days.push('No more days in the week', 'Stop adding days', 'these is no more');
// console.log(days);

// ADDING ITEMS USING THE LENGTH (Don't do it this way)
// let birthdays = ["Gucci", "Dolce & Gabbana", "Versace", "Prada"];

// // birthdays[birthdays.length] = "1456-06-12";
// // console.log(`Birthdays after adding with length`, birthdays);

// // ADDING ITEMS USING PUSH (Better, most commonly used)
// birthdays.push("1998-09-18");
// console.log(`Birthdays after adding with push`, birthdays);

// // ADDING MULTIPLE ITEMS (Rarely used)
// birthdays.push("1996-04-05", "1949-03-07");
// console.log(`Birthdays after adding multiple with push`, birthdays);

// // ADDING ITEMS TO THE BEGINNING (Can be useful if you want items in HTML to be added on top)
// let colors = ["red", "green", "blue", "cyan"];
// console.log("before: ", colors);
// colors.unshift("yellow");
// console.log("after: ", colors);

let colors = ["red", "green", "blue", "cyan"];
colors.shift();
console.log("after shift: ", colors);
// Pop removes the last element
colors.pop();
console.log("after pop: ", colors);

