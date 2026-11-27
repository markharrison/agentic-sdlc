---
title: Hello
layout: content
---

<script setup lang="ts">
import parachute from './images/parachute.png'
import avatar from './images/avatar.png'
</script>

::title::

# Hello

::default::

<PhotoRight
  :src="parachute"
  alt="A parachutist descending above the clouds at sunset."
  position="right center"
/>

<div class="hello-copy">
  <p class="hello-name">MARK HARRISON</p>
  <p>Microsoft - Developer SE</p>
  <p class="deck-email"><a href="mailto:mark.harrison@microsoft.com">mark.harrison@microsoft.com</a></p>
</div>

<img
  class="hello-avatar"
  :src="avatar"
  alt="Octocat avatar wearing a Hornets GitHub Copilot shirt."
/>

::footer-left::

<SlideDownload show-qr />

<style scoped>
.hello-copy {
  width: 450px;
  max-width: 100%;
  padding-top: 40px;
  color: #fff;
}

.hello-copy p {
  margin: 0;
  line-height: 1.3;
}

.hello-copy .hello-name {
  margin-bottom: 14px;
  font-size: 38px;
  line-height: 1.2;
}

.hello-copy .deck-email {
  margin-top: 46px;
}

.hello-avatar {
  position: absolute;
  top: -42px;
  left: 420px;
  width: 254px;
  height: 254px;
  border-radius: 50%;
  object-fit: cover;
}
</style>
