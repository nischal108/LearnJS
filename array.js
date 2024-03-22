
// // Array itself is an object since it is in non primitive data type in JS
// // let arr = new Array();
// // let arr1 = [];
// // console.log(typeof arr);
// // console.log(typeof arr1);



// // let arr = new Number(12);
// // let arr1 = 12;
// // console.log(typeof arr);
// // console.log(typeof arr1);


// // JS Array is different 
// // mix of values
// // let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// // // get the object at index 1 and then show its name
// // console.log( arr ); // John

let fruits =["apple", "mano", "peach", "banana", "lemon"];

// // console.log(fruits[-1]);                    // undefined

// //recent addition to the language

// // console.log(fruits.at(-1));    // lemon
// changeFruits(fruits)

// function changeFruits(Array) {
//     fruits.pop();
// }
// console.log(fruits);


// slice and splice methods - they return an answer array
console.log(fruits);

// splice chnages the original array aswell as returns a new array that includes the range
// let slicedarray = fruits.splice(1,3) ;  //[ 'mano', 'peach', 'banana' ]
// console.log(slicedarray);
// console.log(fruits);


// slice doesn't change the original array and returns a new array that doesn't include the range
let slicearray = fruits.slice(1,3);  // [ 'mano', 'peach' ]
console.log(slicearray);
console.log(fruits);

let arr = [1, 2];

let arrayLike = {
  0: "something",
  length: 1
};

console.log( arr.concat(arrayLike) ); // [ 1, 2, { '0': 'something', length: 1 } ]