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
          items : 4,
          mouseDrag: false,
      },
      1200 : {
          items : 5,
      },
      1600 : {
          items : 6,
      },
      1920 : {
          items : 7,
      }
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

  // скрол верхней панели
  $(function () {

    $(window).scroll(function () {

      var top = $('.promo .sloganbox').offset().top;
      // console.log(top);

      if ($(this).scrollTop() > top) {
        $('.page-header').addClass('page-header--scroll');
      } else {
        $('.page-header').removeClass('page-header--scroll');
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