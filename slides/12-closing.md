---
title: Contact
layout: content
---

<script setup lang="ts">
import DownloadIcon from '~icons/fluent/arrow-download-24-regular'
import microsoftLogo from './images/microsoft-logo.svg'

const pdfUrl = 'https://markharrison.uk/agentic-sdlc/agentic-sdlc-exported.pdf'
</script>

<img class="closing-logo" :src="microsoftLogo" alt="Microsoft" />

::footer-left::

<a class="closing-pdf" :href="pdfUrl" download target="_blank" rel="noopener">
  <span class="closing-pdf-label">
    <DownloadIcon aria-hidden="true" />
    Download the slides (PDF)
  </span>
  <span>{{ pdfUrl }}</span>
</a>

<style scoped>
.closing-logo {
  position: absolute;
  top: 244px;
  left: 47.8%;
  width: 376px;
  height: auto;
  transform: translateX(-50%);
}

.deck-footer .closing-pdf {
  display: grid;
  gap: 4px;
  border-bottom: 0;
  color: #fff;
  text-decoration: none;
}

.closing-pdf-label {
  display: flex;
  align-items: center;
  gap: 6px;
}

</style>
