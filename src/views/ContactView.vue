<script setup lang="ts">
import { ref } from 'vue'

const contacts = ref([
  {
    title: 'Shanghai ATL Lighting Design Company',
    address: 'Building 18, 333 Baotun Road<br>Huangpu District<br>Shanghai, China 200011',
    image:
      'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/Contact%2Fshanghai.svg?alt=media',
    email: 'mailto:atl@188.com',
    tel: 'tel+862152137649'
  },
  {
    title: "Shanghai ATL Lighting Design Xi'an Branch",
    address:
      "2203, Unit 1, Building 7<br>Shuangwei Yingbin Square, Wei Yang Road<br>Xi'an, China 710018",
    image:
      'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/Contact%2Fxian.svg?alt=media',
    email: 'mailto:atllightxa@163.com',
    tel: 'tel:+8613585700424'
  },
  {
    title: 'ATL International Lighting Design Inc.',
    address: 'Suite 340, 600 Crowfoot Crescent NW<br>Calgary, AB, Canada T3G 0B4<br><br>',
    image:
      'https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/Contact%2Fcalgary.svg?alt=media',
    email: 'mailto:zlu@live.ca',
    tel: 'tel:+15879664293'
  }
])
</script>

<template>
  <div class="bg-black text-white font-sans min-h-screen">
    <div class="mx-auto py-8">
      <div class="flex flex-row items-center justify-center pt-[5%] gap-x-4">
        <h1 class="text-5xl text-center">Our Offices</h1>
      </div>

      <hr class="border-t-2 border-white mt-6 mx-[5%] mb-10" />

      <div class="w-[90%] justify-center mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div v-for="contact in contacts" :key="contact.title" class="flex flex-col">
            <img :src="contact.image" :alt="contact.title" class="w-full h-64 object-cover mb-4" />
            <h2 class="text-2xl font-bold mb-2">{{ contact.title }}</h2>
            <p class="mb-4" v-html="contact.address"></p>
            <p>
              <a :href="contact.email" class="underline mr-4 text-white">Email</a>
              <a :href="contact.tel" class="underline text-white">Telephone</a>
            </p>
          </div>
        </div>

        <div class="flex flex-col md:flex-row mt-16 items-center mb-10">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/atllightingdesign.appspot.com/o/Contact%2Fcareers.svg?alt=media"
            alt="Careers"
            class="w-full h-[250px] md:w-2/3 object-cover mb-8 md:mb-0"
          />
          <div class="flex w-1/3 items-center justify-center mx-auto">
            <div>
              <h2 class="text-4xl mb-4">Careers</h2>
              <p>
                <a href="mailto:hr@atl-design.com" class="underline mr-4">Email</a>
                <a href="+8602152137649" class="underline">Telephone</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Add any component-specific styles here */
</style>
