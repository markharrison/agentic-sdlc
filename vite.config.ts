import type { SlidevPluginOptions } from '@slidev/types'
import { defineConfig } from 'vite'

const slidev: SlidevPluginOptions = {
  icons: {
    customCollections: {
      'uix-solid': async (name: string) => {
        const response = await fetch(`https://api.iconify.design/uix-solid/${name}.svg`, {
          signal: AbortSignal.timeout(15000),
        })
        if (!response.ok)
          throw new Error(`Could not import Iconify uix-solid:${name}: HTTP ${response.status}`)
        return response.text()
      },
    },
  },
}

export default defineConfig({ slidev })
