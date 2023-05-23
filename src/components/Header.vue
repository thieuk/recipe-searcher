<template>
    <img src="../assets/header.png" alt="header">
    <h1>Recipe Searcher</h1>
    <h3>Welcome to our recipe website! We're proud to offer a feature that allows users to search for recipes based on 
    the ingredients they have on hand. Simply type in the ingredients you want to use and our search tool will generate 
    a list of recipes that match those ingredients.</h3>
</template>

<script>
export default {
    name: "header-component"
}
</script>

<style scoped>
img {
  width: 300px;
}

h1 {
  margin-top: -85px;
}

h3 {
  width: 80%;
  text-align: center;
  margin-top: 50px;
}

@media only screen and (max-width: 550px) {
  img {
    width: 200px;
  }

  h1 {
    font-size: 18px;
    margin-top: -55px;
  }

  h3 {
    margin-top: 30px;
    font-size: 14px;
  }
}

</style>