<template>
  <div class="slide absolute inset-0 w-full h-full">
    <transition name="slide">
      <slot />
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}
</style>