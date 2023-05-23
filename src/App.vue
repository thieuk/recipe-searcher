<template>
  <div id="main">
    <Header></Header>
    <Filter></Filter>
    <Ingredient></Ingredient>
    <Recipe></Recipe>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Ingredient from "./components/Ingredient.vue";
import Filter from "./components/Filter.vue";
import Recipe from "./components/Recipe.vue";

export default {
  name: 'App',
  components: {
    Header, Ingredient, Filter, Recipe
  }
}
</script>

<style scoped>
* {
  font-family: "Ariel", "Helvetica", "Verdana", "sans-serif";
  margin: 0;
  padding: 0;
}

#main {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
