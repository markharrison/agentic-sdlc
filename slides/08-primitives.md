---
title: The Primitives
layout: content
---

<script setup lang="ts">
import PackageIcon from '~icons/ph/package-fill'
</script>

::title::

# The Primitives

::default::

<div class="primitives-slide">
  <div class="primitives-list">
    <div class="primitive-item">
      <div><span class="primitive-name">Custom Agents</span> - Specialized AI personas with defined behaviours</div>
      <div class="primitive-path">.github/agents/*.md</div>
    </div>
    <div class="primitive-item">
      <div><span class="primitive-name">Skills</span> - Procedural knowledge</div>
      <div class="primitive-path">.github/skills/*/SKILL.md</div>
    </div>
    <div class="primitive-item">
      <div><span class="primitive-name">Always-on instructions</span> - Global rules applied to every Copilot request</div>
      <div class="primitive-path">.github/copilot-instructions.md or AGENTS.md</div>
    </div>
    <div class="primitive-item">
      <div><span class="primitive-name">File-based instructions</span> - Rules that activate when working with specific file patterns</div>
      <div class="primitive-path">.github/instructions/*.instructions.md</div>
    </div>
    <div class="primitive-item">
      <div><span class="primitive-name">Prompts</span> - Reusable task templates invoked as slash commands</div>
      <div class="primitive-path">.github/prompts/*.prompt.md</div>
    </div>
    <div class="primitive-item">
      <div><span class="primitive-name">Hooks</span> - Runtime enforcement and audit logging for agent sessions</div>
      <div class="primitive-path">.github/hooks/*.json</div>
    </div>
    <div class="primitive-item">
      <div><span class="primitive-name">MCP</span> – Connections to external tools, APIs, and data sources</div>
      <div class="primitive-path">.vscode/mcp.json</div>
    </div>
  </div>

  <aside v-click class="agent-plugins">
    <p><span class="primitive-name">Agent plugins</span> bundle multiple primitives<br> into a single installable package</p>
    <PackageIcon class="agent-plugins-icon" aria-hidden="true" />
  </aside>
</div>

<style scoped>
.primitives-slide {
  position: absolute;
  inset: 0;
  color: #f4f7fb;
  font-size: 24px;
  line-height: 1.35;
}

.primitive-item {
  margin-bottom: 6px;
  white-space: nowrap;
}

.primitive-name {
  color: var(--stack-yellow);
}

.primitive-path {
  margin-left: 226px;
  color: #36a9dc;
  font-size: 20px;
}

.agent-plugins {
  position: absolute;
  right: 4px;
  bottom: 56px;
  width: max-content;
  text-align: center;
}

.agent-plugins p {
  margin: 0;
}

.agent-plugins-icon {
  display: block;
  width: 88px;
  height: 88px;
  margin: 0 auto;
  color: var(--stack-yellow);
}
</style>
