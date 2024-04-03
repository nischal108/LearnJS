let promisereturn = function promisereturn (){
    return new Promise((resolve, reject) => {
        let state = false; // Used to switch between promise resolve and reject 
        setTimeout(() => {
            if (state)
                resolve("SUCCESSFUL");
            else
                reject("ERROR AAYO");
        }, 3000);
    });
}

// Using .then() and .catch()
// promisereturn().then((resolveValue) => {
//     console.log(resolveValue);
// }).catch((rejectReason) => {
//     console.log(rejectReason);
// });

// Now using async/await with try-catch block
async function hello () {
    try {
        let promiseLeReturnGAreko = await promisereturn();
        console.log(promiseLeReturnGAreko);
    } catch (error) {
        console.error(error);
    }
};
 hello();
