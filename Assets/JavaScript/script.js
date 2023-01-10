// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


// PSEUDOCODE (SUPER IMPORTANT)

// ARRAY
  // var lowercase = [`a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z`];
  // var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // var upperCase = [`A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z`]
  // var special = ["!", "@", "#", "$", "%", "^", "&", "*"]

  // var results = []
  const passwordLength - prompt("Please enter the lenth of your desired password between 8 and 128 characters");
  if(passwordLength < 8 || passwordLength > 128){
    alert("ERROR: Please enter a value greater than 8 and less than 128");

  // }
  // const keys = {
  //   lowercase: "abcdefghijklmnopqrstuv",
  //   upperCase: "ABCDEFGHIJKLMNOP",
  //   numbers: "0123456789",
  //   special: "!@#$%^&*"

  // }


// USER IMPUT
  // How many characters would you like your password to contain?

  // Lowercase confirm


  if (confirm("Do you want lowercase letters in your password?" == true)) {
    lowercase = "You pressed OK!";
  } else {
    lowercase = "You canceled!";
  }

  // numbers confirm

 
  if (confirm("Do you want numbers in your password?" == true)) {
    lowercase = "You pressed OK!";
  } else {
    lowercase = "You canceled!";
  }

  // upercase confrim

 
  if (confirm("Do you want uppercase letters in your password?" == true)) {
    lowercase = "You pressed OK!";
  } else {
    lowercase = "You canceled!";
  }
  // special character confirm 
  
  let special;
  if (confirm("Do you want special characters in your password?" == true)) {
    lowercase = "You pressed OK!";
  } else {
    lowercase = "You canceled!";
  }

  const getKeys = [
    function lowercase() {
      return keys.lowercase[Math.floor(math.random() * keys.lowercase.length)];
    },
    function upperCase() {
      return keys.upperCase[Math.floor(math.random() * keys.upperCase.length)];
    },
    function numeric() {
      return keys.numbers[Math.floor(math.random() * keys.numbers.length)];
    },
    function special() {
      return keys.special[Math.floor(math.random() * keys.special.length)];
    },
  ]

// CONDITIONAL
  // if the users chooses X numbers of characters total
    // for loop that itterates X number of times

  // if the user chooses to add lowercase characters
    // Randomly select Y number of characters, push it to the Result array
  // if the user chooses to add upercase chars
    //
  // if the users choose to add numbers
    //
  // if the users choose to add special characters
    //

// results = ["a", "b", "c", "d",]

// Display results on to the page 
  //target text area, display results
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
