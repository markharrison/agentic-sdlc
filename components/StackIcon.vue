<script setup lang="ts">
import type { Component } from 'vue'
import GitHubIcon from '~icons/logos/github-icon'
import CopilotIcon from '~icons/logos/github-copilot'
import AzureIcon from '~icons/logos/azure-icon'
import VSCodeIcon from '~icons/logos/visual-studio-code'
import VisualStudioIcon from '~icons/logos/visual-studio'
import PlaywrightIcon from '~icons/logos/playwright'
import GrafanaIcon from '~icons/logos/grafana'
import PowerBiIcon from '~icons/logos/microsoft-power-bi'
import OpenAIIcon from '~icons/logos/openai-icon'
import ClaudeIcon from '~icons/logos/claude-icon'
import McpIcon from '~icons/octicon/mcp-24'
import BotIcon from '~icons/carbon/bot'
import FlowIcon from '~icons/carbon/flow'
import TestToolIcon from '~icons/carbon/test-tool'
import KanbanIcon from '~icons/ph/kanban'
import MicrosoftCopilotIcon from '~icons/selfhst/microsoft-copilot'
import DevBoxIcon from '~icons/carbon/virtual-desktop'
import LoadTestingIcon from '~icons/carbon/meter-alt'
import ChaosStudioIcon from '~icons/icon-park-outline/monkey'
import EntraIcon from '~icons/selfhst/microsoft-entra-id'
import DefenderIcon from '~icons/selfhst/microsoft-defender'
import SentinelIcon from '~icons/carbon/radar'
import PolicyIcon from '~icons/carbon/rule'
import MonitorIcon from '~icons/carbon/cloud-monitoring'

type IconName =
  | 'github' | 'copilot' | 'azure' | 'vscode' | 'visual-studio'
  | 'playwright' | 'grafana' | 'power-bi' | 'openai' | 'claude'
  | 'agent' | 'workflows' | 'boards' | 'load-test' | 'chaos'
  | 'test-plans' | 'dev-box' | 'entra' | 'defender' | 'policy'
  | 'sentinel' | 'monitor' | 'mcp' | 'microsoft-copilot'

defineProps<{ name: IconName }>()

const icons: Record<IconName, Component> = {
  github: GitHubIcon,
  copilot: CopilotIcon,
  azure: AzureIcon,
  vscode: VSCodeIcon,
  'visual-studio': VisualStudioIcon,
  playwright: PlaywrightIcon,
  grafana: GrafanaIcon,
  'power-bi': PowerBiIcon,
  openai: OpenAIIcon,
  claude: ClaudeIcon,
  'microsoft-copilot': MicrosoftCopilotIcon,
  'dev-box': DevBoxIcon,
  'load-test': LoadTestingIcon,
  chaos: ChaosStudioIcon,
  entra: EntraIcon,
  defender: DefenderIcon,
  sentinel: SentinelIcon,
  policy: PolicyIcon,
  monitor: MonitorIcon,
  agent: BotIcon,
  workflows: FlowIcon,
  boards: KanbanIcon,
  'test-plans': TestToolIcon,
  mcp: McpIcon,
}
</script>

<template>
  <component
    :is="icons[name]"
    class="stack-icon"
    :data-icon="name"
    aria-hidden="true"
  />
</template>
