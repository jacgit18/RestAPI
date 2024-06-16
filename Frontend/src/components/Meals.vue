<template>
  <div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 px-8" v-if="meals.length > 0">
      <MealItem
        v-for="meal in meals"
        :key="meal.idMeal"
        :meal="meal"
        class="bg-blue shadow rounded"
      />
    </div>

    <div v-else class="flex justify-center text-gray-600 p-8">
      No Meals Found
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";
import MealItem from "./MealItem.vue";

// Ensure proper prop definition
const { meals } = defineProps({
  meals: {
    required: true,
    type: Array,
    default: () => [] // Default value as an empty array
  },
});
</script>

<style scoped>
/* Scoped styles if needed */
</style>
