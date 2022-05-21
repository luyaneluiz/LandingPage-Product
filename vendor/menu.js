function menuShow() {
  let icoMenu = document.querySelector(".bx");
  let menu = document.querySelector(".menu");

  if (icoMenu.classList.contains("bx-menu")) {
    icoMenu.classList.remove("bx-menu");
    icoMenu.classList.add("bx-x");

    menu.classList.add("open");
    icoMenu.setAttribute("style", "color: black");
  } else {
    icoMenu.classList.remove("bx-x");
    icoMenu.classList.add("bx-menu");

    menu.classList.remove("open");
    icoMenu.setAttribute("style", "color: white");
  }
}

let main = document.querySelector("main");
let section = document.querySelector("section");
let footer = document.querySelector("footer");

main.addEventListener("click", function () {
  let icoMenu = document.querySelector(".bx");
  let menu = document.querySelector(".menu");

  if (menu.classList.contains("open")) {
    icoMenu.classList.remove("bx-x");
    icoMenu.classList.add("bx-menu");

    menu.classList.remove("open");
    icoMenu.setAttribute("style", "color: white");
  }
});

section.addEventListener("click", function () {
  let icoMenu = document.querySelector(".bx");
  let menu = document.querySelector(".menu");

  if (menu.classList.contains("open")) {
    icoMenu.classList.remove("bx-x");
    icoMenu.classList.add("bx-menu");

    menu.classList.remove("open");
    icoMenu.setAttribute("style", "color: white");
  }
});

footer.addEventListener("click", function () {
  let icoMenu = document.querySelector(".bx");
  let menu = document.querySelector(".menu");

  if (menu.classList.contains("open")) {
    icoMenu.classList.remove("bx-x");
    icoMenu.classList.add("bx-menu");

    menu.classList.remove("open");
    icoMenu.setAttribute("style", "color: white");
  }
});
