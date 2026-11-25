<script setup lang="ts">
import SlideFrame from './SlideFrame.vue'
</script>

<template>
  <SlideFrame class="deck-title-slide">
    <template #artwork>
      <slot name="background" />
      <div v-if="$slots.brand" class="title-brand">
        <slot name="brand" />
      </div>
      <div v-if="$slots.logos" class="title-logos">
        <slot name="logos" />
      </div>
    </template>
    <template #title>
      <slot name="title" />
    </template>
    <slot />
  </SlideFrame>
</template>

<style scoped>
.deck-title-slide {
  --deck-title-top: 302px;
  --deck-content-top: 370px;

  overflow: hidden;
}

.title-brand,
.title-logos {
  position: absolute;
  pointer-events: none;
}

.title-brand {
  z-index: 1;
  top: var(--deck-margin-x);
  left: var(--deck-margin-x);
  width: 164px;
}

.title-brand :deep(img),
.title-logos :deep(img) {
  display: block;
  width: 100%;
  height: auto;
}

.deck-title-slide :deep(.deck-content) {
  z-index: 1;
  right: 50%;
}

.deck-title-slide :deep(.deck-content p) {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.45;
}

.deck-title-slide :deep(.deck-content strong) {
  font-size: 34px;
  line-height: 1.2;
}

.title-logos {
  z-index: 1;
  top: 348px;
  left: 822px;
  width: 640px;
}
</style>
