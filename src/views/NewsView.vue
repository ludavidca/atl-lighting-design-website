<script setup lang="ts">
import { ref } from 'vue'

const news = ref([
  {
    title: 'ATL Shanghai New Office',
    image: 'src/assets/Contact/shanghai.svg',
    date: 'Jun 28th, 2020',
    text: 'ATL Shanghai moved into an iconic building located in the Urban Best Practice Area on June 28, 2020. As a green building showcase, the new office building is the Alsace Pavilion during Expo Shanghai 2010. Equipped with a water curtained solar panel on the south facade, the building effectively utilizes green energy upon the changes of outdoor temperature and sunlight intensity. Inside the building, a Human Centric Lighting system demonstrates the cutting-edge lighting technology to maximize energy saving and achieve the highest standard of Well Building V2.'
  },
  {
    title: 'ATL Shanghai New Office',
    image: 'src/assets/Contact/shanghai.svg',
    date: 'Jun 28th, 2020',
    text: 'ATL Shanghai moved into an iconic building located in the Urban Best Practice Area on June 28, 2020. As a green building showcase, the new office building is the Alsace Pavilion during Expo Shanghai 2010. Equipped with a water curtained solar panel on the south facade, the building effectively utilizes green energy upon the changes of outdoor temperature and sunlight intensity. Inside the building, a Human Centric Lighting system demonstrates the cutting-edge lighting technology to maximize energy saving and achieve the highest standard of Well Building V2.'
  }
])
</script>

<template>
  <div class="bg-black text-white font-sans min-h-screen">
    <div class="py-8">
      <div class="flex flex-row items-center justify-center pt-[5%] gap-x-4">
        <h1 class="text-5xl text-center">News</h1>
      </div>

      <hr class="border-t-2 border-white mt-6 mx-[5%]" />

      <div class="w-[90%] justify-center mx-auto gap-y-10">
        <div
          v-for="article in news"
          :key="article.title"
          class="flex flex-row h-[30vh] p-2 border-white border-2 mt-10"
        >
          <div class="w-2/5 h-full overflow-hidden">
            <img :src="article.image" class="w-full h-full object-cover object-center" />
          </div>
          <div class="w-3/5 flex flex-col items-start mx-[5%] my-auto">
            <div class="text-white text-3xl mb-2">{{ article.title }}</div>
            <div class="text-white mb-6">{{ article.date }}</div>
            <div class="text-white line-clamp-2">{{ article.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
