//BACK END LOGIC
var mainFunction = function(numInput){
  var nanCheck = isNaN(numInput);
  var oneToUserInput = []
  if (nanCheck === true) { // Input that isNaN passes through here.
    numInput = "Please enter a number.";
    return numInput
  } else { // Input that is a number passes through here.
    for (var i = 1; i <=  numInput; i += 1) {
      oneToUserInput.push(i);
    };
  for (i = 1; i <= oneToUserInput.length; i += 1) { // Checks divisiblility.
    if (i % 3 === 0) { // If i is divisible by 3 it passes through here.
      oneToUserInput.splice(i - 1, 1, "<li> Ping </li>");
    } else if (i % 5 === 0) { // If i is divisible by 5 it passes through here.
      oneToUserInput.splice(i - 1, 1, "<li> Pong </li>");
    } else if (i % 10 === 0) { // If i is divisible by 15 it passes through here.
      oneToUserInput.splice(i - 1, 1, "<li> Pong-Pong </li>");
    } else { //Everthing else passes through here.
      oneToUserInput.splice(i - 1, 1, "<li>" + i + "</li>");
    };
  };
    return oneToUserInput
  };
};
// FRONT END LOGIC
$(document).ready(function(){
  $("form#userForm").submit(function(event) {
  event.preventDefault();
  var userInput = parseInt($("#input").val()); // this var holds the user's input.
  var output = mainFunction(userInput) // This var holds the return of mainFunction.
  $("#output").empty(); // Clears out any previous appended data.
  $("#output").append(output); // Appends the value of output to #output in HTML.
  });
});
