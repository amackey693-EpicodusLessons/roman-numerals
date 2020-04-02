// Business Logic
var numeralOnes = [1==="I", 2==="II", 3==="III",4==="IV", 5==="V", 6==="VI", 7==="VII", 8==="VIII", 9==="IX"]; 

var toRomanNumeral = function(userInput) {
  if (userInput.length >= 9) {
    return numeralOnes.pop(userInput);
  }
};







// UI Logic
$ (document).ready(function(){
  $("form#numerals").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val()) 
    var romanNumerals = toRomanNumeral(userInput) 


    console.log(userInput)

    
 
    $("#result").show();
  });
});
