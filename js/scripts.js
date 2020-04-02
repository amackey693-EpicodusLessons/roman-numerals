// Business Logic : 
var ones = " ";
var tens = " ";
var hundreds = " ";
var numeralOnes = ["", "I", "II", "III","IV", "V", "VI", "VII", "VIII", "IX"]; 
var numeralTens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]; 
var numeralHundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "CM", "M"]; // Hundreds & 1000

for (var i=0; i < numeralOnes.length; i += 1) {
  ones += numeralOnes[i];
  console.log(ones)
}

for (var ii=0; ii< numeralTens.length; ii += 1) {
  tens += numeralTens[ii];
  console.log(tens)
}

for (var iii=0; iii < numeralHundreds.length; iii += 1) {
  hundreds += numeralHundreds[iii];
  console.log(hundreds)
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
    var romanNumeral = [];

    // console.log(userInput)

    $("#result").show(romanNumeral);
  });
});

