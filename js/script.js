$(document).ready(function() {
  
  $("#greet").click(function(e) {
    e.preventDefault();
    
    var name = $("#name").val();
    var service = "http://localhost:4567/greet";
    $.get(service + "/" + name)
    .success(function(greeting) {
            $("#greeting").html(greeting);
    });
  });
  
});