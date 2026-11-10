import { WandSparkles } from 'lucide-react'
import Docs from '../docs/Docs'
import Page from '../layouts/Page'

export const meta = () => [
  { title: 'Documentation – Scroll-driven Animations Plugin for Tailwind CSS' },
  {
    name: 'description',
    content:
      'Documentation and live demos of every utility in the scroll-driven animations plugin for Tailwind CSS: timeline, scroll-timeline, view-timeline, range, scope and the no-animations variant.',
  },
]

const DocsView = () => {
  return (
    <Page>
      <div className="hidden gap-4 rounded-lg border border-amber-400 bg-amber-50 p-4 text-sm no-animations:flex dark:border-amber-600 dark:bg-stone-700/30">
        <WandSparkles
          className="size-6 shrink-0 text-amber-500 dark:text-amber-600"
          strokeWidth="1"
        />
        Scroll-driven animations are not yet supported by your browser. Use Chrome 116 or newer to
        see the demos working correctly.
      </div>
      <Docs />
    </Page>
  )
}

export default DocsView
