$(function () {

  var toTopBtn = $('.to-top');

  setTimeout(function () {
    $('.calc-form__select').styler();
  }, 100);

  $('.examples__photos').slick();

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) toTopBtn.fadeIn();
    else toTopBtn.fadeOut();
  });

  toTopBtn.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 700);
  });

});
