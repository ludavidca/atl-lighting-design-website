<script setup lang="ts">
//@ts-nocheck
import { ref } from 'vue'
import ImageCarousel from '../components/ImageCarousel.vue'
import Slide from '../components/Slide.vue'
import image1 from '/CarouselImages/1.svg'
import image2 from '/CarouselImages/2.svg'
import image3 from '/CarouselImages/3.svg'

const carouselSlides = [image1, image2, image3]
const values = ref([
  {
    title: 'People-Centric',
    text: 'People are the central element of ATL. We rigorously pursue end user experience and optimize owner benefits.',
    imagelink: '/HomePage/peopleCentric.svg'
  },
  {
    title: 'Purpose-Driven',
    text: 'The lighting design focuses on the purpose of the architecture, and highlights each of its unique characteristic.',
    imagelink: '/HomePage/purposeDriven.svg'
  },
  {
    title: 'Sustainability',
    text: 'ATL contributes to a sustainable world by continuously adopting cutting-edge and energy efficient technology',
    imagelink: '/HomePage/sustainability.svg'
  }
])
</script>

<template>
  <main class="bg-black overflow-x-hidden">
    <div className="absolute bottom-[30%] right-[10%] z-10 text-white text-4xl font-semibold backdrop-blur-[3px] p-1 rounded-xl shadow-3xl">
      Lighting Connects Us with the World ©​
    </div>
    <div class="w-screen h-screen">
      <ImageCarousel
        :navigation="false"
        :pagination="false"
        :startAutoPlay="true"
        :timeout="5000"
        v-slot="{ currentSlide }"
      >
        <Slide v-for="(slide, index) in carouselSlides" :key="index">
          <div v-show="currentSlide === index + 1" class="w-full">
            <img :src="slide" alt="Background Images" class="w-full h-screen object-cover" />
          </div>
        </Slide>
      </ImageCarousel>
    </div>

    <div class="px-[5%] pt-20 overflow-y-hidden w-[100%]">
      <!-- This is the Our Company Intro -->
      <div class="flex flex-row w-fit items-center justify-center relative translate-x-[-9%]">
        <div class="z-10 w-1/2 translate-x-[10%] p-[4%] bg-black">
          <h1 class="text-5xl text-white pb-4">Our Company</h1>
          <hr class="border-t-2 border-white mt-2 pb-2" />
          <p class="text-md text-white">
            Founded in 2006, ATL is a leading architectural lighting design firm specializing in
            China's cultural and tourism sectors. Our expert team has completed over 300 projects,
            blending artistic vision with cutting-edge lighting technology. ATL's commitment to
            excellence has earned us numerous top awards nationally and internationally,
            establishing our reputation as pioneers in cultural and tourism lighting design.
          </p>
        </div>
        <div>
          <img
            src="/CarouselImages/3.svg"
            class="w-full object-cover object-center overflow-y-hidden"
          />
        </div>
      </div>

      <!-- This is the Our Values -->
      <div class="pt-10 pb-10">
        <div>
          <h1 class="text-5xl text-white">Our Values</h1>
          <div class="grid grid-cols-3 gap-12 w-full pt-10">
            <div v-for="value in values" :key="value.title">
              <div class="border-white border-2 p-6 flex-col">
                <h1 class="text-3xl text-white">{{ value.title }}</h1>
                <div class="w-full h-[2px] bg-white my-3" />
                <p class="text-white text-lg pb-6">{{ value.text }}</p>
              </div>
              <img :src="value.imagelink" class="w-full pt-20" />
            </div>
          </div>
        </div>
      </div>
      <!-- This is the Our Values -->
      <div class="pt-10 pb-10">
        <div>
          <h1 class="text-5xl text-white pb-10">Our Principal Designers</h1>
          <div class="flex flex-row items-center justify-center">
            <div class="w-[70%]">
              <img src="/HomePage/designers.svg" />
            </div>
            <div class="ml-[5%] w-1/4 flex flex-col items-start justify-center">
              <div
                class="font-normal text-transparent text-5xl tracking-[0] leading-normal space-y-4"
              >
                <div>
                  <span class="text-[#d91214]">20+</span>
                  <span class="text-white"> People <br /></span>
                </div>
                <div>
                  <span class="text-[#d91214]">50+</span>
                  <span class="text-white"> Awards </span>
                </div>
                <div>
                  <span class="text-[#d91214]">300+</span>
                  <span class="text-white"> Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
