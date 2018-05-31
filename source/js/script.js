var buttonToggle = document.querySelector(".main-navigation__toggle--close");
var toggleMenu = document.querySelector(".main-navigation__list");

buttonToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  buttonToggle.classList.toggle("main-navigation__toggle--close");
  toggleMenu.classList.toggle("main-navigation__list_hidden");
});
