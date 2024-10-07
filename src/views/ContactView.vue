<script setup>
import { ref } from 'vue';

const contacts = ref([
  {
    title: "Shanghai ATL Lighting Design Company",
    address: "Building 18, 333 Baotun Road<br>Huangpu District<br>Shanghai, China 200011",
  },
  {
    title: "Shanghai ATL Lighting Design Xi'an Branch",
    address: "2203, Unit 1, Building 7<br>Shuangwei Yingbin Square, Wei Yang Road<br>Xi'an, China 710018",
  },
  {
    title: "ATL International Lighting Design Inc.",
    address: "Suite 340, 600 Crowfoot Crescent NW<br>Calgary, AB, Canada T3G 0B4",
  },
]);
</script>

<template>
  <div class="bg-black text-white font-sans min-h-screen">
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl text-center mb-8 pt-[5%]">Contacts</h1>
      
      <hr class="border-t border-white mb-12">

      <div class="w-[90%] justify-center mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div v-for="contact in contacts" :key="contact.title" class="flex flex-col">
          <img src="../assets/CarouselImages/1.svg" :alt="contact.title" class="w-full h-64 object-cover mb-4">
          <h2 class="text-2xl font-bold mb-2">{{ contact.title }}</h2>
          <p class="mb-4" v-html="contact.address"></p>
          <p>
            <a href="#" class="underline mr-4">Email</a>
            <a href="#" class="underline">Telephone</a>
          </p>
        </div>
      </div>
      
      <div class="flex flex-col md:flex-row mt-16 items-center mb-10">
        <img src="../assets/CarouselImages/1.svg" alt="Careers" class="w-full h-[300px] md:w-2/3  object-cover mb-8 md:mb-0">
        <div class="flex w-1/3 items-center justify-center mx-auto">
          <div>
          <h2 class="text-4xl mb-4">Careers</h2>
          <p>
            <a href="#" class="underline mr-4">Email</a>
            <a href="#" class="underline">Telephone</a>
          </p>
        </div>
        </div>
        
      </div>
    </div>
    </div>      
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>