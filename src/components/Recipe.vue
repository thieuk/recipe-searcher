<template>
    <div id="wrapper" v-if="store.recipe.length > 0" >
        <a :href="rec.url" target="_blank" :key="rec.name" v-for="rec in store.recipe">
            <h3 :title="rec.name">{{rec.name}}</h3>
            <div>
                <img :src="rec.img" alt="food">
                <div>
                    <p id="nutr" :key="rec.name + nutr" v-for="nutr in rec.nutrition">{{nutr}}</p>
                </div>
            </div>
        </a>
    </div>
    <button v-if="store.nextPageURL.length > 0" @click="fetchRecipe()">Show More</button>
    <p id="no-recipe" v-if="store.search && store.recipe.length === 0 ">No Recipe Found</p>
</template>

<script>
import { store } from '../store';

export default {
    name: "recipe-list",
    data() {
        return {
            store
        }
    },
    methods: {
        async fetchRecipe() {
            const res = await fetch(store.nextPageURL);
            const results = await res.json();
            
            try {
                store.nextPageURL = results._links.next.href;
            }
            catch {
                store.nextPageURL = "";
            }

            results.hits.map(recipes => (
                store.recipe.push({
                    url: recipes.recipe.url,
                    name: recipes.recipe.label,
                    ingredient: recipes.recipe.ingredientLines,
                    img: recipes.recipe.image,
                    nutrition: [
                        `Serving: ${recipes.recipe.yield}`,
                        `Calorie: ${Math.round(recipes.recipe.totalNutrients.ENERC_KCAL.quantity/recipes.recipe.yield)}`,
                        `Fat: ${Math.round(recipes.recipe.totalNutrients.FAT.quantity/recipes.recipe.yield)}${recipes.recipe.totalNutrients.FAT.unit}`,
                        `Carbs: ${Math.round(recipes.recipe.totalNutrients.CHOCDF.quantity/recipes.recipe.yield)}${recipes.recipe.totalNutrients.CHOCDF.unit}`,
                        `Protein: ${Math.round(recipes.recipe.totalNutrients.PROCNT.quantity/recipes.recipe.yield)}${recipes.recipe.totalNutrients.PROCNT.unit}`
                    ]
                })
            ));
        }
    }
}
</script>

<style scoped>
#wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 350px);
    place-content: center;
}

img {
    height: 150px;
    border-radius: 0 0 0 7px;
}

h3 {
    width: 280px;
    margin: 10px 0 10px 20px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: white;
}

#nutr {
    margin: 10px;
    padding-left: 20px;
    font-size: 14px;
}

a {
    all: unset;
    margin: 20px 10px 0 10px;
    background-color: #666633;
    border: 3px solid #666633;
    border-radius: 10px;
}

a:hover {
    cursor: pointer;
    box-shadow: 0 0 20px black;
}

a > div {
    display: flex;
}

a div div {
    width: 100%;
    background-color: #ffe6b4;
    border-radius: 0 0 7px 0;
}

button {
    background-color: #75c275;
    margin: 30px 0;
    padding: 5px 15px;
    font-size: 16px;
    font-weight: bolder;
    border: 3px solid black;
    border-radius: 5px;
}

button:hover {
    background-color: #2f7a2f;
}

#no-recipe {
    margin-top: 30px;
    font-size: 18px;
    font-weight: bold;
}
</style>