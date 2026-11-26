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
    GitHub agents can help anyone involved in shaping, building, operating or
    improving software.
  </p>

  <ul>
    <li>Accessibility Specialists</li>
    <li>Architects</li>
    <li>Business Analysts</li>
    <li>Business Owners / Stakeholders</li>
    <li>Citizen Developers (e.g. Civil Engineers, Mechanical Engineers, Scientists, Researchers, ... )</li>
    <li>Data Engineers / Data Scientists</li>
    <li>Database Administrators (DBAs)</li>
    <li>Designers (UI/UX)</li>
    <li>Developers</li>
    <li>DevOps/Automation Engineers</li>
    <li>Integration Specialists</li>
    <li>IT Operations</li>
    <li>Product Owners / Managers</li>
    <li>Security Professionals</li>
    <li>Service Desk / Customer Support</li>
    <li>Site Reliability Engineers</li>
    <li>Technical Writers</li>
    <li>Testers / QA Engineers</li>
    <li>Trainers</li>
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
  font-size: 19px;
  line-height: 1.25;
}

.not-just-for-developers li {
  margin: 0;
  padding-left: 4px;
  line-height: inherit;
}
</style>
