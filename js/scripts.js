// Business Logic : 





// User Interface Logic : 
$ (document).ready(function(){
  $("form#numerals").submit(function(event){
    event.preventDefault();
    var userInput = parseInt($("#userInput").val());
    var output = [];

    console.log(userInput)

    $("#result").show(output);
  });
});

