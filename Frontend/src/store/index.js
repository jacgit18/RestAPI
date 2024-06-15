
import { createStore } from 'vuex';
import { actions } from './actions'; // Ensure the path is correct
// import { getters } from './getters';  // Ensure the path is correct
import { mutations } from './mutations'; // Ensure the path is correct
import { state } from './state'; // Ensure the path is correct

const store = createStore({
  state,
  actions,
  mutations,
  // getters
});

export default store;  // Export store as default
