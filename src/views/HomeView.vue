<script setup lang="ts">
//@ts-nocheck
import { ref } from 'vue';
import ImageCarousel from '../components/ImageCarousel.vue'
import Slide from "../components/Slide.vue";
import image1 from '../assets/CarouselImages/1.svg';
import image2 from '../assets/CarouselImages/2.svg';
import image3 from '../assets/CarouselImages/3.svg';

const carouselSlides = [image1, image2, image3];
</script>

<template>
  <main class="bg-black">
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
  </main>
</template>
