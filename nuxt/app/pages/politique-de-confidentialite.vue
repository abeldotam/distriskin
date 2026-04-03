<template>
  <div>
    <PageHero
      label="Confidentialité"
      title="Politique de <em>confidentialité</em>"
    />
    <section class="legal-content">
      <div class="legal-inner">
        <ContentRenderer v-if="page" :value="page" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { data: page } = await useAsyncData('politique-confidentialite', () =>
  queryCollection('legal').path('/politique-de-confidentialite').first()
)

useSeoMeta({
  title: 'Politique de Confidentialité — DISTRISKIN',
  description: 'Politique de confidentialité et protection des données personnelles — DISTRISKIN.',
})
</script>
