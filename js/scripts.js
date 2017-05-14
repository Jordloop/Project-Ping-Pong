//BACK END LOGIC
var mainFunction = function(numInput){
  var oneToUserInput = [];

  for (var i = 1; i <=  numInput; i += 1) { // Builds an array from 1-numInput.
    oneToUserInput.push(i);
  };

  var outputArray = oneToUserInput.map(function(i) { // Checks divisiblility.
    if (i % 15 === 0) { // If i is divisible by 15 it passes through here.
      return " Ping-Pong"
    } else if (i % 5 === 0) { // If i is divisible by 5 it passes through here.
      return " Ping";
    } else if (i % 3 === 0) { // If i is divisible by 3 it passes through here.
      return  " Pong";
    } else { //Everthing else passes through here.
       return " " +i;
    };
  });
    return outputArray
};

// FRONT END LOGIC
$(document).ready(function(){
  $("form#userForm").submit(function(event) {
  event.preventDefault();

  var userInput = parseInt($("#input").val()); // this var holds the user's input.
  var output = mainFunction(userInput) // This var holds the return of mainFunction.

  $("#output").empty(); // Clears out any previous appended data.
  $("#output").append("<li>" + " " + output + "</li>"); // Appends the value of output to #output in HTML.
  });
});
