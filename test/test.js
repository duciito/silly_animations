$(document).ready(function() {
  $('.water-button').on('click', function() {
    $('.liquid').css("animation", "water 1.2s linear 0.91s 1");
    $('.inner-glass').css("animation", "water-fill 0.55s linear 1.5s 1 forwards");
  });
  $('.juice-button').on('click', function() {
    $('.liquid').css("animation", "juice 1.2s linear 0.91s 1");
    $('.inner-glass').css("animation", "juice-fill 0.55s linear 1.5s 1 forwards");
  });
  $('.beer-button').on('click', function() {
    $('.liquid').css("animation", "beer 1.2s linear 0.91s 1");
    $('.inner-glass').css("animation", "beer-fill 0.55s linear 1.5s 1 forwards");
  });
});
