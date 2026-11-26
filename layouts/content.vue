<script setup lang="ts">
import SlideFrame from './SlideFrame.vue'
</script>

<template>
  <SlideFrame class="deck-content-slide">
    <template #title>
      <slot name="title" />
    </template>
    <slot />
    <template #footer-left>
      <slot name="footer-left" />
    </template>
  </SlideFrame>
</template>
