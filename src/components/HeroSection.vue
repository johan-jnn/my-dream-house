<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
  backgroundImage: string
}>()
</script>

<template>
  <section
    class="relative h-screen w-full bg-cover bg-center bg-no-repeat"
    :style="{ backgroundImage: `url(${backgroundImage})` }"
  >
    <div class="absolute inset-0 bg-black/40"></div>
    <div class="relative z-10 flex h-full flex-col items-center pt-20">
      <h1 class="text-5xl font-bold text-white drop-shadow-lg md:text-7xl">
        {{ title }}
      </h1>
      <p class="mt-4 text-xl text-white/90 drop-shadow-md md:text-2xl">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>
