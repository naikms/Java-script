//const tinderUser = new Object()
const tinderuser = {}
// console.log(tinderUser); // {} ==   Singleton
console.log(tinderuser); // {} == constructor

tinderuser.id = "124naik"
tinderuser.name = "naik"
tinderuser.isLoggedIn = false
console.log(tinderuser); // { id: '124naik', name: 'naik', isLoggedIn: false }

const regularUser = {
    email: "naik@google.com",
    fullname: {
        userFullName: {
            firstName: "Mallesh",
            lastName: "Naik"
        }
    }
}
console.log(regularUser.fullname.userFullName.lastName); //Naik


const oject1 = {1:"a", 2:"b"}
const oject2 = {3:"c", 4:"d"}

const object3 = {oject1, oject2}
console.log(object3); // { oject1: { '1': 'a', '2': 'b' }, oject2: { '3': 'c', '4': 'd' } }
                      // It will give object in the object, We need only new object from those 2 objects.
const object4 = Object.assign(oject1,oject2)
console.log(object4); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
const object5 = Object.assign({},oject1,oject2)
console.log(object5); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' } but its guaranteed.

const obj1 = {...oject1, ...oject2} // most frequent
console.log(obj1); // spreading concept, { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }.


const users = [
    {
        id: 1,
        email: "n@google.com"
    },
    {
        id: 1,
        email: "n@google.com"
    },
    {
        id: 1,
        email: "n@google.com"
    },
    {
        id: 1,
        email: "n@google.com"
    },
]

users[1].email
console.log(tinderuser);
console.log(Object.keys(tinderuser)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderuser)); // [ '124naik', 'naik', false ]
console.log(Object.entries(tinderuser)); // [ [ 'id', '124naik' ], [ 'name', 'naik' ], [ 'isLoggedIn', false ] ]

console.log(tinderuser.hasOwnProperty("name")); //true
console.log(tinderuser.hasOwnProperty("user")); // false

// Object destructure

const course = {
   course_name: "JS in Hindi",
   courseInstructor: "Hitesh",
   Course_fees: "999"
}
// course.Course_fees

const {courseInstructor} = course
console.log(courseInstructor); // Hitesh
const {courseInstructor:Instructor} = course
console.log(Instructor); // Hitesh

JSON/API 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]