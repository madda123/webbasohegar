//Side Bar

const navigasiNav = document.querySelector(".navigasi-nav");

//klik muncul

document.querySelector(".menu-button").onclick = () => {
  navigasiNav.classList.toggle("active");
};

//klik hilang

const menu = document.querySelectorAll(".menu-button");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navigasiNav.contains(e.target)) {
    navigasiNav.classList.remove("active");
  }
});
