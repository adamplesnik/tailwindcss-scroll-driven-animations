import { WandSparkles } from 'lucide-react'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Docs from '../docs/Docs'
import Page from '../layouts/Page'
import Demo from '../partials/Demo'

const DocsView = () => {
  return (
    <Page>
      <Heading size={1}>Scroll-driven Animations</Heading>
      <Paragraph size="small" className="opacity-50">
        Tailwind CSS Plugin
      </Paragraph>
      <div className="no-animations:flex mt-12 hidden gap-4 rounded-lg border border-amber-400 bg-amber-50 p-4 text-sm dark:border-amber-600 dark:bg-stone-700/30">
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
