---
title: Contact
layout: content
---

<script setup lang="ts">
import DownloadIcon from '~icons/fluent/arrow-download-24-regular'
import microsoftLogo from './images/microsoft-logo.svg'

const pdfUrl = 'https://markharrison.uk/agentic-sdlc/agentic-sdlc-exported.pdf'
</script>

<div class="closing-contact">
  <img :src="microsoftLogo" alt="Microsoft" />
  <a class="closing-pdf" :href="pdfUrl" download target="_blank" rel="noopener">
    <span class="closing-pdf-label">
      <DownloadIcon aria-hidden="true" />
      Download the slides (PDF)
    </span>
    <span class="closing-pdf-url">{{ pdfUrl }}</span>
  </a>
</div>

<style scoped>
.closing-contact {
  position: absolute;
  top: 244px;
  left: 47.8%;
  display: grid;
  justify-items: center;
  gap: 24px;
  transform: translateX(-50%);
}

.closing-contact img {
  width: 376px;
  height: auto;
}

.closing-contact .closing-pdf {
  display: grid;
  justify-items: center;
  gap: 6px;
  border-bottom: 0;
  color: #fff;
  font-size: 24px;
  line-height: 1.3;
  text-decoration: none;
}

.closing-pdf-label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.closing-pdf-url {
  font-size: 20px;
}
</style>
