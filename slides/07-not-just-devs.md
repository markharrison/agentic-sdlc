---
title: It's not just for developers
layout: content
---

<script setup lang="ts">
import hands from './images/hands.jpg'
</script>

::title::

# It's not just for developers ...

::default::

<PhotoRight :src="hands" alt="A crowd raising their hands." position="60% center" />

<div class="not-just-for-developers">
  <p>
    GitHub Agents can adopt various personas by dynamically changing their
    behavior, communication style, knowledge focus, and decision-making
    strategies to suit specific user needs, organizational contexts, or
    workflow requirements.
  </p>

  <ul>
    <li>Developers</li>
    <li>Testers/QA Engineers</li>
    <li>DevOps/Automation Engineers</li>
    <li>Data Engineers</li>
    <li>Database Administrators (DBAs)</li>
    <li>Scientific Researchers / Data Scientists</li>
    <li>Security Professionals</li>
    <li>Trainers</li>
    <li>Technical Writers</li>
    <li>Designers (UI/UX), Accessibility</li>
    <li>Citizen Devs e.g. Civil / Mechanical Engineers</li>
    <li>Architects</li>
    <li>Product Managers</li>
    <li>Integration Specialists</li>
    <li>Accessibility Compliance Team</li>
  </ul>
</div>

<style scoped>
.not-just-for-developers {
  position: relative;
  z-index: 1;
  width: 660px;
  max-width: 62%;
  color: #f4f7fb;
}

.not-just-for-developers p {
  margin: 0 0 22px;
  font-size: 23px;
  line-height: 1.35;
}

.not-just-for-developers ul {
  margin: 0;
  padding-left: 34px;
  list-style-type: disc;
  font-size: 21px;
  line-height: 1.38;
}

.not-just-for-developers li {
  margin: 0;
  padding-left: 4px;
  line-height: inherit;
}
</style>
