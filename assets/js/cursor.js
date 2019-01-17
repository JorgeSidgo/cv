$(document).ready(function () {
  $(window).on("mousemove", function (e) {
    $('.cursor').css({
      top: e.pageY,
      left: e.pageX
    });
  });

  $('.nombre, .menu-list>li').on("mouseover", function() {
      $('.cursor').addClass('cursor2');
  });

  $('.nombre, .menu-list>li').on("mouseleave", function() {
    $('.cursor').removeClass('cursor2');
  });

  $('html').mouseleave(function () {
    $('.cursor').hide();
  });
  $('html').mouseenter(function () {
    $('.cursor').show();
  });
});
