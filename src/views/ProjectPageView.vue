<script setup lang="ts">
//@ts-nocheck
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import data from '../../public/atl.json'
import type { Projects, ProjectCategory, CategoryKeys } from '@/types';  // Type-only import
import ImageCarousel from '../components/ImageCarousel.vue'
import Slide from '../components/Slide.vue'

const route = useRoute()

const getCurrentPath = () => {
  const path = window.location.pathname;
  console.log('Current path:', path);
  return path;
};

getCurrentPath();

const projectsData = data.projects as Projects

// Get current project data from route parameters
const currentProject = computed(() => {
  const path = window.location.pathname.split("/")
  
  const category = path[2] as CategoryKeys
  const projectSlug = path[3] as string

  console.log(category, projectSlug)
  
  if (!category || !projectSlug || !projectsData[category]?.[projectSlug]) {
    return null
  }

  // Type guard to ensure category is valid
  if (!(category in projectsData)) {
    return null
  }

  const project = projectsData[category][projectSlug]
  return {
    title: projectSlug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    category: category.split("-").map((word)=>word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    ...project
  }
})

const carouselContainer = ref<HTMLElement | null>(null)
const carouselHeight = ref(0);
 
const updateCarouselHeight = () => {
  if (carouselContainer.value) {
    carouselHeight.value = carouselContainer.value.offsetWidth * 9 / 16; // Assuming 16:9 aspect ratio
  }
};

const handleImageLoad = () => {
  updateCarouselHeight();
};
</script>

<template>
  <main class="bg-black">
    <div class="flex flex-row items-center justify-between pt-[20%] sm:pt-[7%] w-full px-[6%] relative">
      <div>
        <RouterLink class="flex flex-row items-center gap-x-3" to="/projects">
          <img src="/ui/smallArrow.svg" class="w-4" />
          <p class="hidden sm:flex text-white font-normal text-lg">Back to {{currentProject?.category}}</p>
        </RouterLink>
      </div>

      <div class="mx-auto sm:mx-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
        <p class="text-white text-2xl sm:text-4xl pb-3 text-center">{{currentProject?.title}}</p>
      </div>

      <div class="hidden sm:flex flex-row items-center gap-x-3">
        <p class="text-white font-normal text-lg">Next Project</p>
        <div class="rotate-180">
          <img src="/ui/smallArrow.svg" class="w-4" />
        </div>
      </div>
    </div>

    <div ref="carouselContainer" class="w-[90%] mx-auto mt-8 rounded-md group relative" :style="{ height: carouselHeight + 'px' }">
      <ImageCarousel
        :navigation="true"
        :pagination="true"
        :startAutoPlay="false"
        :timeout="5000"
        v-slot="{ currentSlide, isFullscreen }"
      >
        <template v-for="(slide, index) in currentProject?.images" :key="index">
          <Slide v-if="!isFullscreen">
            <div v-show="currentSlide === index + 1" class="w-full h-full">
              <img
                :src="slide"
                @load="handleImageLoad"
                alt="Background Images"
                class="w-full h-full object-cover object-center"
              />
            </div>
          </Slide>
          <Slide v-else>
                <img
                  v-show="currentSlide === index + 1"
                  :src="slide"
                  alt="Background Images"
                  class="w-full h-full object-contain object-center"
                />
          </Slide>
        </template>
      </ImageCarousel>
    </div>
    <div class="flex flex-col justify-center items-center py-[3%] w-[85%] mx-auto">
      <p class="text-white sm:text-xl whitespace-pre-line leading-relaxed indent-12" v-text='currentProject?.description'/>
    </div>
  </main>
</template>