<script setup lang="ts">
import { useId } from "vue";
import PlanDocumentsIcon from "~icons/ph/files-light";
import CollaborationIcon from "~icons/ph/users-three-light";
import GearIcon from "~icons/ph/gear-six";

const id = useId();
</script>

<template>
  <svg
    class="devops-loops"
    viewBox="0 0 620 440"
    role="img"
    :aria-labelledby="`${id}-title ${id}-description`"
  >
    <title :id="`${id}-title`">Inner and outer development loops</title>
    <desc :id="`${id}-description`">
      The outer lifecycle connects Plan &amp; Design, Code and Test, Build and
      Test, Release and Deploy, and Operate, with feedback from operations to
      planning. Inner Development and Production loops are connected by two-way
      collaboration and continuous integration and delivery. The Production
      loop also includes Stage and Test.
    </desc>
    <defs>
      <marker
        :id="`${id}-arrow`"
        viewBox="0 0 10 10"
        refX="8"
        refY="5"
        markerWidth="3"
        markerHeight="3"
        orient="auto-start-reverse"
      >
        <path d="M0 0L10 5L0 10Z" fill="currentColor" />
      </marker>
    </defs>

    <g
      fill="none"
      stroke="currentColor"
      stroke-width="4"
      stroke-linejoin="round"
    >
      <path
        d="M505 220C505 138 418 80 281 91"
        :marker-end="`url(#${id}-arrow)`"
      />
      <path
        d="M209 113C162 141 134 181 134 220"
        :marker-end="`url(#${id}-arrow)`"
      />
      <path d="M134 220C134 295 208 349 321 349" />
      <path
        d="M394 340C463 318 505 279 505 220"
        :marker-end="`url(#${id}-arrow)`"
      />
      <circle cx="193" cy="220" r="59" />
      <circle cx="446" cy="220" r="59" />
      <path d="M174 276Q184 279 198 279" :marker-end="`url(#${id}-arrow)`" />
      <path d="M468 165Q458 161 442 161" :marker-end="`url(#${id}-arrow)`" />
      <path
        d="M257 220H381"
        stroke-dasharray="7 6"
        :marker-start="`url(#${id}-arrow)`"
        :marker-end="`url(#${id}-arrow)`"
      />
    </g>

    <PlanDocumentsIcon
      x="214"
      y="67"
      width="60"
      height="60"
      aria-hidden="true"
    />

    <CollaborationIcon
      x="285"
      y="145"
      width="68"
      height="68"
      aria-hidden="true"
    />
    <GearIcon x="328" y="317" width="36" height="36" aria-hidden="true" />
    <GearIcon x="356" y="335" width="36" height="36" aria-hidden="true" />

    <g fill="currentColor" text-anchor="middle">
      <text x="193" y="226" class="loop-name">Development</text>
      <text x="446" y="210" class="loop-name">
        <tspan x="446">Production</tspan>
        <tspan x="446" dy="22">Stage</tspan>
        <tspan x="446" dy="22">Test</tspan>
      </text>
      <text x="319" y="250" class="loop-caption">Collaboration</text>
      <text x="462" y="120" class="loop-caption" text-anchor="start">Feedback</text>
      <text x="211" y="90" class="loop-stage" text-anchor="end">
        Plan &amp; Design
      </text>
      <text x="275" y="49" class="loop-caption" text-anchor="start">
        <tspan x="275">Requirements /</tspan>
        <tspan x="275" dy="18">Specs / Work Items</tspan>
      </text>
      <text x="109" y="211" class="loop-stage" text-anchor="end">
        <tspan x="109">Code</tspan>
        <tspan x="109" dy="27">&amp; Test</tspan>
      </text>
      <text x="515" y="226" class="loop-stage" text-anchor="start">
        Operate
      </text>
      <text x="190" y="370" class="loop-stage">Build &amp; Test</text>
      <text x="408" y="374" class="loop-stage" text-anchor="start">
        Release &amp; Deploy
      </text>
      <text x="319" y="404" class="loop-caption">
        <tspan x="319">Continuous Integration (CI) /</tspan>
        <tspan x="319" dy="18">Continuous Delivery (CD)</tspan>
      </text>
    </g>
  </svg>
</template>

<style scoped>
.devops-loops {
  display: block;
  width: 100%;
  height: auto;
  color: #f4f7fb;
  font-family: "Segoe UI", Arial, sans-serif;
}

.loop-name {
  font-size: 15px;
}

.loop-caption {
  font-size: 14px;
}

.loop-stage {
  fill: var(--stack-yellow);
  font-size: 23px;
}
</style>
