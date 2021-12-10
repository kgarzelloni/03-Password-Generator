// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var symbols = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "^",
  ",",
];
var possibleCharacters = [];

// Collect user's password preferences
function generatePassword() {
  var PasswordLength = window.prompt(
    "How many characters do you want in your password?",
    "Min 8 Max 128"
  );
  if (PasswordLength < 8 || PasswordLength > 128) {
    alert("choose a number between 8 and 128");
    generatePassword();
  }

  console.log(PasswordLength);
  var incUppercase = window.confirm(
    "Do you want your password to include uppercase letters? \nOk for YES and cancel for NO."
  );
  console.log(incUppercase);
  if (incUppercase === true) {
    possibleCharacters.push(upperCase);
    console.log(possibleCharacters);
  }
  var incLowercase = window.confirm(
    "Do you want your password to include lowercase letters? \nOk for YES and cancel for NO."
  );
  console.log(incLowercase);
  if (incLowercase === true) {
    possibleCharacters.push(lowerCase);
    console.log(possibleCharacters);
  }
  var incNumbers = window.confirm(
    "Do you want your password to include NUMBERS? \nOk for YES and cancel for NO."
  );
  console.log(incNumbers);
  if (incNumbers === true) {
    possibleCharacters.push(numbers);
    console.log(possibleCharacters);
  }
  var incSymbols = window.confirm(
    "Do you want your password to include SYMBOLS? \nOk for YES and cancel for NO."
  );
  console.log(incSymbols);
  if (incSymbols === true) {
    possibleCharacters.push(symbols);
    console.log(possibleCharacters);
  }
  console.log(possibleCharacters.flat());
  var shuffledCharacters = possibleCharacters.flat().sort(function () {
    if (Math.random() < 0.5) {
      return 1;
    } else {
      return -1;
    }
  });
  console.log(shuffledCharacters);
}


// generatePassword();
// Write password to the #password input
function writePassword() {
  console.log(generatePassword);
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");
  console.log(passwordText.value);
 
  passwordText.value = password; //.join and .slice to turn array into a string with correct # of characters given by password length
  console.log(passwordText.value);
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// return window.alert ("Your Password is: " + shuffledCharacters.sliced(passwordLength));
