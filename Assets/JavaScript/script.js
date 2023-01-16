// Assignment Code
var generateBtn = document.querySelector("#generate");

//    ARRAY
const lowercaseCharacters = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numericCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
const specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];

let password = "";
let possibilities = "";

console.log(lowercaseCharacters);
console.log(numericCharacters);
console.log(uppercaseCharacters);
console.log(specialCharacters);
console.log(possibilities);
console.log(password);

function writePassword() {
    var password = generatePassword();
  
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }

//Gathering info from series of prompts
function generatePassword() {
  var passwordLength = prompt(
    "Please enter the length of your desired password between 8 and 128 characters");
  if (passwordLength < 8 || passwordLength > 128) {
    alert("ERROR: Please enter a value greater than 8 and less than 128");
    return null;
} 

  // for loop = to overall password

  const addLowerCase = confirm(
    "Do you want lowercase characters  in your password?");
  const addUpperCase = confirm(
    "Do you want uppercase characters in your password?");
  const addNumeric = confirm("Do you want numbers in your password?");
  const addSpecial = confirm(
    "Do you want special character's in your password?");

    if (addLowerCase === true) {
        possibilities = possibilities.concat(lowercaseCharacters);
        const lowerCaseGen = lowercaseCharacters[Math.floor(Math.random() * lowercaseCharacters.length)];
        password = password + lowerCaseGen;
        console.log(addLowerCase); 
    } if (addUpperCase === true) {
        possibilities = possibilities.concat(uppercaseCharacters);
        const upperCaseGen = uppercaseCharacters[Math.floor(Math.random() * uppercaseCharacters.length)];
        password = password + upperCaseGen;
        console.log(addUpperCase);
    } if (addNumeric === true) {
        possibilities = possibilities.concat(numericCharacters);
    } if (addSpecial === true ) {
        possibilities = possibilities.concat(specialCharacters);
    }  
    
   console.log(possibilities);

    for (let index = password.length; index < passwordLength; index++) {
        var randomindex = Math.floor(Math.random() * possibilities.length);
        password = password + possibilities[randomindex]};
        console.log(password);
    }
    //   if (confirm("Do you want lowercase letters in your password?" == true)) {
//     lowercase = "You pressed OK!";
//   } else {
//     lowercase = "You canceled!";
//   }


//     if (addLowerCase === true) {
//     possibilities = possibilities + lowercaseCharacters;
//     const lowerCaseGen =
//       lowercaseCharacters[
//         Math.floor(Math.random() * lowercaseCharacters.length)
//       ];
//     password = password + lowerCaseGen;
//   }

//   if (addUpperCase) return null;


//Function: take in user info from prompts of another function and generate password
// function generatePassword() {
//   var userData = userPrompt();
//   console.log("GP is working");
// }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
