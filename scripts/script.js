import { recipes } from "./recipes.js";

// Función para seleccionar la receta del día
function selectRecipeOfTheDay() {
    let recipeOfTheDayIndex = localStorage.getItem("recipeOfTheDayIndex");
    const today = new Date().toISOString().split('T')[0]; // Fecha actual en formato YYYY-MM-DD
    const lastUpdate = localStorage.getItem("lastRecipeUpdate");

    // Si la receta del día no se ha actualizado hoy, selecciona una nueva
    if (lastUpdate !== today) {
        recipeOfTheDayIndex = Math.floor(Math.random() * recipes.length);
        localStorage.setItem("recipeOfTheDayIndex", recipeOfTheDayIndex);
        localStorage.setItem("lastRecipeUpdate", today);
    }
console.log("Hoy es", today)

    const recipeOfTheDay = recipes[recipeOfTheDayIndex];
    const recipeElement = document.getElementById("recipe-of-the-day");
    recipeElement.innerHTML = `
        <div class="recipe-of-the-day-img"><img src="${recipeOfTheDay.image}" alt="${recipeOfTheDay.recipeName}"></div>
        <div class="recipe-of-the-day-info">
            <h2>Recipe of the Day</h2>
            <div class="recipe-of-the-day-text">
                <a><h3>${recipeOfTheDay.recipeName}</h3></a>
                <p>${recipeOfTheDay.description}</p>
            </div>
        </div>
    `;
}

// carousel scripts
console.log("Hola2")
let left = document.getElementById("left");
let right = document.getElementById("right");
let images = document.getElementsByClassName("image")[0];
let dots = document.getElementsByClassName("dots")[0];
let text = document.getElementsByClassName("carousel-text")[0];
let current = 0;
carouselPosition();

left.addEventListener("click", function(){
    current -=1;

    if(current == -1){
        current = recipes.length - 1;
    }

    images.innerHTML = `
    <img class="image" src="${recipes[current].image}" alt="page logo" loading="lazy"></img>
    `;
    text.innerHTML = `
    <h3>${recipes[current].recipeName}</h3>
    `;
    carouselPosition();
});

right.addEventListener("click", function(){
    current +=1;

    if (current == recipes.length){
        current = 0;
    }

    images.innerHTML = `
    <img class="image" src="${recipes[current].image}" alt="page logo" loading="lazy"></img>
    `;

    text.innerHTML = `
    <h3>${recipes[current].recipeName}</h3>
    `;
    carouselPosition();
});

function carouselPosition() {
    dots.innerHTML = "";
    for (var i = 0; i < recipes.length; i++) {
        if (i == current) {
            dots.innerHTML += '<p class="bold">.</p>';
        } else {
            dots.innerHTML += "<p>.</p>";
        }
    }
};

// Eventos DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    selectRecipeOfTheDay();

    images.innerHTML = `
    <img class="image" src="${recipes[current].image}" alt="page logo" loading="lazy"></img>
    `;

    text.innerHTML = `
    <h3>${recipes[current].recipeName}</h3>
    `;
});

console.log("Hola3")