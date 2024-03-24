//for              // break and continue
// while do 
// do while



let superHeroes =["shaktiman","spiderman","joker"]


const details = {
    name:"Nischal",
    caste :"Bhattarai",
    dob :"2062-08-25"
}

const map = new Map();
map.set("NP","Nepal");
map.set("IN","India");
map.set("US","United States of America");

// console.log(map);
// high order array loops 


// // -----------------------------for of-------------------------------------------- 
// objects are not iterable using for of 


// works on string as well prints char by char 
// for (const value of superHeroes) {
//     console.log(value);
// }

// for (const iterator of "NISCHAL") {
//     console.log(iterator);
// }


// for (const [key,value] of map) {
//     console.log(`the value of ${key} is this value ${value}`);
// }



// --------------------------------------------- for in -----------------------
// prints key only meaning it prints index in array as well
//  generally used for objects , works on object also
// doesn't work in map 


// for (const key in details) {
//     console.log(`${key} poses a value of ${details[key]}`);
// }

// for (const key in superHeroes) {
//    console.log(superHeroes[key]);
// }


// ------------------------------------------- for each loop ----------------------------------
// for each loop doesn't return anything so we can perfomr the operations in the function but not get the value or item outside the function 
// superHeroes.forEach(element => {
//     console.log(element);
// });

superHeroes.forEach((element,index,array) => {
    console.log(element);
    console.log(index);
    console.log(array);
});