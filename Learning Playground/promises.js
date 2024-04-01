
// the thing is here we have not passed any callback function 
// promises are just a sugar coated way fo making your own async code\
// promises are a solution to callback hell and promises are objects in js

//resolve and reject are callbacks in promises provided by JS itself

function promiseWala(){
    return new Promise((bolaunuParne)=>{
        setTimeout(() => {
           bolaunuParne("Nischal"); 
        }, 3000);
    })
}


function printer(naam) {
    console.log(`hello ${naam}`);
}

promiseWala().then(printer)