---
title: Contact
layout: content
---

<script setup lang="ts">
import microsoftLogo from './images/microsoft-logo.svg'
</script>

<div class="closing-contact">
  <img :src="microsoftLogo" alt="Microsoft" />
  <p class="deck-email">
    <a href="mailto:mark.harrison@microsoft.com">mark.harrison@microsoft.com</a>
  </p>
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

.closing-contact .deck-email {
  font-size: 32px;
  font-weight: 300;
  white-space: nowrap;
}

:global(.deck-content-slide:has(.closing-contact) .deck-footer) {
  right: 14px;
  bottom: 12px;
  color: #fff;
  font-size: 10px;
}
</style>
