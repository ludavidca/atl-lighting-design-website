<template>
  <div class="relative">
    <slot :currentSlide="currentSlide" />
    <!-- Navigation -->
    <div v-if="navEnabled" class="absolute inset-0 flex items-center justify-between p-4">
      <button @click="prevSlide" class="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <i class="fas fa-chevron-left"></i>
      </button>
      <button @click="nextSlide" class="p-2 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        <i class="fas fa-chevron-right"></i>
      </button>
    </div>
    <!-- Pagination -->
    <div v-if="paginationEnabled" class="absolute bottom-4 left-0 right-0">
      <div class="flex items-center justify-center gap-2">
        <button
          v-for="(slide, index) in slideCount"
          :key="index"
          @click="goToSlide(index)"
          :class="[
            'w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2',
            index + 1 === currentSlide ? 'bg-indigo-600' : 'bg-white'
          ]"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: {
    startAutoPlay: { type: Boolean, default: true },
    timeout: { type: Number, default: 5000 },
    navigation: { type: Boolean, default: true },
    pagination: { type: Boolean, default: true },
  },
  setup(props) {
    const currentSlide = ref(1);
    const slideCount = ref(0);
    const autoPlayEnabled = ref(props.startAutoPlay);
    const timeoutDuration = ref(props.timeout);
    const paginationEnabled = ref(props.pagination);
    const navEnabled = ref(props.navigation);

    const nextSlide = () => {
      currentSlide.value = currentSlide.value === slideCount.value ? 1 : currentSlide.value + 1;
    };

    const prevSlide = () => {
      currentSlide.value = currentSlide.value === 1 ? 1 : currentSlide.value - 1;
    };

    const goToSlide = (index) => {
      currentSlide.value = index + 1;
    };

    const autoPlay = () => {
      setInterval(nextSlide, timeoutDuration.value);
    };

    onMounted(() => {
      slideCount.value = document.querySelectorAll(".slide").length;
      if (autoPlayEnabled.value) {
        autoPlay();
      }
    });

    return {
      currentSlide,
      nextSlide,
      prevSlide,
      slideCount,
      goToSlide,
      paginationEnabled,
      navEnabled,
    };
  },
};
</script>
