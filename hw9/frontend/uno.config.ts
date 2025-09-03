import { defineConfig, presetUno, presetAttributify, presetIcons, presetTypography } from 'unocss'
import { transformerVariantGroup, transformerDirectives } from 'unocss'

// UnoCSS configuration
export default defineConfig({
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.1,
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle',
      },
    }),
    presetTypography(),
  ],
  transformers: [transformerVariantGroup(), transformerDirectives()],
  theme: {
    colors: {
      primary: '#1e40af',
      secondary: '#0ea5e9',
      muted: '#94a3b8',
      surface: '#0b2a5a',
    },
  },
})


