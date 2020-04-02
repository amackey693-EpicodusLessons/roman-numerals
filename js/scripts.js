// Business Logic : 
var ones = " ";
var tens = " ";
var hundreds = " ";
var numeralOnes = ["", "I", "II", "III","IV", "V", "VI", "VII", "VIII", "IX"]; 
var numeralTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]; 
var numeralHundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "CM", "M"]; // Hundreds & 1000

//ones
for (var i=0; i < numeralOnes.length; i += 1) {
  ones = numeralOnes[i];
  // console.log(ones)
}

//tens
for (var i=0; i< numeralTens.length; i += 1) {
  tens = numeralTens[i];
  // console.log(tens)
}

//hundreds
for (var i=0; i < numeralHundreds.length; i += 1) {
  hundreds = numeralHundreds[i];
  // console.log(hundreds)
}

var numeralConverter = function (userInput) {
//   if (userInput <= 10) {
//     return ones === userInput;
//     console.log(userInput)
//   } 

// }

  if (numeralOnes.includes(userInput)) {
    userInput = (userInput === numeralOnes);
    console.log(userInput)
  }
}




// var total = 0;
// var summands = [1, 7, 12, 22, 15];
// for (var index = 0; index < summands.length; index += 1) {
//   total += summands[index];
//   console.log(total)


// User Interface Logic : 
$ (document).ready(function(){
  $("form#numerals").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var romanNumeral = []

    $("#result").show(romanNumeral);
  });
});