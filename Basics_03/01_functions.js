function sayMyName() {
    console.log("M");
    console.log("A");
    console.log("L");
    console.log("L");
    console.log("E");
    console.log("S");
    console.log("H");
    
}
sayMyName() // M
            // A
            // L
            // L
            // E
            // S
            // H


//function addTwoNumber(number1, number2) {
 //   console.log(number1 + number2);

function addTwoNumber(number1, number2) {
   // let result = number1 + number2
    return number1 + number2
}
const result = addTwoNumber(3,5)
console.log("Result: ", result); // 8


function loginUsermessage(username){
    return `${username} just loggedin`
}
console.log(loginUsermessage("naik")); // naik just loggedin
console.log(loginUsermessage()); // undefined just loggedin


function newusermessage(myname= "sam"){
   // if(myname === undefined) {
    if(!myname) {
        console.log("Please enter myname");
        return  //Please enter myname
    }
    return `${myname} just loggedin`
}
console.log(newusermessage("naik"));


function calculatePrice(...num){
    return num
}
console.log(calculatePrice(200,300,400,700)); // [ 200, 300, 400, 700 ]
console.log(calculatePrice(200,300,400,700,400)); // [ 200, 300, 400, 700, 400 ]


function calculatePrice(val1,val2,...num){
    return num
}
console.log(calculatePrice(200,300,400,700));//[400,700]because val1,val2 taken first 2 value


const user = {
    username: "naik",
    id: 12354
}

function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} and id is ${anyobject.id}`);
}

handleObject(user) //user name is naik and id is 12354

handleObject({
    username:"sam",
    id: 123333
}) // user name is sam and id is 123333


const myNewArray = [200,400,600]
function returnsecondArray(newArray) {
    return newArray[2]
}
console.log(returnsecondArray(myNewArray)); // 600
console.log(returnsecondArray([200,400,600])); // 600
