

// Définition des slides
const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Récupération des éléments du DOM
let bannerImg = document.querySelector('.banner-img');
let ajoutdots = document.querySelector(".dots");
let imgDiaporama = document.querySelector('.banner-img');
let texteDiaporama = document.querySelector('.texteSlide');
const clickLeft = document.querySelector(".arrow_left");
const clickRight = document.querySelector(".arrow_right");

// Initialisation des variables
let elementactuel = 0;
let index = 0;
let nbSlidesTableau = slides.length;

// Création des points de navigation
for (let compteur = 0; compteur < nbSlidesTableau; compteur++) {
    let nouvelleDiv = document.createElement("div");
    nouvelleDiv.classList.add("dot");
    if (compteur === elementactuel) {
        nouvelleDiv.classList.add("dot_selected");
    }
    nouvelleDiv.addEventListener('click', function() {
        index = compteur;
        changerSlide();
    });
    ajoutdots.appendChild(nouvelleDiv);
}

// Fonctions pour changer de slide
function changerSlide() {
    imgDiaporama.src = slides[index].image;
    texteDiaporama.innerHTML = slides[index].tagLine;
    updateDots(index);
    index = (index + 1) % slides.length;
}

function changerSlidePrecedent() {
    index = (index - 1 + slides.length) % slides.length;
    imgDiaporama.src = slides[index].image;
    texteDiaporama.innerHTML = slides[index].tagLine;
    updateDots(index);
}

// Fonction pour mettre à jour les points de navigation
function updateDots(activeIndex) {
    let dots = document.querySelectorAll(".dot");
    dots.forEach((dot, i) => {
        if(i === activeIndex) {
            dot.classList.add("dot_selected");
        } else {
            dot.classList.remove("dot_selected");
        }
    });
}

// Ajout des écouteurs d'événements sur les boutons
clickRight.addEventListener('click', changerSlide);
clickLeft.addEventListener('click', changerSlidePrecedent);
