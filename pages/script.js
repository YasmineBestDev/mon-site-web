
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


 // GESTION DU THÈME AVEC PERSISTANCE (Généré par Claude)

// Fonction pour charger le thème au chargement de la page
function loadTheme() {
  // Récupérer le thème sauvegardé (par défaut 'light_mod.css')
  const savedTheme = localStorage.getItem('theme') || 'light_mod.css';
  
  // Appliquer le thème selon la page
  let themeLink = document.getElementById('theme'); // Pour pages principales
  let themeLinkG = document.getElementById('themeG'); // Pour pages de jeux
  
  if (themeLink) {
    themeLink.setAttribute('href', savedTheme);
  }
  
  if (themeLinkG) {
    // Ajouter '../' pour les pages dans le dossier games
    themeLinkG.setAttribute('href', '../' + savedTheme);
  }
}

// Fonction pour basculer le thème (pages principales)
function toggleTheme() {
  let theme = document.getElementById('theme');
  let newTheme;
  
  if (theme.getAttribute('href') == 'light_mod.css') {
    newTheme = 'dark_mod.css';
  } else {
    newTheme = 'light_mod.css';
  }
  
  // Appliquer le nouveau thème
  theme.setAttribute('href', newTheme);
  
  // Sauvegarder dans localStorage
  localStorage.setItem('theme', newTheme);
}

// Fonction pour basculer le thème (pages de jeux)
function toggleThemeG() {
  let theme = document.getElementById('themeG');
  let newTheme;
  
  if (theme.getAttribute('href') == '../light_mod.css') {
    newTheme = 'dark_mod.css';
    theme.setAttribute('href', '../dark_mod.css');
  } else {
    newTheme = 'light_mod.css';
    theme.setAttribute('href', '../light_mod.css');
  }
  
  // Sauvegarder dans localStorage (sans le '../')
  localStorage.setItem('theme', newTheme);
}

// Charger le thème au chargement de la page
window.addEventListener('DOMContentLoaded', loadTheme);


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

//script for the carouselsvv in games pages

const buttons = document.querySelectorAll(".cbtn"); //gather all buttons with the cbtn class in a list
const cards =  document.querySelectorAll(".card"); //gather all elements with the card class in a list

buttons.forEach((button) =>{

  //(e) selects the id of the clicked button 
  button.addEventListener("click", (e) => {

    const cardActive = document.querySelector(".active") ;
    let nextCard ;
    let newIndex ;

    if (e.target.id === "next") {

      nextCard = 1 ;
      
    } else {
      
      nextCard = -1 ;

    }

    newIndex = nextCard + [...cards].indexOf(cardActive);

    if (newIndex < 0) {

      newIndex = [...cards].length - 1; //to go back to last element if we reached the first one
      
    }

    if (newIndex > ([...cards].length - 1)) {

      newIndex = 0 ; //to go to the first element if we reached the last one 
      
    }

    cardActive.classList.remove("active");
    cards[newIndex].classList.add("active");


  });
});

// CHARACTERS
// ZAYNE

// Displays popup in Zayns's bio section
function zayneTogglePopup() {
  const popup = document.getElementById("zaynePopupDialog");
  if (popup.open) {
    popup.close();
  } else {
    popup.showModal();
  }
}

// Closes Zayne's popup when clicking outside of it
document.getElementById("zaynePopupDialog").addEventListener('click', function(event) {
  if (event.target === this) {
     this.close();
  }
});


