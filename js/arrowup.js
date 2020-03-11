$(document).ready(function () { //Hacia arriba
  irArriba();
});

function irArriba() {
  $('.ir-arriba').click(function () { $('body,html').animate({ scrollTop: '0px' }, 1000); });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) { $('.ir-arriba').slideDown(800); } else { $('.ir-arriba').slideUp(800); }
  });
  $('.ir-abajo').click(function () { $('body,html').animate({ scrollTop: '1000px' }, 1000); });
}