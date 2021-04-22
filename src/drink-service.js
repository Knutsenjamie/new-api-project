export default class DrinkService {
  static async getDrinksFrom(ingredient) {
    const url = `http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
    const response = await fetch(url);
    return await response.json();
  }
}
