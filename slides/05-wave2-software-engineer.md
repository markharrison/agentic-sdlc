---
title: Wave2 Software Engineer
layout: diagram
clicks: 2
---

<script setup lang="ts">
import SpecsIcon from '~icons/carbon/document-requirements'
import EngineerIcon from '~icons/uix-solid/devops-engineer'
import ArrowRightIcon from '~icons/ph/arrow-right-thin'
import AttachmentIcon from '~icons/ph/paperclip'
import SendIcon from '~icons/ph/paper-plane-right'
import InstructionsIcon from '~icons/ph/book-bookmark-fill'
import SkillsIcon from '~icons/ph/head-circuit-fill'
import ModelsIcon from '~icons/ph/cube-transparent'
import PlugIcon from '~icons/fluent/plug-disconnected-28-filled'

const primitives = [
  { key: 'instructions', label: 'Instruction(s)', icon: InstructionsIcon },
  { key: 'skills', label: 'Skill(s)', icon: SkillsIcon },
]
const spokes = [
  { x1: 601, y1: 294, x2: 646, y2: 389, cx: 626, cy: 345 },
  { x1: 846, y1: 294, x2: 801, y2: 389, cx: 822, cy: 345 },
  { x1: 399, y1: 415, x2: 516, y2: 461, cx: 449, cy: 435 },
  { x1: 1042, y1: 415, x2: 925, y2: 461, cx: 991, cy: 435 },
  { x1: 399, y1: 625, x2: 503, y2: 582, cx: 437, cy: 609 },
  { x1: 1042, y1: 625, x2: 942, y2: 582, cx: 997, cy: 609 },
  { x1: 601, y1: 746, x2: 646, y2: 669, cx: 618, cy: 716 },
  { x1: 846, y1: 746, x2: 812, y2: 669, cx: 832, cy: 716 },
]
</script>

::title::

# Wave2 Software Engineer ...

::default::

<div class="wave-software-engineer">
  <div class="wave-specs" aria-label="Specifications for the software engineer">
    <div><SpecsIcon /><span>Specs</span></div>
    <ArrowRightIcon class="wave-specs-arrow" />
    <div class="wave-engineer" aria-hidden="true"><EngineerIcon /></div>
  </div>

  <div class="wave-layer wave-orbit" role="group" aria-label="Agentic layer around the software lifecycle">
    <svg viewBox="0 0 1440 810" class="wave-orbit-art" aria-hidden="true">
      <ellipse cx="720" cy="520" rx="370" ry="245" class="wave-orbit-ring" />
      <g v-for="(spoke, index) in spokes" :key="index">
        <line :x1="spoke.x1" :y1="spoke.y1" :x2="spoke.x2" :y2="spoke.y2" class="wave-spoke" />
        <circle :cx="spoke.cx" :cy="spoke.cy" r="4.5" class="wave-spoke-dot" />
      </g>
    </svg>
  </div>

  <DevOpsLoops style="position: absolute; top: 315px; left: 410px; width: 600px" />

  <div class="wave-layer wave-hq-layer" role="group" aria-label="Agent HQ command center">
    <div class="wave-command-center">
      <span class="wave-command-prompt">the command center ...</span>
      <span class="wave-command-title">Agent HQ</span>
      <div class="wave-command-brands">
        <StackIcon name="copilot" />
        <StackIcon name="openai" />
        <StackIcon name="claude" />
      </div>
      <div class="wave-command-actions"><AttachmentIcon /><SendIcon /></div>
    </div>
    <div class="wave-hq-connector" aria-hidden="true"></div>
    <div class="wave-agentic-label">Agentic layer</div>
  </div>

  <div v-click="1" class="wave-layer wave-enter-left wave-fleet-layer" role="group" aria-label="Agent fleet">
    <p class="wave-fleet-description">AI Powered agents operating as teammates<br>automating, optimising and accelerating every<br>stage of the software lifecycle</p>
    <div class="wave-card-stack wave-agent-stack">
      <div v-for="offset in [3, 2, 1]" :key="offset" class="wave-card wave-card-back" :style="{ transform: `translate(${-offset * 18}px, ${-offset * 18}px)` }" aria-hidden="true"><StackIcon name="copilot" /></div>
      <div class="wave-card"><span>Agent(s)</span><StackIcon name="copilot" /></div>
    </div>
    <span class="wave-fleet-label">Agent<br>Fleet</span>
  </div>

  <div v-click="2" class="wave-layer wave-enter-left wave-models-layer" role="group" aria-label="Models">
    <div class="wave-card-stack wave-model-stack">
      <div v-for="offset in [2, 1]" :key="offset" class="wave-card wave-card-back" :style="{ transform: `translate(${-offset * 16}px, ${-offset * 18}px)` }" aria-hidden="true"></div>
      <div class="wave-card"><span>Model(s)</span><ModelsIcon /></div>
    </div>
  </div>

  <div v-click="2" class="wave-layer wave-enter-right wave-primitives-layer" role="group" aria-label="Agent primitives and MCP services">
    <p class="wave-primitives-description">Agent Primitives:<br>The context and rules agents<br>operate with</p>
    <svg viewBox="0 0 1440 810" class="wave-primitives-connector" aria-hidden="true">
      <path d="M1103 219L1334 642" />
      <circle cx="1103" cy="219" r="4.5" />
      <circle cx="1334" cy="642" r="4.5" />
    </svg>
    <div v-for="primitive in primitives" :key="primitive.key" class="wave-card-stack" :class="`wave-${primitive.key}-stack`">
      <div v-for="offset in [2, 1]" :key="offset" class="wave-card wave-card-back" :style="{ transform: `translate(${-offset * 16}px, ${-offset * 14}px)` }" aria-hidden="true"></div>
      <div class="wave-card"><span>{{ primitive.label }}</span><component :is="primitive.icon" /></div>
    </div>
    <div class="wave-card wave-integration-card">
      <span>Integration(s)</span>
      <span class="wave-mcp-mark"><StackIcon name="mcp" /><small>MCP</small></span>
    </div>
    <div class="wave-service-plugs" aria-hidden="true"><PlugIcon /><PlugIcon /><span>...</span><PlugIcon /></div>
    <div class="wave-services">MCP Services<ul><li>Knowledge</li><li>Tools</li></ul></div>
  </div>
</div>

<!--
Start with the reusable inner/outer-loop component, software engineer, Agent HQ and agentic ring visible.
Click 1: the agent fleet and its explanation enter from the left.
Click 2: models enter from the left; instructions, skills, integrations and MCP services enter from the right.
The initial screen and two builds follow the supplied reference graphics, retaining the current lifecycle labels.
All pictograms and logos are imported; the central lifecycle is the shared DevOpsLoops component.
Use Right Arrow or click the diagram to advance; Left Arrow reverses each build.
-->

<style scoped>
.wave-software-engineer {
  position: absolute;
  inset: 0;
  overflow: hidden;
  color: #f4f7fb;
}

.wave-layer {
  position: absolute;
  inset: 0;
  transition: transform 850ms cubic-bezier(0.2, 0.8, 0.2, 1), opacity 450ms ease;
}

.wave-enter-left.slidev-vclick-hidden {
  transform: translateX(-1480px);
  opacity: 0;
}

.wave-enter-right.slidev-vclick-hidden {
  transform: translateX(1480px);
  opacity: 0;
}

.wave-specs {
  position: absolute;
  top: 103px;
  left: 155px;
  display: flex;
  align-items: center;
  gap: 7px;
}

.wave-specs > div:first-child {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
  font-size: 16px;
}

.wave-specs > div:first-child > svg {
  width: 48px;
  height: 54px;
}

.wave-specs-arrow {
  width: 44px;
  height: 32px;
  margin-top: -14px;
}

.wave-engineer {
  width: 80px;
  height: 90px;
}

.wave-engineer > svg {
  display: block;
  width: 80px;
  height: 90px;
}

.wave-orbit-art,
.wave-primitives-connector {
  position: absolute;
  inset: 0;
  width: 1440px;
  height: 810px;
  pointer-events: none;
}

.wave-orbit-ring {
  fill: none;
  stroke: var(--stack-lime);
  stroke-width: 6px;
  filter: drop-shadow(0 0 5px #00aaff) drop-shadow(0 0 3px #00aaff);
}

.wave-spoke {
  stroke: #47984e;
  stroke-width: 1.5px;
}

.wave-spoke-dot {
  fill: var(--stack-lime);
  filter: drop-shadow(0 0 5px #75ff00);
}

.wave-command-center {
  position: absolute;
  top: 110px;
  left: 350px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  width: 780px;
  height: 60px;
  padding: 0 24px;
  border: 1.5px solid #e6e8ed;
  border-radius: 20px;
  background: #0c1118;
}

.wave-command-prompt {
  display: flex;
  align-items: center;
  font-size: 19px;
}

.wave-command-title {
  margin-left: 80px;
  font-size: 23px;
}

.wave-command-brands {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: 80px;
}

.wave-command-brands :deep(.stack-icon) {
  width: 36px;
  height: 36px;
  flex-basis: 36px;
}

.wave-command-actions {
  display: flex;
  gap: 18px;
  margin-left: auto;
  color: #6a737d;
}

.wave-command-actions > svg {
  width: 20px;
  height: 20px;
}

.wave-hq-connector {
  position: absolute;
  top: 170px;
  left: 719px;
  height: 96px;
  border-left: 1px solid #71a70b;
}

.wave-hq-connector::before {
  position: absolute;
  top: 10px;
  left: -5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--stack-lime);
  content: "";
}

.wave-agentic-label {
  position: absolute;
  top: 198px;
  left: 602px;
  display: grid;
  box-sizing: border-box;
  width: 236px;
  height: 46px;
  place-items: center;
  border: 2px solid transparent;
  border-radius: 25px;
  background: linear-gradient(#0b3539, #0b3539) padding-box,
    linear-gradient(100deg, var(--stack-lime), var(--stack-cyan)) border-box;
  font-size: 24px;
}

.wave-software-engineer .wave-fleet-description {
  position: absolute;
  top: 250px;
  left: 58px;
  margin: 0;
  font-size: 20px;
  line-height: 1.3;
}

.wave-card-stack {
  position: absolute;
  width: 246px;
  height: 60px;
}

.wave-card {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 246px;
  height: 60px;
  gap: 22px;
  padding: 4px 14px;
  border: 3px solid transparent;
  border-radius: 8px;
  background: linear-gradient(#004774, #004774) padding-box,
    linear-gradient(105deg, var(--stack-lime), var(--stack-cyan)) border-box;
  font-size: 24px;
  line-height: 1;
  white-space: nowrap;
}

.wave-card-back {
  position: absolute;
  inset: 0;
  justify-content: flex-end;
}

.wave-card > svg,
.wave-card :deep(.stack-icon) {
  width: 36px;
  height: 36px;
  flex: 0 0 36px;
}

.wave-agent-stack { top: 404px; left: 152px; }
.wave-model-stack { top: 652px; left: 210px; }
.wave-instructions-stack { top: 306px; left: 950px; }
.wave-skills-stack { top: 427px; left: 1068px; }

.wave-fleet-label {
  position: absolute;
  top: 446px;
  left: 58px;
  font-size: 20px;
  line-height: 1.25;
}

.wave-software-engineer .wave-primitives-description {
  position: absolute;
  top: 198px;
  left: 1135px;
  margin: 0;
  color: var(--stack-lime);
  font-size: 18px;
  line-height: 1.2;
}

.wave-primitives-connector path {
  fill: none;
  stroke: var(--stack-lime);
  stroke-width: 2px;
  stroke-dasharray: 7 6;
}

.wave-primitives-connector circle {
  fill: var(--stack-lime);
}

.wave-integration-card {
  position: absolute;
  top: 535px;
  left: 1074px;
  gap: 24px;
}

.wave-mcp-mark {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1px;
}

.wave-mcp-mark :deep(.stack-icon) {
  width: 31px;
  height: 31px;
  flex-basis: 31px;
}

.wave-mcp-mark small {
  font-size: 11px;
}

.wave-service-plugs {
  position: absolute;
  top: 599px;
  left: 1084px;
  display: flex;
  align-items: center;
  color: #668fca;
}

.wave-service-plugs > svg {
  display: block;
  width: 64px;
  height: 94px;
  transform: rotate(-24deg);
}

.wave-service-plugs > span {
  width: 24px;
  font-size: 24px;
}

.wave-services {
  position: absolute;
  top: 706px;
  left: 1105px;
  color: var(--stack-lime);
  font-size: 18px;
  line-height: 1.2;
}

.wave-software-engineer .wave-services ul {
  margin: 2px 0 0;
  padding-left: 24px;
  font-size: 17px;
}

.wave-software-engineer .wave-services li {
  margin: 0;
}

@media (prefers-reduced-motion: reduce) {
  .wave-layer {
    transition: none;
  }
}
</style>
