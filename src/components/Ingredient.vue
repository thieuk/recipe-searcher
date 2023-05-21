<template>
    <form id="flex-container" @submit.prevent="fetchRecipe">
      <input id="input" type="text" required autocomplete="off" placeholder="Enter the Ingredient(s)...">
      <button type="submit">SEARCH</button>
    </form>
</template>

<script>
import { store } from '../store';

export default {
  name: 'input-ingredient',
  data() {
    return {
      store
    };
  },
  methods: {
    async fetchRecipe() {
      const ingInput = document.getElementById("input").value.replace(" ", ",");
      let restriction = "";
      store.recipe = [];
      store.search = true;
      
      store.dietaryRestriction.map(res => {
        if (res.active) {
          restriction += "&health=" + res.APIParam;
        }
      }); 

      const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&app_id=${store.API.id}&app_key=${store.API.key}${restriction}&q=${ingInput}`);
      const results = await res.json();
      
      try {
        store.nextPageURL = results._links.next.href;
      }
      catch {
        store.nextPageURL = "";
      }

      results.hits.map(recipes => (
        store.recipe.push({
          name: recipes.recipe.label,
          ingredient: recipes.recipe.ingredientLines,
          img: recipes.recipe.image,
          diet: recipes.recipe.dietLabels,
          nutrition: [
            `Serving: ${recipes.recipe.yield}`,
            `Calorie: ${Math.round(recipes.recipe.totalNutrients.ENERC_KCAL.quantity/recipes.recipe.yield)}`,
            `Fat: ${Math.round(recipes.recipe.totalNutrients.FAT.quantity)}${recipes.recipe.totalNutrients.FAT.unit}`,
            `Carbs: ${Math.round(recipes.recipe.totalNutrients.CHOCDF.quantity)}${recipes.recipe.totalNutrients.CHOCDF.unit}`,
            `Protein: ${Math.round(recipes.recipe.totalNutrients.PROCNT.quantity)}${recipes.recipe.totalNutrients.PROCNT.unit}`
          ]
        })
      ));
    }
  }
}
</script>

<style scoped>
#flex-container {
  display: flex;
}

input {
  width: 70vw;
  max-width: 600px;
  height: 35px;
  margin-right: 5px;
  padding-left: 10px;
  font-size: 16px;
  font-weight: 500;
  border: 3px solid black;
  border-radius: 5px;
}

input:focus {
  outline: none;
}

button {
  background-color: #75c275;
  font-weight: bolder;
  border: 3px solid black;
  border-radius: 5px;
}

button:hover {
  background-color: #2f7a2f;
}
</style>