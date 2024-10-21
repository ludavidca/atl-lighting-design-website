<script setup lang="ts">
import { ref } from 'vue'

const projects = ref([
  {
    title: 'Guanyin Altar',
    year: 2024,
    location: 'ZhouShan City, China',
    image:
      'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F1.jpg?alt=media'
  },
  {
    title: 'Guanyin Altar',
    year: 2024,
    location: 'ZhouShan City, China',
    image:
      'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F2.jpg?alt=media'
  },
  {
    title: 'Guanyin Altar',
    year: 2024,
    location: 'ZhouShan City, China',
    image:
      'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F3.jpg?alt=media'
  },
  {
    title: 'Guanyin Altar',
    year: 2024,
    location: 'ZhouShan City, China',
    image:
      'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F1.jpg?alt=media'
  },
  {
    title: 'Guanyin Altar',
    year: 2024,
    location: 'ZhouShan City, China',
    image:
      'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F2.jpg?alt=media'
  },
  {
    title: 'Guanyin Altar',
    year: 2024,
    location: 'ZhouShan City, China',
    image:
      'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F3.jpg?alt=media'
  }
])

const isDropdownOpen = ref(false)
const selectedCategory = ref('Arts & Culture')

const categories = ['Arts & Culture', 'City & Landscape', 'Commercial', 'Hospitality']

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const selectCategory = (category: string) => {
  selectedCategory.value = category
  isDropdownOpen.value = false
}
</script>

<template>
  <div class="bg-black text-white font-sans">
    <div class="py-8">
      <div class="flex flex-row items-center justify-center pt-[5%] gap-x-4 relative">
        <div class="relative group">
          <button
            @click="toggleDropdown"
            class="flex items-center text-5xl hover:text-gray-300 transition-colors duration-200"
          >
            {{ selectedCategory }}
            <img
              src="/ui/dropdown.svg"
              class="object-contain ml-4 transition-transform duration-200"
              :class="{ 'transform rotate-180': isDropdownOpen }"
              :style="{ height: '20px', marginTop: '10px' }"
            />
          </button>
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <div
              v-if="isDropdownOpen"
              class="absolute left-0 w-full bg-gray-900 rounded-md shadow-lg z-10 overflow-hidden"
            >
              <ul class="py-2">
                <li
                  v-for="category in categories"
                  :key="category"
                  @click="selectCategory(category)"
                  class="px-4 py-2 hover:bg-gray-800 cursor-pointer transition-colors duration-200 text-lg"
                  :class="{ 'bg-gray-800': category === selectedCategory }"
                >
                  {{ category }}
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>

      <hr class="border-t-2 border-white mt-6 mx-[5%] mb-10" />

      <div class="w-[90%] justify-center mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="project in projects" :key="project.title" class="flex flex-col">
            <img :src="project.image" :alt="project.title" class="w-full h-64 object-cover mb-4" />
            <div class="flex flex-row justify-between gap-x-fit">
              <h2 class="text-2xl text-white mb-2">{{ project.title }}</h2>
              <p class="text-white text-2xl">{{ project.year }}</p>
            </div>
            <p class="mb-4" v-html="project.location"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
