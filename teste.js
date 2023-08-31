document.addEventListener("DOMContentLoaded", function () {
    const addMealButton = document.getElementById("addMealButton");
    const mealList = document.getElementById("mealList");
    const healthyFoods = [
        "Frango grelhado",
        "Salmão",
        "Quinoa",
        "Ovos",
        "Espinafre",
        "Brócolis",
        "Aveia",
        "Iogurte grego",
        "Amêndoas",
        "Abacate",
        "Maçã",
        "Banana",
        "Cenoura",
        "Tomate",
        "Feijão",
        "Lentilhas",
        "Arroz integral",
        "Batata-doce",
        "Couve",
        "Chia"
    ];

    addMealButton.addEventListener("click", function () {
        const mealName = prompt("Digite o nome da refeição:");
        
        if (mealName) {
            const mealItem = document.createElement("li");
            mealItem.textContent = mealName + " - Alimentos saudáveis disponíveis: " + healthyFoods.join(", ");
            mealList.appendChild(mealItem);
        }
    });
});
