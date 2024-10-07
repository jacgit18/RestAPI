import { axiosClient } from "../axiosClient";

export const actions = {
  // Direct state updates in Pinia actions
  searchMeals(keyword) {
    return axiosClient.get(`http://localhost:3003/v1/api/${keyword}/3`)
      .then(({ data }) => {
        console.log(data);
        // Directly mutate the state in Pinia
        this.setSearchedMeals(data.meals);
      })
      .catch(error => {
        console.error('Error fetching meals:', error);
      });
  },

  searchMealsByLetter(letter) {
    return axiosClient.get(`/search.php?f=${letter}`)
      .then(({ data }) => {
        console.log(data);
        this.setMealsByLetter(data.meals);  // Directly mutate state
      })
      .catch(error => {
        console.error('Error fetching meals by letter:', error);
      });
  },

  searchMealsByIngredient(ingredient) {
    return axiosClient.get(`/filter.php?i=${ingredient}`)
      .then(({ data }) => {
        console.log(data);
        this.setMealsByIngredient(data.meals);  // Directly mutate state
      })
      .catch(error => {
        console.error('Error fetching meals by ingredient:', error);
      });
  },

  displayMeals() {
    return axiosClient.get(`/random.php`)
      .then(({ data }) => {
        console.log(data);
        this.displayMeals(data.meals);  // Directly mutate state
      })
      .catch(error => {
        console.error('Error fetching meals:', error);
      });
  }
};
