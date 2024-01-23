// function simpleFunction   ( ) {
// 	//lots of code
// 	let foo = 500;		//local varable
// 	//lots of code
// 	console.log(foo, "from function");	//500
// }
// simpleFunction();
// console.log(foo, "from global");		//undefined

// function simpleFunction   ( ) {
// 	//lots of code
// 	let foo = 500;		//local varable
// 	//lots of code
// 	console.log(foo, "from function");	//500
//   return foo;
// }
// simpleFunction();
// let foo = simpleFunction();
// console.log(foo, "from global");		//global

// let foo = 500;		//global varable							
// function simpleFunction   ( ) {
// //lots of code
// foo = 600;		//the global varable
// //lots of code
// console.log(foo);	//600
// }
// simpleFunction();
// console.log(foo);		//600

// function foo() {
// 	a = 1;	// `a` not formally declared
// }
// foo();
// console.log(a);	// 1 -- oops, auto global variable :(


// let message = "Outside the function"; 
// function warning(message){ 
// console.log(a);	// 1 -- oops, auto global variable :(
// console.log(message); 
// } 
// warning("Inside the function"); 
// console.log(message);

// var fullMoon = true;
// let species = "human";// Initialize a global variable
// if (fullMoon) {
//   let species = "werewolf"; // Initialize a block-scoped variable
//   console.log(`It is a full moon. Lupin is currently a ${species}.`);
// }
// console.log(`It is not a full moon. Lupin is currently a ${species}.`);


// // Use var to initialize a variable
// var species = "human";
// if (fullMoon) {
//   // Attempt to create a new variable in a block
//   var species = "werewolf";
//   console.log(`It is a full moon. Lupin is currently a ${species}.`);
// }
// console.log(`It is not a full moon. Lupin is currently a ${species}.`);


// // Assign value to const
// const SPECIES = "human"; 
// // Attempt to reassign value
// SPECIES = "werewolf";
// console.log(SPECIES);


// // Declare but do not initialize a const
// const TODO;
// console.log(TODO);


function weatherInfo (temp) {  
  let celsium = (temp - 32) * 5/9;  
  if (celsium < 0)    
  return (celsium + " is freezing temperature")  
else    return (celsium + " is above freezing temperature")
}
let temp = weatherInfo(32);
console.log(temp);
temp = weatherInfo(50);
console.log(temp);
temp = weatherInfo(0);
console.log(temp);