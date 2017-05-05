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
    console.log(oneToUserInput);
  for (i = 1; i <= oneToUserInput.length; i += 1) {
    if (i % 3 === 0) {
      oneToUserInput.splice(i - 1, 1, "Ping");
    };//for oneToUserInput
  }
    console.log(oneToUserInput);
    return gameLength
  }//main if/else
}//gameLength function





// FRONT END LOGIC
$(document).ready(function(){
  $("form#userForm").submit(function(event) {
  event.preventDefault();
  var userInput = parseInt($("#input").val());
  var output = foo(userInput)
  $("#output").empty();
  $("#output").append(output);
  });
});
