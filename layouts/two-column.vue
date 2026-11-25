<script setup lang="ts">
import SlideFrame from './SlideFrame.vue'
</script>

<template>
  <SlideFrame class="deck-two-column">
    <template #title>
      <slot name="title" />
    </template>
    <div class="deck-columns">
      <section class="deck-column">
        <slot />
      </section>
      <section class="deck-column">
        <slot name="right" />
      </section>
    </div>
    <div v-if="$slots.footer" class="deck-column-footer">
      <slot name="footer" />
    </div>
  </SlideFrame>
</template>
