<template>
  <div class="page-hero">
    <div class="page-hero-content">
      <span class="section-label">{{ label }}</span>
      <h1 class="section-title" v-html="title"></h1>
      <p v-if="description" class="section-desc">{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  title: string
  description?: string
}>()
</script>
