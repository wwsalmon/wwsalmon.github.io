$(function(){
  $(".projects-photo").fadeOut();
});

function changeTab(category){
  if (category == "photo"){
    $(".cat-video").removeClass("selected");
    $(".cat-photo").addClass("selected");
    $(".projects-video").fadeOut(100);
    $(".projects-photo").fadeIn(200);
  }
  if (category == "video"){
    $(".cat-photo").removeClass("selected");
    $(".cat-video").addClass("selected");
    $(".projects-photo").fadeOut(100);
    $(".projects-video").fadeIn(200);
  }
};
