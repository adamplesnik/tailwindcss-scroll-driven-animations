import { WandSparkles } from 'lucide-react'
import Heading from '../components/Heading'
import Page from '../layouts/Page'
import Demo from '../partials/Demo'

const Usage = () => {
  return (
    <Page>
      <Heading size={1}>How to Use This Plugin</Heading>
      <div className="mb-4 hidden gap-4 rounded-lg border border-amber-400 bg-amber-50 p-4 text-sm supports-no-animations:flex dark:border-amber-600 dark:bg-stone-700/30">
        <WandSparkles className="size-8 text-amber-500 dark:text-amber-600" strokeWidth="1" />
        Scroll-driven animations are not yet supported by your browser. Use Chrome 115 or newer to
        see the demos working correctly.
      </div>
      <Demo />
    </Page>
  )
}

export default Usage
