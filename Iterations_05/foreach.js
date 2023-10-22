// for each
const coding = ["js","ruby","Python","Golang","Java"]

// coding.forEach(  function(item) {
//     console.log(item);
// })
coding.forEach(  (item)=> {
  //  console.log(item);
})


// function printMe (item) {
//     console.log(item);
// }

// coding.forEach(printMe)


// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        LanguageName: "Python",
        fileName: "Py"
    },
    {
        LanguageName: "Java",
        fileName: "Java"
    },
    {
        LanguageName: "Javascript",
        fileName: "js"
    }
]

myCoding.forEach(  (item)=> {
    console.log(item.LanguageName);
})