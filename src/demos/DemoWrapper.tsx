import { PropsWithChildren } from 'react'
import { addWithSpace } from '../utils/addWithSpace'
import ActionButton from '../components/ActionButton'
import { Repeat, StepForward } from 'lucide-react'

const replayButtonClick = (element: string) => {
  const wrapper = document.getElementById(element)
  wrapper &&
    wrapper.getAnimations({ subtree: true }).forEach((anim) => {
      anim.cancel()
      anim.play()
    })
}

const DemoWrapper = ({
  children,
  className = '',
  actionButton = false,
  actionButtonElement = 'element',
}: PropsWithChildren<DemoWrapperProps>) => {
  return (
    <div
      id={actionButtonElement}
      className={
        'relative mb-4 h-96 overflow-y-auto overflow-x-hidden rounded-lg border border-zinc-300 bg-zinc-100/70 dark:border-zinc-700 dark:bg-black/10' +
        addWithSpace(className)
      }
    >
      {children}
      {actionButton && (
        <div className="absolute right-3 top-3">
          <ActionButton
            Icon={Repeat}
            IconOnClick={StepForward}
            clickAction={() => replayButtonClick(actionButtonElement)}
            tooltip="Replay"
          />
        </div>
      )}
    </div>
  )
}

export interface DemoWrapperProps {
  children: PropsWithChildren
  className?: string
  actionButton?: boolean
  actionButtonElement?: string
}

export default DemoWrapper
