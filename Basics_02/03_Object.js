// singleton
//Object.create


//Object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Naik",
    "fullname": "Mallesh Naik",
    age: 26,
    [mySym]: "mykey1",
    location: "Bangalore",
    email: "naik@google.com",
    IsLoggedIn: false,
    lastLoginDays: ["Monday","Tuesday"]
}
// we can in two method, one as . and another is using square bracket.
console.log(JsUser.name); // Naik
console.log(JsUser["fullname"]); // Mallesh Naik (We cant access  this using paranthis)
console.log(JsUser[mySym]); // for symbol, interesting.


JsUser.email = "naik@new.com" // it will add email to the object.
console.log(JsUser); 
//Object.freeze(JsUser) // it will freez at object level.
// JsUser.email = "naik@new1.com"
console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());