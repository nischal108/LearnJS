

const timeoutwala = setTimeout(function welcome (){
    console.log("hello world");
},20000000);

setTimeout(() => {
    clearTimeout(timeoutwala);
    console.log('Stopped aaudaina hai aba ');
}, 200);


// here mathi ko callaback chei webapi mei time ganda gandei tala ko execute bhayo tehi webapi batai ani esle chei mathi ko lai stop gardi halo 
