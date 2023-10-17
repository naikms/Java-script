const score = 400
console.log(score); // 400
const balance = new Number(100)
console.log(balance); // [Number: 100]

console.log(balance.toString()); // 100
console.log(balance.toString().length); // 3
console.log(balance.toFixed(2)); // after decimal point === 100.00
console.log(balance.toFixed(5)); // 100.00000


const othernumber = 23.8966
console.log(othernumber.toPrecision(3)); // 23.9
console.log(othernumber.toPrecision(4)); // 23.90

const extraNumber = 123.8934
console.log(extraNumber.toPrecision(3)); // 124
console.log(extraNumber.toPrecision(4)); // 123.9
console.log(extraNumber.toPrecision(5)); // 123.89

const hundred = 1000000
console.log(hundred.toLocaleString()); // 1,000,000 in us number system
console.log(hundred.toLocaleString('en-IN')); // 10,00,000 in Indian number system




// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++++++++++

console.log(Math); //Object [Math] {}

console.log(Math.abs(-4)); // 4 , Conversion of negative value to positive
console.log(Math.round(4.3)); // 4 -- it will adjust nearest whole number.
console.log(Math.ceil(4.3));  // 5 -- it will convert value next integer.
console.log(Math.floor(4.3));  // 4 -- it will convert value before integer.
console.log(Math.min(3,6,9));  // 3 -- least number
console.log(Math.max(3,6,9)); // 9 --- max number


console.log(Math.random()); // random value nbetween 0 to 1.
console.log(Math.random()*10); // random value
console.log(Math.random()*10 + 1); // random value from 1 

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
