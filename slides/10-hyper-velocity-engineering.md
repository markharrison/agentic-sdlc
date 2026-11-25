---
title: Hyper-velocity Engineering (HVE)
layout: content
---

<script setup lang="ts">
import homepage from './images/hve-core.png'
</script>

::title::

# Hyper-velocity Engineering (HVE)

::default::

<div class="hve-core">
  <p class="deck-email">
    <a href="https://microsoft.github.io/hve-core/" target="_blank" rel="noopener noreferrer">https://microsoft.github.io/hve-core/</a>
  </p>
  <ol class="hve-workflow" role="list" aria-label="HVE workflow">
    <li>
      <span class="hve-step-number" aria-hidden="true">01</span>
      <div>
        <strong>Research</strong>
        <span>Find evidence and compare approaches</span>
      </div>
    </li>
    <li>
      <span class="hve-step-number" aria-hidden="true">02</span>
      <div>
        <strong>Plan</strong>
        <span>Agree on tasks, then critique the plan</span>
      </div>
    </li>
    <li>
      <span class="hve-step-number" aria-hidden="true">03</span>
      <div>
        <strong>Implement</strong>
        <span>Make changes and record the results</span>
      </div>
    </li>
    <li>
      <span class="hve-step-number" aria-hidden="true">04</span>
      <div>
        <strong>Review</strong>
        <span>Compare the work with the plan</span>
      </div>
    </li>
  </ol>
  <img :src="homepage" alt="HVE Core homepage showing featured resources for its Hyper Velocity Engineering workflow." />
</div>

<style scoped>
.hve-workflow {
  position: relative;
  display: grid;
  gap: 18px;
  width: 536px;
  margin: 22px 0 0;
  padding: 18px 24px;
  list-style: none;
  background: #101316;
}

.hve-workflow::before {
  position: absolute;
  inset: 56px auto 56px 52px;
  width: 1px;
  background: #86a6cc;
  content: '';
}

.hve-workflow li {
  position: relative;
  display: grid;
  grid-template-columns: 35px 1fr;
  align-items: center;
  gap: 12px;
  min-height: 78px;
  margin: 0;
  padding: 10px 18px;
  border: 1px solid #405977;
  border-radius: 7px;
  background: #192332;
  color: #b7c4d6;
  font-size: 19px;
  line-height: 1.3;
}

.hve-workflow strong {
  display: block;
  margin-bottom: 3px;
  color: #fff;
  font-size: 23px;
  font-weight: 600;
}

.hve-step-number {
  color: #9dcaff;
  font-family: Consolas, "Liberation Mono", monospace;
  font-size: 18px;
}

.hve-core img {
  position: absolute;
  top: -24px;
  right: 20px;
  display: block;
  width: 650px;
  height: auto;
  border: 1px solid #53616c;
}
</style>
