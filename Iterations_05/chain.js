const myNumbers = [1,2,3,4,5,6,7,8,9,10]

// let newNums = myNumbers.map( (num) => num + 10)
// newNums = myNumbers.map( (num) => {
//     return num + 10
// })


// newNums = []
// myNumbers.forEach( (num) => {
//     if (num >=1) {
//         newNums.push(num+10)
        
//     }
// })

// chaining
const newNums  = myNumbers
    .map((num) => num*20)            
    .map((num) => num + 3)
    .filter((num)=> num >= 140)

console.log(newNums);

