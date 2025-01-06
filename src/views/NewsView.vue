<script setup lang="ts">
import { useRouter } from 'vue-router'
import data from '../../public/atl.json'
import type { News } from '@/types'
import { computed, ref } from 'vue'

const router = useRouter()
const news = data.news as News

// New carousel state
const currentImageIndex = ref(0)

function FormatDate(date: string) {
  try {
    const formattedDate = new Date(JSON.parse(date))
    const formatter = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
    return formatter.format(formattedDate)
  } catch {
    return 'No Date'
  }
}

const displayedNews = computed(() => {
  return Object.entries(news).map(([slug, news]) => ({
    link: slug,
    title: slug
      .split('-')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' '),
    images: news.images,
    article: news.article,
    date: FormatDate(news.date),
    num: new Date(FormatDate(news.date)).getTime()
  }))
  .sort((a,b)=> b.num - a.num)
})

const navigateToNews = (newsSlug: string) => {
  router.push(`/news/${newsSlug}`)
}

const nextImage = (images: string[]) => {
  currentImageIndex.value = (currentImageIndex.value + 1) % images.length
}

const prevImage = (images: string[]) => {
  currentImageIndex.value = currentImageIndex.value === 0 
    ? images.length - 1 
    : currentImageIndex.value - 1
}
</script>

<template>
  <div class="bg-black text-white font-sans min-h-screen">
    <div class="py-8 px-4 sm:px-6 lg:px-8">
      <div class="flex flex-row items-center justify-center pt-[10%] sm:pt-[5%] gap-x-4">
        <h1 class="text-3xl sm:text-5xl text-center">News</h1>
      </div>

      <hr class="border-t-2 border-black sm:mt-6 mx-[5%]" />

      <div class="max-w-7xl mx-auto mt-6">
        <div
          v-for="article in displayedNews"
          :key="article.title"
          class="group mb-12 bg-gray-900 bg-opacity-50 rounded-xl overflow-hidden hover:bg-opacity-70 transition-all duration-300"
        >
          <div class="flex flex-col sm:flex-row sm:h-[350px]">
            <div class="relative w-full sm:w-1/2 h-[300px] sm:h-full">
              <img
                :src="article.images[0]"
                class="w-full h-full object-cover transition-all duration-500"
                alt="News image"
              />
            </div>
            
            <!-- Content - Right side on desktop -->
            <div 
              class="w-full sm:w-1/2 p-6 sm:p-8 flex flex-col justify-between cursor-pointer"
              @click="navigateToNews(article.link)"
            >
              <div>
                <h2 class="text-2xl sm:text-3xl font-semibold mb-2 group-hover:text-blue-400 transition-colors">
                  {{ article.title }}
                </h2>
                <p class="text-gray-400 text-sm mb-4">{{ article.date }}</p>
                <p class="text-gray-300 line-clamp-4 sm:line-clamp-6">{{ article.article }}</p>
              </div>
              
              <div class="mt-6">
                <span class="text-blue-400 group-hover:text-blue-300 transition-colors">
                  Read more →
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>