<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import QuotesSection from '@/components/QuotesSection.vue'
</script>

<template>
  <main>
    <HeroSection
      title="My Dream House"
      subtitle="Bienvenue dans la maison de vos rêves"
      background-image="/images/house.jpg"
    />
    <AboutSection />
    <QuotesSection />
  </main>
</template>
