var buttonToggle = document.querySelector(".main-navigation__toggle_close");
var toggleMenu = document.querySelector(".main-navigation__list");

buttonToggle.addEventListener("click", function(evt) {
  evt.preventDefault();
  buttonToggle.classList.toggle("main-navigation__toggle_close");
  toggleMenu.classList.toggle("main-navigation__list_hidden");
});
