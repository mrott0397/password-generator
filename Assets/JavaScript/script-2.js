// Assignment Code
var generateBtn = document.querySelector("#generate");
//    ARRAY
var lowercase = [`a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z`];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var upperCase = [`A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z`]
var special = ["!", "@", "#", "$", "%", "^", "&", "*"]


//Gathering info from series of prompts 
function userPrompt() {
    var length = prompt("Please enter the length of your desired password between 8 and 128 characters");
    if(length < 8 || length > 128){
        alert("ERROR: Please enter a value greater than 8 and less than 128");
        return null;
}
var isLowercase = confirm("Do you want lowercase letters in your password?")
var isUppercase = confirm("Do you want uppercase letters in your password?")
var isNumeric = confirm("Do you want numbers in your password?")
var isSpecial = confirm("Do you want special character's in your password?")
if (isLowercase === false && isUppercase === false && isNumeric === false && isSpecial === false){
    alert("Must choose at least one character type");
    return null;
}
var userOptions = {
    length: length,
    isLowercase: isLowercase,
    isUppercase: isUppercase,
    isNumeric: isNumeric,
    isSpecial: isSpecial

}
return null
}
//Function: take in user info from prompts of another function and generate password
function generatePassword() {
    var userData = userPrompt();
    console.log("GP is working");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log("WP is working");
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
}


  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);