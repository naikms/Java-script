// var a = 300,
let a = 300
if (true) {
    let a = 30
    const b = 60
    console.log("INNER: ", a); // INNER:  30
}
console.log(a); // 300


function one() {
    const username = "Naik"

    function two(){
        const website = "youtube"
        console.log(username); // Naik
    }
    // console.log(website);
    two() 
}
one()


if(true) {
    const username = "Naik"
    if (username==="Naik") {
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
}

//console.log(username);


//++++++++++++++++Interesting++++++++++++++++
addone(5)
function addone(num) {
    return num + 1
}

addTwo(5)
const addTwo = function (num) {
    return num + 2
}