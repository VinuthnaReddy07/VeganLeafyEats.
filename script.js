// scripts.js
document.getElementById("generate-recipe").addEventListener("click", generateRecipe);

function generateRecipe() {
    // Get selected ingredients
    let selectedIngredients = [];
    let checkboxes = document.querySelectorAll("#ingredients-list input[type='checkbox']:checked");

    checkboxes.forEach(checkbox => {
        selectedIngredients.push(checkbox.value);
    });

    if (selectedIngredients.length === 0) {
        alert("Please select at least one ingredient!");
        return;
    }

    // Generate a simple recipe based on selected ingredients
    let recipe = createRecipe(selectedIngredients);

    // Display the recipe
    document.getElementById("recipe-details").innerHTML = recipe.description;
    document.getElementById("recipe-nutrition").innerHTML = recipe.nutrition;
    document.getElementById("recipe-image").src = recipe.image;

    // Show recipe result section
    document.getElementById("recipe-result").style.display = "block";
}

function createRecipe(ingredients) {
    // Example static recipes
    const recipes = {
        "Spinach": {
            description: "Spinach Salad with Avocado and Cucumber",
            nutrition: "Calories: 250 | Protein: 5g | Carbs: 20g | Fat: 20g",
            image: "https://th.bing.com/th/id/OIP.K1GuQPic1j_S4O28uFpWhQHaNJ?rs=1&pid=ImgDetMain"
        },
        "Kale": {
            description: "Kale Smoothie with Avocado and Tomatoes",
            nutrition: "Calories: 150 | Protein: 3g | Carbs: 18g | Fat: 10g",
            image: "https://kitchenconfidante.com/wp-content/uploads/2018/08/Lemony-Kale-Avocado-Salad-kitchenconfidante.com-3377.jpg"
        },
        "Tomatoes": {
            description: "Tomato and Cucumber Salad",
            nutrition: "Calories: 120 | Protein: 4g | Carbs: 15g | Fat: 6g",
            image: "https://bing.com/th?id=OSK.f129c86746d2dd8e2d476ccf7cee9e2d"
        }
    };

    // Combine ingredients and return a recipe
    let recipe = { description: "", nutrition: "", image: "" };
    ingredients.forEach(ingredient => {
        if (recipes[ingredient]) {
            recipe = recipes[ingredient];  // For simplicity, just take the last matching recipe
        }
    });

    return recipe;
}
