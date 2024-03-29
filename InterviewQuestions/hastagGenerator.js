
//* Hash Tag Generator //*

// You are required to implement a function generateHash that generates a hash tag from a given input string.

//The hash tag should be constructed as follows:
//The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
//? If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
//Otherwise, the function should return the generated hash tag prefixed with #.


function generateHash(string) {
    // Check if the string is empty or exceeds length limits
    if (!string || string.length > 280 || string.trim().length === 0) {
        return false;
    } else {
        let stringArray = string.trim().split(" ");
        let capitalizedStringArray = stringArray.map(word => word.charAt(0).toUpperCase() + word.slice(1));
        let hashTag = "#" + capitalizedStringArray.join("");
        return hashTag;
    }
}

console.log(generateHash("hello everyone this is me")); // Output: "#HelloEveryoneThisIsMe"