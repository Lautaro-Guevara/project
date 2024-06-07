import recipes from "./recipes.js";

//Create Recipe instructions
const selectedRecipeName = localStorage.getItem("selectedRecipe");
const recipe = recipes.find(r => r.recipeName === selectedRecipeName);

if (recipe){
    document.getElementById("recipe-title").textContent = recipe.recipeName;

    const recipeDetails = document.getElementById("recipe-details");
    recipeDetails.innerHTML = `
    <p>${recipe.description}</p>
        <h2>Ingredients</h2>
        <ul class="ingredients">${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}</ul>
        <h2>Instructions</h2>
        <ol>${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}</ol>
        <div>
        <img src="${recipe.image}" alt="${recipe.recipeName}">
        </div>
    `;
} else {
    document.getElementById("recipe-title").textContent = "Recipe not found"
    document.getElementById("recipe-details").innerHTML = '<p>Sorry, we couldn\'t find the recipe you\'re looking for.</p>';
}

