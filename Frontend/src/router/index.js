import { createRouter, createWebHistory } from "vue-router";
import DefaultLayout from "../components/DefaultLayout.vue";
import Home from "../views/Home.vue";
import MealList from "../views/MealList.vue";
import MealsByIng from "../views/MealsByIng.vue";
import MealsByLetter from "../views/MealsByLetter.vue";
import MealsByName from "../views/MealsByName.vue";
import MealsDetails from "../views/MealsDetails.vue";

const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/letter/:letter?",
        name: "byLetter",
        component: MealList,
      },
      {
        path: "/by-ingredient/:ingredient?",
        name: "byIngredient",
        component: MealsByIng,
      },
      {
        path: "/meal/:id?",
        name: "mealDetails",
        component: MealsDetails,
      },
      {
        path: "/by-Letter/:letter?",
        name: "byLetter",
        component: MealsByLetter,
      },
      {
        path: "/by-Name/:name?",
        name: "byName",
        component: MealsByName,
      },
    ],
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
