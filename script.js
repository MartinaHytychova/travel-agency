"use strict";
console.log("mňau");

window.onload = function() {
  const earth = document.getElementById("launchEarth");
  const moon = document.getElementById("launchMoon");
  const mars = document.getElementById("launchMars");

  //Displaying the form
  function showForm() {
    const orderForm = document.getElementById("form");

    orderForm.style.display = "block";
  }

  //Hiding the form
  const close = document.getElementById("close");

  function hideForm() {
    const orderForm = document.getElementById("form");

    orderForm.style.display = "none";
  }

  earth.addEventListener("click", showForm);
  moon.addEventListener("click", showForm);
  mars.addEventListener("click", showForm);
  close.addEventListener("click", hideForm);
};

// mobile menu
const items = document.querySelector("#items");
const menu = document.querySelector(".hamburger");
menu.addEventListener("click", e => {
  menu.classList.toggle("open");
  items.classList.toggle("opened-list");
});
