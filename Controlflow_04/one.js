// Control Flow
// if
const isUserLoggedin = true
const temperature = 50


if ( temperature <= 50 ){
    console.log("Executed"); // Executed.
} else {
    console.log("greater than 50");
}

const score = 200
if(score > 100) {
    const  power = "fly"
    console.log(`user power: ${power}`);
}
// <,>, <=,>=, ==, ===, !==

const balance = 2000
if (balance < 10000) console.log("Poor");
else console.log("Rich"); // Poor

const Bal = 1500
if (Bal < 500) {
    console.log("less than 500");
} else if (Bal < 750) {
    console.log("less than 750");
} else if (Bal < 900) {
    console.log("less than 900");
} else {console.log("greater than 1200");
} // reater than 1200\


const userLoggedin = true
const debitCard = true
const loggedinFromGoogle = false
const loggedinFromEmail = true

if (userLoggedin && debitCard &&  2==3) {
    console.log("Allow to buy course");
}
if (loggedinFromGoogle || loggedinFromEmail) {
    console.log("user loggedin");
}

