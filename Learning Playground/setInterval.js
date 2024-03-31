const setIntervalWala = setInterval(()=>{
    console.log("ok");
},2000);

setTimeout(()=>{
    clearInterval(setIntervalWala)
    console.log("aba banda ");
},8000);