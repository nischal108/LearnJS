function add (a,b){
    return a+b;
}
function sub (a,b){
    return a-b;
}

function sumandsub(a,b,fn1,fn2){
    return fn1(a,b)+fn2(a,b);
}
console.log(sumandsub(9,1,add,sub));
// see here we could even pass the reference of the function as an argument to the other function.