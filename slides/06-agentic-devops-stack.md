---
title: The Agentic DevOps Stack
layout: diagram
clicks: 10
---

::title::

# The Agentic DevOps Stack

::default::

<div class="devops-stack devops-foundation">
  <div v-click="6" class="agent-layer" role="group" aria-label="Agent layer">
    <div class="agent-band"></div>
    <div v-click="8" class="agent-card workflow-agent">
      <StackIcon name="workflows" />
      <span>Agentic<br>Workflows</span>
    </div>
    <div v-click="7" class="agent-card custom-agents">
      <span>Custom Agents</span>
    </div>
    <div v-click="7" class="agent-card partner-agents">
      <span>Partner Agents</span>
      <StackIcon name="openai" />
      <StackIcon name="claude" />
    </div>
    <div class="agent-card coding-agent">
      <StackIcon name="copilot" />
      <span>Coding Agent</span>
    </div>
    <div class="agent-card review-agent">
      <StackIcon name="copilot" />
      <span>Review Agent</span>
    </div>
    <div class="agent-card quality-agent">
      <StackIcon name="copilot" />
      <span>Code<br>Quality Agent</span>
    </div>
    <div class="agent-card security-agent">
      <StackIcon name="copilot" />
      <span>Security<br>AutoFix Agent</span>
    </div>
    <div class="agent-card sre-agent">
      <StackIcon name="azure" />
      <span>SRE Agent</span>
    </div>
  </div>

  <div class="agent-connections" aria-label="Agentic layer connections">
    <div class="agentic-label">Agentic layer</div>
    <svg class="connection-lines" viewBox="0 0 1440 810" fill="none" aria-hidden="true">
      <defs>
        <filter id="foundation-arrow-glow" filterUnits="userSpaceOnUse" x="32" y="170" width="1384" height="66">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>
      <path class="arrow-halo" d="M66 203H1380" filter="url(#foundation-arrow-glow)" />
      <path class="arrow-shaft" d="M66 203H1380M78 196L66 203L78 210M1368 196L1380 203L1368 210" />
      <g class="connection-stems">
        <path d="M720 155V203" />
        <path d="M720 209V350" />
        <path v-if="$clicks > 0" d="M184 209V350M452 209V350M988 209V350M1256 209V350" />
      </g>
      <g class="connection-dots">
        <circle cx="720" cy="174" r="5" />
        <circle cx="720" cy="267" r="5" />
        <template v-if="$clicks > 0">
          <circle cx="184" cy="267" r="5" />
          <circle cx="452" cy="267" r="5" />
          <circle cx="988" cy="267" r="5" />
          <circle cx="1256" cy="267" r="5" />
        </template>
      </g>
    </svg>
  </div>

  <div class="integrations" aria-label="Integrations">
    <span>Integrations</span>
    <span class="mcp-mark"><StackIcon name="mcp" /><small>MCP</small></span>
  </div>

  <div class="foundation-pillars">
    <section class="foundation-pillar" aria-label="Plan &amp; Design">
      <h2 v-click="1">Plan &amp; Design</h2>
      <div v-show="$clicks >= 2" class="foundation-platform">
        <div v-click="2" class="tool-card enterprise-card" role="group" aria-label="GitHub Enterprise: AI Powered Development and Advanced Security across all five pillars"><StackIcon name="github" /><span>GitHub Enterprise: AI Powered Development and Advanced Security</span></div>
        <div v-show="$clicks >= 3 && $clicks < 5" v-click="3" class="foundation-surfaces" role="group" aria-label="Copilot surfaces and development environments">
          <div class="tool-card copilot-surfaces" role="group" aria-label="GitHub Copilot surfaces across Plan &amp; Design and Code"><StackIcon name="copilot" /><span>GitHub Copilot surfaces (CLI/App|Mobile|Web)</span></div>
          <div class="plan-surfaces">
            <div class="tool-card"><StackIcon name="microsoft-copilot" /><span>Microsoft Copilot</span></div>
            <div v-show="$clicks >= 4" v-click="4" class="tool-card"><StackIcon name="boards" /><span>Azure Boards</span></div>
          </div>
          <div class="code-surfaces" role="group" aria-label="Code development environments">
            <div class="tool-card"><StackIcon name="vscode" /><span>Visual Studio Code</span></div>
            <div class="tool-card"><StackIcon name="visual-studio" /><span>Visual Studio 2026</span></div>
            <div class="tool-card"><carbon-code class="stack-icon" aria-hidden="true" /><span>other dev IDEs</span></div>
            <div v-show="$clicks >= 4" v-click="4" class="tool-card"><StackIcon name="dev-box" /><span>Microsoft DevBox</span></div>
          </div>
          <div v-show="$clicks >= 4" v-click="4" class="foundation-testing" role="group" aria-label="Build &amp; Test services">
            <div class="tool-card"><StackIcon name="playwright" /><span>Microsoft Playwright Testing</span></div>
            <div class="tool-card"><StackIcon name="load-test" /><span>Azure Load Testing</span></div>
            <div class="tool-card"><StackIcon name="chaos" /><span>Azure Chaos Studio</span></div>
            <div class="tool-card"><StackIcon name="test-plans" /><span>Azure Test Plans</span></div>
          </div>
          <div v-show="$clicks >= 4" v-click="4" class="foundation-operations" role="group" aria-label="Release &amp; Deploy and Operate services">
            <div class="tool-card platform-card foundation-azure-platform" role="group" aria-label="Azure Platform Services across Release &amp; Deploy and Operate">
              <StackIcon name="azure" />
              <div>
                <span>Azure Platform Services</span>
                <ul>
                  <li>Foundry</li>
                  <li>App Services</li>
                  <li>Container Apps / Kubernetes</li>
                  <li>Integration Services</li>
                  <li>Data: Storage / Databases</li>
                </ul>
              </div>
            </div>
            <div class="foundation-monitoring" role="group" aria-label="Operate monitoring services">
              <div class="tool-card"><StackIcon name="monitor" /><span>Azure Monitor</span></div>
              <div class="tool-card"><StackIcon name="grafana" /><span>Azure Managed Grafana</span></div>
            </div>
          </div>
        </div>
        <div v-show="$clicks >= 5" v-click="5" class="tool-card developer-platform-card" role="group" aria-label="Microsoft Developer tools and Azure Platform Services across all five pillars"><StackIcon name="azure" /><span>Microsoft Developer tools and Azure Platform Services</span></div>
        <div v-show="$clicks >= 10" v-click="10" class="tool-card governance-summary" role="group" aria-label="Governance, Security and Cost foundation">
          <carbon-document-security class="stack-icon" aria-hidden="true" />
          <span>Governance, Security and Cost</span>
        </div>
      </div>
      <div v-show="$clicks < 2" v-click="1" class="tool-card"><StackIcon name="github" /><span>GitHub Projects</span></div>
      <div v-show="$clicks < 2" v-click="1" class="tool-card"><StackIcon name="github" /><span>GitHub Issues</span></div>
    </section>
    <section class="foundation-pillar" aria-label="Code">
      <h2 v-click="1">Code</h2>
      <div v-show="$clicks < 2" v-click="1" class="tool-card"><StackIcon name="github" /><span>GitHub Repos</span></div>
      <div v-show="$clicks < 2" v-click="1" class="tool-card"><StackIcon name="copilot" /><span>GitHub Copilot</span></div>
      <div v-show="$clicks < 2" v-click="1" class="tool-card"><StackIcon name="github" /><span>GitHub Codespaces</span></div>
    </section>
    <section class="foundation-pillar" aria-label="Build &amp; Test">
      <h2 v-click="1">Build &amp; Test</h2>
      <div v-show="$clicks < 2" v-click="1" class="tool-card tool-card-span-two" role="group" aria-label="GitHub Actions across Build &amp; Test and Release &amp; Deploy"><StackIcon name="github" /><span>GitHub Actions</span></div>
      <div v-show="$clicks < 2" v-click="1" class="tool-card"><StackIcon name="github" /><span>GitHub Code Scanning</span></div>
      <div v-show="$clicks < 2" v-click="1" class="tool-card"><StackIcon name="github" /><span>GitHub Secrets Protection</span></div>
      <div v-show="$clicks < 2" v-click="1" class="tool-card"><StackIcon name="github" /><span>GitHub Code Quality</span></div>
    </section>
    <section class="foundation-pillar" aria-label="Release &amp; Deploy">
      <h2 v-click="1">Release &amp; Deploy</h2>
    </section>
    <section class="foundation-pillar" aria-label="Operate">
      <h2 v-click="1">Operate</h2>
      <div v-show="$clicks < 2" v-click="1" class="tool-card"><StackIcon name="github" /><span>GitHub Issues</span></div>
    </section>
  </div>

  <DevOpsLoops v-if="$clicks === 0" style="position: absolute; top: 315px; left: 410px; width: 600px" />

  <div v-show="$clicks < 10" v-click="9" class="governance-foundation" role="group" aria-label="Governance, Security and Cost foundation">
    <div class="governance-heading">
      <carbon-document-security class="stack-icon" aria-hidden="true" />
      <span>Governance, Security and Cost</span>
    </div>
    <div class="governance-cards">
      <div class="tool-card"><StackIcon name="entra" /><span>Microsoft Entra</span></div>
      <div class="tool-card"><StackIcon name="agent" /><span>Agent 365</span></div>
      <div class="tool-card"><StackIcon name="defender" /><span>Microsoft Defender</span></div>
      <div class="tool-card"><StackIcon name="sentinel" /><span>Microsoft Sentinel</span></div>
      <div class="tool-card"><carbon-data-check class="stack-icon" aria-hidden="true" /><span>Microsoft Purview</span></div>
      <div class="governance-gap" aria-hidden="true"></div>
      <div class="tool-card"><StackIcon name="github" /><span>GitHub Insights</span></div>
      <div class="tool-card"><StackIcon name="github" /><span>GitHub Policy</span></div>
      <div class="tool-card"><StackIcon name="policy" /><span>Azure Policy</span></div>
      <div class="tool-card"><carbon-finance class="stack-icon" aria-hidden="true" /><span>Azure Cost Management</span></div>
      <div class="tool-card"><StackIcon name="power-bi" /><span>Power BI</span></div>
      <div class="tool-card"><carbon-currency-dollar class="stack-icon" aria-hidden="true" /><span>FinOps</span></div>
    </div>
  </div>
</div>
