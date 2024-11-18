<script setup lang="ts">
//@ts-nocheck
import { ref } from 'vue'
import ImageCarousel from '../components/ImageCarousel.vue'
import Slide from '../components/Slide.vue'

const carouselSlides = [
  'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F1.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F2.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F3.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F4.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F5.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F6.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F7.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F8.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F9.jpg?alt=media',
  'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F10.jpg?alt=media'
]
const values = ref([
  {
    title: 'People-Centric',
    text: 'People are the central element of ATL. We rigorously pursue end user experience and optimize owner benefits.',
    imagelink:
      'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/HomePage%2FpeopleCentric.svg?alt=media&token=8c6dd513-2a57-4590-9bb2-6f9622c1309f'
  },
  {
    title: 'Purpose-Driven',
    text: 'The lighting design focuses on the purpose of the architecture, and highlights each of its unique characteristic.',
    imagelink:
      'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/HomePage%2FpurposeDriven.svg?alt=media&token=2d096be3-4e6a-415a-b35d-533f41f07cac'
  },
  {
    title: 'Sustainability',
    text: 'ATL contributes to a sustainable world by continuously adopting cutting-edge and energy efficient technology',
    imagelink:
      'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/HomePage%2Fsustainability.svg?alt=media&token=39499327-b64e-4905-9965-35769931b2f2'
  }
])
</script>

<template>
  <main class="bg-black overflow-x-hidden">
    <div
      className="absolute bottom-[30%] flex right-[5%] sm:right-[10%] z-10 text-white text-xl sm:text-4xl font-semibold backdrop-blur-[3px] p-1 rounded-[25%] shadow-3xl transition-all duration-500 hover:transform hover:scale-105 hover:opacity-80 "
    >
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
      <!-- Our Company Intro -->
      <div class="flex flex-col-reverse sm:flex-row w-full items-center justify-between relative">
        <div class="z-10 sm:w-[45%] bg-black sm:pr-10 py-10 sm:py-20 ">
          <h1 class="text-3xl sm:text-5xl text-white pb-4">Our Company</h1>
          <hr class="border-t-2 border-white mt-2 pb-2" />
          <p class="text-md text-white">
            Founded in 2006, ATL is a leading architectural lighting design firm specializing in
            China's cultural and tourism sectors. Our expert team has completed over 300 projects,
            blending artistic vision with cutting-edge lighting technology. ATL's commitment to
            excellence has earned us numerous top awards nationally and internationally,
            establishing our reputation as pioneers in cultural and tourism lighting design.
          </p>
        </div>
        <div class="w-full sm:w-[60%] sm:ml-[-5%]">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F3.jpg?alt=media&token=fb2e62ad-4299-4fc8-91d4-3b91ecfb2bd0"
            alt="Company Image"
            class="w-full h-full object-cover"
          />
        </div>
      </div>

      <!-- This is the Our Values -->
      <div class="sm:pt-10 sm:pb-10">
        <div>
          <h1 class="text-3xl sm:text-5xl text-white">Our Values</h1>
          <div class="flex flex-col sm:grid sm:grid-cols-3 gap-12 w-full pt-4 sm:pt-10">
            <div v-for="value in values" :key="value.title">
              <div class="border-2 p-5 flex-col rounded-2xl">
                <h1 class="text-xl sm:text-3xl text-white">{{ value.title }}</h1>
                <p class="text-white text-md sm:text-lg mt-4">{{ value.text }}</p>
              </div>
              <img :src="value.imagelink" class="w-full pt-20 hidden sm:flex" />
            </div>
          </div>
        </div>
      </div>
      <div class="flex flex-row sm:hidden">
        <div v-for="value in values" class="w-1/3">
          <img :src="value.imglink" class="w-full"/>
        </div>
      </div>
      <!-- This is  Our Principal Designers -->
      <div class="pt-10 pb-10">
        <div>
          <h1 class="text-3xl sm:text-5xl text-white pb-4 sm:pb-10">Our Principal Designers</h1>
          <div class="flex flex-col sm:flex-row items-center justify-center">
            <div class="sm:w-[70%]">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/HomePage%2Fdesigners.svg?alt=media&token=bc4b08d4-f995-47c7-9e73-f8f067a0b636"
              />
            </div>
            <div class="sm:ml-[5%] sm:w-1/4 flex flex-col items-start justify-center">
              <div
                class="flex flex-row sm:flex-col gap-x-3 font-normal text-transparent text-xl sm:text-5xl tracking-[0] leading-normal sm:space-y-4"
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
