import { addWithSpace } from '../utils/addWithSpace'
import Code from './Code'

const DemoAnimationExampleRow = ({
  animations,
  bgColor,
  timeline,
}: DemoAnimationExampleRowProps) => {
  const animationClasses = animations.split(' ')
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap gap-1 w-96 flex-shrink-0">
        {animationClasses.map((animation) => (
          <Code key={animation}>.{animation}</Code>
        ))}
      </div>
      <div
        className={
          'animate-width w-0 h-4' +
          addWithSpace(animations) +
          addWithSpace(bgColor) +
          addWithSpace(timeline)
        }
      ></div>
    </div>
  )
}

export interface DemoAnimationExampleRowProps {
  animations: string
  bgColor: string
  timeline: string
}

export default DemoAnimationExampleRow
