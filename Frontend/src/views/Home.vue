<template>
    <div class="flex flex-col p-8">
      <input
        type="text"
        class="rounded-border-2 border-red-200 w-fill"
        placeholder="Search for todays menu"
      />
  
      <div class="flex justify-center gap-2 mt-2">
        <router-link :to="{name: 'byLetter', params:{letter}}" v-for="letter of letters">
          {{ letter }}
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed, onMounted } from "vue";
import axiosClient from "../axiosClient";
import store from "../store";
  
  const meals = computed(() => store.state.meals);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  onMounted(async () => {
    const response=await axiosClient.get('/list.php?i=list')
    console.log(response.data);
  })
  </script>
  
  <style scoped></style>
  