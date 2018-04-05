$(document).ready(function () {
  document.getElementById("step1").addEventListener("click",cambiarPaso,false);
});
function cambiarPaso(event) {
  event.preventDefault();
var paso = event.target.id;
switch (paso) {
  case "step1":
$("#personalData").slideUp(function(){
  $("#certificates").slideDown();
});
    break;


}
}
