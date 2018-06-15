$(function(){
  $(".projects-photo").hide();
});

function changeTab(category){
  if (category == "photo"){
    $(".cat-video").removeClass("selected");
    $(".cat-photo").addClass("selected");
    $(".projects-video").hide(200);
    $(".projects-photo").show(200);
  }
  if (category == "video"){
    $(".cat-photo").removeClass("selected");
    $(".cat-video").addClass("selected");
    $(".projects-photo").hide(200);
    $(".projects-video").show(200);
  }
};
