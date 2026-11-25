<script setup lang="ts">
import SlideFrame from './SlideFrame.vue'
</script>

<template>
  <SlideFrame class="deck-github">
    <template #title>
      <slot name="title" />
    </template>
    <slot />
  </SlideFrame>
</template>

<style scoped>
.deck-github {
  background: linear-gradient(90deg, var(--stack-background) 0 610px, #1b2d46 610px 100%);
}

.deck-github :deep(.deck-title) {
  right: auto;
  width: 530px;
}

.deck-github :deep(.deck-title h1) {
  color: #fff;
  font-size: 43px;
  font-weight: 600;
  line-height: 1;
  letter-spacing: -1.5px;
  white-space: nowrap;
}

.deck-github :deep(.github-brand) {
  display: flex;
  align-items: center;
  gap: 10px;
}

.deck-github :deep(.github-brand .stack-icon) {
  width: 48px;
  height: 48px;
  flex-basis: 48px;
}

.deck-github :deep(.deck-content) {
  inset: 0;
}

.deck-github :deep(.github-intro) {
  position: absolute;
  top: 100px;
  left: var(--deck-margin-x);
  width: 525px;
  margin: 0;
  font-size: 25px;
  line-height: 1.5;
}

</style>
