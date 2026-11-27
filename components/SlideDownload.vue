<script setup lang="ts">
import { renderSVG } from 'uqr'
import DownloadIcon from '~icons/fluent/arrow-download-24-regular'

defineProps<{ showQr?: boolean }>()

const pdfUrl = 'https://markharrison.uk/agentic-sdlc/agentic-sdlc-exported.pdf'
const qrSrc = `data:image/svg+xml,${encodeURIComponent(renderSVG(pdfUrl, { border: 4 }))}`
</script>

<template>
  <a class="slide-download" :href="pdfUrl" download target="_blank" rel="noopener">
    <img v-if="showQr" class="slide-download-qr" :src="qrSrc" alt="Scan to open the slides PDF">
    <span class="slide-download-label">
      <DownloadIcon aria-hidden="true" />
      Download the slides (PDF)
    </span>
    <span>{{ pdfUrl }}</span>
  </a>
</template>

<style scoped>
.slide-download {
  display: grid;
  gap: 4px;
  border-bottom: 0;
  color: #fff;
  text-decoration: none;
}

.slide-download-qr {
  width: 164px;
  height: 164px;
  margin-bottom: 8px;
}

.slide-download-label {
  display: flex;
  align-items: center;
  gap: 6px;
}
</style>
