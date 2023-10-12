let score = undefined

console.log(typeof score); 
console.log(typeof(score)) // Both are same

let valueInNumber = Number(score)
console.log(typeof(valueInNumber));
console.log(valueInNumber);   // number+character = NaN  ex : "44abc" = Nan
                              // Number ex: "33" = 33
                              // null = 0        
                              // undefined = Nan
                              // true = 1; false = 0
let isLoggedIn = ""

let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn); 
                               // 1 ==> True
                               // 0 ==> false
                               // "string" ==> true
                               // "" ==> false

let someNumber = 55

let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

/* *********************** operations ************************* */

let value = 3
let negValue = -value
console.log(negValue);


/* console.log(2+2);
console.log(2-2);
console.log(2*3);
console.log(2**3);
console.log(2/3);
console.log(2%3); */


let str1 = "hello"
let str2 = " Mallesh"

let str3 = str1 + str2 
console.log(str3);


console.log("1" + 2); // answer ==> 12 
console.log(1 + "2"); // answer ==> 12
console.log("1" + 2 + 2); // answer ==> 122
console.log(1 + 2 + "2"); // answer ==> 32


console.log((3 + 4) * 4 % 3); // answer ==> 1 ; Don't write messy code.

console.log(+true) // answer ==> 1 ;
// console.log(true+); // error because it will not execute
console.log(+"")   // answer ==> 0 ;


let gameCounter = 100
gameCounter++;
console.log(gameCounter); // answer ==> 101

++gameCounter;
console.log(gameCounter);