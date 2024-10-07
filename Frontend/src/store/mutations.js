import { defineStore } from 'pinia';
import { axiosClient } from "../axiosClient";

export const useMealStore = defineStore('meal', {
  state: () => ({
    searchedMeals: [],
    mealsByLetter: [],
    mealsByIngredient: [],
    ingredient: '',
    dispMeal: [],
  }),

  actions: {
    // Direct state modification in actions
    searchMeals(keyword) {
      return axiosClient.get(`http://localhost:3003/v1/api/${keyword}/3`)
        .then(({ data }) => {
          console.log(data);
          this.searchedMeals = data.meals;  // Direct state modification
        })
        .catch(error => {
          console.error('Error fetching meals:', error);
        });
    },

    searchMealsByLetter(letter) {
      return axiosClient.get(`/search.php?f=${letter}`)
        .then(({ data }) => {
          console.log(data);
          this.mealsByLetter = data.meals;  // Direct state modification
        })
        .catch(error => {
          console.error('Error fetching meals by letter:', error);
        });
    },

    searchMealsByIngredient(ingredient) {
      return axiosClient.get(`/filter.php?i=${ingredient}`)
        .then(({ data }) => {
          console.log(data);
          this.mealsByIngredient = data.meals;  // Direct state modification
        })
        .catch(error => {
          console.error('Error fetching meals by ingredient:', error);
        });
    },

    setIngredient(ingredient) {
      this.ingredient = ingredient;  // Direct state modification
    },

    displayMeals() {
      return axiosClient.get(`/random.php`)
        .then(({ data }) => {
          console.log(data);
          this.dispMeal = data.meals;  // Direct state modification
        })
        .catch(error => {
          console.error('Error fetching meals:', error);
        });
    }
  }
});
