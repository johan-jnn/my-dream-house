<script setup lang="ts">
defineProps<{
  theme: string;
  quotes: string[];
  duration?: number;
  reverse?: boolean;
}>();
</script>

<template>
  <div class="overflow-hidden py-6">
    <p
      class="mb-10 text-center text-xl font-medium uppercase tracking-wider text-amber-600"
    >
      {{ theme }}
    </p>
    <div class="relative flex overflow-hidden">
      <div
        class="flex shrink-0 animate-marquee gap-16 pr-16"
        :class="{ 'animate-marquee-reverse': reverse }"
        :style="{ animationDuration: `${duration ?? 30}s` }"
      >
        <span
          v-for="(quote, index) in quotes"
          :key="index"
          class="shrink-0 text-2xl italic text-slate-700"
        >
          "{{ quote }}"
        </span>
      </div>
      <div
        class="flex shrink-0 animate-marquee gap-16 pr-16"
        :class="{ 'animate-marquee-reverse': reverse }"
        :style="{ animationDuration: `${duration ?? 30}s` }"
        aria-hidden="true"
      >
        <span
          v-for="(quote, index) in quotes"
          :key="index"
          class="shrink-0 text-lg italic text-slate-700"
        >
          "{{ quote }}"
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes marquee-reverse {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}

.animate-marquee {
  animation: marquee linear infinite;
}

.animate-marquee-reverse {
  animation: marquee-reverse linear infinite;
}
</style>
