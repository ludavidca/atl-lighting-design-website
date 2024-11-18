<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import data from '../../public/atl.json'
import type{ Project, Projects, ProjectCategory } from '@/types';

const router = useRouter()

// Type assertion for data.projects
const projectsData = data.projects as Projects

const categoryMapping = {
  'arts-and-culture': 'Arts & Culture',
  'city-and-landscape': 'City & Landscape',
  'commercial': 'Commercial',
  'hospitality': 'Hospitality'
} as const

type CategoryKeys = keyof typeof categoryMapping
type DisplayCategories = typeof categoryMapping[CategoryKeys]

const isDropdownOpen = ref(false)
const selectedCategory = ref('Arts & Culture' as DisplayCategories)

const categories = Object.values(categoryMapping)

const displayedProjects = computed(() => {
  // Convert display category name back to slug
  const categorySlug = Object.entries(categoryMapping).find(
    ([_, display]) => display === selectedCategory.value
  )?.[0] as CategoryKeys | undefined

  if (!categorySlug || !projectsData[categorySlug]) {
    return []
  }

  return Object.entries(projectsData[categorySlug]).map(([slug, project]) => ({
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    image: project.images[0],
    location: project.location,
    year: project.time,
    slug: slug,
    categorySlug: categorySlug
  }))
})

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value
}

const selectCategory = (category: DisplayCategories) => {
  selectedCategory.value = category
  isDropdownOpen.value = false
}

const navigateToProject = (categorySlug: string, projectSlug: string) => {
  router.push(`/projects/${categorySlug}/${projectSlug}`)
}
</script>

<template>
  <div class="bg-black text-white font-sans">
    <div class="py-8">
      <div class="flex flex-row items-center justify-center pt-[5%] gap-x-4 relative">
        <div class="relative group">
          <button
            @click="toggleDropdown"
            class="flex items-center text-5xl hover:text-gray-300 transition-all duration-500 hover:transform hover:scale-[1.02]"
          >
            {{ selectedCategory }}
            <img
              src="/ui/dropdown.svg"
              class="object-contain ml-4 transition-transform duration-200"
              :class="{ 'transform rotate-180': isDropdownOpen }"
              :style="{ height: '20px', marginTop: '10px' }"
            />
          </button>
          <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 translate-y-1"
            enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 translate-y-1"
          >
            <div
              v-if="isDropdownOpen"
              class="absolute left-0 w-full bg-gray-900 rounded-md shadow-lg z-10 overflow-hidden"
            >
              <ul class="py-2">
                <li
                  v-for="category in categories"
                  :key="category"
                  @click="selectCategory(category as DisplayCategories)"
                  class="px-4 py-2 hover:bg-gray-800 cursor-pointer transition-colors duration-200 text-lg"
                  :class="{ 'bg-gray-800': category === selectedCategory }"
                >
                  {{ category }}
                </li>
              </ul>
            </div>
          </transition>
        </div>
      </div>

      <hr class="border-t-2 border-black mt-6 mx-[5%] mb-10" />

      <div class="w-[90%] justify-center mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12 ">
          <div 
            v-for="project in displayedProjects" 
            :key="project.title" 
            class="flex flex-col cursor-pointer transition-all duration-500 hover:transform hover:scale-[1.02]" 
            @click="navigateToProject(project.categorySlug, project.slug)"
          >
            <img 
              :src="project.image" 
              :alt="project.title" 
              class="w-full h-64 object-cover mb-4 transition-all duration-500 hover:transform hover:scale-105 hover:opacity-80" 
            />
            <div class="flex flex-row justify-between gap-x-fit">
              <h2 class="text-2xl text-white mb-2">{{ project.title }}</h2>
              <p class="text-white text-2xl">{{ project.year }}</p>
            </div>
            <p class="mb-4">{{ project.location }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>