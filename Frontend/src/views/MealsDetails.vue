<template>
  <div class="w-[800px] mx-auto p-8">
<!-- 
<div>
  <pre>
  {{ meal }}
</pre>

</div> -->

    <h1 class="text-5x1 font-bold mb-5">{{ meal.strMeal }}</h1>

    <img :src="meal.strMealThumb" alt="Meal Image" />

    <div class="grid grid-cols-1 sm:grid-cols-3 my-4">
      <div>
        <strong class="font-bold">Category:</strong> {{ meal.strCategory }}
      </div>
      <div>
        <strong class="font-bold">Area:</strong> {{ meal.strArea }}
      </div>
      <div>
        <strong class="font-bold">Tags:</strong> {{ meal.strTags }}
      </div>
    </div>

    <div class="my-3">
      {{ meal.strInstructions }}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients</h2>
        <ul>
          <template v-for="ind in 20">
            <li v-if="meal[`strIngredient${ind}`]">
              {{ ind }}. {{ meal[`strIngredient${ind}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div class="mt-4">
        <YoutubeButton :href="meal.strYoutube" />
        <a
          :href="meal.strSource"
          target="_blank"
          class="ml-3 py-3 rounded border-2 border-transparent text-indigo-600 transition-colors"
        >
          View The Creator
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { axiosClient } from "../axiosClient";
import YoutubeButton from "../components/YoutubeButton.vue";

const route = useRoute();
const meal = ref({});

onMounted(() => {
  axiosClient.get(`lookup.php?i=${route.params.id}`).then(({ data }) => {
    meal.value = data.meals[0] || {};
  });
});
</script>

<style scoped></style>
