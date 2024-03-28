// since we can't return the elements in array  we use other methods to get elements


// ------------------------FILTER ------------------
let myNum =[1,2,3,4,5,6,7,8,9];

// let retunred = myNum.filter( (value, index , array) =>{
//     // console.log(`${value} at ${index} in ${array}`);
//     // return value >5 ; returns the element array that contains value greater than 5

// console.log(retunred);

// --------------------------------MAP----------------------
// let receivedValue = myNum.map(  (value)=>{
//     // return value>5;         // return true or fale 
// })
// console.log(receivedValue);


// -------------------------------REDUCE -----------------

let accumulatorFirst =0;

let reducedValue = myNum.reduce((accumulator, currentValue) => (
    accumulator+ currentValue
), accumulatorFirst)

console.log(reducedValue);