// '#JS' 

let receipeInputName = prompt ("Please share the recipe name!");
let receipeName = document.getElementById ("myNewRecipe"); 

receipeName.innerText += receipeInputName;

let Count = prompt ("Now please let me know how many ingrediants are needed for this receipe!");
let ingredients = parseInt(Count);
let basket = [];

// target list
let ingrediantsList = document.getElementById("ingredients");

for (let i = 1; i <= ingredients; i++) {
    let basketIngreds = prompt ("Please specify the ingrediants!");
    basket[i]= basketIngreds;
    let newListElement = document.createElement ("li");
    console.log (basket[i]);
    
    newListElement.textContent = `${basket[i]}`;
    ingrediantsList.appendChild (newListElement);
}