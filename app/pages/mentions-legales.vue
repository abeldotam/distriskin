<script setup>
import { queryCollection } from '#imports'

const { data: page } = await useAsyncData('mentions-legales', () =>
  queryCollection('legal').path('/legal/mentions-legales').first(),
)

useSeoMeta({
  title: 'Mentions Légales — DISTRISKIN',
  ogTitle: 'Mentions Légales — DISTRISKIN',
  description: page.value?.description || 'Mentions légales du site distriskin.com.',
  ogDescription: page.value?.description || 'Mentions légales du site distriskin.com.',
  ogImage: '/images/logo-distriskin.jpeg',
})
</script>

<template>
<div class="page-hero page-hero-short"><div class="page-hero-content">
  <p class="section-label">Informations légales</p>
  <h1 class="section-title hero-title-large">Mentions <em>Légales</em></h1>
</div></div>

<section class="legal-content">
  <div class="legal-inner">
    <ContentRenderer v-if="page" :value="page" />
  </div>
</section>
</template>

<style scoped>
.page-hero-short { min-height: 45vh; }
</style>
