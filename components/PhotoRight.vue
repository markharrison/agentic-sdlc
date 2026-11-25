<script setup lang="ts">
import { computed, onMounted, ref, shallowRef } from 'vue'
import { resolveAssetUrl } from '@slidev/client/layoutHelper.ts'

defineOptions({ inheritAttrs: false })

const props = withDefaults(defineProps<{
  src: string
  alt: string
  position?: string
}>(), {
  position: 'center',
})

const anchor = ref<HTMLElement | null>(null)
const target = shallowRef<Element | null>(null)
const imageUrl = computed(() => resolveAssetUrl(props.src))

onMounted(() => {
  const layout = anchor.value?.closest('.slidev-layout')
  if (!layout)
    throw new Error('PhotoRight must be placed inside a Slidev layout.')
  target.value = layout
})
</script>

<template>
  <Teleport :to="target ?? 'body'" :disabled="!target">
    <figure ref="anchor" class="photo-right" v-bind="$attrs">
      <img :src="imageUrl" :alt="alt" :style="{ objectPosition: position }">
      <figcaption v-if="$slots.default">
        <slot />
      </figcaption>
    </figure>
  </Teleport>
</template>

<style scoped>
.photo-right {
  position: absolute;
  z-index: 0;
  inset: 0 0 0 44%;
  margin: 0;
  clip-path: polygon(40% 0, 100% 0, 100% 100%, 0 100%);
  pointer-events: none;
}

.photo-right img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.photo-right::after {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, #000b, transparent 35%);
  content: "";
}

.photo-right figcaption {
  position: absolute;
  z-index: 1;
  right: 24px;
  bottom: 18px;
  left: 32px;
  max-width: 58%;
  color: #f4f7fb;
  font-size: 12px;
  line-height: 1.35;
  pointer-events: auto;
}

.photo-right figcaption :deep(p) {
  margin: 0;
  font-size: inherit;
  line-height: inherit;
}

.photo-right figcaption :deep(a) {
  color: inherit;
  text-decoration: underline;
}
</style>
