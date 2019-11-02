$(document).ready(function () {
  $('.main-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 1
  });

  $('#nav-icon').on('click', function(){
    $(this).toggleClass('open');
    $('.mob-nav__menu').toggleClass('show');
  });
});