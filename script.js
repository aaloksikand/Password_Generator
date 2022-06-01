
var generateBtn = document.querySelector("#generate");  //This will write the password in the generatebtn box

function writePassword() 
{
  var password = generatePassword();  //variable 'password' will equal what generatePassword function returns
  var passwordText = document.querySelector("#password");  //id #password in html document will equal passwordText
  passwordText.value = password; //the value of passwordText equals password
}

generateBtn.addEventListener("click", writePassword);

function generatePassword() 
{
  window.alert("Welcome to Aalok's Amazing Password Generator!"); //This is my clever alert

  var yourPasswordLength //Creating a variable to store the password length from 8 to 128 characters that the user specifies
  var invalidInput = true;  //Creeating a feedback loop if user enters something other than a numerical value between 8 and 128
  while(invalidInput)  //creating a while loop
  {
    yourPasswordLength = window.prompt(
        "Please enter your desired length of password between 8 and 128 characters only."
    );
    invalidInput = yourPasswordLength < 8 || yourPasswordLength > 128 || isNaN(yourPasswordLength)  //This will keep asking for a valid number if user selects a non-number or a number outside of the 8-128 range
  }

  var smallCapsInput = window.confirm  //stores whether user wants small caps
  (
    "Would you like lowercase letters in your random password? Press 'OK' for 'Yes' or 'Cancel' for 'No'."  //asks users whether they want small caps
  );
  var largeCapsInput = window.confirm  //stores whether user wants large caps
  (
    "Would you like uppercase letters in your random password? Press 'OK' for 'Yes' or 'Cancel' for 'No'."  //asks users whether they want large caps
  );
  var numericsInput = window.confirm  //stores whether user wants numerics
  (
    "Would you like numerics in your random password? Press 'OK' for 'Yes' or 'Cancel' for 'No'."  //asks users whether they wants numerics
  );
  var yourSpecialInput = window.confirm  //stores users whether they want special characters
  (
    "Would you like special characters in your random password? Press 'OK' for 'Yes' or 'Cancel' for 'No'."  //asks users whether they wants special characters
  );

  var smallCaps = "abcdefghijklmnopqrstuvwxyz"; //create variable for small caps string
  var largeCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"; //create variable for large caps string
  var numerics = "0123456789"; //create variable for numerics string
  var yourSpecial = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~" //create a variable for special characters string

  console.log(smallCapsInput);  //tests stored value
  console.log(largeCapsInput);  //tests stored value
  console.log(numericsInput);  //tests stored value 
  console.log(yourSpecialInput);  //tests stored value
  console.log(yourPasswordLength);  //tests stored value
  var passwordOptions = "" //empty string for now
 // over a dozen variations the user can submit
  if (smallCapsInput == true && largeCapsInput == true && numericsInput == true && yourSpecialInput == true)
  {
      passwordOptions = smallCaps.concat(largeCaps, numerics, yourSpecial)  //concats the desired strings together 
  }
  else if (smallCapsInput == true && largeCapsInput == true && numericsInput == true)
  {
      passwordOptions = smallCaps.concat(largeCaps, numerics) //concats the desired strings together 
  }
  else if (smallCapsInput == true && largeCapsInput == true && yourSpecialInput == true)
  {
      passwordOptions = smallCaps.concat(largeCaps, yourSpecial)  //concats the desired strings together 
  }
  else if (smallCapsInput == true && numericsInput == true && yourSpecialInput == true)
  {
      passwordOptions = smallCaps.concat(numerics, yourSpecial)  //concats the desired strings together 
  }
  else if (largeCapsInput == true && numericsInput == true && yourSpecialInput == true)
  {
      passwordOptions = largeCaps.concat(numerics, yourSpecial)  //concats the desired strings together 
  }
  else if (smallCapsInput == true && largeCapsInput == true)
  {
      passwordOptions = smallCaps.concat(largeCaps)  //concats the desired strings together 
  }
  else if (smallCapsInput == true && numericsInput == true)
  {
      passwordOptions = smallCaps.concat(numerics)  //concats the desired strings together 
  }
  else if (smallCapsInput == true && yourSpecialInput == true)
  {
      passwordOptions = smallCaps.concat(yourSpecial)  //concats the desired strings together 
  }
  else if (largeCapsInput == true && numericsInput == true)
  {
      passwordOptions = largeCaps.concat(numerics)  //concats the desired strings together 
  }
  else if (largeCapsInput == true && yourSpecialInput == true)
  {
      passwordOptions = largeCaps.concat(yourSpecial)  //concats the desired strings together 
  }
  else if (numericsInput == true && yourSpecialInput == true)
  {
      passwordOptions = numerics.concat(yourSpecial)  //concats the desired strings together 
  }
  else if (smallCapsInput == true)
  {
    passwordOptions = smallCaps;  //concats the desired strings together 
  }
  else if (largeCapsInput == true)
  {
      passwordOptions = largeCaps;  //concats the desired strings together 
  }
  else if (numericsInput == true)
  {
     passwordOptions = numerics;  //concats the desired strings together 
  }
  else if (yourSpecialInput == true)
  {
     passwordOptions = yourSpecial;  //concats the desired strings together 
  }  
  else if (smallCapsInput == false && largeCapsInput == false && numericsInput == false && yourSpecialInput == false)
  {
    alert("You must pick at least one type of character for your auto-generated password.")  //returns an error message if no types of characters have been selected
    return generatePassword();  //returns an error message if no types of characters have been selected
    
  }
  console.log(passwordOptions)  //tests the password string
  var result = "";  //creates an empty string called 'result'
  for ( var i = 0; i < yourPasswordLength; i++ ) {
    result += passwordOptions.charAt(Math.floor(Math.random() * 
passwordOptions.length));  //creates randomized number of all desired characters as long as user wants
 } 
 return result;  //returns value into variable 'password' created by generatePassword function
}

