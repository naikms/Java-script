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

// const bigNumber = 1248379028031203n

// reference types or Non-primitive: 

// Array,functions, Objects.

const heroe = ["Shaktiman", "Bheem", "Arjun"]; // Arrays has to declare in Square bracket.
let myobj = {
    name: "naik", // Objects are in curly backets, 
    age: 26,
}
const myFunction = function(){
    console.log("Helo world");
}                                    // Here function is stored in variables, In function we can store the any type of data.
 log
