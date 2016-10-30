
$(window).resize(function() {
  var more = document.getElementById("js-navigation-more");
  var navMoreSubmenu = $("#js-navigation-more .submenu .submenu");
  if ($(more).length > 0) {
    var windowWidth = $(window).width();
    var moreLeftSideToPageLeftSide = $(more).offset().left;
    var moreLeftSideToPageRightSide = windowWidth - moreLeftSideToPageLeftSide;

    if (moreLeftSideToPageRightSide < 330) {
      $(navMoreSubmenu).removeClass("fly-out-right");
      $(navMoreSubmenu).addClass("fly-out-left");
    }

    if (moreLeftSideToPageRightSide > 330) {
      $(navMoreSubmenu).removeClass("fly-out-left");
      $(navMoreSubmenu).addClass("fly-out-right");
    }
  }
});

$(function() {
  
  // Menu
  var menuToggle = $("#js-mobile-menu").unbind();
  var navMenu = $("#js-navigation-menu");
  $(navMenu).removeClass("show");
  menuToggle.on("click", function(e) {
    e.preventDefault();
    $(navMenu).slideToggle(function(){
      if($(navMenu).is(":hidden")) {
        $(navMenu).removeAttr("style");
      }
    });
  });

  // Carousel
  var carouselEle = $(".hero-slider");
  var carouselDotsBtnWrap = $(".hero-slider-navdots-wrap");
  var carouselPrevNextBtnWrap = $(".hero-slider-nav-wrap");
  var carouselDotsBtnEle = ".slick-dots";
  $(carouselEle).slick({
      infinite: false,
      dots: true,
      appendDots: carouselDotsBtnWrap,
      prevArrow: "<i class='fa fa-angle-left fa-3x' aria-hidden='true'></i>",
      nextArrow: "<i class='fa fa-angle-right fa-3x' aria-hidden='true'></i>",
      appendArrows: carouselPrevNextBtnWrap,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: 'unslick'
        }
      ]
  });

  $(carouselEle).on('beforeChange', function(event, slick, currentSlide, nextSlide){
      appendClassToDots(carouselDotsBtnEle, nextSlide);
  });

});

function appendClassToDots(dotsEle, slide) {
  var dotNavEle = $(dotsEle);
  switch (slide) {
    case 0:
      $(dotsEle)
        .removeClass('vizio escape ultra')
        .addClass('django');
      break;
    case 1:
      $(dotsEle)
        .removeClass('django escape ultra')
        .addClass('vizio');
      break;
    case 2:
      $(dotsEle)
        .removeClass('django vizio ultra')
        .addClass('escape');
      break;
    case 3:
      $(dotsEle)
        .removeClass('django vizio escape')
        .addClass('ultra');
      break;
  }
};