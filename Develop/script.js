// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var PWlen = 0;

  while(PWlen < 8 || PWlen > 128){
    PWlen = parseInt(prompt("Please enter the desired length of the password (8 to 128):"));
    console.log(PWlen);
  }

  let incLower = confirm("Password can contain lowercase letters?")

  let incUpper = confirm("Password can contain uppercase letters?")

  let incNum = confirm("Password can contain numbers?")

  let incSpec = confirm("Password can contain special characters?")

  if(!incLower && !incUpper && !incNum && !incSpec){
    alert("The password has to contain something, come on now.")
    return
  }

  var password = generatePassword(PWlen, incLower, incUpper, incNum, incSpec);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(PWlen, incLower, incUpper, incNum, incSpec){

  var charPool = "";
  var password = "";

  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericChars = "1234567890"
  var specChars = "~!@#$%^&*()-=+_;:[]{}|,.<>/?"

  if(incLower){
    charPool += lowerCase;
  }
  if(incUpper) {
    charPool += upperCase;
  }
  if(incNum){
    charPool += numericChars;
  }
  if(incSpec){
    charPool += specChars; 
  }

  console.log(charPool);

  var charPoolLen = charPool.length;
  var randoNum = 0;

  for(let i = 0; i < PWlen; i++){
    randoNum = Math.floor(Math.random() * charPoolLen);
    password += charPool[randoNum];
  }


  return password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
