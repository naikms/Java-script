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
