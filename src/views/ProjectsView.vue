<script lang="ts">
import { ref } from 'vue';

const projects = ref([
  {
    title: "Guanyin Altar",
    year: 2024,
    location: "ZhouShan City, China",
    image: "src/assets/Contact/shanghai.svg",
  },
  {
    title: "Guanyin Altar",
    year: 2024,
    location: "ZhouShan City, China",
    image: "src/assets/Contact/shanghai.svg",
  },
  // ...repeat as needed
]);
</script>

<template>
  <div class="bg-black text-white font-sans min-h-screen">
    <div class="container  py-8 mb-8">
     <div class="flex flex-row items-center justify-center pt-[5%] gap-x-4">
      <h1 class="text-5xl text-center">Arts & Culture</h1>
      <img
        src="../assets/ui/dropdown.svg"
        class="object-contain"
        :style="{ height: '40%',
        marginTop: '10px',
        }"
      />
    </div>
      
      <hr class="border-t-2 border-white mt-6 mx-[5%] mb-10">

      <div class="w-[90%] justify-center mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div v-for="contact in contacts" :key="contact.title" class="flex flex-col">
          <img :src="contact.image" :alt="contact.title" class="w-full h-64 object-cover mb-4">
          <h2 class="text-2xl font-bold mb-2">{{ contact.title }}</h2>
          <p class="mb-4" v-html="contact.address"></p>
          <p>
            <a href="#" class="underline mr-4">Email</a>
            <a href="#" class="underline">Telephone</a>
          </p>
        </div>
      </div>
    </div>
    </div>
  </div>
</template>
