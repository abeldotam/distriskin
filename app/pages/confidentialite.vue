<script setup>
import { queryCollection } from '#imports'

const { data: page } = await useAsyncData('confidentialite', () =>
  queryCollection('legal').path('/legal/confidentialite').first(),
)

useSeoMeta({
  title: 'Politique de Confidentialité — DISTRISKIN',
  ogTitle: 'Politique de Confidentialité — DISTRISKIN',
  description: page.value?.description || 'Politique de confidentialité et gestion des cookies du site distriskin.com.',
  ogDescription: page.value?.description || 'Politique de confidentialité et gestion des cookies du site distriskin.com.',
  ogImage: '/images/logo-distriskin.jpeg',
})
</script>

<template>
<div class="page-hero page-hero-short"><div class="page-hero-content">
  <p class="section-label">Protection des données</p>
  <h1 class="section-title hero-title-large">Politique de <em>Confidentialité</em></h1>
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
