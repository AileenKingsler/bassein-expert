$(function () {

  // mainNav
  var mainNav = document.querySelector('.main-nav');
  var mainNavToggle = mainNav.querySelector('.main-nav__toggle');

  mainNav.classList.remove('main-nav--no-js');
  mainNav.classList.remove('main-nav--opened');
  mainNav.classList.add('main-nav--closed');

  mainNavToggle.addEventListener('click', function() {
    if (mainNav.classList.contains('main-nav--closed')) {
      mainNav.classList.remove('main-nav--closed');
      mainNav.classList.add('main-nav--opened');
    } else {
      mainNav.classList.add('main-nav--closed');
      mainNav.classList.remove('main-nav--opened');
    }
  });

  // toTopBtn
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

  // formStyler
  setTimeout(function () {
    $('.calc-form__select').styler();
  }, 100);

  $('.examples__photos').slick();

  // sliders
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
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
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
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1
      }
    }
    ]
  });

});
