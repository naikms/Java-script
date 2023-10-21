const userMail = "naik@gmail.com"

if (userMail) {
    console.log("Got user Email");
} else {
    console.log("user email id is not found");
}  // Got user Email


const eMail = ""

if (eMail) {
    console.log("Got user Email");
} else {
    console.log("user email id is not found");
} // user email id is not found

const newMail = []

if (newMail) {
    console.log("Got user Email");
} else {
    console.log("user email id is not found");
}  // Got user Email

if(newMail.length==0) {
    console.log("Array is empty");
} // Array is empty.

// Falsy Value
// false,0,-0, BigInt0 0n, "", null ,undefined, NaN.

// Truthy Value
// "0" , 'false' , " ", [], {}, function() {}

const emptyObject = {}

if (Object.keys(emptyObject).length == 0) {
    console.log("Object is empty");
}

// nullish coaelscing Operator
let val1;
//val1 = 5 ?? 10 //5
//val1 = null ?? 10 // 10
//val1 = undefined ?? 15 //15
val1 = undefined ?? 20 ?? 10 // 20

console.log(val1);

// Terniary Operator
// condition ?? true : false

const bigBasket = 100
bigBasket <= 80 ? console.log("affordable") : console.log("expensive")