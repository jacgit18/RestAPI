<template>
  <div class="p-8 pb-0">

    <h1 class="text-4x1 font-bold mb-4 text-orange-500"> Search Meals by Name</h1>
    </div>

    <div class="px-8 pb-3">
      <input
      type="text"
      v-model="keyword"
      class="rounded-border-2 border-red-200 w-fill"
      placeholder="Search for todays menu"
      @change="searchMeals"
    />
    </div>

    <Meals :meals="meals"/>

</template>

<script setup>
import { computed } from "@vue/reactivity";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Meals from "../components/Meals.vue";
import store from "../store";


const keyword = ref("");
const route = useRoute();

const meals = computed(() => store.state.searchedMeals);

function searchMeals() {
  if (keyword.value) {
    store.dispatch("searchMeals", keyword.value);
  } else {
    store.commit("setSearchedMeals", []);
  }
}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>

<style scoped></style>
