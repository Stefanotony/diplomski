const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];
const navbar = document.querySelector(".navbar");

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
  navbar.style.backgroundColor = "rgba(0,0,0,0.8)";
});
