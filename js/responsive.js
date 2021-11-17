function myFunction() {
  var x = document.getElementById("topNavBar");
  if (x.classList.contains("responsive")) {
    x.classList.remove("responsive");
  } else {
    x.classList.add("responsive");
  }
}