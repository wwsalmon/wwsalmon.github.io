$(function(){
  $(".projects").fadeOut(0);
  changeTab()
});

$(".home-tabs input").on('change', function(){
  changeTab();
})

function changeTab(){
  category = $(".home-tabs input[name=home-tabs]:checked").attr("id");
  console.log(category);
  if (category == "cat-photo"){
    $(".cat-video").removeClass("selected");
    $(".cat-photo").addClass("selected");
    $(".projects-video").fadeOut(100);
    $(".projects-photo").fadeIn(200);
  }
  if (category == "cat-video"){
    $(".cat-photo").removeClass("selected");
    $(".cat-video").addClass("selected");
    $(".projects-photo").fadeOut(100);
    $(".projects-video").fadeIn(200);
  }
};
