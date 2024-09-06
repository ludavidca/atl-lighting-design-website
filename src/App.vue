<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header class="no-scrollbar">
      <nav class="flex flex-row w-full absolute z-20 bg-gradient-to-b from-black/50 via-[rgba(28,28,28,0.20)] to-[rgba(37,37,37,0.00)]">
        <div class="w-1/2 pl-20 py-5">
          <RouterLink to="/" ><img alt="Vue logo" src="@/assets/logo.svg"/></RouterLink>
        </div>
        <div class="w-1/2 flex items-center gap-x-20 justify-end pr-20">
          <RouterLink to="/projects" class="text-white text-lg">Projects</RouterLink>
          <RouterLink to="/news" class="text-white text-lg">News</RouterLink>
          <RouterLink to="/awards" class="text-white text-lg">Awards</RouterLink>
          <RouterLink to="/contact" class="text-white text-lg">Contact</RouterLink>
        </div>
      </nav>
  </header>
  <RouterView />
</template>