let show = true;

const menuSection = document.querySelector('.menu-section');
const menuToggle = document.querySelector('.menu-toggle');
const buttonHeader = document.querySelector('.buttonHeader');




menuToggle.addEventListener("click", () => {
  document.body.style.overflow = show ? "hidden" : "initial";

  menuSection.classList.toggle("on", show);
  show = !show;
})


var windowWidth = window.innerWidth;
var screenWidth = screen.width;
if (windowWidth <= 640 || screenWidth <= 640) {
  menuSection.classList.add("on");
  console.log(windowWidth)
} else {
  menuSection.classList.remove("on");
}
