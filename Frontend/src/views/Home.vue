<template>
  <div class="p-8 pb-0 text-orange-300">

    <h1 class="text-4x1 font-bold mb-4 text-orange-500"> Random Meals</h1>

    </div>

    <Meals :meals="meals"/>

</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import { axiosClient } from "../axiosClient.ts";
import Meals from "../components/Meals.vue";


const meals = ref([])
onMounted(async() => {
  for(let i=0; i<10; i++){
    axiosClient.get('random.php').then(({data})=> meals.value.push(data.meals[0]))
  }
})
</script>

<style scoped></style>
