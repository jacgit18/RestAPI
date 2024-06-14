<template>
    <div class="bg-gray-100 h-100">
      <header class="bg-white shadow h-16 flex justify-between items-stretch">
        <router-link
          :to="{ name: 'home' }"
          class="inline-flex items-center h-full px-5"
        >
          Home
        </router-link>
        <div class="flex items-center gap-1">
          <router-link
            to=""
            class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
          >
            Search Meals
          </router-link>
          <router-link
            to=""
            class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
          >
            Meals by Letter
          </router-link>
          <router-link
            to=""
            class="inline-flex items-center px-2 h-full transition-colors hover:bg-purple-100"
          >
            Meals by Ingredients
          </router-link>
        </div>
      </header>
      <main>
        <router-view />
      </main>
    </div>
  </template>
  
  <script></script>
  
  <style></style>
  