<script setup lang="ts">
import QuoteSlider from "@/components/QuoteSlider.vue";
import { onMounted, ref } from "vue";

let sentences = ref([]);

onMounted(async () => {
  const res = await fetch("/data/quotes.json");
  sentences.value = await res.json();
});
</script>

<template>
  <section class="bg-white py-24">
    <h2 class="mb-4 text-center text-4xl font-bold text-slate-900">
      Sagesse Domestique
    </h2>
    <p class="mb-16 text-center text-slate-500">
      Des réflexions profondes sur l'habitat et l'existence
    </p>
    <div class="space-y-20">
      <QuoteSlider
        v-for="(slider, index) in sentences"
        :key="slider.id"
        :theme="slider.theme"
        :quotes="slider.quotes"
        :duration="25 + index * 5"
        :reverse="index === 1"
      />
    </div>
  </section>
</template>
