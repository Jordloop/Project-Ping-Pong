//BACK END LOGIC
var mainFunction = function(numInput){
  var nanCheck = isNaN(numInput);
  var oneToUserInput = []
  if (nanCheck === true) {
    gameLength = "Please enter a number.";
    return numInput
  } else {
    for (var i = 1; i <=  numInput; i += 1) {
      oneToUserInput.push(i);
    };//for gameLength
  for (i = 1; i <= oneToUserInput.length; i += 1) { //Adds "Ping", "Pong", "Ping-Pong"
    if (i % 3 === 0) {
      oneToUserInput.splice(i - 1, 1, "<li> Ping </li>");
    } else if (i % 5 === 0) {
      oneToUserInput.splice(i - 1, 1, "<li> Pong </li>");
    } else if (i % 10 === 0) {
      oneToUserInput.splice(i - 1, 1, "<li> Pong-Pong </li>");
    } else {
      oneToUserInput.splice(i - 1, 1, "<li>" + i + "</li>");
    };
  };
    return oneToUserInput
  };//main if/else
};//mainFunction
// FRONT END LOGIC
$(document).ready(function(){
  $("form#userForm").submit(function(event) {
  event.preventDefault();
  var userInput = parseInt($("#input").val());
  var output = mainFunction(userInput)
  $("#output").empty();
  $("#output").append(output);
  });
});
