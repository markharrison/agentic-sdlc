<script setup lang="ts">
import SlideFrame from './SlideFrame.vue'
</script>

<template>
  <SlideFrame class="deck-content-slide">
    <template #title>
      <slot name="title" />
    </template>
    <slot />
  </SlideFrame>
</template>
