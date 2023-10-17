// Date

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());//Tue Oct 17 2023 15:25:31 GMT+0000 (Coordinated UniversaTime)
console.log(myDate.toDateString()); //Tue Oct 17 2023
console.log(myDate.toISOString()); //2023-10-17T15:29:14.464Z
console.log(myDate.toJSON());// 2023-10-17T15:29:14.464Z
console.log(myDate.toLocaleDateString()); // 10/17/2023
console.log(myDate.toLocaleString()); // 10/17/2023, 3:29:14 PM
console.log(myDate.toLocaleTimeString()); // 3:29:14 PM
console.log(typeof myDate); // type is object


let createMydate = new Date(2023,0,23)
console.log(createMydate.toDateString()); // Mon Jan 23 2023

let ourDate = new Date(2023,0,23,5,4)
console.log(ourDate.toLocaleString());  // 1/23/2023, 5:04:00 AM
console.log(ourDate.toLocaleDateString()); // 1/23/2023

let createDate = new Date("2023-12-16")
console.log(createDate.toLocaleString()); // 12/16/2023, 12:00:00 AM
console.log(createDate.toLocaleDateString());  // 12/16/2023
console.log(createDate.toDateString());  // Sat Dec 16 2023

let orDate = new Date("01-14-2023")
console.log(orDate.toLocaleString()); // 1/14/2023, 12:00:00 AM


let myTimeStamp = Date.now()
console.log(myTimeStamp); // 1697558360635
console.log(orDate.getTime());  // See value in relatime

console.log(Math.floor(Date.now()/1000)) // See value in relatime (it is created in seconds)



let newDate = new Date()
console.log(newDate.getFullYear()); //  2023.
console.log(newDate.getDay()); // 2 (today is tuesday, so real day)
console.log(newDate.getMonth() + 1); // 10 (we used +1, because count will start from 0)

console.log(newDate.toLocaleString('default', {
    weekday:"long"
}))  // Tuesday.


