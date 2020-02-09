var display = document.getElementById("container2");
var password = document.getElementById("button");
var holder = document.getElementById("place");

arrayThatContainsAllCharactersPossible = [
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
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "=",
  "+"
];

password.addEventListener("click", function() {
  var passwordLengthInput = prompt(
    "How many characters do you want your password to be? Between 8 and 128 characters."
  );
  var passwordLength = parseInt(passwordLengthInput);
  var generatedPassword = "";
  if (passwordLength >= 8 && passwordLength <= 128) {
    for (var i = 0; i < passwordLength; i++) {
      generatedPassword =
        generatedPassword +
        arrayThatContainsAllCharactersPossible[
          Math.floor(
            Math.random() * arrayThatContainsAllCharactersPossible.length
          )
        ];
    }
  }
  holder.textContent = generatedPassword;
});
