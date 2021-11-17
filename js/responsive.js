function myFunction() {
  var x = document.getElementById("basic-navbar");
  if (x === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
