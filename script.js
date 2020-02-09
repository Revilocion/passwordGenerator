var display = document.getElementById("container2");
var password = document.getElementById("button");
var holder = document.getElementById("place");

var userinput = [];

var lowerCase = [
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
  "z"
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var upperCase = [
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
  "P"
];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

password.addEventListener("click", function() {
  var passwordLengthInput = prompt(
    "How many characters do you want your password to be? Between 8 and 128 characters."
  );
  if (passwordLengthInput > 8 && passwordLengthInput > 128) {
    function num(length, userinput) {
      var password = "";
      for(var i = 0; i < length; i++)
      {
        ans += arrayThatContainsALLCharactersPossible[Math.floor(Math.random() * arrayThatContainsALLCharactersPossible.length];
      }
      }
    }
  }
  var passwordLength = passwordLengthInput;

  var passwordLCharInput = confirm(
    "Would you like to have lower case characters in your password?"
  );
  if (confirm) {
  } else {
  }

  var passwordLChar = parseInt(passwordLCharInput);

  var passwordNumInput = confirm(
    "Would you like to have numbers in your password?"
  );
  var passwordNum = parseInt(passwordNumInput);

  var passwordUCharInput = confirm(
    "Would you like to have upper case letters in your password?"
  );
  var passwordUChar = parseInt(passwordUCharInput);

  var passwordSpecInput = confirm(
    "Would you like to have special characters in your password?"
  );
  var passwordSpec = parseInt(passwordSpecInput);

  var genpassword =
    lowerCase[Math.floor(Math.random() * lowerCase.length)] +
    numbers[Math.floor(Math.random() * numbers.length)] +
    upperCase[Math.floor(Math.random() * upperCase.length)] +
    special[Math.floor(Math.random() * special.length)];
  length = parseInt(length[Math.floor(Math.random() * length.length)]);

  console.log(genpassword);

  holder.textContent = genpassword;
});
