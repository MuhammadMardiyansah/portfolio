const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
  if (e.target != hamburger && e.target != navMenu) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

window.onscroll = function () {
  const navbar = document.querySelector("nav");
  const fixedNav = navbar.offsetTop;
  const toTop = document.querySelector("#to-top");

  if (window.pageYOffset > fixedNav) {
    navbar.classList.add("nav-scroll");
    toTop.classList.remove("hidden");
    toTop.classList.add("block");
  } else {
    navbar.classList.remove("nav-scroll");
    toTop.classList.remove("block");
    toTop.classList.add("hidden");
  }
};

AOS.init();
