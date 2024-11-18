<template>
  <div class="relative w-full h-full">
    <!-- Main carousel container with group hover -->
    <div class="relative w-full h-full group">
      <!-- Slot for slides -->
      <div class="w-full h-full">
        <slot :currentSlide="currentSlide" />
      </div>

      <!-- Navigation overlaid on content -->
      <div
        v-if="navEnabled"
        class="absolute inset-0 flex items-center justify-between px-[2%]"
      >
        <!-- Previous button -->
        <button
          @click="prevSlide"
          class="p-2 rounded-full text-white hover:text-slate-400 active:text-slate-400 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <svg
            width="28"
            height="48"
            viewBox="0 0 28 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24 44L4 24L24 4"
              stroke="currentColor"
              stroke-width="7"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>

        <!-- Next button -->
        <button
          @click="nextSlide"
          class="p-2 rounded-full text-white hover:text-slate-400 active:text-slate-400 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <div class="rotate-180">
            <svg
              width="28"
              height="48"
              viewBox="0 0 28 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 44L4 24L24 4"
                stroke="currentColor"
                stroke-width="7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>

      <!-- Pagination dots -->
      <div 
        v-if="paginationEnabled" 
        class="absolute bottom-[5%] left-0 right-0"
      >
        <div class="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            v-for="(slide, index) in slideCount"
            :key="index"
            @click="goToSlide(index)"
            :class="[
              'w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
              index + 1 === currentSlide ? 'bg-slate-400' : 'bg-white'
            ]"
          ></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  props: {
    startAutoPlay: { type: Boolean, default: true },
    timeout: { type: Number, default: 5000 },
    navigation: { type: Boolean, default: true },
    pagination: { type: Boolean, default: true }
  },
  setup(props) {
    const currentSlide = ref(1)
    const slideCount = ref(0)
    const autoPlayEnabled = ref(props.startAutoPlay)
    const timeoutDuration = ref(props.timeout)
    const paginationEnabled = ref(props.pagination)
    const navEnabled = ref(props.navigation)

    const nextSlide = () => {
      currentSlide.value = currentSlide.value === slideCount.value ? 1 : currentSlide.value + 1
    }

    const prevSlide = () => {
      currentSlide.value = currentSlide.value === 1 ? slideCount.value : currentSlide.value - 1
    }

    const goToSlide = (index) => {
      currentSlide.value = index + 1
    }

    const autoPlay = () => {
      setInterval(nextSlide, timeoutDuration.value)
    }

    onMounted(() => {
      slideCount.value = document.querySelectorAll('.slide').length
      if (autoPlayEnabled.value) {
        autoPlay()
      }
    })

    return {
      currentSlide,
      nextSlide,
      prevSlide,
      slideCount,
      goToSlide,
      paginationEnabled,
      navEnabled
    }
  }
}
</script>