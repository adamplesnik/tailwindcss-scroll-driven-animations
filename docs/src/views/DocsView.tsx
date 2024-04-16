import { WandSparkles } from 'lucide-react'
import Docs from '../docs/Docs'
import Page from '../layouts/Page'
import Demo from '../partials/Demo'
import Installation from '../partials/Installation'
import MainTitle from '../partials/MainTitle'

const DocsView = () => {
  return (
    <Page>
      <MainTitle />
      <Installation />
      <div className="hidden gap-4 rounded-lg border border-amber-400 bg-amber-50 p-4 text-sm no-animations:flex dark:border-amber-600 dark:bg-stone-700/30">
        <WandSparkles
          className="size-6 shrink-0 text-amber-500 dark:text-amber-600"
          strokeWidth="1"
        />
        Scroll-driven animations are not yet supported by your browser. Use Chrome 116 or newer to
        see the demos working correctly.
      </div>
      <Docs />
      <Demo />
    </Page>
  )
}

export default DocsView
