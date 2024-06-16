import { axiosClient } from "../axiosClient";
// send a request to backend enpoint with keyword or some thing
export const actions = {
  searchMeals({ commit }, keyword) {
    axiosClient.get(`http://localhost:3003/v1/api/${keyword}/3`)
    .then(({ data }) => {
        console.log(data);
        commit('setSearchedMeals', data.meals); // Assuming 'setSearchedMeals' mutation exists
      })
      .catch(error => {
        console.error('Error fetching meals:', error);
      });
  },

  searchMealsByLetter({ commit }, letter) {
    axiosClient.get(`/search.php?f=${letter}`)
      .then(({ data }) => {
        console.log(data);
        commit('setMealsByLetter', data.meals); // Assuming 'setMealsByLetter' mutation exists
      })
      .catch(error => {
        console.error('Error fetching meals by letter:', error);
      });
  },

  searchMealsByIngredient({ commit }, ingredient) {
    axiosClient.get(`/filter.php?i=${ingredient}`)
      .then(({ data }) => {
        console.log(data);
        commit('setMealsByIngredient', data.meals); // Assuming 'setMealsByIngredient' mutation exists
      })
      .catch(error => {
        console.error('Error fetching meals by ingredient:', error);
      });
  },

  displayMeals({ commit }, dis) {
    axiosClient.get(`/random.php`)
      .then(({ data }) => {
        console.log(data);
        commit('displayMeals', data.meals); // Assuming 'setMealsByIngredient' mutation exists
      })
      .catch(error => {
        console.error('Error fetching meals by ingredient:', error);
      });
  }
};
