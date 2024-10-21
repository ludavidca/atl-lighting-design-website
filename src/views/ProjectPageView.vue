<script setup lang="ts">
//@ts-nocheck
import { ref } from 'vue'
import ImageCarousel from '../components/ImageCarousel.vue'
import Slide from '../components/Slide.vue'
import image1 from 'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F1.jpg?alt=media'
import image2 from 'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F2.jpg?alt=media'
import image3 from 'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/CarouselImages%2F3.jpg?alt=media'

const carouselSlides = [image1, image2, image3]
</script>

<template>
  <main class="bg-black">
    <div class="flex flex-row items-center justify-between pt-[7%] w-full px-[10%] relative">
      <div class="flex flex-row items-center gap-x-3">
        <img src="/ui/smallArrow.svg" class="w-4" />
        <p class="text-white font-normal text-lg">Back to Arts and Culture</p>
      </div>

      <div class="absolute left-1/2 transform -translate-x-1/2">
        <p class="text-white text-4xl pb-3">Guanyin Altar</p>
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
        <Slide v-for="(slide, index) in carouselSlides" :key="index">
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
      <p class="text-white text-2xl">
        As the largest contemporary Buddhist building in the world, the Guanyin Altar facilitates
        Buddhist cultural exhibition, sightseeing, pilgrimage, and international exchange in a
        62,000 sqm space.
        <br /><br />
        Combining modern architectural style, Buddhist and traditional Chinese culture, the unique
        architecture was reinforced by an innovative lighting design. By means of a lighting system
        integrating functional lighting and artistic lighting show, visitors are immersed in the
        spirit of Guanyin, “the light of Buddha shines on all living beings”.
        <br /><br />
        To illustrate the culture of Guanyin, a variety of lighting techniques are used to precisely
        exhibit Buddhist art works and highlight traditional Chinese architectural elements.
      </p>
    </div>
  </main>
</template>
