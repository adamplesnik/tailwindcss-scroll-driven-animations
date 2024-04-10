import { WandSparkles } from 'lucide-react'

const Banner = () => {
  return (
    <div className="mb-4 mt-8 flex items-center gap-4 rounded-lg border border-amber-400 bg-amber-50 px-4 py-3 text-sm  dark:border-amber-600 dark:bg-stone-700/30">
      <WandSparkles
        className="size-6 shrink-0 text-amber-500 dark:text-amber-600"
        strokeWidth="1"
      />
      Scroll-driven animations are not yet supported by your browser. Use Chrome 116 or newer to see
      the demos working correctly.
    </div>
  )
}

export default Banner
