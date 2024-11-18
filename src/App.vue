<script setup lang="ts">
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { ref, onMounted, onUnmounted } from 'vue';
import { computed } from 'vue'

const route = useRoute()
const isActive = (path: string) => computed(() => route.path === path)
const isMobile = ref(false);
const isMenuOpen = ref(false);

const handleResize = () => {
  isMobile.value = window.matchMedia('(max-width: 768px)').matches;
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  // Prevent scrolling when menu is open
  document.body.style.overflow = isMenuOpen.value ? 'hidden' : '';
};

const closeMenu = () => {
  isMenuOpen.value = false;
  document.body.style.overflow = '';
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  window.removeEventListener('resize', handleResize);
  document.body.style.overflow = '';
});
</script>

<template>
  <div class="flex flex-col min-h-screen">
    <div class="flex flex-col">
      <header class="no-scrollbar">
        <nav class="flex flex-row w-full absolute z-20 bg-gradient-to-b from-black/50 via-[rgba(28,28,28,0.20)] to-[rgba(37,37,37,0.00)]">
          <div class="w-1/2 pl-5 sm:pl-20 py-5">
            <RouterLink to="/" @click="closeMenu"><img alt="Vue logo" src="/logo.svg" class="backdrop-blur-[1px] rounded-[25%] sm:backdrop-blur-0"/></RouterLink>
          </div>
          <div v-if="isMobile" class="w-1/2 flex items-center gap-x-20 justify-end pr-5 text-white">
            <button 
              id="hamburger" 
              class="p-2 text-white focus:outline-none z-50"
              @click="toggleMenu"
              aria-label="Toggle menu"
            >
              <svg 
                class="w-6 h-6 transition-transform duration-300" 
                :class="{ 'rotate-90': isMenuOpen }"
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  v-if="!isMenuOpen"
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
                <path 
                  v-else
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  stroke-width="2" 
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>

            <!-- Mobile Menu Overlay -->
            <div 
              v-show="isMenuOpen" 
              class="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
              @click="closeMenu"
            ></div>

            <!-- Mobile Menu Content -->
            <div 
              v-show="isMenuOpen"
              class="fixed right-0 top-0 h-full w-full z-40 transform transition-transform duration-300 ease-in-out"
              :class="{ 'translate-x-0': isMenuOpen, 'translate-x-full': !isMenuOpen }"
            >
              <div class="flex flex-col pt-20 items-center space-y-8">
                <RouterLink 
                  v-for="(link, index) in [
                    { to: '/projects', text: 'Projects' },
                    { to: '/news', text: 'News' },
                    { to: '/awards', text: 'Awards' },
                    { to: '/contact', text: 'Contact' }
                  ]"
                  :key="index"
                  :to="link.to"
                  class="nav-link text-xl"
                  :class="{ 'active': isActive(link.to).value }"
                  @click="closeMenu"
                >
                  {{ link.text }}
                </RouterLink>
              </div>
            </div>
          </div>
          <div v-else class="w-1/2 flex items-center gap-x-20 justify-end pr-20">
            <RouterLink to="/projects" class="nav-link" :class="{ 'active': isActive('/projects').value }">Projects</RouterLink>
            <RouterLink to="/news" class="nav-link" :class="{ 'active': isActive('/news').value }">News</RouterLink>
            <RouterLink to="/awards" class="nav-link" :class="{ 'active': isActive('/awards').value }">Awards</RouterLink>
            <RouterLink to="/contact" class="nav-link" :class="{ 'active': isActive('/contact').value }">Contact</RouterLink>
          </div>
        </nav>
      </header>
    </div>

    <main class="flex-grow bg-black">
      <RouterView />
    </main>

    <footer class="flex flex-col bg-black pb-8 mt-auto">
      <div class="mx-[5%]">
        <div class="flex flex-wrap items-start gap-8 relative">
          <div class="w-full h-[1px] bg-white" />
          <div class="flex-1 text-white sm:ml-5">
            <p class="font-medium text-white">Shanghai, China</p>
            <p class="font-medium text-white">Xi'an, China</p>
            <p class="font-medium text-white">Calgary, Canada</p>
          </div>
          <div class="flex flex-col items-start gap-2 sm:mr-5">
            <div>
              <p class="font-medium text-white mb-1">Connect with us:</p>              <p>
                <a href="mailto:atl@188.com" class=" mr-4 text-white">atl@188.com</a>
                <a href="+8602152137649" class="underline">Telephone</a>
              </p>
            </div>
            <p class="text-white text-xs">© 2024 ATL Lighting Design</p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.nav-link {
  @apply text-white text-lg transition-colors duration-200 hover:text-[#d91214];
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