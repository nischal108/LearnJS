


let user = {
    name:{
        firstname: "Nischal",
        lastname: "Bhattarai"
    },
    DOB: '2023/08/25',
    gender: "male"
}

// console.log(user["name"]["firstname"]);
// console.log(user.name.firstname);

// console.log(typeof user["name"]["firstname"]);


// object destructuring 
const {gender} = user
const {gender : linga} = user
console.log(gender);
console.log(linga);
// if hep property exists then display name or else display the gender of the user in the console 
// console.log(`${user[user.hep ? 'name' : 'gender']}`);

