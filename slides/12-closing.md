---
title: Contact
layout: content
---

<script setup lang="ts">
import microsoftLogo from './images/microsoft-logo.svg'
</script>

<img class="closing-logo" :src="microsoftLogo" alt="Microsoft" />

::footer-left::

<SlideDownload show-qr />

<style scoped>
.closing-logo {
  position: absolute;
  top: 244px;
  left: 47.8%;
  width: 376px;
  height: auto;
  transform: translateX(-50%);
}
</style>
