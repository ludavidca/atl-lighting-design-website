<script setup lang="ts">
//@ts-nocheck
import { computed, ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import data from '../../public/atl.json'
import type { Projects, ProjectCategory, CategoryKeys } from '@/types'
import ImageCarousel from '../components/ImageCarousel.vue'
import Slide from '../components/Slide.vue'

const route = useRoute()

const getCurrentPath = () => {
  const path = window.location.pathname
  console.log('Current path:', path)
  return path
}

getCurrentPath()

const projectsData = data.projects as Projects

// Get current project data from route parameters
const currentProject = computed(() => {
  const path = window.location.pathname.split('/')

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
    title: projectSlug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    category: category
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    ...project
  }
})

const carouselContainer = ref<HTMLElement | null>(null)
const carouselHeight = ref(0)
const isFullscreen = ref(false)

const updateCarouselHeight = () => {
  if (carouselContainer.value) {
    carouselHeight.value = (carouselContainer.value.offsetWidth * 9) / 20
  }
}

const handleImageLoad = () => {
  updateCarouselHeight()
}

const toggleFullscreen = () => {
  isFullscreen.value = !isFullscreen.value
    if (isFullscreen.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
}

onMounted(() => {
  updateCarouselHeight()
  window.addEventListener('resize', updateCarouselHeight)
})

</script>

<template>
  <main class="bg-black">
    <div
      class="flex flex-row items-center justify-between pt-[20%] sm:pt-[7%] w-full px-[6%] relative"
    >
      <div>
        <RouterLink class="flex flex-row items-center gap-x-3" to="/projects">
          <img src="/ui/smallArrow.svg" class="w-4" />
          <p class="hidden sm:flex text-white font-normal text-lg">
            Back to {{ currentProject?.category }}
          </p>
        </RouterLink>
      </div>

      <div class="mx-auto sm:mx-0 sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
        <p class="text-white text-2xl sm:text-4xl pb-3 text-center">{{ currentProject?.title }}</p>
      </div>

      <!-- <div class="hidden sm:flex flex-row items-center gap-x-3">
        <p class="text-white font-normal text-lg">Next Project</p>
        <div class="rotate-180">
          <img src="/ui/smallArrow.svg" class="w-4" />
        </div>
      </div> -->
    </div>

      <div
        ref="carouselContainer"
        class="w-[90%] mx-auto mt-8 rounded-md group relative"
        :class="{ 'fixed top-0 left-0 w-screen h-screen z-50 bg-black': isFullscreen }"
        :style="{ height: isFullscreen ? '100vh' : carouselHeight + 'px' }"
      >
      <ImageCarousel :navigation="true" :pagination="true" :startAutoPlay="false" :timeout="5000">
        <template #default="{ currentSlide }">
            <div class="relative w-full h-full">
                <div class="w-full h-full">
                <template v-for="(slide, index) in currentProject?.images" :key="index">
                    <Slide>
                        <div v-show="currentSlide === index + 1" class="w-full h-full">
                        <img
                            :src="slide"
                            @load="handleImageLoad"
                            alt="Background Images"
                            class="w-full h-full object-contain object-center"
                        />
                        </div>
                    </Slide>
                </template>
                </div>
                <div
                v-if="!isFullscreen"
                class="absolute inset-0 flex items-center justify-between px-[2%]"
                >
                <button
                    @click="
                    () => {
                        const carousel = carouselContainer.value?.querySelector('.image-carousel')
                        if (carousel) {
                        carousel.dispatchEvent(new Event('prev'))
                        }
                    }
                    "
                    class="p-2 rounded-full text-white hover:text-slate-400 active:text-slate-400 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <svg
                    width="28"
                    height="48"
                    viewBox="0 0 28 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M24 44L4 24L24 4"
                        stroke="currentColor"
                        stroke-width="7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                    />
                    </svg>
                </button>
                <button
                    @click="
                    () => {
                        const carousel = carouselContainer.value?.querySelector('.image-carousel')
                        if (carousel) {
                        carousel.dispatchEvent(new Event('next'))
                        }
                    }
                    "
                    class="p-2 rounded-full text-white hover:text-slate-400 active:text-slate-400 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    <div class="rotate-180">
                    <svg
                        width="28"
                        height="48"
                        viewBox="0 0 28 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        d="M24 44L4 24L24 4"
                        stroke="currentColor"
                        stroke-width="7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        />
                    </svg>
                    </div>
                </button>
                </div>
                    <div v-if="!isFullscreen" class="absolute bottom-[5%] left-0 right-0">
                        <div
                        class="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                        <button
                            v-for="(slide, index) in currentProject?.images?.length"
                            :key="index"
                            @click="
                            () => {
                                const carousel = carouselContainer.value?.querySelector('.image-carousel')
                                if (carousel) {
                                carousel.dispatchEvent(new CustomEvent('goto', { detail: index }))
                                }
                            }
                            "
                            :class="[
                            'w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
                            index + 1 === currentSlide ? 'bg-slate-400' : 'bg-white'
                            ]"
                        ></button>
                        </div>
                    </div>
            <button
              @click="toggleFullscreen"
              class="absolute top-4 right-4 z-10 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white px-3 py-2 rounded-md"
            >
              <span v-if="!isFullscreen">Fullscreen</span>
              <span v-else>Exit Fullscreen</span>
            </button>
            </div>
        </template>
      </ImageCarousel>
    </div>
    <div class="flex flex-col justify-center items-center py-[3%] w-[85%] mx-auto">
      <p
        class="text-white sm:text-xl whitespace-pre-line leading-relaxed indent-12"
        v-text="currentProject?.description"
      />
    </div>
  </main>
</template>
