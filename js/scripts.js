// Business Logic : 

var numeralNumbers = [
  [3000, "MMM"], [2000, "MM"], [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], [90,"XC"], [50,"L"], [40,"XL"],[10,"X"], [9,"IX"], [5, "V"], [4,"IV"], [1, "I"] 
];
var toRomanNumeral = function(userInput) {
  if (userInput === 0) {
    return ' ';
  }
  for (var i=0; i < numeralNumbers.length; i++) {
    if (userInput >= numeralNumbers[i][0]) {
      return numeralNumbers[i][1] + toRomanNumeral (userInput - numeralNumbers[i][0]);
    }
  }
};
  // User Interface Logic : 
$ (document).ready(function(){
  $("form#numerals").submit(function(event){
    event.preventDefault();
    // var userInput = $("#userInput").val().split() //an array of single digit strings
    var userInput = parseInt($("#userInput").val());
    var newNumber = toRomanNumeral(userInput);

    console.log(newNumber)
    console.log(userInput)

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  

    // console.log(userInput)
    // get user input
    // split it into characters (1s 10s 100s, etc)
    // run one function on each character
    // concatenate them all together and into the DOM


    $("#result").append(newNumber);
  });
});