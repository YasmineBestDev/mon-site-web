
const button_menu = document.getElementById("menu_icon");
const menu = document.getElementById("mobile_menu");

button_menu.addEventListener("click", () => {

  menu.showModal();

});

menu.addEventListener("click", (event) => {
  if (event.target === menu) {
    menu.close();
  }
});



