---
description: "Use when adding, changing, or reviewing icons, product logos, or icon styling in this Slidev deck."
applyTo: "**/*.vue,slides/**/*.md,styles/**/*.css"
---

# Icon conventions

- Import icons as Vue components using `~icons/<collection>/<icon>`.
  Use installed `@iconify-json/<collection>` packages for collections; preserve the
  existing UIX custom loader in [vite.config.ts](../../vite.config.ts).
- Do not use `@iconify-icons` raw-data imports, `v-html` icon rendering, pasted SVG
  icons, or saved icon SVG files. Editable SVG diagram geometry is still allowed.

```ts
import ClaudeIcon from '~icons/logos/claude-icon'
```

- Reuse [StackIcon.vue](../../components/StackIcon.vue) for shared slide icons:

  ```html
  <StackIcon name="claude" />
  ```

- Check the existing registry before adding an icon. Keep its import, `IconName`
  type entry, and `icons` mapping consistent.
- Add only icons actually referenced by slides or components. Remove unused
  imports, type entries, and mappings together; check dynamic names before removal.
- Keep shared stack icons white using the existing `.stack-icon` rule in
  [styles/index.css](../../styles/index.css), not per-icon colour overrides. Preserve intentional
  diagram colours, such as the GitHub capability tiles' gradient masks.
- Use an available product logo where possible. If a generic symbol is necessary,
  do not describe it as an official product logo. Preserve required license notices.
- After icon changes, run `npm run build` and check the affected slides for missing
  icons, incorrect sizing, or colour regressions.
