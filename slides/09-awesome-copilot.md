---
title: Awesome Copilot
layout: content
---

<script setup lang="ts">
import homepage from './images/awesome-copilot.png'
</script>

::title::

# Awesome Copilot

::default::

<div class="awesome-copilot">
  <p class="deck-email">
    <a href="https://awesome-copilot.github.com/" target="_blank" rel="noopener noreferrer">https://awesome-copilot.github.com/</a>
  </p>
  <img :src="homepage" alt="Awesome GitHub Copilot homepage showing Agents, Instructions, Skills, Plugins, Extensions, and the Learning Hub." />
</div>

<style scoped>
.awesome-copilot img {
  position: absolute;
  top: -24px;
  right: 20px;
  display: block;
  width: 650px;
  height: auto;
  border: 1px solid #53616c;
}

:global(.deck-content-slide:has(.awesome-copilot) .deck-footer) {
  right: 14px;
  bottom: 12px;
  color: #fff;
  font-size: 10px;
}
</style>
