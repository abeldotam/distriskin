<template>
  <div>
    <PageHero
      label="Mentions Légales"
      title="Mentions <em>légales</em>"
    />
    <section class="legal-content">
      <div class="legal-inner">
        <ContentRenderer v-if="page" :value="page" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('mentions-legales', () =>
  queryCollection('legal').path('/mentions-legales').first()
)

useSeoMeta({
  title: 'Mentions Légales — DISTRISKIN',
  description: 'Mentions légales du site www.distriskin.com — DISTRISKIN EURL.',
})
</script>
