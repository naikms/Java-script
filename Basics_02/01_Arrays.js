// Arrays
const myArr = [1,2,3,4,5]
const myHeros = ["shaktiman", "chotabheem"]
const myArr2 = new Array(1,2,3,4,5)
console.log(myArr2[1]); // 2
console.log(myArr2[0]); // 1


// Methods

myArr.push(7,8,9, "Naik", "True") /// we can add elements to array
console.log(myArr);
myArr.pop() // by this method we can remove last value in array  === [ 1,2,3,4,5,7,8,9, 'Naik' ]
console.log(myArr); 
myArr.unshift(88)    //add number in intial position of array== [88,1,2,3,4,5,7,8,9,'Naik']
console.log(myArr);
myArr.shift() //remove the intial element from array== [1,2,3,4,5,7,8,9,'Naik']
console.log(myArr);  
console.log(myArr.includes(21)); // false
console.log(myArr.indexOf(7)); // 5


const newArray = myArr.join()
console.log(myArr); // [1,2,3,4,5,7,8,9,'Naik']
console.log(newArray); // 1,2,3,4,5,7,8,9,Naik - it will convert array to string & joins.

// slice or Splice
const arrival = [0,1,2,3,4,5]
console.log("A", arrival); // A [ 0, 1, 2, 3, 4, 5 ]
const myn1 = arrival.slice(1,3) // there is no remove of elements. ranges not include
console.log(myn1); // [ 1, 2 ]
console.log("B", arrival); // B [ 0, 1, 2, 3, 4, 5 ]
const myn2 = arrival.splice(1,3)//By using splice,we will remove the elements in Original. range also  include.
console.log(myn2); // [ 1, 2, 3 ]
console.log("C",arrival); // C [0,4,5]

