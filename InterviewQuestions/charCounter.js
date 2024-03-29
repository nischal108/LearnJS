
//? Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.

//todo Constraints:
//? The function should be case-sensitive.
//? The function should handle both lowercase and uppercase characters.
//? The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).

function countChar(string, char){
    let uppercaseString = string.toUpperCase().split("");
    char = char.toUpperCase();
    let counter = uppercaseString.reduce((counter,currchar)=>{
        if(currchar===char){
            counter++;
        }
        return counter;
    }, 0 )
    return counter;
}



console.log(countChar ("MissIssippi", "I")); 