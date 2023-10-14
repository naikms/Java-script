// Primitive types:

// 7 types: String, Number, Boolean,null, defined, symbol, Bigint

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outSideTemp = null
let userEmail;

const Id = Symbol('123')

const anotherId = Symbol(123)


console.log(Id == anotherId);
console.log(typeof Id);

//const bigNumber = 1248379028031203n
console.log(typeof bigNumber); // undefined
console.log(typeof outSideTemp); //object

//******* */ reference types or Non-primitive: ********

// Array,functions, Objects.

const heros = ["Shaktiman", "Bheem", "Arjun"]; // Arrays has to declare in Square bracket.
let myobj = {
    name: "naik", // Objects are in curly backets, in Key: value pair.
    age: 26,
}
const myFunction = function(){
    console.log("Helo world");
}                                    // Here function is stored in variables, In function we can store the any type of data.
console.log(typeof myFunction); // function
console.log(typeof heros);      // object
// https://262.ecma-international.org/5.1/#sec-11.4.3




/////////////////////////////////////////////////////////////////////////////////////////

// stack (primitive) Heap(non-primitive)

let school = "GLPSBidarakoppa"
 anotherSchool = school
 console.log(anotherSchool); // GLPSBidarakoppa
 anotherSchool = "Morarji" 
 console.log(anotherSchool); //Morarji


let user01 = {                               // this is object type
    email: "user@google.com",
    upiId:  "naik@ybl"
 }
console.log(user01.email);     ///user@google.com
let user02 = user01
 
 user02.email = "naik@google.com"
 console.log(user01.email);   // naik@google.com
 console.log(user02.email);   // naik@google.com

 
