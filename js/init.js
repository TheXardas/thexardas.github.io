(function($){
  $(function(){
    setTimeout(function() {
      $(".owl-carousel").owlCarousel({
        items: 1,
        nav: true,
        dotsEach: 1,
      });
      $('.sidenav').sidenav();
      $('.parallax').parallax();
    }, 1000);

  }); // end of document ready
})(jQuery); // end of jQuery name space
