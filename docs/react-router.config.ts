import type { Config } from '@react-router/dev/config'

export default {
  appDirectory: 'src',
  buildDirectory: 'dist',
  // Static site: every route is rendered to HTML at build time
  ssr: false,
  prerender: true,
} satisfies Config
