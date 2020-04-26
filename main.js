'use strict';

$(function(){
  $('.submenu').on('click', function(){
    $('.drawer').slideToggle();
  });
});

$(function() {
  var pagetop = $('#page_top');   
  pagetop.hide();
  $(window).scroll(function () {
      if ($(this).scrollTop() > 80) {
          pagetop.fadeIn();
      } else {
          pagetop.fadeOut();
      }
  });
  pagetop.click(function () {
      $('body,html').animate({
          scrollTop: 0
      }, 500); 
      return false;
  });
});
