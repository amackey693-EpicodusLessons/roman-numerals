// Business Logic : 

var ones = "";
var tens = "";
var hundreds = "";
var thousands = "";
var numeralOnes = ["I", "II", "III","IV", "V", "VI", "VII", "VIII", "IX"]; 
var numeralTens = ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"]; 
var numeralHundreds = ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "CM"];
var numeralThousands = ["M", "MM", "MMM"];

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

//thousands
for (var i=0; i< numeralThousands.length; i += 1) {
  thousands = numeralThousands[i];
  // console.log(thousands)
}

// var numeralConverter = function (converter) {
//   if (userInput === "1") {
//     return ones[0].replace(userInput);
//     // console.log(userInput)
//   } 
// }

//   if (numeralOnes.includes(userInput)) {
//     userInput = (userInput === numeralOnes);
//     console.log(userInput)
//   }
// }




  



  




  // User Interface Logic : 
$ (document).ready(function(){
  $("form#numerals").submit(function(event){
    event.preventDefault();
    var userInput = $("#userInput").val().split() //an array of single digit strings
    // var userInput = parseInt($("#userInput").val()) 

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
  

    console.log(userInput)
    // get user input
    // split it into characters (1s 10s 100s, etc)
    // run one function on each character
    // concatenate them all together and into the DOM

    
        var arrString = string.split(" ");
      arrString.forEach(function(romans){

        if (numeralOnes.includes(userInput)) {
           romans = ;
        }

        else if (numeralOnes.includes(userInput)) && (numeralTens.includes(userInput)) {
          romans = ; 
        }
      })


    // var arrString = string.split(" ");
    //     arrString.forEach(function(word){
          
    //       // pulls words beginning with vowels and adds "way" at the end

    //       if (vowels.includes(word[0])) {
    //         word = word + "way";
    //         pig.push(word);
    //       }

    //       else if (word[0] === "q" && word[1] === "u") {
    //         var qWord = word.toString();
    //         var qWord2 =qWord.substr(2);
    //         pig.push(qWord2+"quway");
    //       }
    $("#result").show();
  });
});
