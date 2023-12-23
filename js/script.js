async function loadJSON() {
    console.log("Starting...");
    const response = await fetch("assets/recipes/soups/recipes.json");
    const json = await response.json();
    return json;
}

function Catalog(categories) {
    return { categories };
}

function Category(name, recipes) {
    return {
        name,
        recipes
    };
}

function Recipe(name, ingredients, instructions, notes) {
    return {
        name,
        ingredients,
        instructions,
        notes,
    };
}

function parseJSON(blob) {
    let categories = [];
    for (const category of blob.categories) {
        let categoryName = category.name;
        let recipes = [];
        for (const recipe of category.recipes) {
            let recipeName = recipe.name;
            let ingredients = recipe.ingredients;
            let instructions = recipe.instructions;
            let notes = recipe.notes;
            let recipe_ = Recipe(recipeName, ingredients, instructions, notes);
            recipes.push(recipe_);
        }
        let cat_ = Category(categoryName, recipes);
        categories.push(cat_);
    }
    return Catalog(categories);
}
let catalog = null;

async function loadData() {
    const blob = await loadJSON();
    catalog = parseJSON(blob); // Update the catalog variable
    console.log(catalog);
}
loadData().then(() => {

    const catalogContainer = document.getElementById('catalogContainer');

    // Function to create collapsible category
    function createCollapsibleCategory(category) {
        const categoryContainer = document.createElement('div');
        categoryContainer.className = 'category-container';
        categoryContainer.innerHTML = `<h2>${category.name}</h2>`;

        const categoryElement = document.createElement('div');
        categoryElement.className = 'category';
        categoryElement.style.display = 'none';

        // Loop through recipes in the category and create HTML elements
        category.recipes.forEach((recipe, index) => {
            const recipeElement = document.createElement('div');
            recipeElement.className = 'recipe';
            recipeElement.innerHTML = `<p>${recipe.name}</p>`;

            // Create ingredients list with bullet points
            const ingredientsList = document.createElement('ul');
            ingredientsList.className = 'ingredients-list';
            recipe.ingredients.forEach(ingredient => {
                const listItem = document.createElement('li');
                listItem.textContent = ingredient;
                ingredientsList.appendChild(listItem);
            });

            // Attach event listener to each recipe for folding/unfolding
            recipeElement.addEventListener('click', (event) => {
                event.stopPropagation(); // Prevents the click event from propagating to parent elements
                // Toggle visibility of recipe details
                const details = recipeElement.querySelector('.details');
                details.style.display = details.style.display === 'none' ? 'block' : 'none';
            });

            // Create details container for each recipe
            const detailsContainer = document.createElement('div');
            detailsContainer.className = 'details';
            detailsContainer.style.display = 'none';

            // Populate details container with recipe fields
            detailsContainer.appendChild(ingredientsList); // Append ingredients list
            detailsContainer.innerHTML += `
                <p style="margin-top: 10px;">Instructions: ${recipe.instructions}</p>
                <p style="margin-top: 10px;">Notes: ${recipe.notes}</p>
            `;

            // Append details container to recipe element
            recipeElement.appendChild(detailsContainer);

            // Append recipe element to category element
            categoryElement.appendChild(recipeElement);
        });

        // Append category element to category container
        categoryContainer.appendChild(categoryElement);

        // Attach event listener to each category for folding/unfolding
        categoryContainer.addEventListener('click', () => {
            // Toggle visibility of category recipes
            categoryElement.style.display = categoryElement.style.display === 'none' ? 'block' : 'none';
        });

        return categoryContainer;
    }

    // Loop through categories and create HTML elements
    catalog.categories.forEach(category => {
        const collapsibleCategory = createCollapsibleCategory(category);
        // Append category container to catalog container
        catalogContainer.appendChild(collapsibleCategory);
    });
});