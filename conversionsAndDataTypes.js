/*
Return type of variables in JavaScript
1) Primitive Datatypes  - these are stored in stack memory and passess copy during code
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes - these are stored in heap memory  and passes reference during code execution 
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

 */





let value = 1+ "1" +1;
console.log(value );

let hello = Number (null);
console.log(hello);


console.log(typeof undefined);

