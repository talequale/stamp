$(document).ready(function(){

  $('.owl-carousel').owlCarousel({
    center: true,
    items: 4,
    margin: 0,
    // loop: true,
    startPosition: 3, // только если слайдов более 3-х изначально
    nav: true,
    navText: false,
    responsiveClass:true,
    responsive : {
    // breakpoint from 0 up
      0 : {
          items : 1,
      },
      // breakpoint from 1028 up
      1028 : {
          items : 4,
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

  // var top = $('.promo__sloganbox').offset().top;
  // console.log(top);

  $(function () {

    $(window).scroll(function () {

      var top = $('.promo__sloganbox').offset().top;
      console.log(top);

      if ($(this).scrollTop() > top) {
        $('.page-header').addClass('page-header--scroll');
      } else {
        $('.page-header').removeClass('page-header--scroll');
      }
    });

  });

});