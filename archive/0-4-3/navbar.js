$("body").append(
`
<div class='topbar'>
  <div class='topbar-inner center center-vert' onclick='changePage("index.html")'><span>Samson Zhang</span></div>
</div>
<div class='bottombar'>
  <div class='bottombar-inner center center-vert'><span>
    <!--<a href='https://www.youtube.com/samsonzhangthesalmon'>yt</a>
    <a href='https://twitter.com/wwsalmon'>tw</a>
    <a href='https://www.instagram.com/samsonzhangthesalmon/'>ig</a>
    <a href='mailto:samsonzhang@wwsalmon.com'>email</a>-->
    <a onclick='changePage("projects.html")' id='nav-projects'>do</a>
    <a onclick='changePage("index.html")' id='nav-home'>home</a>
    <a onclick='changePage("about.html")' id='nav-about'>me</a>
    <a onclick='changePage("contact.html")' id='link-hire'>hi</a>
  </span></div>
</div>
`
)
