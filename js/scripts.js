var foo = function(gameLength){
  var numCheck = isNaN(gameLength);
  console.log(numCheck);
  if (numCheck === true) {
    gameLength = "Please enter a number.";
    return gameLength
  } else {
    return gameLength
  }//main if/else
}//gameLength function
// FRONT END LOGIC
$(document).ready(function(){
  $("form#userForm").submit(function(event) {
  event.preventDefault();
  var userInput = parseInt($("#input").val());
  var output = foo(userInput)
  console.log(output);
  $("#output").empty();
  $("#output").append(output);
  });
});
