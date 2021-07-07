// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "~", "`", "'", ";", ":", ",", "<", ".", ">", "/", "?"];
specChar.push('"');
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

var chosenChars = [];

function generatePassword() {

  var password = ""

  var passwordLength = getPasswordLength();
  getLowLetter();
  getUpLetter();
  getSpecChar();
  getNumbers();

  if(getPasswordLength===null||getLowLetter===null||getUpLetter===null||getSpecChar===null||getNumbers===null){
    var promptReset= confirm("You hit cancel on at least one of the prompts. Did you want to continue?")
    if (promptReset === False){
      return;
    }
  }

  for(i=0;i<passwordLength;i++){
  password = password+chosenChars[getRandomChar(chosenChars.length-1)]
  }

  return password;

}

function getRandomChar(max) {
  min = Math.ceil(1);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getPasswordLength() {
  var passwordLength = prompt("Please enter a chacter length between 8 and 128")
  if (passwordLength >= 8 && passwordLength <= 128) {
    return passwordLength;
  }
  else if (passwordLength === null) {
    return;
  }
  else {
    alert("incorrect input, please try again")
    getPasswordLength();
  }
}

function getLowLetter() {
  var char = prompt("Do you want to include lower case letter? type yes/no: ")
  if (char === "yes") {
    chosenChars.push(lowLetters);
  }
  else if (char === "no") {
    return
  }
  else if (char === null) {
    return;
  }
  else {
    alert("incorrect input, please try again")
    getLowLetter();
  }
}

function getUpLetter() {
  var char = prompt("Do you want to include upper case letter? type yes/no: ")
  if (char === "yes") {
    chosenChars.push(upLetters);
  }
  else if (char === "no") {
    return
  }
  else if (char === null) {
    return;
  }
  else {
    alert("incorrect input, please try again")
    getUpLetter();
  }
}

function getSpecChar() {
  var char = prompt("Do you want to include special characters? type yes/no: ")
  if (char === "yes") {
    chosenChars.push(specChar);
  }
  else if (char === "no") {
    return
  }
  else if (char === null) {
    return;
  }
  else {
    alert("incorrect input, please try again")
    getSpecChar();
  }
}

function getNumbers() {
  var char = prompt("Do you want to include numbers? type yes/no: ")
  if (char === "yes") {
    chosenChars.push(numbers);
  }
  else if (char === "no") {
    return
  }
  else if (char === null) {
    return;
  }
  else {
    alert("incorrect input, please try again")
    getNumbers();
  }
}