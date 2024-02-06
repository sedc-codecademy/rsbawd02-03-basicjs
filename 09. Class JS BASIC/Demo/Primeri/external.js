// const osoba = {
//   name: "Ivan",
//   lastName: "Ivanovic",
//   age: 24,
//   email: "ivan123@gmail.com",
//   address: {
//     country: "Serbia",
//     city: "Belgrade",
//     street: "Some street",
//     streetNumber: 105,
//   },
// };

// const person = new Object(); //constructor notation
// console.log(person);
// person.firstName = "Ivan";
// person.lastName = "Ivanovic";
// console.log(person.firstName);
// console.log(person.lastName);
// console.log(person);

// const user = {
//     username: "johndoe", //property with key username and value "johndoe"
//     email: "johndoe@gmail.com", //property with key email and value "johndoe@gmail.com"
//     premiumMembership: true, //property with key premiumMembership and value true
//     latestProducts: [
//       {
//         id: 1,
//         productName: "Mug",
//         //productName: "bottle"
//         price: 3.99,
//       },
//       {
//         id: 2,
//         productName: "Water bottle",
//         price: 0.99,
//       },
//     ], //property with key latestProducts and value array of other objects
//   };
  
//   console.log("=================================");
//   //da bismo dobili Mug moramo da posmatramo value kao niz I tako mu pristupamo
//   console.log(user.latestProducts[0].productName); 
//   console.log("=================================");
  
//   let hotel = {
//     name: "Quay",
//     rooms: 40,
//     booked: 25,
//     hasGym: true,
//     roomTypes: ["twin", "double", "suite"],
//     checkAvailability: function () {
//       return this.rooms - this.booked;
//     },
//     printSelf: function () {
//       console.log(this); //the "this" keyword is the object itself, in this case it's the object {hotel} !!!
//     },
//   };
  
//   //checkAvailability ce uzeti rooms i booked i oduzeti ih a printself ce ispisati celu funkciju
//   console.log(hotel.checkAvailability());
//   console.log(hotel.printSelf);

// let trainer = { 
// 	name :  "Stefan",
// 	lastName: "Stefanovski",
// 	academy: "SEDC",
// 	lecture: "Objects"
// }
// delete trainer.lecture;
// console.log(trainer);
// trainer.age = 25;
// console.log(trainer);
// trainer.getFullName = function(){
//     return this.name + " " + this.lastName;
// }
// console.log(trainer.getFullName());

// function videoGame(inputTitle, inputGenre, inputRating) {
//     this.title = inputTitle;
//     this.genre = inputGenre;
//     this.rating = inputRating;
//   }
//   videoGame("naslov", "zanr", "ocena");
//   console.log(title);
//   // the "this" referencira samu sebe
//   // objekat ce biti tipa videoGame I on je globalni I deo window objekta, ovo ispod je lokalni
//   const aaa = new videoGame("aaa", "bbb", "ccc");
//   console.log(aaa.title);
  
// var osoba = {
//     ime: "Ana",
//     godine: 25,
//     pozdravi: function() {
//       console.log("Pozdrav, ja sam " + this.ime + " i imam " + this.godine + " godina.");
//     }
//   };
//   osoba.pozdravi();
  
// function Trainer(inputFirstName, inputLastName, inputAcademy, inputLecture){
//     this.firstName = inputFirstName; //this.property = value   ->  this is the object of type Trainer, it's the same on every line in this constructor function
//     this.lastName = inputLastName;
//     this.academy = inputAcademy;
//     this.lecture = inputLecture;
//     this.getInfo = function(){ // this.property = value which is a function with no name. That's why it's called anonymous function. And we are going to call this kind of functions METHODS !!!
//         return `${this.firstName} ${this.lastName} - ${this.academy} - ${this.lecture}`;
//     };
// }
// const sedcTrainer = new Trainer("Ivan","Lazarevski", "SEDC","JS, NodeJS, Angular, React, PostgreSQL");
// const sedcTrainer2 = new Trainer("Bojan","Damchevski", "gradezen fakultet","JS, NodeJS, Angular, React, PostgreSQL");


// //prvo vraca objekat a drugo funkcija vraca sve podatke
// console.log(sedcTrainer);
// console.log(sedcTrainer.getInfo());