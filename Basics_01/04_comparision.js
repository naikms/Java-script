// console.log(2 > 1); // true
// console.log(2 >= 1); // true
// console.log(2 < 1); // false
// console.log(2 == 1); // false
// console.log(2 != 1); //true


console.log("2" > 1); // true //Avoid
console.log("02" > 1); //true avoid

console.log(null > 0); //false avoid
console.log(null >= 0); //true avoid
console.log(null == 0); //false avoid

console.log(undefined == 0);
console.log(undefined < 0);
console.log(undefined > 0);   // its false for everything

