// for of

const arr = [1,2,3,4,5]
for (const num of arr) {
  //  console.log(num);
}


const greetings = "Hello World!"
for (const greet of greetings) {
  //  console.log(`each character is ${greet}`);
}


// Maps
const map = new Map()
map.set('IN', "India")
map.set('US', "America")
map.set('UK', "England")
//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myobject = {
    game1: "NFS",
    game2: "PubG"
}

for (const games of myobject) {
    console.log(games);
}