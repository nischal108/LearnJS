// Immediately Invoked Function Expression

// esto function jun chei immediately invoke / execute hunxa

//They are typically used to create a local scope for variables to prevent them from polluting the global scope.

// ; is compulsory at the end of IIfe since it is unable to understand its scope


// this is a named iife
(function iife(){
    console.log("Did You call me ? ");
})();  // this semicolon is compulsory here 


// this is a not named iife
(()=>{
    console.log("hello");
})();

// parameterized iife
((name)=>{
    console.log(`hello ${name}`);
})("nischal")