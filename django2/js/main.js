$(document).ready(function() {
    $('.toggle').click(function() {
      $('.toggle').toggleClass('active');
      $(".overlay").toggleClass("active");
      $('.menu').toggleClass('active');
      $('.top').toggleClass('active');
      $('.middle').toggleClass('active');
      $('.button').toggleClass('active');
      $('.brand').toggleClass('active');
    })
  })
