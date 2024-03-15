let mob = document.querySelector(".mobList");
let menu = document.querySelector(".menuList");

mob.addEventListener("click", () => {
  if (menu.getAttribute("pos") == "up") {
    menu.style.cssText = `left: 0;`;
    menu.setAttribute("pos", "down");
  } else {
    menu.style.cssText = `left: -100%;`;
    menu.setAttribute("pos", "up");
  }
});
