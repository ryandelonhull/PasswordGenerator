// Assignment Code


var lowercase = [
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
var uppercase = [
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
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbol = [
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
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];
var passwordlog = [];

function passwordOption() {
  var tagName = prompt(
    "To generate a password please enter an number between 8 and 128:",
    "number"
  );

  if (tagName < 8 || tagName > 128) {
    alert("Please enter a valid number");
  } else {
    var tagLow = confirm("Lowercase numbers in your password?");
    // if (tagLow = true){
    //   passwordlog.push(lowercase)
    //   consolelog(passwordlog)
    //   }
    var tagUp = confirm("Uppercase numbers in your password?");
    // if (tagUp = true){
    //   passwordlog.push(uppercase)
    //   consolelog(passwodlog)

    // }
    var tagNum = confirm("Numbers in your password?");
    // if (tagNum = true){
    //   passwordlog.push(number)
    //   consolelog(passwordlog)
    // }
    var tagSym = confirm("Special Characters in your password?");
    //if (tagSym = true){
    //   passwordlog.push(symbol);
    // }
  }
  if (!tagLow && !tagUp && !tagNum && !tagSym) {
    alert("Please choose at least one character type");
  }
  var passwordOptions = {
    tagName: tagName,
    tagLow: tagName,
    tagUp: tagUp,
    tagNum: tagNum,
    tagSym: tagSym,
  };
  return passwordOptions;
}
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  var randomElement = arr[randomIndex];
  return randomElement;
}

function generatePassword() {
  var options = passwordOption();
  var result = [];
  var possiblecharacters = [];
  var garanteedCharacters = [];

  if (options.tagLow) {
    possiblecharacters = possiblecharacters.concat(lowercase);
    garanteedCharacters.push(getRandom(lowercase));
  }

  if (options.tagUp) {
    possiblecharacters = possiblecharacters.concat(uppercase);
    garanteedCharacters.push(getRandom(uppercase));
  }

  if (options.tagNum) {
    possiblecharacters = possiblecharacters.concat(number);
    garanteedCharacters.push(getRandom(number));
  }

  if (options.tagSym) {
    possiblecharacters = possiblecharacters.concat(symbol);
    garanteedCharacters.push(getRandom(symbol));
  }

  for (let i = 0; i < options.tagName; i++) {
    var possiblecharacter = getRandom(possiblecharacters);
    result.push(possiblecharacter);
  }

  for (let i = 0; i < garanteedCharacters.length; i++) {
    result[i] = garanteedCharacters[i];
  }
  return result.join('')
}

var generateBtn = document.querySelector("#generate");
//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
