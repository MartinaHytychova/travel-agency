"use strict";
console.log("mňau");

window.onload = function() {
  const earth = document.getElementById("launchEarth");

  function showForm() {
    var x = document.getElementById("form");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  earth.addEventListener("click", showForm);
};
