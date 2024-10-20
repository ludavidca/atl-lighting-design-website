<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const isActive = (path: string) => computed(() => route.path === path)
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex flex-col">
      <header class="no-scrollbar">
        <nav class="flex flex-row w-full absolute z-20 bg-gradient-to-b from-black/50 via-[rgba(28,28,28,0.20)] to-[rgba(37,37,37,0.00)]">
          <div class="w-1/2 pl-20 py-5">
            <RouterLink to="/" ><img alt="Vue logo" src="@/assets/logo.svg"/></RouterLink>
          </div>
          <div class="w-1/2 flex items-center gap-x-20 justify-end pr-20">
            <RouterLink to="/projects" class="nav-link" :class="{ 'active': isActive('/projects').value }">Projects</RouterLink>
            <RouterLink to="/news" class="nav-link" :class="{ 'active': isActive('/news').value }">News</RouterLink>
            <RouterLink to="/awards" class="nav-link" :class="{ 'active': isActive('/awards').value }">Awards</RouterLink>
            <RouterLink to="/contact" class="nav-link" :class="{ 'active': isActive('/contact').value }">Contact</RouterLink>
          </div>
        </nav>
      </header>
    </div>

    <main class="flex-grow">
      <RouterView />
    </main>

    <footer class="flex flex-col bg-black py-8 mt-auto">
      <div class="mx-[5%]">
        <div class="flex flex-wrap items-start gap-8 relative">
          <div class="w-full h-[2px] bg-white" />
          <div class="flex-1 text-white ml-5">
            <p class="font-medium text-white">Shanghai, China</p>
            <p class="font-medium text-white">Xi'an, China</p>
            <p class="font-medium text-white">Calgary, Canada</p>
          </div>
          <div class="flex flex-col items-start gap-2 mr-5">
            <div>
              <p class="font-medium text-white mb-1">Connect with us:</p>
              <p class=" text-white">atl@188.com</p>
            </div>
            <p class="text-white text-sm">© 2024 ATL Lighting Design</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.nav-link {
  @apply text-white text-lg transition-colors duration-200;
}

.nav-link.active {
  @apply text-[#d91214];
}

.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>