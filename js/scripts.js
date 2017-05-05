var foo = function(gameLength){
  var numCheck = isNaN(gameLength);
  var oneToUserInput = []
  if (numCheck === true) {
    gameLength = "Please enter a number.";
    return gameLength
  } else {
    for (var i = 1; i <=  gameLength; i += 1) {
      oneToUserInput.push(i);
    }//for gameLength
  for (i = 1; i <= oneToUserInput.length; i += 1) { //Adds "Ping", "Pong", "Ping-Pong"
    if (i % 3 === 0) {
      oneToUserInput.splice(i - 1, 1, "Ping");
    } else if (i % 5 === 0) {
      oneToUserInput.splice(i - 1, 1, "Pong");
    } else if (i % 10 === 0) {
      oneToUserInput.splice(i - 1, 1, "Pong-Pong");
    }//for oneToUserInput
  }
    console.log(oneToUserInput);
    return oneToUserInput
  }//main if/else
}//gameLength function





// FRONT END LOGIC
$(document).ready(function(){
  $("form#userForm").submit(function(event) {
  event.preventDefault();
  var userInput = parseInt($("#input").val());
  var output = foo(userInput)
  $(console.log(output));
  $("#output").empty();
  $("#output").append("<li>" + output + "<li>");
  });
});
