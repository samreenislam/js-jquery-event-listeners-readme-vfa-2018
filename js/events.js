//define functions here
function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
    return;
  });
}
function frameIt() {
  $('img').on("load", function() {
    alert("loaded!");
    $('img').addClass('tasty');
  });
}
function pressIt() {
  $("form").on("keydown", function(key) {
    if(key.which == 71){
      alert("You pressed G!");
    }
  });
}
function submitIt() {
  $("form").on("submit", function() {
    alert("Your form is going to be submitted now.");
  });
}
$(document).ready(function(){

// call functions here
getIt();
frameIt();
pressIt();
submitIt();
});
