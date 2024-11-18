<script setup lang="ts">
//@ts-nocheck
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import data from '../../public/atl.json'
import type { Projects, ProjectCategory, CategoryKeys } from '@/types';  // Type-only import
import { ref } from 'vue'
import ImageCarousel from '../components/ImageCarousel.vue'
import Slide from '../components/Slide.vue'

const route = useRoute()

const getCurrentPath = () => {
  const path = window.location.pathname;
  console.log('Current path:', path);
  return path;
};


getCurrentPath();

const newsData = data.news as News

// Get current project data from route parameters
const currentNews = computed(() => {
  const path = window.location.pathname.split("/")
  console.log(path)
  
  const newsSlug = path[2] as string
  

  const news = newsData[newsSlug]
  return {
    title: newsSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    ...news
  }
})


</script>

<template>
  <main class="bg-black">
    <div class="flex flex-row items-center justify-between pt-[20%] sm:pt-[7%] w-full px-[6%] relative">
      <div>
        <RouterLink class="flex flex-row items-center gap-x-3" to="/news">
          <img src="/ui/smallArrow.svg" class="w-4" />
          <p class="hidden sm:flex text-white font-normal text-lg">Back to News</p>
        </RouterLink>
      </div>

      <div class="mx-auto sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
        <p class="text-white text-2xl sm:text-4xl pb-3 text-center">{{currentNews?.title}}</p>
      </div>

      <div class="hidden sm:flex flex-row items-center gap-x-3">
        <p class="text-white font-normal text-lg">Next Article</p>
        <div class="rotate-180">
          <img src="/ui/smallArrow.svg" class="w-4" />
        </div>
      </div>
    </div>

    <div class="w-[90%] h-[650px] mx-auto overflow-hidden mt-8 rounded-md group">
      <ImageCarousel
        :navigation="true"
        :pagination="true"
        :startAutoPlay="false"
        :timeout="5000"
        v-slot="{ currentSlide }"
      >
        <Slide v-for="(slide, index) in currentNews?.images" :key="index">
          <div v-show="currentSlide === index + 1" class="w-full h-full">
            <img
              :src="slide"
              alt="Background Images"
              class="w-full h-full object-cover object-center"
            />
          </div>
        </Slide>
      </ImageCarousel>
    </div>
    <div class="flex flex-col justify-center items-center py-[3%] w-[85%] mx-auto">
      <p class="text-white sm:text-xl whitespace-pre-line leading-relaxed indent-12" v-text='currentNews?.article'/>
    </div>
  </main>
</template>