// functions in js are of 

// console.log(typeof helloFunction);
// hellowrold("nischal");


function hellowrold(hello) {
    console.log(`hello ${hello}`);
}



// console.log(typeof hellowrold);


let helloFunction = function(){
   let string = "you called me ";
   return string
}

// console.log(helloFunction());
// console.log(typeof helloFunction);


//rest operator


// ...  is a rest operator here 
// function totalprice(...items){
//     let sum =0;
//     let length = items.length;
//     for(i=0;i<length;i++){
//         sum+=items[i];
//     }
//     return sum;
// }

// console.log(totalprice(100,200,300));


function seeme(){
    return(()=>0)();
}
console.log( typeof seeme());