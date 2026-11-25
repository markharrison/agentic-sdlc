# The Agentic DevOps Stack

An editable [Slidev](https://sli.dev) presentation, published at
https://markharrison.uk/agentic-sdlc/.

The repository holds only the deck sources. Slidev itself (`node_modules`) and the
Slidev agent skill (`.github/skills/`) are not committed; install them after cloning.

## After cloning

Requires Node.js 22.22 or newer (the latest LTS is recommended). From the project folder:

```powershell
npm install              # installs Slidev and the other dependencies into node_modules
npm run skills:install   # optional: copies the Slidev agent skill into .github/skills/slidev
npm run dev              # starts the deck at http://localhost:3030
```

`skills:install` copies the skill bundled with the installed `@slidev/cli` package, so it
always matches the Slidev version. Re-run it after upgrading Slidev.

### npm registry

No registry switching is needed. The repo's [.npmrc](./.npmrc) only sets
`omit-lockfile-registry-resolved=true`, so `package-lock.json` records package versions and
integrity hashes but no registry URLs. Each machine installs from its own configured registry:

- **Locally**, npm uses the registry in your user `~/.npmrc` (`%USERPROFILE%\.npmrc` on Windows),
  for example a corporate mirror such as `https://packagefeedproxy.microsoft.io/npm/`.
- **GitHub Actions** has no user `.npmrc`, so it uses the public registry, https://registry.npmjs.org.

Rules to keep this working:

- Put registry and auth token settings in your **user** `~/.npmrc`, never in the repo `.npmrc`.
- Commit the `package-lock.json` that `npm install` produces. The deploy workflow fails
  if the lockfile contains registry URLs (such as `pkgs.visualstudio.com`), which happens
  only if npm ran without the repo `.npmrc`. To fix it, run `npm install` in this folder
  and commit the lockfile.

## Run

```powershell
npm run dev
```

Open http://localhost:3030. Changes reload automatically.
Use **Right/Left Arrow** to move through slides and builds.
Click non-interactive slide content to advance, or **Shift-click** to go back.
Presenter view: http://localhost:3030/presenter.

## Build

```powershell
npm run build
```

Creates the website in `dist`, ready for static hosting.
`npm run build:pages` builds the same site for the `/agentic-sdlc/` path used on GitHub Pages.
The deck uses hash routing (`/agentic-sdlc/#/3`), so refreshing any slide works on static hosting.

## Publishing to GitHub Pages

[.github/workflows/deploy.yml](./.github/workflows/deploy.yml) runs on every push to `main`,
and can also be run manually from the Actions tab. It installs dependencies from public npm with
`npm install`, installs Chromium for the PDF download, runs `npm run build:pages`, and deploys
`dist` to GitHub Pages. The workflow never commits anything back to the repository.

One-time setup in the GitHub repository: **Settings → Pages → Build and deployment → Source:
GitHub Actions**. The user site's custom domain (`markharrison.uk`) applies to this project
repository automatically, so no `CNAME` file is needed here.

The published site includes a PDF download button (`download: true` in [slides.md](./slides.md)).
Note that a public repository also exposes the speaker notes in the slide sources.

## Export

Install the export dependency once:

```powershell
npm install --save-dev playwright-chromium
```

Then export to PDF or PowerPoint:

```powershell
npx slidev export slides.md --output slides.pdf
npx slidev export slides.md --format pptx --output slides.pptx
```

Add `--with-clicks` to the PDF command to include each build as a separate page.
PowerPoint exports contain slide images; animations are not retained.

## Layouts

Layouts control the overall slide structure.

| Layout | Purpose |
| --- | --- |
| [title](./layouts/title.vue) | Branded opening slide with presenter details and optional cover artwork |
| [content](./layouts/content.vue) | Standard text and bullet lists |
| [two-column](./layouts/two-column.vue) | Left/right columns and an optional full-width footer |
| [diagram](./layouts/diagram.vue) | Full-canvas diagram beneath the title |
| [github-platform](./layouts/github-platform.vue) | Split background and single-line white GitHub title |

Select a layout at the top of a slide:

```md
---
layout: content
---

::title::

# My slide title

::default::

My slide content.
```

For two columns, add `::right::` and optionally `::footer::`.
All layouts share [SlideFrame.vue](./layouts/SlideFrame.vue) for the title/content
structure and email footer.

The [opening slide](./slides/01-title.md) uses the title layout's `::title::` slot for
the heading and default content for presenter details. Its optional `::brand::`,
`::background::`, and `::logos::` slots hold the supplied images imported from
[slides/images](./slides/images). These cover images retain their original colours;
shared stack icons still use the white icon styling. The title layout keeps the
standard deck margins, heading typography, text colours, and yellow email footer,
with a vertically centred title and presenter block.
Use `PhotoRight` in the `::background::` slot for cover photos, rather than a bare
`<img>`. All slide photos share its polygon crop and `object-fit: cover`; the diagonal
must not depend on transparency baked into an image. Brand and logo images remain
uncropped.

Photos are optional components, not layouts. Keep `layout: title`, `layout: content`,
or any other layout. Import the image in the slide's script, then add the component
inside the slide's content:

```vue
<script setup lang="ts">
import mountainSunrise from './images/mountain-sunrise.jpg'
</script>

<PhotoRight
  :src="mountainSunrise"
  alt="A mountain peak above clouds at sunrise."
  position="60% center"
/>
```

Remove the component for no photo. Put original images in [slides/images](./slides/images)
and import them relative to the slide file so Vite includes them in production builds.
The `position` prop sets CSS `object-position` inside the fixed diagonal frame and defaults to
`center`, equivalent to `center center` as used on [Slide 07](./slides/07-not-just-devs.md).
Percentages only move the image by the available crop on each axis. A pixel offset can expose
part of the frame if the image does not cover it. PhotoRight does not reformat the layout, so
leave room on the right using your normal content positioning.
Optional content inside `<PhotoRight>...</PhotoRight>` becomes the photo credit.
The [Hello slide](./slides/02-hello.md) uses the normal content layout with a
`PhotoRight` parachute photo and a circular avatar.
[Slide 08](./slides/08-primitives.md) lists the primitives on the normal content layout
and reveals the agent plugins callout on the first click.
The example uses [Pixabay's mountain photo via Pexels](https://www.pexels.com/photo/gray-and-brown-mountain-417173/)
under the [Pexels License](https://www.pexels.com/license/).

[Slide 09](./slides/09-awesome-copilot.md) links to [Awesome Copilot](https://awesome-copilot.github.com/)
and shows a [homepage screenshot](./slides/images/awesome-copilot.png) captured on November 25, 2026.
The [source site's MIT license](./public/licenses/awesome-copilot-LICENSE.txt) is included in builds.
[Slide 10](./slides/10-hyper-velocity-engineering.md) links to [HVE Core](https://microsoft.github.io/hve-core/)
and shows its four-step workflow alongside a [homepage screenshot](./slides/images/hve-core.png)
captured on November 25, 2026.
The [source site's MIT license](./public/licenses/hve-core-LICENSE.txt) is included in builds.
[Slide 12](./slides/12-closing.md) closes the deck with the Microsoft logo reused
from the opening slide and a clickable contact email.

## Reusable components

Components are reusable pieces placed inside a slide.

Slidev also loads the root [global-top.vue](./global-top.vue) automatically.
It mounts [ClickToAdvance.vue](./components/ClickToAdvance.vue) for the whole deck,
so no individual slide or layout needs to import it.

| Component | Purpose |
| --- | --- |
| [DevOpsLoops.vue](./components/DevOpsLoops.vue) | Development/production inner and outer loops |
| [GitHubPlatformStack.vue](./components/GitHubPlatformStack.vue) | Five isometric GitHub capability tiles and labels |
| [StackIcon.vue](./components/StackIcon.vue) | Imported product icons and library symbols |
| [PhotoRight.vue](./components/PhotoRight.vue) | Optional full-height photo with a diagonal edge on any slide layout |

Use them directly in slide Markdown; no imports are needed:

```html
<DevOpsLoops style="position: absolute; top: 350px; left: 0; width: 610px" />
<GitHubPlatformStack />
<StackIcon name="entra" />
```

Set each loop instance's position and size on its slide, relative to the layout's
content area. Edit the component once to update every instance.
The [AI-powered platform slide](./slides/04-ai-powered.md) starts with Wave 1 and
reveals Wave 2 and additional Copilot markers on one click.
The [Wave2 slide](./slides/05-wave2-software-engineer.md) opens with the loops, Agent HQ
and agentic layer, then has two side-entry builds: the agent fleet, then models and agent primitives.
The [stack slide](./slides/06-agentic-devops-stack.md) opens with the loops at the same size
and position as the Wave2 slide, plus one vertical center connector.
On the first click, the loops give way to the pillar headings and tool cards,
and four more vertical connectors appear without moving the center connector.
All icons use `~icons/collection/icon-name` imports, which generate Vue SVG components
from Iconify collections; there are no saved icon SVGs.
Use `~icons/collection/icon-name` in a slide's `<script setup>` or add a shared name
to [StackIcon.vue](./components/StackIcon.vue). For example:

```ts
import ClaudeIcon from '~icons/logos/claude-icon'
```

`~icons` is a virtual import prefix, not a folder. Installed collections store their
SVG data in `node_modules/@iconify-json/<collection>/icons.json`. Use Vue icon
components consistently, rather than raw SVG-data imports or `v-html` rendering.

- Product logos: Logos, Octicons and [selfh.st](https://icon-sets.iconify.design/selfhst/).
- Symbols: Carbon, Phosphor, [Fluent](https://icon-sets.iconify.design/fluent/plug-disconnected-28-filled/),
  [IconPark Outline](https://icon-sets.iconify.design/icon-park-outline/monkey/)
  and [UIX Solid](https://icon-sets.iconify.design/uix-solid/devops-engineer/).
- All shared `.stack-icon` icons render in white, including multicolour product logos,
  for consistent styling across the stack and governance cards.
- Chaos Studio uses IconPark Outline's generic monkey symbol by ByteDance, not an official
  Azure logo. Its [Apache 2.0 license](./public/licenses/iconpark-LICENSE.txt) is included in exported builds.
- The shared loops also use Phosphor imports for documents, collaboration and gears;
  their editable lines, circles and arrowheads remain diagram geometry.
- Exact logos for Dev Box, Load Testing, Sentinel, Policy and Monitor
  were unavailable in Iconify; these use generic Carbon symbols with the product labels unchanged.

The UIX collection is unavailable in the configured npm feed.
[vite.config.ts](./vite.config.ts) resolves its imports from the Iconify API at build/dev time,
so those commands need internet access. All icons are bundled: presenting the built deck
does not contact Iconify. Other collections are installed npm dependencies.
The [UIX](./public/licenses/uix-LICENSE.txt) and
[Fluent](./public/licenses/fluentui-system-icons-LICENSE.txt) MIT notices and
[selfh.st CC BY 4.0 attribution](./public/licenses/selfhst.txt) are included in exported builds.

## Editing and AI tools

- [slides/](./slides): individual slides. [slides.md](./slides.md): slide order and deck settings.
- [styles/index.css](./styles/index.css): shared colours, fonts, and spacing, loaded automatically by Slidev.
- **AI icon conventions:** [.github/instructions/icons.instructions.md](./.github/instructions/icons.instructions.md) applies when editing Vue components, slides, and shared styling.
- **Slidev skill:** `.github/skills/slidev/SKILL.md` gives AI assistants guidance on Slidev syntax, components, layouts, and exports. It is not committed; run `npm run skills:install` after `npm install` to add it.
- **Slidev MCP:** [.mcp.json](./.mcp.json) connects compatible AI assistants to http://localhost:3030/__mcp so they can inspect, edit, reorder, and navigate slides. Run `npm run dev` first.

The skill and MCP are optional AI helpers; neither is needed to present or build.
