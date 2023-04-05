// Assignment Code
var generateBtn = document.querySelector("#generate");

function writePassword() {
  //Building the character base...
  let lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  let uppercaseLetter = lowercaseLetters.toUpperCase();
  let numbers = "1234567890";
  let specialChar = ";.<>!@#$%^&*()?/{}[]'";
  let placeholder = '';

  //Determine password length
  let passLength = prompt("How many characters would you like your password to be? ");
  
  // Determine which characters will ultimately go into the character base...
  let includeLowercaseLetters = prompt("Would you like to include lowercase letters? (yes or no)").toLowerCase();
  if (includeLowercaseLetters === "yes") {
    includeLowercaseLetters = true;
  } else {
    includeLowercaseLetters = false;
  }

  let includeUppercaseLetter = prompt("Would you like to include uppercase letters? (yes or no)").toLowerCase();
  if (includeUppercaseLetter === "yes") {
    includeUppercaseLetter = true;
  } else {
    includeUppercaseLetter = false;
  }

  let includeNumbers = prompt("Would you like to include numbers? (yes or no)").toLowerCase();
  if (includeNumbers === "yes") {
    includeNumbers = true;
  } else {
    includeNumbers = false;
  }

  let includeSpecialChar = prompt("Would you like to include special characters? (yes or no)").toLowerCase();
  if (includeSpecialChar === "yes") {
    includeSpecialChar = true;
  } else {
    includeSpecialChar = false;
  }

  let availableCharacters = '';
  if (includeLowercaseLetters) {
    availableCharacters += lowercaseLetters;
  }
  if (includeUppercaseLetter) {
    availableCharacters += uppercaseLetter;
  }
  if (includeNumbers) {
    availableCharacters += numbers;
  }
  if (includeSpecialChar) {
    availableCharacters += specialChar;
  }

  function generatePassword(length, availableCharacters) {
    let password = '';
    for (let i = 0; i < length; i++) {
      password += availableCharacters.charAt(Math.floor(Math.random() * availableCharacters.length));
    }
    return password;
  }

  let password = generatePassword(passLength, availableCharacters);
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
  return password;
}

generateBtn.addEventListener("click", writePassword);
