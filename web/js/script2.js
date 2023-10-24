//Side Bar

const navbarNav = document.querySelector(".navbar-nav");

//klik muncul

document.querySelector(".menu-button").onclick = () => {
  navbarNav.classList.toggle("active");
};

//klik hilang

const menu = document.querySelectorAll(".menu-button");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

//overlay gambar

const zoomgambar = document.getElementsByClassName("overlay");

for (let i = 0; i < zoomgambar.length; i++) {
  zoomgambar[i].addEventListener("click", function () {
    let url = window.location.href.substr(0, window.location.href.indexOf("#"));
    window.location = url;
  });
}
