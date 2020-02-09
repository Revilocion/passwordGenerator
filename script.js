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

//var passwordLengthInput = prompt("How many characters do you want your password to be?");
//var passwordLength = 0; //Default length for password.

if (passwordLengthInput !== null && passwordLengthInput !== "") {
  passwordLength = parseInt(passwordLengthInput);
} else {
  //to do: tell user
}

password.addEventListener("click", function() {
  //This didn't work...
  lowerCase[Math.floor(Math.random() * lowerCase.length)];
  numbers[Math.floor(Math.random() * numbers.length)];
  upperCase[Math.floor(Math.random() * upperCase.length)];
  special[Math.floor(Math.random() * special.length)];

  //how am I going to be able to tie this entire function into showing the password?

  //we may need the outcome of this function to equal that of the "holder"
  var genpassword =
    lowerCase[Math.floor(Math.random() * lowerCase.length)] +
    numbers[Math.floor(Math.random() * numbers.length)] +
    upperCase[Math.floor(Math.random() * upperCase.length)] +
    special[Math.floor(Math.random() * special.length)];

  console.log(genpassword);

  holder.textContent = genpassword;
});

/*When the button is clicked it will run the function listed up top.
  When the function is ran it will run into the function to actually display on screen.
*/
