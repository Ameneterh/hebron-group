var year = new Date().getFullYear();
document.getElementById("currentYear").innerHTML = year;

function getDropMenu() {
  var menu = document.getElementById("drop-down-menu");

  if (menu.style.display == "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

var modal = document.getElementById("tcmodal");
var span = document.getElementsByClassName("close")[0];
var butt = document.getElementById("btn");

function loadtcPage() {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
