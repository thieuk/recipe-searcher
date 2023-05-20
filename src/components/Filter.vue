<template>
    <h3>Health Restrictions:</h3>
    <div id="flex-container">
        <button @click="clearFilter()">Clear Filter</button>
        <span :key="element.APIParam" v-for="element in store.dietaryRestriction" 
        :class="[element.active ? 'active' : '']" @click="handleFilter(element.APIParam, element.active)">
            {{ element.restriction }}
            <span id="plus" class="icon" v-if="!element.active">+</span>
            <span id="close" class="icon" v-if="element.active" :class="[element.active ? 'active' : '']">x</span>
        </span>
    </div>
</template>

<script>
import { store } from '../store.js'

export default {
    name: "diet-filter",
    data() {
        return {
            store
        }
    },
    methods: {
        handleFilter(APIParam, active) {
            for (let i = 0; i < store.dietaryRestriction.length; i++) {
                if (store.dietaryRestriction[i].APIParam === APIParam) {
                    if (active) store.dietaryRestriction[i].active = false;
                    else store.dietaryRestriction[i].active = true;
                }
            }
        },
        clearFilter() {
            store.dietaryRestriction.map(res => { res.active = false; });
        }
    }
}
</script>

<style scoped>
#flex-container {
    display: flex;
    flex-wrap: wrap;
    width: 80vw;
    max-width: 700px;
    margin-bottom: 25px;
}

h3 {
    margin: 5px 0;
}

span {
    display: flex;
    justify-content: center;
    background-color: white;
    margin: 3px 3px;
    padding: 5px 10px;
    border: 2px solid black;
    border-radius: 20px;
}

span:hover {
    cursor: pointer;
}

button {
    all: unset;
    color: white;
    margin: 3px 3px;
    padding: 5px 10px;
    font-weight: bolder;
    border: 2px solid white;
    border-radius: 20px;
    box-shadow: 0 0 5px #3b3b3b;
    text-shadow: 2px 2px 5px #3b3b3b;
}

button:hover {
    cursor: pointer;
}

.icon {
    font-family: 'Trebuchet MS', sans-serif;
    width: 10px;
    margin: 0;
    margin-left: 5px;
    padding: 0;
    border: none;
}

#plus {
    font-size: 18px;
    line-height: 18px;
}

#close {
    line-height: 17px;
}

.active {
    background: #75c275;
}

@media only screen and (max-width: 550px) {
    span {
        font-size: 14px;
    }
}
</style>