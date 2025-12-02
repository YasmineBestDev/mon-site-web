
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


 function toggleTheme() {

  // Select the <link> element
  let theme = document.getElementById('theme');
  // Toggle between light.css and dark.css

  if (theme.getAttribute('href') == 'light_mod.css') {
  theme.setAttribute('href', 'dark_mod.css');

  } else {
  theme.setAttribute('href', 'light_mod.css');
  }

}
//for games pages, since the path to the css file isn't the same
function toggleThemeG() {

  // Select the <link> element
  let theme = document.getElementById('themeG');
  // Toggle between light.css and dark.css

  if (theme.getAttribute('href') == '../light_mod.css') {
  theme.setAttribute('href', '../dark_mod.css');

  } else {
  theme.setAttribute('href', '../light_mod.css');
  }

}

// Get the button:
let mybutton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
