import { Info, WandSparkles } from 'lucide-react'
import Heading from '../components/Heading'
import Page from '../layouts/Page'
import Demo from '../partials/Demo'
import Usage from '../partials/Usage'

const UsageView = () => {
  return (
    <Page>
      <Heading size={1}>How to Use This Plugin</Heading>
      <div className="mb-4 mt-8 flex items-center gap-4 rounded-lg border border-sky-300 bg-sky-100 p-2 text-sm  dark:border-sky-600 dark:bg-sky-700/30">
        <Info className="size-6 shrink-0 text-sky-500 dark:text-sky-600" strokeWidth="1.5" />
        Documentation is in progress.
      </div>
      <div className="mb-4 hidden gap-4 rounded-lg border border-amber-400 bg-amber-50 p-4 text-sm supports-no-animations:flex dark:border-amber-600 dark:bg-stone-700/30">
        <WandSparkles
          className="size-6 shrink-0 text-amber-500 dark:text-amber-600"
          strokeWidth="1"
        />
        Scroll-driven animations are not yet supported by your browser. Use Chrome 115 or newer to
        see the demos working correctly.
      </div>
      <Usage />

      <Demo />
    </Page>
  )
}

export default UsageView
