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


</script>

<template>
  <main class="bg-black">
    <div class="flex flex-row items-center justify-between pt-[7%] w-full px-[10%] relative">
      <div>
        <RouterLink class="flex flex-row items-center gap-x-3" to="/projects">
          <img src="/ui/smallArrow.svg" class="w-4" />
          <p class="text-white font-normal text-lg">Back to {{currentProject?.category}}</p>
        </RouterLink>
      </div>

      <div class="absolute left-1/2 transform -translate-x-1/2">
        <p class="text-white text-4xl pb-3">{{currentProject?.title}}</p>
      </div>

      <div class="flex flex-row items-center gap-x-3">
        <p class="text-white font-normal text-lg">Next Project</p>
        <div class="rotate-180">
          <img src="/ui/smallArrow.svg" class="w-4" />
        </div>
      </div>
    </div>

    <div>
      <hr class="border-t-2 border-white mt-6 mx-[10%] pb-10" />
    </div>
    <div class="w-[65%] h-[500px] mx-auto overflow-hidden">
      <ImageCarousel
        :navigation="true"
        :pagination="true"
        :startAutoPlay="false"
        :timeout="5000"
        v-slot="{ currentSlide }"
      >
        <Slide v-for="(slide, index) in currentProject?.images" :key="index">
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
    <div class="flex flex-col justify-center items-center py-[5%] w-[65%] mx-auto">
      <p class="text-white text-xl whitespace-pre-line leading-relaxed indent-12" v-text='currentProject?.description'/>
    </div>
  </main>
</template>
