console.log(pageType);

var firstDiv = "testing";

if (pageType == "about") {
  firstDiv = $(".about-header");
}

if (pageType == "project") {
  firstDiv = $(".project-hero");
}


console.log(pageType);
console.log(firstDiv);

var topofDiv = firstDiv.offset().top;
var height = firstDiv.outerHeight();


$(window).scroll(function(){
  if($(window).scrollTop() > (topofDiv + height)){
    $(".navbar").removeClass("navbar-light").addClass("navbar-dark");
  }
  else{
    $(".navbar").addClass("navbar-light").removeClass("navbar-dark");
  }
});
