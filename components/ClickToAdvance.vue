<script lang="ts">
// Global layers can mount more than once, but only one should handle clicks.
let hasClickListener = false
</script>

<script setup lang="ts">
import { onBeforeUnmount, onMounted } from 'vue'
import { useNav } from '@slidev/client'

const { next, prev, isPlaying } = useNav()

const INTERACTIVE = 'a, button, input, textarea, select, label, iframe, video, audio, [contenteditable], [role="button"], .slidev-code, .monaco-editor'

function onClick(e: MouseEvent) {
  if (!isPlaying.value || e.button !== 0 || e.defaultPrevented)
    return
  const target = e.target
  if (!(target instanceof Element) || !target.closest('#slide-content') || target.closest(INTERACTIVE))
    return
  if (window.getSelection()?.toString())
    return
  if (e.shiftKey)
    prev()
  else
    next()
}

let registered = false
onMounted(() => {
  if (hasClickListener)
    return
  hasClickListener = true
  registered = true
  window.addEventListener('click', onClick)
})
onBeforeUnmount(() => {
  if (!registered)
    return
  window.removeEventListener('click', onClick)
  hasClickListener = false
})
</script>

<template>
  <div />
</template>
