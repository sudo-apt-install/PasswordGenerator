// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
  var uppercaseLetters = lowercaseLetters.toUpperCase();
  var numbers = '0123456789';
  var specialChar = '!@#$%^&*()<>?/:;"|{}';
  var availableChars = "";

  // Determine password length
  var passLength = prompt("Enter a number from 8 to 128 for password length.");
  passLength = parseInt(passLength);
  if (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    alert("Please enter a valid password length between 8 and 128.");
    return;
  }

  // Prompt for character sets
  var includeLowercaseLetters = confirm("Do you want to include lowercase letters?");
  var includeUppercaseLetters = confirm("Do you want to include uppercase letters?");
  var incNumbers = confirm("Do you want to include numbers?");
  var includeSpecialChar = confirm("Do you want to include symbols?");

  // Create available characters based on user input
  if (includeLowercaseLetters) {
    availableChars += lowercaseLetters;
  }
  if (includeUppercaseLetters){
    availableChars += uppercaseLetters;
  }
  if (incNumbers){
    availableChars += numbers;
  }
  if (includeSpecialChar){
    availableChars += specialChar;
  }

  // Validate that the user has chosen at least one character set
  if (availableChars.length === 0) {
    alert("Please choose at least one character set.");
    return;
  }

  // Generate password
  var password = "";
  for (let i = 0; i < passLength; i++) {
    password += availableChars.charAt(Math.floor(Math.random() * availableChars.length));
  }

  // Update password text input with generated password
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
