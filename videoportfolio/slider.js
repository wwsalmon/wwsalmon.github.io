var slideIndex = 0;

function showDivs(n,el) {

  var container = el.closest(".slides-container");

  // Find the child elements.
  var x = container.find(".slides-main");
  var menu = container.find(".slides-menu");
  var dots = container.find(".slides-picker");

  var menuleft = 0;
  var i;

  slideIndex += n;
  if (slideIndex > x.length) {slideIndex = 1}
  if (slideIndex < 1) {slideIndex = x.length}

  x.fadeOut(200);
  dots.css("opacity",0.2);
  x.eq(slideIndex-1).fadeIn(200);
  dots.eq(slideIndex-1).css("opacity",1);
  menuleft = dots.eq(slideIndex-1).position().left;
  menu.animate({scrollLeft: menuleft},200);
}

$(".slides-next").on("click",function(){
  showDivs(1,$(this));
});

$(".slides-back").on("click",function(){
  showDivs(-1,$(this));
});

$(".slides-picker-outer").on("click",function(){
  showDivs($(this).index()+1-slideIndex,$(this));
});
