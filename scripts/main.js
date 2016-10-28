
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

$(document).ready(function() {
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
}); 
