// for
// Syntax for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let index = 0; index <= 10; index++) {
    const element = index;
    if (index == 5) {
      //  console.log("5 is middle number");
    }
 //   console.log(element);
    
}


for (let i = 1; i <= 10; i++) {
    //  console.log(`Table: ${i}`); 
    for (let j = 1; j < 10; j++) {
       // console.log(`inner loop value:${j} and ${i}`);
     //  console.log(i + '*' + j + '=' + i*j );
    }
    
}

let myArray = ["Naik", "Manu", "Manju", "Raju"]
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
   // console.log(element);
}

// break and continue
// for (let index = 1; index < 20; index++) {
//     if (index==5) {
//         console.log(`5 is detected`);
//         break
//     }
//    console.log(`value of i is ${index}`);
    
// }

// Continue

for (let index = 1; index < 20; index++) {
    if (index==5) {
        console.log(`5 is detected`);
        continue
    }
   console.log(`value of i is ${index}`);
    
}