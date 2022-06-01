

// //Technical Acceptance Criteria: 40%
// Application deployed at live URL.
// Application loads with no errors.
// Application GitHub URL submitted.
// GitHub repository that contains application code.
// Application user experience is intuitive and easy to navigate.
// Application user interface style is clean and polished.
// Application resembles the mock-up functionality provided in the Challenge instructions.
// Repository has a unique name.
// Repository follows best practices for file structure and naming conventions.
// Repository follows best practices for class/id naming conventions, indentation, quality comments, etc.
// Repository contains multiple descriptive commit messages.
// Repository contains a quality README file with description, screenshot, and link to deployed application
// You are required to submit BOTH of the following for review:
// The URL of the deployed application.
// The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.//

// // Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  window.alert("Welcome to Aalok's Amazing Password Generator!");
  // We will generate a password based on the following preferences:
  // (1) preferred length between 8 to 128 characters;
  // (2) at least one lowercase letter;
  // (3) at least one uppercase letter;
  // (4) at least one numeric character;
  // (5) at least one of the following special characters: !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~)")

  var smallCapsInput = window.confirm(
    "Press 'OK' if you would like lowercase letters in your random password."
  );
  var largeCapsInput = window.confirm(
    "Press 'OK' if you would like uppercase letters in your password."
  );
  var numericsInput = window.confirm(
    "Press 'OK' if you would like numerics in your password."
  );
  var yourSpecialInput = window.confirm(
    "Press 'OK' if you would like special characters in your random password."
  );
  var yourPasswordLength 
  var unvalidInput = true;
  while(unvalidInput)
  {
    yourPasswordLength = window.prompt(
        "How many characters would your like your password?  Please a value from 8 to 128 characters only."
    );
    unvalidInput = yourPasswordLength < 8 || yourPasswordLength > 128
  }
  


  var smallCaps = "abcdefghijklmnopqrstuvwxyz"; //create variable for small caps string
  var largeCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //create variable for large caps string
  var numerics = "0123456789"; //create variable for numerics string
  var yourSpecial = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

  console.log(smallCapsInput);
  console.log(largeCapsInput);
  console.log(numericsInput);
  console.log(yourSpecialInput);
  console.log(yourPasswordLength);
  var passwordOptions = "" //empty string
 
  if (smallCapsInput == true && largeCapsInput == true && numericsInput == true && yourSpecialInput == true)
  {
      passwordOptions = smallCaps.concat(largeCaps, numerics, yourSpecial)
  }
  else if (smallCapsInput == true && largeCapsInput == true && numericsInput == true)
  {
      passwordOptions = smallCaps.concat(largeCaps, numerics)
  }
  else if (smallCapsInput == true && largeCapsInput == true && yourSpecialInput == true)
  {
      passwordOptions = smallCaps.concat(largeCaps, yourSpecial)
  }
  else if (smallCapsInput == true && numericsInput == true && yourSpecialInput == true)
  {
      passwordOptions = smallCaps.concat(numerics, yourSpecial)
  }
  else if (largeCapsInput == true && numericsInput == true && yourSpecialInput == true)
  {
      passwordOptions = largeCaps.concat(numerics, yourSpecial)
  }
  else if (smallCapsInput == true && largeCapsInput == true)
  {
      passwordOptions = smallCaps.concat(largeCaps)
  }
  else if (smallCapsInput == true && numericsInput == true)
  {
      passwordOptions = smallCaps.concat(numerics)
  }
  else if (smallCapsInput == true && yourSpecialInput == true)
  {
      passwordOptions = smallCaps.concat(yourSpecial)
  }
  else if (largeCapsInput == true && numericsInput == true)
  {
      passwordOptions = largeCaps.concat(numerics)
  }
  else if (largeCapsInput == true && yourSpecialInput == true)
  {
      passwordOptions = largeCaps.concat(yourSpecial)
  }
  else if (numericsInput == true && yourSpecialInput == true)
  {
      passwordOptions = numerics.concat(yourSpecial)
  }
  else if (smallCapsInput == true)
  {
    passwordOptions = smallCaps;
  }
  else if (largeCapsInput == true)
  {
      passwordOptions = largeCaps;
  }
  else if (numericsInput == true)
  {
     passwordOptions = numerics;
  }
  else if (yourSpecialInput == true)
  {
     passwordOptions = yourSpecial;
  }

  console.log(passwordOptions)
  var result = "";
  for ( var i = 0; i < yourPasswordLength; i++ ) {
    result += passwordOptions.charAt(Math.floor(Math.random() * 
passwordOptions.length));
 } 
 return result;
}

