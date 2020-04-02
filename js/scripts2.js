// Business Logic



var toRomanNumeral = function(userInput) {
  if (userInput === 500) {
    return "D"
  }
};



// UI Logic
$ (document).ready(function(){
  $("form#numerals").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("input#userInput").val()) 
    var romanNumerals = toRomanNumeral(userInput) 


    console.log(userInput)



    $("#result").show(romanNumerals);
  });
});
