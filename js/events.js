//define functions here
function getIt() {
    alert("Hey!");
    return;
}
function frameIt() {
    $('img').addClass("tasty");
    return;
}
function pressIt() {
  $("form").on("keydown", function(key) {
    if(key.which == 71){
      alert("You pressed G!");
    }
    return;
  });
}
function submitIt() {
    alert("Your form is going to be submitted now.");
    return;
}
$(document).ready(function(){

// call functions here
$('p').on("click", getIt);
$('img').on('load', frameIt);
pressIt();
$("form").on("submit", submitIt);
});
