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

  // worksMoreBtn
  var worksMoreBtn = $('.works__more-btn');
  var hiddenElements = $('.works__item--hidden');

  if (!hiddenElements.length) {
    worksMoreBtn.remove();
  }

  worksMoreBtn.click(function () {
    hiddenElements = $('.works__item--hidden');

    if (hiddenElements.length) {
      var currentElement = $('.works__item--hidden').eq(0);

      $('.works__item--hidden').eq(0).removeClass('works__item--hidden');
      $('.works__item--hidden').eq(0).removeClass('works__item--hidden');
      $('.works__item--hidden').eq(0).removeClass('works__item--hidden');

      if (hiddenElements.length < 4) {
        worksMoreBtn.remove();
      }

      $('body, html').animate({
        scrollTop: currentElement.offset().top
      }, 700);
    }
  });

  // examplesMoreBtn
  var examplesMoreBtn = $('.examples__more-btn');
  var hiddenElements = $('.examples__content--hidden');

  if (!hiddenElements.length) {
    examplesMoreBtn.remove();
  }

  examplesMoreBtn.click(function () {
    hiddenElements = $('.examples__content--hidden');

    if (hiddenElements.length) {
      var currentElement = $('.examples__content--hidden').eq(0);

      currentElement.removeClass('examples__content--hidden');

      $('.examples__photos').slick('unslick').slick();

      if (hiddenElements.length === 1) {
        examplesMoreBtn.remove();
      }

      $('body, html').animate({
        scrollTop: currentElement.offset().top
      }, 700);
    }
  });

  // popupForm
  $('.popup__form').submit(function () {
    var th = $(this);
    $.ajax({
      type: 'POST',
      url: 'mail.php',
      data: th.serialize()
    }).done(function() {
      $('.popup__success').fadeIn();
      th.trigger('reset');
      setTimeout(function () {
        $.fancybox.close();
      }, 3000);
      setTimeout(function () {
        $('.popup__success').fadeOut();
      }, 3100);
    });
    return false;
  });

  // formStyler
  setTimeout(function () {
    $('.calc-form__select, .calc-form__field').styler();
  }, 100);

  // sliders
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

  // calculator
  var calculate = function () {
    var material = $('#material').val();
    var length = $('#length').val();
    var width = $('#width').val();
    var depth = $('#depth').val();
    var system = $('#system').val();
    var basic = $('[name="basic"]');
    var additional = $('[name="additional"]');

    var basicK = 1;
    var additionalK = 0;

    basic.each(function () {
      if ($(this).prop('checked')) {
        basicK *= $(this).val();
      }
    });

    additional.each(function () {
      if ($(this).prop('checked')) {
        additionalK += parseInt($(this).val());
      }
    });

    return Math.round(length * width * depth * material * basicK * system + additionalK);
  };

  $('#total-price').text(calculate());

  $('#material, #length, #width, #depth, #system, [name="basic"], [name="additional"]').on('change', function () {
    $('#total-price').text(calculate());
  });

  $('#length, #width, #depth').on('keyup', function () {
    var min = parseInt($(this).attr('min'));
    var max = parseInt($(this).attr('max'));
    var val = parseInt($(this).val());
    if(val < min)
      $(this).val(min);
    if(val > max)
      $(this).val(max);
  });

});
