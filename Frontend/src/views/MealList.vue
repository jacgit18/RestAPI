<template>
  <div class="flex flex-col p-8">
    <input
      type="text"
      v-model="keyword"
      class="rounded-border-2 border-red-200 w-fill"
      placeholder="Search for todays menu"
      @change="searchMeals"
    />

    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <div v-for="meal of meals" :key="meal.idMeal" class="bg-blue shadow rounded">
        <img :src="meal.strMealThumb" />
        <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
        <div class="p-3">
          <a :href="meal.strYoutube" target="_blank"
          class="px-3 py-2 rounded border-2 text-white border-orange-600 bg-orange-500 hover:bg-orange-600 transition-colors"
          >YouTube</a>
          <router-link to="">View</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import store from "../store";

const keyword = ref("");

const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}
</script>

<style scoped></style>
