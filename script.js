'use strict';
console.log('mňau');

$(function() {

  // contact form animations
  $('button').click(function() {
    $('.form').fadeToggle();
  })
  $(document).mouseup(function (e) {
    var container = $(".form");

        container.fadeOut();
  });

});
