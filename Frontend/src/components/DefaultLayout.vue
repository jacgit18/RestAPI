<template>
  <nav-bar />
    <main>
      <div class="max-w[1200px] max-auto">

    <router-view />
      </div>

    </main>


</template>

<script setup>
import NavBar  from "./NavBar.vue";

</script>

<style scoped></style>
