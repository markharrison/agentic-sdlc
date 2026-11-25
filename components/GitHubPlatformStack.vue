<script setup lang="ts">
import { useId, type Component } from 'vue'
import CopilotIcon from '~icons/logos/github-copilot'
import GitHubIcon from '~icons/logos/github-icon'
import GitBranchIcon from '~icons/ph/git-branch-bold'
import IntersectSquareIcon from '~icons/ph/intersect-square-bold'
import ShieldCheckIcon from '~icons/ph/shield-check-bold'

type Capability = {
  key: string
  title: string
  from: string
  to: string
  tags: string[]
  icon: Component
}

const id = useId()
const capabilities: Capability[] = [
  {
    key: 'ai',
    title: 'Powered by AI',
    from: '#00ed6f',
    to: '#087bff',
    tags: ['Copilot', 'Agentic SDLC'],
    icon: CopilotIcon,
  },
  {
    key: 'collaboration',
    title: 'Collaboration',
    from: '#ff438b',
    to: '#ff8ac5',
    tags: ['Repos', 'Pull requests', 'Projects', 'Issues', 'Discussions', 'Merge queue', 'Search', 'RBAC'],
    icon: GitBranchIcon,
  },
  {
    key: 'productivity',
    title: 'Productivity',
    from: '#d275ff',
    to: '#ffe248',
    tags: ['CI/CD with Actions', 'Automation', 'Codespaces'],
    icon: IntersectSquareIcon,
  },
  {
    key: 'security',
    title: 'Code Security',
    from: '#13ebd0',
    to: '#3978ff',
    tags: ['Dependency Management', 'Secret scanning', 'Security analysis', 'Quality analysis'],
    icon: ShieldCheckIcon,
  },
  {
    key: 'scale',
    title: 'Scale',
    from: '#ffd7ab',
    to: '#7800ff',
    tags: ['225M+ developers', 'Integrations & APIs'],
    icon: GitHubIcon,
  },
]
</script>

<template>
  <section class="github-platform-stack" aria-label="GitHub platform capabilities">
    <article
      v-for="(item, index) in capabilities"
      :key="item.key"
      class="capability-row"
      :style="{ '--capability-accent': item.from, '--capability-end': item.to, zIndex: capabilities.length - index }"
      :aria-labelledby="`${id}-${item.key}-heading`"
    >
      <svg class="capability-tile" viewBox="0 0 280 184" aria-hidden="true">
        <defs>
          <linearGradient :id="`${id}-${item.key}-surface`" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stop-color="#003a70" />
            <stop offset="0.65" stop-color="#141d28" />
            <stop offset="1" stop-color="#171a20" />
          </linearGradient>
          <linearGradient :id="`${id}-${item.key}-edge`" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stop-color="#160071" />
            <stop offset="0.6" stop-color="#11131e" />
            <stop offset="1" stop-color="#170b2b" />
          </linearGradient>
          <linearGradient :id="`${id}-${item.key}-glyph`">
            <stop offset="0" :stop-color="item.from" />
            <stop offset="1" :stop-color="item.to" />
          </linearGradient>
          <filter :id="`${id}-${item.key}-shadow`" x="-25%" y="-30%" width="150%" height="180%">
            <feDropShadow dx="0" dy="12" stdDeviation="9" flood-color="#020815" flood-opacity="0.45" />
          </filter>
          <mask
            :id="`${id}-${item.key}-mask`"
            maskUnits="userSpaceOnUse"
            x="-65"
            y="-65"
            width="130"
            height="130"
            style="mask-type: alpha"
          >
            <component
              :is="item.icon"
              x="-48"
              y="-48"
              width="96"
              height="96"
            />
          </mask>
        </defs>
        <g :filter="`url(#${id}-${item.key}-shadow)`">
          <path
            d="M10 80V97Q10 105 22 112L128 174Q140 181 152 174L258 112Q270 105 270 97V80Z"
            :fill="`url(#${id}-${item.key}-edge)`"
          />
          <path
            d="M128 8Q140 1 152 8L264 72Q277 80 264 88L152 152Q140 159 128 152L16 88Q3 80 16 72Z"
            :fill="`url(#${id}-${item.key}-surface)`"
            stroke="#1566a8"
            stroke-opacity="0.6"
          />
        </g>
        <g transform="translate(140 79) matrix(0.75 -0.4 0.75 0.4 0 0)">
          <rect
            x="-65"
            y="-65"
            width="130"
            height="130"
            :fill="`url(#${id}-${item.key}-glyph)`"
            :mask="`url(#${id}-${item.key}-mask)`"
          />
        </g>
      </svg>
      <div class="capability-details">
        <h2 :id="`${id}-${item.key}-heading`">{{ item.title }}</h2>
        <div class="capability-tags">
          <span v-for="tag in item.tags" :key="tag">{{ tag }}</span>
        </div>
      </div>
    </article>
  </section>
</template>

<style scoped>
.github-platform-stack {
  position: absolute;
  top: 0;
  right: 18px;
  left: 640px;
  color: #fff;
  font-family: Consolas, "Liberation Mono", monospace;
}

.capability-row {
  position: relative;
  display: grid;
  grid-template-columns: 280px minmax(0, 1fr);
  gap: 64px;
  height: 140px;
}

.capability-row::before {
  position: absolute;
  z-index: -1;
  top: 94px;
  left: 260px;
  width: 100px;
  height: 1.5px;
  background: var(--capability-accent);
  content: "";
}

.capability-tile {
  display: block;
  width: 280px;
  height: 184px;
  overflow: visible;
}

.capability-details {
  min-width: 0;
  padding-top: 73px;
}

.capability-details h2 {
  width: fit-content;
  margin: 0 0 8px;
  padding: 6px 16px;
  border: 1.5px solid transparent;
  border-radius: 24px;
  background:
    linear-gradient(#03070c, #03070c) padding-box,
    linear-gradient(110deg, var(--capability-accent), var(--capability-end)) border-box;
  color: #fff;
  font-size: 23px;
  font-weight: 400;
  line-height: 1.2;
  white-space: nowrap;
}

.capability-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 7px 8px;
}

.capability-tags span {
  padding: 5px 12px;
  border: 1px solid #536173;
  border-radius: 20px;
  color: #f4f6fb;
  font-size: 16px;
  line-height: 1.1;
  white-space: nowrap;
}
</style>
