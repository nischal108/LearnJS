//  <<<<<<<<<<<< // var let const  difference >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//


//  naya js es6 ma aako tarika ho let ra const paila chai var matra thyo
//  naya es6 ma var hudaina tara hamile ekkai choti es5 ra es6 use garna milxa so we can use all var, let, and const


//   var is function scoped   . let braces scoped hunxa

function abcd (){
    for( var i = 1; i<12; i++){
        console.log(i);
    }
    //var bahira i aba use garna namilnu parne ho aru language ma mildaina pani 
    //but since var is function scoped in js abcd function bhitra jaha use garda ni hunxa once t is declared

    console.log(i);   //12 print hunxa esle garda kina ki i ko value badheko thyo bas requirement mett nabhayera nadekhako ho

}

abcd();  // mathi ko function run garaunna


//aba yehi pheri var ko tham ma maile let ue gare bhane i can't use it outside {} matlab loop bahira.

function efg (){
    for( let i = 15; i<22; i++){
        console.log(i);
    }
    console.log(i);    // yesle error dekhauxa since let is braces scoped  braces{} bahira eslai use garna mildaina
}

efg();

 

