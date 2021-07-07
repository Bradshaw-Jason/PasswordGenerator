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

// 26 characters
var lowLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

//31 characters
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", "~", "`", "'", ";", ":", ",", "<", ".", ">", "/", "?"];
specChar.push('"');

// 9 characters
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];


var lowLetterCheck = false;
var upLetterCheck = false;
var specCharCheck = false;
var numberCheck = false


function generatePassword() {

  var password = ""
  var chosenChars = [];

 var passwordLength = getPasswordLength()





 /* 
  if (x = x) {
  }
  if (x = x) {
    chosenChars.push(upLetters);
  }
  if (x = x) {
    chosenChars.push(specChar);
  }
  if (x = x) {
    chosenChars.push(numbers);
  }
  for(var i=0; 1<passwordLength; i++){
    password = password.concat(chosenChars[getRandomChar(passwordLength)])
  }
*/



return password;

}




function getRandomChar(max) {
  min = Math.ceil(1);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function getPasswordLength(){
  var passwordLength = prompt("Please enter a chacter length between 8 and 128")
  if (passwordLength >=8 && passwordLength <=128){
    return passwordLength;
  }
  else if (passwordLength === null) {
    return;
   }
  else{
    alert("incorrect input please try again")
    getPasswordLength();
  }
}

function getLowLetter(){
  var letter = prompt("Do you want to include ")
  if (letter === yes){
    chosenChars.push(lowLetters);
  }
  else if (letter === no) {
    return
   }
  else if (passwordLength === null) {
    return;
   }
  else{
    alert("incorrect input please try again")
    getPasswordLength();
  }
}

function getUpLetter(){
  var letter = prompt("Please enter a chacter length between 8 and 128")
  if (letter === yes){
    chosenChars.push(lowLetters);
  }
  else if (letter === no) {
    return
   }
  else if (passwordLength === null) {
    return;
   }
  else{
    alert("incorrect input please try again")
    getPasswordLength();
  }
}















}