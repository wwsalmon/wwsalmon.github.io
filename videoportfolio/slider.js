/*

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function currentDiv(n) {
    showDivs(slideIndex = n);
}

function showDivs(n) {
    var menuleft = 0;
    var x = $(".slides-main");
    var i;
    var menu = $(".slides-menu");
    var dots = $(".slides-picker-outer");
    x.hide();
    dots.css("opacity","0.2");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
       x.eq(i).fadeOut(200);
    }
    x.eq(slideIndex-1).fadeIn(200);
    dots.eq(slideIndex-1).css("opacity","1.0");
    menuleft = dots.eq(slideIndex-1).position().left;
    menu.animate({scrollLeft: menuleft},200);
}

*/

console.clear();

(function($, sliderId) { // closure for this 'plugin'

	//   name of plugin - used as a method on a DOM element
	$.fn.initializeSlider = function() {

    return this.each( function() { // runs a function for each slider - which creates seperate places for all the stuff memory - for each slider in this case
      sliderId++; // something to increment so you can name each slider for example

      var sliderName = 'Slider-' + sliderId;
      var slideIndex = 1;
      var menuLeft = 0;
      var $this = $(this);

      $back = $this.find('.slides-back');
      $next = $this.find('.slides-next');
      $dot = $this.find('.slides-picker');
      $menu = $this.find('.slides-menu');
      $main = $this.find('.slides-main');

      checkSlide();

      // whatever your methods are for a slider
      $back.on('click', function() {
        buttonClick(-1);
      });

      $next.on('click', function() {
        buttonClick(1);
      });

      $dot.on('click', function() {
        var clickedSlide = $this.find('.slides-picker').index($(this)) + 1;
        slideIndex = clickedSlide;
        checkSlide();
      });

      function buttonClick(n){
        slideIndex += n;
        if(slideIndex > $main.length){slideIndex=1;}
        if(slideIndex < 1){slideIndex=$main.length;}
        checkSlide();
      }

      function checkSlide(){
        $main.fadeOut(200);
        $dot.css("opacity","0.2");
        $main.eq(slideIndex-1).fadeIn(200);
        $dot.eq(slideIndex-1).css("opacity","1.0");
        menuleft = $dot.eq(slideIndex-1).position().left;
        $menu.animate({scrollLeft: menuleft},200);
        //alert("checking slide" + sliderId);
      }

      // just showing that multiple instances of this slider are initialized
      console.log('You created slider #' + sliderId);
    });

  }

})(jQuery, 0); // these things at the end are arguments 'passed' in to the larger function...
// ourWholeFunction(jQuery, 0);
// think about it like this ^ ... - they take the place of the parameters inside the function.

$('.slides-container').initializeSlider();
