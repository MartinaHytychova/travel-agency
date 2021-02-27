'use strict';
console.log('mňau');

window.onload=function(){
  const omg = document.getElementById(“omg”);
  console.log(omg)
  omg.addEventListener(“click”, showForm());

  function showForm() {
      document.getElementById(“form”).classList.add(“form-show”);
  }