
// let userInput = prompt("Enter day of the week (1-7)");
// let day = parseInt(userInput);

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Please enter a valid input !!!");
//     break;
// }

// let subject = prompt("Choose a subject (JS, C#, HTML, css)");
// let subjectToLower = subject.toLowerCase();

// switch (subjectToLower) {
//   case "js":
//     alert("We are going to learn JS");
//     break;
//   case "c#":
//     alert("We are going to learn C#");
//     break;
//   case "html":
//     alert("We are going to learn HTML");
//   case "css":
//     alert("And CSS as well.");
//     break;
//   default:
//     alert("We are not learning anything.");
//     break;
// }

//  greeting(); //not best practice to call a function before 
//  //it is created
  
// function greeting() {
//     console.log(
//       "Hello from function!"
//     );
//   }
//   greeting();
//   greeting();
 

//creating function with arguments
		    //arguments
            // function myFunction(x, y) {
            //     let proizvod = x * y;
            //     let zbir = x+y;
            //     console.log(proizvod, 'proizvod');
            //     console.log(zbir, 'zbir');
            // }
            // myFunction(1,3);	
            // // myFunction(2,5);
            // // myFunction(100,232131);

            // function myFunction1(x, y, z) {
            //     let rezultat = x * y + z;
            //     alert(rezultat, 'rezultat');
            // }
            // myFunction1(1,3, 5);	

        
// console.log(Math.PI); //ugradjena funkcija Math koja daje vrednost PI
// let a = Math.pow(2, 3); //stepen (prva vrednost je baza, druga vrednost je eksponent)
// console.log(a);

// function myFunction(x, y) {
// 	let myVar = x * y;
// 	console.log(myVar);
// 	return myVar;
// }
// let myresult = myFunction(7,8);

// function myFunction2(x, y, z) {
//     let rezultat1 = x + z;
//     let rezultat2 = x * y;
//     alert(rezultat1, rezultat2);
// }
// let aaa = myFunction2(1,3, 5);	
// console.log(aaa); //undefined jer nema return

// function x(a, b) {
//     let p;
//     if (a === b) {
//       p = a * b;
//       console.log("Povrsina kvadrata", p);
//     } else if (a > b || b > a) {
//       p = a * b;
//       console.log("Povrsina pravogaonika", p);
//     }else{
//       console.log("Nepoznata povrsina")
//     }
//     return p;
//   }
   
//   let result = x(2, "]");
//   console.log(result);

//   function calculateLoan   ( amount, months,interest,name ) {
// 	//lots and lots of code
//     console.log(name, amount, months, interest);
//   }

// calculateLoan(1000, 12, 7, "John Doe");	 //correct
// calculateLoan(1000, 12, 7, "John Doe", "Something Extra");	//extras are ignored
// calculateLoan(1000, 12);   //missing are passed as undefined

// function printValues(name = "Ivan", age, city) {
//     console.log(name, age, city);
//   }
//   printValues("Marija", 24, "Belgrade");
//   printValues("Marija ", 24, " Belgrade", 1998);
//   printValues("Marija ", 24);
//   printValues("Marija ", " Belgrade");
//   printValues(1, 2, 3);
//   printValues();
  
var sayHello = name => console.log("Hello, " + name + "!");
var sayHello1 = (name) => console.log("Hello, " + name + "!");
sayHello("John");
sayHello1("John");

//ES5
var multiply = function(x, y) {
    var tekst = "Ovo je funkcija";
    console.log(tekst);
};

//ES2105
var multiply = (x, y) => {
    var tekst = "Ovo je funkcija";
    console.log(tekst)
};
