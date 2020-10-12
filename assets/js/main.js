$(document).ready(function () {

  $('.header-navbar_btn').on('click', function () {
    $(this).toggleClass('header-navbar_btn--active');
    $('.header-navbar_list').stop(true, true).fadeToggle(500);
  });

});