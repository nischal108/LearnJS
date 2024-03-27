// write a function findLongestWord that takes a string as input and returns the longest word in the string, If there are multiple longest words, returns the first one encountered

// the input string may contain the alphanumeric characters , digits, spaces and punctuations.
// the input string is non empty
// the input string may contain multiple words separated by space.

// if thr input string is empty or contsind only whitespace, the function should return as false.
// The function should ignore leading and ending whitespace when determing the longest length


// using sort function in js
function findLongestWord (string){
    if(!string.trim()){  // checks if the input string is only whitespaces
        return false;
    }
    const stringArray = string.trim().split(" ");

//.sort  //sorts based on unicode character so capital first and small in ascending order

    let sortedArray = stringArray.sort((a,b) =>b.length-a.length);
   
    return sortedArray[0];

}

// using general loop in array
function findLongestWord (string){
        if(!string.trim()){  // checks if the input string is only whitespaces
        return false;
    }
    const stringArray = string.split(" ");
    let longestString = stringArray[0];
    for(i=0;i<stringArray.length;i++){
        if(longestString.length<stringArray[i].length){
            longestString = stringArray[i];
        }
    }
    return longestString;
}

//using reduce method
function findLongestWord (string){
            if(!string.trim()){  // checks if the input string is only whitespaces
            return false;
        }
        const stringArray = string.split(" ");

        return stringArray.reduce((accumulator, currentValue)=> accumulator.length<currentValue.length? currentValue : accumulator,
             ""
        )
    }
    


console.log(findLongestWord("Hello guys this is me ,Nischal  "));