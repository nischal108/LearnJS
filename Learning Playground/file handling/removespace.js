const fs = require("fs");

// Function to remove extra spaces from a paragraph
function removeExtraSpaces(paragraph) {
    let result = '';
    let prevChar = ''; 

    for (let char of paragraph) {
        if (!(prevChar === ' ' && char === ' ')) {
            result += char;
        }
        prevChar = char;
    }

    return result;
}


// Function to read a file, remove extra spaces, and rewrite the file
function removeExtraSpacesFromFile(filePath) {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err);
      return;
    }
    const modifiedContent = removeExtraSpaces(data);

    // Write modified content back to the file
    fs.writeFile(filePath, modifiedContent, "utf8", (err) => {
      if (err) {
        console.error("Error writing to file:", err);
        return;
      }
      console.log("File has been modified successfully.");
    });
  });
}


removeExtraSpacesFromFile("hello.txt");
