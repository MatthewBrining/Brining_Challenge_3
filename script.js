// Assignment code here

// math randoms for array selection

randomUppercase = Math.floor(Math.random() * 26);
randomLowercase = Math.floor(Math.random() * 26);
randomNumber = Math.floor(Math.random() * 10);
randomSymbol = Math.floor(Math.random() * 33);

// character arrays

upperCaseArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
lowerCaseArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
numberArray = [1,2,3,4,5,6,7,8,9,0]
symbolArray = [' ','!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[',']','^','_','`','{','|','}','~']


//Determine length of desired password with validation
var generatePassword = function () {

var lengthPrompt = prompt("How long should your password be? Please enter a numeric value from 8 - 128")
if (lengthPrompt === "" || lengthPrompt === null || lengthPrompt < 8 || lengthPrompt > 128) {
  window.alert("You need to provide a valid answer! Please enter a whole number between 8 and 128.");
  return generatePassword ();
}
// User input for password type using a confirm selector for boolean values
// use boolean values to determine user selection and convert it to a numerical value for use in my switch

var confirmUppercase = confirm("Should your password contain uppercase letters?")
if (confirmUppercase){
  upperCase = 1.5
} else {
  upperCase = 0
}
var confirmLowercase = confirm("Should your password contain  lowercase letters?")
if (confirmLowercase){
  lowerCase = 2
}  else {
  lowerCase = 0
}
var confirmNumbers = confirm("Should your password contain numbers?")
if (confirmNumbers){
  numbers = 3
}  else {
  numbers = 0
}
var confirmSymbols = confirm("Should your password contain  symbols?")
if (confirmSymbols){
  symbols = 4
}  else {
  symbols = 0
}
// prolly a better way to do this - but this accounts for all options with a switch. 

var sum = upperCase + lowerCase + numbers + symbols



switch  (sum) {
  // uppercase only
  case 1.5:{

    for (let i = 0; i < lengthPrompt; i++) {
      password = password + upperCaseArray[randomUppercase = Math.floor(Math.random() * 26)]; 
    }
  }

  break;

  // lowercase only
  case 2:{

    for (let i = 0; i < lengthPrompt; i++) {
      password = password + lowerCaseArray[randomLowercase = Math.floor(Math.random() * 26)]; 
    }
  }
  break;

  //numbers only
  case 3:{

    for (let i = 0; i < lengthPrompt; i++) {
      password = password + numberArray[randomNumber = Math.floor(Math.random() * 10)]; 
    }
  }

  break;

  //uppercase + lowercase
  case 3.5:
    {

      for (let i = 0; i < lengthPrompt; i++) {
        var selector = Math.floor(Math.random() * 2)
        if (selector===0){
        password = password + lowerCaseArray[randomLowercase = Math.floor(Math.random() * 26)];
        }
        else {
          password = password + upperCaseArray[randomUppercase = Math.floor(Math.random() * 26)];
        }
      }
    }

  break;

  //symbols only
  case 4:{

    for (let i = 0; i < lengthPrompt; i++) {
      password = password + symbolArray[randomUppercase = Math.floor(Math.random() * 33)]; 
    }
  }

  break;

  //uppercase + numbers
  case 4.5:{

    for (let i = 0; i < lengthPrompt; i++) {
      var selector = Math.floor(Math.random() * 2)
      if (selector===0){
      password = password + upperCaseArray[randomUppercase = Math.floor(Math.random() * 26)];
      }
      else {
        password = password + numberArray[randomNumber = Math.floor(Math.random() * 10)];
      }
    }
  }

  break;

  //lowercase + numbers
  case 5:{

    for (let i = 0; i < lengthPrompt; i++) {
      var selector = Math.floor(Math.random() * 2)
      if (selector===0){
      password = password + lowerCaseArray[randomLowercase = Math.floor(Math.random() * 26)];
      }
      else {
        password = password + numberArray[randomNumber = Math.floor(Math.random() * 10)];
      }
    }
  }

  break;

  //Uppercase + symbols
  case 5.5:{

    for (let i = 0; i < lengthPrompt; i++) {
      var selector = Math.floor(Math.random() * 2)
      if (selector===0){
      password = password + symbolArray[randomSymbol = Math.floor(Math.random() * 33)];
      }
      else {
        password = password + upperCaseArray[randomUppercase = Math.floor(Math.random() * 26)];
      }
    }
  }

  break;

  //Lowercase + symbols
  case 6:{

    for (let i = 0; i < lengthPrompt; i++) {
      var selector = Math.floor(Math.random() * 2)
      if (selector===0){
        password = password + lowerCaseArray[randomLowercase = Math.floor(Math.random() * 26)];
      }
      else {
        password = password + symbolArray[randomSymbol = Math.floor(Math.random() * 33)];
      }
    }
  }

  break;

  //Uppercase + lowercase + numbers
  case 6.5:{

    for (let i = 0; i < lengthPrompt; i++) {
      var selector = Math.floor(Math.random() * 3)
      if (Math.floor(Math.random() * 3)===0){
        password = password + upperCaseArray[randomUppercase = Math.floor(Math.random() * 26)];
      } else if (selector===1){
        password = password + lowerCaseArray[randomLowercase = Math.floor(Math.random() * 26)];
      } else {
        password = password + numberArray[randomNumber = Math.floor(Math.random() * 10)];
      }
    }
  }

  break;

  //numbers + symbols
  case 7:{

    for (let i = 0; i < lengthPrompt; i++) {
      var selector = Math.floor(Math.random() * 2)
      if (selector===0){
        password = password + numberArray[randomNumber = Math.floor(Math.random() * 10)];
      }
      else {
        password = password + symbolArray[randomSymbol = Math.floor(Math.random() * 33)];
      }
    }
  }

  break;

  //uppercase + lowercase + symbols
  case 7.5:{

    for (let i = 0; i < lengthPrompt; i++) {
      var selector = Math.floor(Math.random() * 3)
      if (selector===0){
        password = password + upperCaseArray[randomUppercase = Math.floor(Math.random() * 26)];
      } else if (selector===1){
        password = password + lowerCaseArray[randomLowercase = Math.floor(Math.random() * 26)];
      } else {
        password = password + symbolArray[randomSymbol = Math.floor(Math.random() * 33)];
      }
    }
  }

  break;

  //uppercase + numbers + symbols
  case 8.5:{

    for (let i = 0; i < lengthPrompt; i++) {
      var selector = Math.floor(Math.random() * 3)
      if (selector===0){
        password = password + upperCaseArray[randomUppercase = Math.floor(Math.random() * 26)];
      } else if (selector===1){
        password = password + numberArray[randomNumber = Math.floor(Math.random() * 10)];
      } else {
        password = password + symbolArray[randomSymbol = Math.floor(Math.random() * 33)];
      }
    }
  }

  break;

  //lowercase + numbers + symbols
  case 9:{

    for (let i = 0; i < lengthPrompt; i++) {
      var selector = Math.floor(Math.random() * 3)
      if (selector===0){
        password = password + lowerCaseArray[randomLowercase = Math.floor(Math.random() * 26)];
      } else if (selector===1){
        password = password + numberArray[randomNumber = Math.floor(Math.random() * 10)];
      } else {
        password = password + symbolArray[randomSymbol = Math.floor(Math.random() * 33)];
      }
    }
  }

  break;

  //upppercase + lowercase + numbers + symbols
  case 10.5:{

    for (let i = 0; i < lengthPrompt; i++) {
      var selector = Math.floor(Math.random() * 4)
      if (selector===0){
        password = password + upperCaseArray[randomUppercase = Math.floor(Math.random() * 26)];
      } else if (selector===1){
        password = password + lowerCaseArray[randomLowercase = Math.floor(Math.random() * 26)];
      } else if (selector===2){
        password = password + numberArray[randomNumber = Math.floor(Math.random() * 10)];
      } else {
        password = password + symbolArray[randomSymbol = Math.floor(Math.random() * 33)];
      }
    }
  }

  break;

} return password; 
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
