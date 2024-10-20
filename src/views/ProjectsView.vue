<script setup lang="ts">
import { ref } from 'vue'

const projects = ref([
  {
    title: 'Guanyin Altar',
    year: 2024,
    location: 'ZhouShan City, China',
    image: '/CarouselImages/1.svg'
  },
  {
    title: 'Guanyin Altar',
    year: 2024,
    location: 'ZhouShan City, China',
    image: '/CarouselImages/2.svg'
  },
  {
    title: 'Guanyin Altar',
    year: 2024,
    location: 'ZhouShan City, China',
    image: '/CarouselImages/3.svg'
  },
  {
    title: 'Guanyin Altar',
    year: 2024,
    location: 'ZhouShan City, China',
    image: '/CarouselImages/1.svg'
  },
  {
    title: 'Guanyin Altar',
    year: 2024,
    location: 'ZhouShan City, China',
    image: '/CarouselImages/2.svg'
  },
  {
    title: 'Guanyin Altar',
    year: 2024,
    location: 'ZhouShan City, China',
    image: '/CarouselImages/3.svg'
  }
])
</script>

<template>
  <div class="bg-black text-white font-sans">
    <div class="py-8">
      <div class="flex flex-row items-center justify-center pt-[5%] gap-x-4">
        <h1 class="text-5xl text-center">Arts & Culture</h1>
        <img
          src="/ui/dropdown.svg"
          class="object-contain"
          :style="{ height: '40%', marginTop: '10px' }"
        />
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
