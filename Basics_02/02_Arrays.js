const friends = ["manu","abhi","kishu"]
const heros = ["vishnu","rajkumar","sudeep"]
//friends.push(heros)
//console.log(friends); // [ 'manu', 'abhi', 'kishu', [ 'vishnu', 'rajkumar', 'sudeep' ] ]
// console.log(friends[3][2]); // sudeep, Avoid

const newfriends = friends.concat(heros) // it will properly in one array,
console.log(newfriends); // [ 'manu', 'abhi', 'kishu', 'vishnu', 'rajkumar', 'sudeep' ]

const newheros = [...friends, ...heros]
console.log(newheros); // [ 'manu', 'abhi', 'kishu', 'vishnu', 'rajkumar', 'sudeep' ]

const Human = [19,20,30,[1,2,3],88,77,[44,45,46,[33,34,35]]]
const real_Human = Human.flat(Infinity) // this is for solving array in arrays.
console.log(real_Human); //  [19, 20, 30,  1,  2,  3, 88, 77, 44, 45, 46, 33, 34, 35]

console.log(Array.isArray("Naik")); // false ; Here it is telling it is array or not.
console.log(Array.from("Naik")); // [ 'N', 'a', 'i', 'k' ] ; Here it is converting to array

let score1 = 100
let score2 = 200
let score3 = 300  
console.log(Array.of(score1,score2,score3)); // [ 100, 200, 300 ] ; It will create new array from elements, or from arrays.


