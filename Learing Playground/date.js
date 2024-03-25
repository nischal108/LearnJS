// let mydate = new Date(); to get current date and time 
// let mydate = new Date(2023, 0, 23);
// // console.log(mydate);
// console.log(mydate.toString());
// console.log(mydate.toTimeString());
// console.log(mydate.getMonth());
// console.log(mydate.toLocaleString());


// +++++++++++++++++++++time +++++++++++++++++

// all values received are in milliseconds and we convert it to other later

let myTimeStamp = Date.now();
console.log(myTimeStamp);

let date = new Date();
let day = date.getDay();
console.log(day);
let currentTime = date.getTime();
console.log(currentTime);
//conversion to second
let currentTimeInSeconds = Math.round((currentTime/1000));
console.log(currentTimeInSeconds);
