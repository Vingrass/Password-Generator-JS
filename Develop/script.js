// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var PWlen = 0;

  while(PWlen < 8 || PWlen > 128){
    PWlen = prompt("Please enter the desired length of the password (8 to 128):");
    console.log(PWlen);
  }

  let incLower = confirm("Password can contain lowercase letters?")

  let incUpper = confirm("Password can contain uppercase letters?")

  let incNum = confirm("Password can contain numbers?")

  let incSped = confirm("Password can contain special characters?")

  if(!incLower && !incUpper && !incNum && !incSped){
    alert("The password has to contain something, come on now.")
    return
  }

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
