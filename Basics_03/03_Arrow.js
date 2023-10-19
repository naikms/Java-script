const user = {
    username: "Naik",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
}
//user.welcomeMessage() // Naik, welcome to website : Current context (this)
//user.username = "Sam"
//user.welcomeMessage() // Sam, welcome to website

console.log(this); // {} ===> empty object in node environment, window in browser environment


function chai() {
    let username1 = "Naik"
    console.log(this.username1); // if we dont use anything it will give many values.
}
chai() // undefined

const chai1 = function() {
    let username1 = "Naik"
    console.log(this.username1);
}
chai1() // undefined.

const chai2 = () => {
    let username1 = "Naik"
    console.log(this.username1);
}
chai2() // undefined



//=========>>>>>Arrow function<<<<<<<<<=======\\
const addTwo = (num1,num2) => {
    return num1 + num2
}
console.log(addTwo(3,6)); //9

// implicit
const add2 = (num3,num4) => num3 + num4
console.log(add2(4,6)); //10

const addtwo = (num5,num6) => (num5 + num6)
console.log(addtwo(7,8)); //15

const add = (num7,num8) => ({username: "Naik"})
console.log(add(3,6)); //  { username: 'Naik' }