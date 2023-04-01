//Skript za Navbar jQuery

$(window).scroll(function () {
  if ($(window).scrollTop() >= 100) {
    $(".navbar").css("background", "rgba(0,0,0,0.8)");
  } else {
    $(".navbar").css("background", "rgba(0,0,0,0)");
  }
});
