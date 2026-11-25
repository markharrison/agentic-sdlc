---
title: GitHub - AI Powered Developer Platform
layout: diagram
clicks: 1
---

<script setup lang="ts">
import robotChess from './images/robot-chess.jpg'
</script>

::title::

<h1 class="github-ai-title">GitHub - AI Powered Developer Platform</h1>

::default::

<PhotoRight :src="robotChess" alt="A robot playing chess." />

<section class="github-ai-wave github-ai-wave-one" aria-label="Wave 1: Initial focus on the inner loop">
  <h2>Initial Focus: <strong>Inner Loop</strong> <span class="github-ai-badge">Wave 1</span></h2>
  <ul>
    <li>In-IDE AI pair programmer: code suggestions, completions, chat.</li>
    <li>Speeds up coding, debugging, testing, bug fixing, refactoring/optimising and writing documentation.</li>
    <li>Remove technical debt - App Modernization</li>
  </ul>
</section>

<section v-click="1" class="github-ai-wave github-ai-wave-two" aria-label="Wave 2: Expanded scope across the outer loop and beyond">
  <h2>Expanded Scope: <strong>Outer Loop and Beyond</strong> <span class="github-ai-badge">Wave 2</span></h2>
  <ul>
    <li>Embedded agents in GitHub.com | Copilot, Claude, Codex - more to follow.</li>
    <li>Accelerate and improve every phase of software delivery.</li>
    <li>Automates issue triage, code reviews, pull requests, security fixes, docs, tests, governance - and reduces effort on routine tasks.</li>
  </ul>
</section>

<div class="github-ai-diagram">
  <DevOpsLoops />
  <span class="github-ai-copilot github-ai-copilot-inner" aria-hidden="true">
    <StackIcon name="copilot" />
  </span>
  <div v-click="1" class="github-ai-extra-copilots" aria-hidden="true">
    <span v-for="location in ['plan', 'feedback', 'build', 'operate']" :key="location" class="github-ai-copilot" :class="`github-ai-copilot-${location}`">
      <StackIcon name="copilot" />
    </span>
  </div>
</div>

<!--
Wave 1 is visible initially, with Copilot on the development loop.
Click once to reveal Wave 2 and four additional Copilot markers across the lifecycle.
-->

<style scoped>
.github-ai-title {
  font-size: 44px;
}

.github-ai-wave {
  position: absolute;
  left: var(--deck-margin-x);
  color: #f4f7fb;
}

.github-ai-wave-one {
  top: 120px;
  width: 820px;
}

.github-ai-wave-two {
  top: 238px;
  width: 760px;
}

.github-ai-wave h2 {
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 0 0 4px;
  color: inherit;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
  white-space: nowrap;
}

.github-ai-wave h2 strong {
  font-size: 29px;
  font-weight: 700;
}

.github-ai-badge {
  display: inline-block;
  padding: 1px 14px 2px;
  border: 4px solid #8455e6;
  border-radius: 24px;
  font-size: 22px;
  font-weight: 400;
  line-height: 1;
}

.github-ai-wave ul {
  margin: 0;
  padding-left: 44px;
  font-size: 17px;
  line-height: 1.35;
}

.github-ai-wave li {
  margin: 0;
  line-height: inherit;
}

.github-ai-diagram {
  position: absolute;
  top: 355px;
  left: 14px;
  width: 600px;
  pointer-events: none;
}

.github-ai-extra-copilots {
  position: absolute;
  inset: 0;
}

.github-ai-copilot {
  position: absolute;
  display: grid;
  box-sizing: border-box;
  width: 48px;
  height: 48px;
  place-items: center;
  border: 2px solid #8e68ff;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 25%, #765bff, #38149a 55%, #130d42);
  box-shadow: 0 2px 6px #0009;
  transform: translate(-50%, -50%);
}

.github-ai-copilot :deep(.stack-icon) {
  width: 32px;
  height: 32px;
}

.github-ai-copilot-inner { left: 37.5%; top: 63%; }
.github-ai-copilot-plan { left: 28.4%; top: 32.5%; }
.github-ai-copilot-feedback { left: 68.4%; top: 26.1%; }
.github-ai-copilot-build { left: 32.3%; top: 72.7%; }
.github-ai-copilot-operate { left: 79.4%; top: 63%; }
</style>
