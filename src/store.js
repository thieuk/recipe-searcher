import { reactive } from 'vue'

export const store = reactive({
    API: {
        id: "0c54d7a5",
        key: "b5b9ab7e48aa74741c15be463a3cadfb"
    },
    nextPageURL: "",
    search: false,
    dietaryRestriction: [
        {
            restriction: "kosher",
            APIParam: "kosher",
            active: false
        },
        {
            restriction: "vegan",
            APIParam: "vegan",
            active: false
        },
        {
            restriction: "vegetarian",
            APIParam: "vegetarian",
            active: false
        },
        {
            restriction: "dairy free",
            APIParam: "dairy-free",
            active: false
        },
        {
            restriction: "gluten free",
            APIParam: "gluten-free",
            active: false
        },
        {
            restriction: "peanut free",
            APIParam: "peanut-free",
            active: false
        },
        {
            restriction: "tree nut free",
            APIParam: "tree-nut-free",
            active: false
        },
        {
            restriction: "shellfish free",
            APIParam: "shellfish-free",
            active: false
        },
        {
            restriction: "paleo",
            APIParam: "paleo",
            active: false
        },
        {
            restriction: "soy free",
            APIParam: "soy-free",
            active: false
        },
        {
            restriction: "egg free",
            APIParam: "egg-free",
            active: false
        }
    ],
    recipe: []
})