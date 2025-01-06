<script setup lang="ts">
//@ts-nocheck
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import data from '../../public/atl.json'
import type { Projects, ProjectCategory, CategoryKeys } from '@/types'
import { ref } from 'vue'
import ImageCarousel from '../components/ImageCarousel.vue'
import Slide from '../components/Slide.vue'

const route = useRoute()

const getCurrentPath = () => {
  const path = window.location.pathname
  console.log('Current path:', path)
  return path
}

getCurrentPath()

const newsData = data.news as News

const currentNews = computed(() => {
  const path = window.location.pathname.split('/')
  console.log(path)

  const newsSlug = path[2] as string

  const news = newsData[newsSlug]
  return {
    title: newsSlug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    ...news
  }
})
</script>

<template>
  <main class="bg-black min-h-screen">
    <div
      class="flex flex-row items-center justify-between pt-[20%] sm:pt-[7%] w-full px-[6%] relative"
    >
      <div>
        <RouterLink class="flex flex-row items-center gap-x-3" to="/news">
          <img src="/ui/smallArrow.svg" class="w-4" />
          <p class="hidden sm:flex text-white font-normal text-lg">Back to News</p>
        </RouterLink>
      </div>

      <div class="mx-auto sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
        <p class="text-white text-2xl sm:text-4xl pb-3 text-center">{{ currentNews?.title }}</p>
      </div>

      <div class="hidden sm:flex flex-row items-center gap-x-3">
        <p class="text-white font-normal text-lg">Next Article</p>
        <div class="rotate-180">
          <img src="/ui/smallArrow.svg" class="w-4" />
        </div>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row sm:gap-10 w-[90%] mx-auto">
      <!-- Carousel Container -->
      <div class="w-full sm:w-[60%] h-[300px] sm:h-[450px] my-[5%]">
        <ImageCarousel
          :navigation="true"
          :pagination="true"
          :startAutoPlay="false"
          :timeout="5000"
          class="h-full"
          v-slot="{ currentSlide }"
        >
          <Slide v-for="(slide, index) in currentNews?.images" :key="index">
            <div v-show="currentSlide === index + 1" class="w-full h-full">
              <img
                :src="slide"
                alt="Background Images"
                class="w-full h-full object-cover object-center rounded-md"
              />
            </div>
          </Slide>
        </ImageCarousel>
      </div>

      <!-- Article Text -->
      <div class="flex flex-col justify-center items-center w-full sm:w-[40%] py-6">
        <p
          class="text-white text-base sm:text-xl whitespace-pre-line leading-relaxed indent-12"
          v-text="currentNews?.article"
        />
      </div>
    </div>
  </main>
</template>