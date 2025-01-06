<script setup lang="ts">
import type { Awards } from '@/types'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import data from '../../public/atl.json'
const router = useRouter()

const awardsData = data.awards as Awards

const awards = computed(() => {
  return Object.entries(awardsData)
    .map(([slug, award]) => ({
      title: slug
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
      image: award.image,
      category: award.category,
      linktitle: slug,
      award: award.awards.sort((a, b) => {
        const aYear = Number(a.split(' ').pop())
        const bYear = Number(b.split(' ').pop())
        return bYear - aYear
      })
    }))
    .sort((a, b) => {
      const aYear = Number(a.award[0].split(' ').pop())
      const bYear = Number(b.award[0].split(' ').pop())
      return bYear - aYear
    })
})

const navigateToProject = (categorySlug: string, projectSlug: string) => {
  router.push(`/projects/${categorySlug}/${projectSlug}`)
}

</script>

<template>
  <div class="bg-black text-white font-sans min-h-screen">
    <div class="py-8">
      <div class="flex flex-row items-center justify-center pt-[10%] sm:pt-[5%] gap-x-4">
        <h1 class="text-3xl sm:text-5xl text-center">Awards</h1>
      </div>

      <hr class="border-t-2 border-black sm:mt-6 mx-[5%]" />

      <div class="w-[90%] justify-center mx-auto grid sm:grid-cols-2">
        <div
          v-for="award in awards"
          :key="award.title"
          class="flex flex-col items-center mt-[10%] sm:mt-0 sm:h-[60vh] sm:p-4 sm:m-4 rounded-md transition-all duration-500 hover:transform hover:bg-gray-950 hover:scale-[1.02]"
          @click="navigateToProject(award.category, award.linktitle)"
        >
          <div class="w-full overflow-hidden">
            <img
              :src="award.image"
              class="w-full h-full object-cover object-center rounded-md transition-all duration-500 hover:transform hover:scale-105 hover:opacity-80"
            />
          </div>
          <div class="flex flex-col w-full justify-center items-center my-2">
            <div class="text-2xl text-white mb-2 align-center">
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
