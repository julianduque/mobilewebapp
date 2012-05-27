
$(document).ready(function() {
  
  $("#greet").click(function(e) {
    e.preventDefault();
    var name = $("#name").val();
    var greeting = "Hello, " + name;
    $("#greeting").html(greeting);
  });
  
});



