$(document).ready(function(){

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    center: true,
    items: 4,
    margin: 0,
    // loop: true,
    startPosition: 3, // только если слайдов более 3-х изначально, завязан на разметку — в третьем слайде выбранный по умолчанию радиобатон
    nav: true,
    navText: false,
    responsiveClass:true,
    responsive : {
    // breakpoint from 0 up
      0 : {
          items : 1,
      },
      // breakpoint from 320 up
      320 : {
          items : 1,
          mouseDrag: false,
      },
      // breakpoint from 960 up
      960 : {
          items : 3,
          mouseDrag: false,
      },
      // breakpoint from 1028 up
      1028 : {
          items : 3,
          mouseDrag: false,
      },
      1200 : {
          items : 4,
      },
      1600 : {
          items : 5,
      },
      1920 : {
          items : 6,
      }
    }
  });

  //

  $('.stamp-preview').on('click', function() {
    $('.stamp-preview').removeClass('active');
    $(this).toggleClass('active');
  })

  //

  $('.product-type').on('click', function() {
    $('.product-type').removeClass('active');
    $(this).addClass('active');
  });

  $('.product-type__order-block').on('click', function(e) {
    $(this).addClass('chosen');
    if ($('.product-type__order-block').hasClass('chosen')) {
      $('.product-type').removeClass('active');
      $(this).parents('.product-type').addClass('active');
    };
    return false;
  });

  //попап

  $('.cart-flag').on('click', function() {
    $('.popup--order').addClass('popup--active');
    $('body').addClass('overflow');
  });

  $('.close-popup').on('click', function() {
    $(this).parents('.popup').removeClass('popup--active');
    $('body').removeClass('overflow');
  });

  $('.btn-reset').on('click', function(e) {
    $(this).parents('.popup').removeClass('popup--active');
    $('body').removeClass('overflow');
    e.preventDefault();
  });

  $('.page-main').removeClass('blur');

  $(document).on('click', function() {
    if (!($('.popup').is(':visible'))) {
      $('.page-main').removeClass('blur');
      $('.page-header').removeClass('blur');
    } else {
      $('.page-main').addClass('blur');
      $('.page-header').addClass('blur');
    }
  });

  $(document).ready(function() {
    if (!($('.popup').is(':visible'))) {
      $('.page-main').removeClass('blur');
      $('.page-header').removeClass('blur');
    } else {
      $('.page-main').addClass('blur');
      $('.page-header').addClass('blur');
    }
  });

  // Промотка к слайду, на котором сделан клик
  $('.stamp-gallery__item').on('click', function(){
    var slideIndex = $(this).closest('.owl-item').index();
    console.log(slideIndex);
    owl.trigger('to.owl.carousel', [slideIndex]);
  });
  var items = $('.stamp-gallery .owl-item');
  // Когда в карусели происходит изменение, снимаем чек со всех радиокнопок
  owl.on('change.owl.carousel', function(event) {
    var item = event.item.index;
    items.find('input').removeAttr('checked');
  });
  // Когда в карусели завершено изменение, ставим чек на нужную радиокнопку
  owl.on('changed.owl.carousel', function(event) {
    var item = event.item.index;
    items.eq(item).find('input').attr('checked', 'checked');
  });

  $('.express-order').on('click', function() {
    $('.decision-header').addClass('decision-header--scroll');
  });

  $(function() {
    $(window).scroll(function() {
      var top = $('.order').offset().top - $('.decision-header').height();
      var fromTop = document.body.scrollTop;
      if (fromTop >= top) {
        $('.decision-header').removeClass('decision-header--scroll');
      }
    });
  });

  // скрол нижней панели
  $(function () {

    $(window).scroll(function () {

      var link = $('.for-bottom-scroll'); // точка срабатывания
      var top = link.offset().top; // координаты точки срабатывания
      // кординаты срабатывания + размер объекта + отступ
      var confirmationHeight = top + $('.confirmation').height() + 10;       
      var scrollTop = $(this).scrollTop(); // координаты верхнего края окна
      var windowBottom = scrollTop + $(window).height(); // координаты нижнего края окна

      if (windowBottom < confirmationHeight) {
        $('.confirmation').addClass('confirmation--scroll');
      } else {
        $('.confirmation').removeClass('confirmation--scroll');
      }

      // исчезновение лейбла
      if (windowBottom > confirmationHeight - 106 ) {
        $('.confirmation__label').addClass('confirmation__label--invisible');
      } else {
        $('.confirmation__label').removeClass('confirmation__label--invisible');
      }
    });

  });

  // Табы при выборе типа печати (новая, факсимиле, печать по оттиску)

  // $('.order__tabs').on('click', function(){
  //   $('.type-stamp-tabs').hide();
  //   // var check = $("#new_stamp").prop("checked");
  //   var check = $("#new_stamp").is(":checked");
  //   console.log( check );
  //   if ( check ){
  //     $('#newstamp-area').show();
  //   } else {
  //     $('#download-area').show();
  //   }
  // });

});
