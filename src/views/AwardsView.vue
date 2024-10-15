<script setup lang="ts">
import { ref } from 'vue';

const awardprojects = ref([
  {
    title: "Guanyin Altar",
    image: "src/assets/CarouselImages/3.svg",
    awards: [
      "1st Prize of Outdoor Lighting Design – CIES 2022",
      "1st Prize of Outdoor Lighting Design – CIES 2022",
      "1st Prize of Outdoor Lighting Design – CIES 2022",
    ]
  },
  {
    title: "Guanyin Altar",
    image: "src/assets/CarouselImages/3.svg",
    awards: [
      "1st Prize of Outdoor Lighting Design – CIES 2022",
    ]
  },
]);
</script>

<template>
  <div class="bg-black text-white font-sans min-h-screen">
    <div class="py-8">
     <div class="flex flex-row items-center justify-center pt-[5%] gap-x-4">
      <h1 class="text-5xl text-center">Awards</h1>
    </div>
      
      <hr class="border-t-2 border-white mt-6 mx-[5%]">
        <div class="w-[90%] justify-center mx-auto">
          <div v-for="award in awardprojects" :key="award.title" class="flex flex-row w-full h-[30vh] mb-4 mt-10">
            <div class="w-3/5 h-full overflow-hidden">
              <img :src="award.image" class="w-full h-full object-cover object-center">
            </div>
            <div class="flex flex-col w-2/5 pl-4 justify-center ml-[5%]">
              <div class="text-2xl text-white mb-2">
                {{ award.title }}
              </div>
              <div class="text-white">
                <div v-for="item in award.awards" :key="item" class="text-white">
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
