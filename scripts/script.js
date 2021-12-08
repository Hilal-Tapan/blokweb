console.log("hallo");
var deButton = document.querySelector("button");

deButton.addEventListener("click", openMenu);

function openMenu() {
    var deNav =
  document.querySelector("nav");
  deNav.classList.toggle("menuOpen");
}