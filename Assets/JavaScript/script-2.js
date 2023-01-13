// Assignment Code
var generateBtn = document.querySelector("#generate");
//    ARRAY
const lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
const numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"]

console.log(lowercaseCharacters);
console.log(numericCharacters);
console.log(uppercaseCharacters);
console.log(specialCharacters);
//Gathering info from series of prompts 
function userPrompt() {
    var length = prompt("Please enter the length of your desired password between 8 and 128 characters");
    if(length < 8 || length > 128) {
        alert("ERROR: Please enter a value greater than 8 and less than 128");
        return null;
}
let addLength = prompt;

const addLowerCase = confirm("Do you want lowercase characters  in your password?")
const addUpperCase = confirm("Do you want uppercase characters in your password?")
const addNumeric = confirm("Do you want numbers in your password?")
const addSpecial = confirm("Do you want special character's in your password?")

let password = "";

if (addLowerCase === false && addUpperCase === false && addNumeric === false && addSpecial === false) {
    alert("Must choose at least one character type");
    return null;
}

if (addLowerCase) {
    for (let index = 0; index < lowercaseCharacters.length; index++) {
        console.log(lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)]);
        
    }
    
}

if (addUpperCase) {
    for (let index = 0; index < uppercaseCharacters.length; index++) {
        console.log(uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)]);
        
    }
    
}


// var userOptions = {
//     length: length,
//     isLowercase: isLowerCase,
//     isUppercase: isUpperCase,
//     isNumeric: isNumeric,
//     isSpecial: isSpecial

// }
return null;
}

//Function: take in user info from prompts of another function and generate password
function generatePassword() {
    var userData = userPrompt();
    console.log("GP is working");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
}


  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)