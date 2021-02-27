'use strict';

window.onload = function () {
  //EARTH
  //Showing the form
  const earth = document.getElementById('launchEarth');

  function showFormEarth() {
    const orderForm = document.getElementById('formEarth');
    orderForm.style.display = 'block';
  }

  //Hiding the form
  const closeEarth = document.getElementById('closeEarth');
  function hideFormEarth() {
    const orderForm = document.getElementById('formEarth');
    orderForm.style.display = 'none';
  }

  //MOON
  //Showing the form
  const moon = document.getElementById('launchMoon');

  function showFormMoon() {
    const orderForm = document.getElementById('formMoon');
    orderForm.style.display = 'block';
  }

  //Hiding the form
  const closeMoon = document.getElementById('closeMoon');

  function hideFormMoon() {
    const orderForm = document.getElementById('formMoon');
    orderForm.style.display = 'none';
  }

  //MARS
  //Showing the form
  const mars = document.getElementById('launchMars');

  function showFormMars() {
    const orderForm = document.getElementById('formMars');
    orderForm.style.display = 'block';
  }

  //Hiding the form
  const closeMars = document.getElementById('closeMars');

  function hideFormMars() {
    const orderForm = document.getElementById('formMars');
    orderForm.style.display = 'none';
  }

  //Calling the functions
  earth.addEventListener('click', showFormEarth);
  moon.addEventListener('click', showFormMoon);
  mars.addEventListener('click', showFormMars);
  closeEarth.addEventListener('click', hideFormEarth);
  closeMoon.addEventListener('click', hideFormMoon);
  closeMars.addEventListener('click', hideFormMars);
};

// mobile menu
const items = document.querySelector('#items');
const menu = document.querySelector('.hamburger');
menu.addEventListener('click', (e) => {
  menu.classList.toggle('open');
  items.classList.toggle('opened-list');
});
