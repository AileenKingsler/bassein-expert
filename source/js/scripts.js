$(function () {

  var toTopBtn = $('.to-top');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) toTopBtn.fadeIn();
    else toTopBtn.fadeOut();
  });

  toTopBtn.click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 700);
  });

  setTimeout(function () {
    $('.calc-form__select').styler();
  }, 100);

  $('.examples__photos').slick();

  $('.sertificates__list').slick({
    slidesToShow: 4,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }
    ]
  });

  $('.testimonials__list').slick({
    slidesToShow: 3,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }
    ]
  });

  $('.mistakes__list').slick({
    slidesToShow: 3,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    }
    ]
  });

});
