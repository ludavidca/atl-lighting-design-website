<template>
    <div :class="['relative w-full h-full overflow-hidden', isFullscreen ? 'fixed top-0 left-0 w-screen h-screen z-50 bg-black' : '']"
        ref="carouselRoot">
        <div :class="[isFullscreen ? 'w-full h-full' : 'relative w-full h-full group']">
            <div class="w-full h-full">
                <slot :currentSlide="currentSlide" :isFullscreen="isFullscreen" :toggleFullscreen="toggleFullScreen" />
            </div>

            <div v-if="navEnabled && !isFullscreen" class="absolute inset-0 flex items-center justify-between px-[2%]">
                <button @click="prevSlide"
                    class="p-2 rounded-full text-white hover:text-slate-400 active:text-slate-400 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg width="28" height="48" viewBox="0 0 28 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24 44L4 24L24 4" stroke="currentColor" stroke-width="7" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
                <button @click="nextSlide"
                    class="p-2 rounded-full text-white hover:text-slate-400 active:text-slate-400 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity">
                    <div class="rotate-180">
                        <svg width="28" height="48" viewBox="0 0 28 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24 44L4 24L24 4" stroke="currentColor" stroke-width="7" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>
                    </div>
                </button>
            </div>

            <div v-if="paginationEnabled && !isFullscreen" class="absolute bottom-[5%] left-0 right-0">
                <div class="flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button v-for="(slide, index) in slideCount" :key="index" @click="goToSlide(index)"
                        :class="[
                            'w-3 h-3 rounded-full focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
                            index + 1 === currentSlide ? 'bg-slate-400' : 'bg-white'
                        ]"></button>
                </div>
            </div>
            <slot name="fullscreen-button" />
        </div>
    </div>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue'

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
        const isFullscreen = ref(false)
        const carouselRoot = ref(null);

        const nextSlide = () => {
            currentSlide.value =
                currentSlide.value === slideCount.value ? 1 : currentSlide.value + 1
        }

        const prevSlide = () => {
            currentSlide.value =
                currentSlide.value === 1 ? slideCount.value : currentSlide.value - 1
        }

        const goToSlide = (index) => {
            currentSlide.value = index + 1
        }

        const autoPlay = () => {
            setInterval(nextSlide, timeoutDuration.value)
        }

        const toggleFullScreen = () => {
            if (!isFullscreen.value) {
                enterFullScreen();
            } else {
                exitFullScreen();
            }
        };

        const enterFullScreen = () => {
            const element = carouselRoot.value; // Use the carousel's root element
            if (element) {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.webkitRequestFullscreen) {
                    element.webkitRequestFullscreen();
                } else if (element.msRequestFullscreen) {
                    element.msRequestFullscreen();
                }
                isFullscreen.value = true;
            }
        };

        const exitFullScreen = () => {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            isFullscreen.value = false;
        };

        const handleFullscreenChange = () => {
            isFullscreen.value = !!(
                document.fullscreenElement ||
                document.webkitFullscreenElement ||
                document.mozFullScreenElement ||
                document.msFullscreenElement
            );
        };

        onMounted(() => {
            slideCount.value = document.querySelectorAll('.slide').length;
            if (autoPlayEnabled.value) {
                autoPlay();
            }
            document.addEventListener('fullscreenchange', handleFullscreenChange);
            document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.addEventListener('mozfullscreenchange', handleFullscreenChange);
            document.addEventListener('msfullscreenchange', handleFullscreenChange);
        });

        onUnmounted(() => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
            document.removeEventListener('msfullscreenchange', handleFullscreenChange);
        });

        return {
            currentSlide,
            nextSlide,
            prevSlide,
            slideCount,
            goToSlide,
            paginationEnabled,
            navEnabled,
            isFullscreen,
            toggleFullScreen,
            carouselRoot,
        };
    }
};
</script>