<script setup lang="ts">
import { useRouter } from 'vue-router'
import data from '../../public/atl.json'
import type { News } from '@/types'
import { computed } from 'vue'

const router = useRouter()

const news = data.news as News

function FormatDate(date: string) {
  try {
    const formattedDate = new Date(JSON.parse(date))

    // Format the date using Intl.DateTimeFormat
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
    image: news.images[0],
    article: news.article,
    date: FormatDate(news.date)
  }))
})

const navigateToNews = (newsSlug: string) => {
  router.push(`/news/${newsSlug}`)
}
</script>

<template>
  <div class="bg-black text-white font-sans min-h-screen">
    <div class="py-8">
      <div class="flex flex-row items-center justify-center pt-[10%] sm:pt-[5%] gap-x-4">
        <h1 class="text-3xl sm:text-5xl">News</h1>
      </div>

      <hr class="border-t-2 border-black sm:mt-6 mx-[5%]" />

      <div class="w-[90%] justify-center mx-auto gap-y-10">
        <div
          v-for="article in displayedNews"
          :key="article.title"
          class="flex flex-col sm:flex-row sm:h-[30vh] p-4 sm:mt-10 rounded-lg transition-all duration-500 hover:bg-[#0F0F0F] hover:transform hover:scale-[1.02]"
          @click="navigateToNews(article.link)"
        >
          <div class="w-full sm:w-2/5 h-full overflow-hidden">
            <img
              :src="article.image"
              class="w-full h-full object-cover object-center rounded-lg transition-all duration-500 hover:transform hover:scale-105 hover:opacity-80"
            />
          </div>
          <div class="w-full sm:w-3/5 flex flex-col items-start sm:mx-[5%] my-auto">
            <div class="text-white text-xl sm:text-3xl my-2">{{ article.title }}</div>
            <div class="text-white mb-6">{{ article.date }}</div>
            <div class="text-white line-clamp-2">{{ article.article }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
