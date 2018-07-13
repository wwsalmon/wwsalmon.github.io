function buildMenu(page,select){
  $(".content-container").append(
    `
    <div class='footer'>
      <p>Opinions, work, and content are my own unless otherwise stated.<br/>© Samson Zhang 2018</p>
    </div>
    `
  );
  if (page == "home"){
    $(".container").prepend(
      `
      <div class='topbar'><div class='topbar-button'><span>Menu</span></div></div>
      <div class='sidebar'>
        <div class='name'><span>samson<br/>zhang</span></div>
        <div class='nav-item selected'><a href=''><span>Home</span></a></div>
        <div class='nav-item'><a href='about/index.html'><span>About</span></a></div>
        <div class='nav-item'><a href='szhang-resume.pdf'><span>Resume</span></a></div>
        <div class='nav-item'><a href='contact/index.html'><span>Contact</span></a></div>
      </div>
      `
    );
  }
  else{
    $(".container").prepend(
      `
      <div class='topbar'><div class='topbar-button'><span>Menu</span></div></div>
      <div class='sidebar'>
        <div class='name'><span>samson<br/>zhang</span></div>
        <div class='nav-item'><a href='../index.html'><span>Home</span></a></div>
        <div class='nav-item about'><a href='../about/index.html'><span>About</span></a></div>
        <div class='nav-item'><a href='../szhang-resume.pdf'><span>Resume</span></a></div>
        <div class='nav-item contact'><a href='../contact/index.html'><span>Contact</span></a></div>
      </div>
      `
    );

    $(".page").append(
      `
      <div class='back small-head'><a href='../index.html'><span><i class="fas fa-long-arrow-alt-left"></i> Back Home</span></a></div>
      `
    )

    if (select != "about")
    $(".page").append(
      `
      `
    )
  }
  $(".sidebar").append(
    `
    <div class='sidebar-social'>
      <div class='sidebar-social-item yt'><a href='https://www.youtube.com/channel/UCNyoJQcV6NCHiRCeqcCxJag' target="_blank"><i class="fab fa-youtube"></i></a></div>
      <div class='sidebar-social-item ig'><a href='https://www.instagram.com/samsonzhangthesalmon/' target="_blank"><i class="fab fa-instagram"></i></a></div>
      <div class='sidebar-social-item tw'><a href='https://twitter.com/wwsalmon' target="_blank"><i class="fab fa-twitter"></i></a></div>
    </div>
    `
  )
  if (select == "about"){
    $(".about").addClass("selected");
  }
  if (select == "contact"){
    $(".contact").addClass("selected");
  }
  var clicked = false;
  $(".topbar").click(function(){
    $(".sidebar").toggleClass("show-sidebar");
    clicked = !clicked
    if (clicked == true){
      $(".topbar-button span").html("back");
    }
    else{
      $(".topbar-button span").html("menu");
    }
  });
}
