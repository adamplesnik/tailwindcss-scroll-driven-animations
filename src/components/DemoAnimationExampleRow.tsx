import { addWithSpace } from '../utils/addWithSpace'
import Code from './Code'

const DemoAnimationExampleRow = ({ animations, timeline }: DemoAnimationExampleRowProps) => {
  const animationClasses = animations.split(' ')
  return (
    <div className="flex items-center gap-2 sm:flex-col sm:items-start">
      <div className="w-36 flex-shrink-0">
        {animationClasses.map((animation) => (
          <Code key={animation}>.{animation}</Code>
        ))}
      </div>
      <div className="relative w-full flex-1 rounded-full bg-slate-300/40 text-sm sm:flex-none dark:bg-slate-300/20">
        <span className="absolute left-1 font-mono text-xs opacity-50">0%</span>
        <span className="absolute left-1/2 top-1.5 size-1 -translate-x-1/2 rotate-90 rounded-full bg-current font-mono text-xs opacity-30 sm:opacity-50"></span>
        <span className="absolute right-1 font-mono text-xs opacity-50">100%</span>
        <div
          className={
            'h-4 w-0 animate-scale-to-right rounded-full bg-sky-500/70 dark:bg-fuchsia-500/60' +
            addWithSpace(animations) +
            addWithSpace(timeline)
          }
        ></div>
      </div>
    </div>
  )
}

export interface DemoAnimationExampleRowProps {
  animations: string
  timeline: string
}

export default DemoAnimationExampleRow
