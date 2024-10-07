import { defineStore } from 'pinia';
import { axiosClient } from "../axiosClient";
import { state } from './state'; // Import state from state.js

export const useMealStore = defineStore('meal', {
  // Import state from the separate file
  state: () => state,

  actions: {
    searchMeals(keyword) {
      return axiosClient.get(`http://localhost:3003/v1/api/${keyword}/3`)
        .then(({ data }) => {
          this.searchedMeals = data.meals;
        })
        .catch(error => {
          console.error('Error fetching meals:', error);
        });
    },

    searchMealsByLetter(letter) {
      return axiosClient.get(`/search.php?f=${letter}`)
        .then(({ data }) => {
          this.mealsByLetter = data.meals;
        })
        .catch(error => {
          console.error('Error fetching meals by letter:', error);
        });
    },

    searchMealsByIngredient(ingredient) {
      return axiosClient.get(`/filter.php?i=${ingredient}`)
        .then(({ data }) => {
          this.mealsByIngredient = data.meals;
        })
        .catch(error => {
          console.error('Error fetching meals by ingredient:', error);
        });
    },

    setIngredient(ingredient) {
      this.ingredient = ingredient;
    },

    displayMeals() {
      return axiosClient.get(`/random.php`)
        .then(({ data }) => {
          this.dispMeal = data.meals;
        })
        .catch(error => {
          console.error('Error fetching meals:', error);
        });
    }
  }
});
