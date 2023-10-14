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

const bigNumber = 1248379028031203n

// reference types or Non-primitive: 

// Array,functions, Objects.

const heroe = ["Shaktiman", "Bheem", "Arjun"]; // Arrays
let myobj = {
    name: "naik",
    age: 26,
}
