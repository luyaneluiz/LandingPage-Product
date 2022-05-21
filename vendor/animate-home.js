const target = document.querySelectorAll("[data-animate]");
const animeClass = "anime";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 2.5) / 3.5;
  target.forEach(function (e) {
    if (windowTop > e.offsetTop) {
      e.classList.add(animeClass);
    } else {
      e.classList.remove(animeClass);
    }
  });
}

animeScroll();

if (target.length) {
  window.addEventListener("scroll", function () {
    animeScroll();
  });
}
