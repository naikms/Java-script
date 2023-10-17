const name = "Mallesh"
const age = 26

console.log(name + age ); // avoid it 

console.log(`Hello myname is ${name} and my age is ${age}.`);



const gameName = new String('Hitesh')
console.log(gameName[0]);
console.log(gameName.__proto__); // {}
console.log(gameName.length);    // 6
console.log(gameName.toUpperCase()); // HITESH
console.log(gameName.charAt(3)); // e
console.log(gameName.indexOf('e')); // 3


const newstring = gameName.substring(0,5)
console.log(newstring);


const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const qstring = "     naik     "
console.log(qstring);    // space will come naik
console.log(qstring.trim()); // remove the space

const url = "https://naik.com/naik%20naik"
console.log(url.replace('%20', '-')); // it will change from %20 to -

console.log(url.includes("naik")); // true
console.log(url.includes("mallesh"));  // false

const newGame = String('naik-mallesh-ms')
console.log(newGame); // naik-mallesh-ms

console.log(newGame.split('-')); // [ 'naik', 'mallesh', 'ms' ]