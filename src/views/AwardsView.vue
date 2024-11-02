<script setup lang="ts">
import type { Awards } from '@/types';
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router';
import data from "../../public/atl.json"
const router = useRouter();

const awardsData = data.awards as Awards

const awards = computed(() => {
  return Object.entries(awardsData).map(([slug, award]) => ({
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    image: award.image,
    category: award.category,
    linktitle: slug,
    award: award.awards.sort((a, b) => {
      const aYear = Number(a.split(" ").pop());
      const bYear = Number(b.split(" ").pop());
      return bYear - aYear;
    }),
    
  })).sort((a, b) => {
    const aYear = Number(a.award[0].split(" ").pop())
    const bYear = Number(b.award[0].split(" ").pop())
    return bYear - aYear;
  })
})

const navigateToProject = (categorySlug: string, projectSlug: string) => {
  router.push(`/projects/${categorySlug}/${projectSlug}`)
}

console.log(awards)

</script>

<template>
  <div class="bg-black text-white font-sans min-h-screen">
    <div class="py-8">
      <div class="flex flex-row items-center justify-center pt-[5%] gap-x-4">
        <h1 class="text-5xl text-center">Awards</h1>
      </div>

      <hr class="border-t-2 border-white mt-6 mx-[5%]" />
      <div class="w-[90%] justify-center mx-auto">
        <div
          v-for="award in awards"
          :key="award.title"
          class="flex flex-row w-full h-[30vh] mb-4 mt-10"
          @click="navigateToProject(award.category, award.linktitle)"
        >
          <div class="w-3/5 h-full overflow-hidden">
            <img :src="award.image" class="w-full h-full object-cover object-center" />
          </div>
          <div class="flex flex-col w-2/5 pl-4 justify-center ml-[5%]">
            <div class="text-2xl text-white mb-2">
              {{ award.title }}
            </div>
            <div class="text-white">
              <div v-for="item in award.award" :key="item" class="text-white">
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
