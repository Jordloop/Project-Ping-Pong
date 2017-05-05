// FRONT END LOGIC
$(document).ready(function(){
  $("form#userForm").submit(function(event) {
  event.preventDefault();
  var userInput = parseInt($("#input").val());
  console.log(userInput);
  var output = // call function here;
  $("#output").empty();
  $("#output").append("userInput = " + userInput);
  });
});
