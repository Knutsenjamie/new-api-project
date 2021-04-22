import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import DrinkService from "./drink-service.js";

console.log($);
console.log(DrinkService);

// STOP IT VSCODE

$("#ingredient-type").change(async function (event) {
  event.preventDefault();
  let ingredient = $("#ingredient-type option:selected").val();
  // transform seelctions that have two words into html-ready format
  if (ingredient.indexOf("_")) ingredient = ingredient.replace("_", "%20");
  console.log(ingredient);
  try {
    const drinkData = await DrinkService.getDrinksFrom(ingredient);
    console.log(drinkData);
  } catch (err) {
    console.error(err);
  }
});

function generateDrinksOptions(drinkData) {
  // loop thru drinkData
  // create an option for each of the drinks
  // set
}

// type.on("change", function {})
