import { LucideIcon } from 'lucide-react'
import { MouseEvent, MouseEventHandler, useState } from 'react'

const ActionButton = ({
  clickAction,
  Icon,
  IconOnClick = undefined,
  tooltip = '',
}: ReplayButtonProps) => {
  const [clicked, setClicked] = useState(false)
  function handleClick(e: MouseEvent) {
    clickAction(e)
    setClicked(true)
    setTimeout(() => setClicked(false), 2000)
  }
  return (
    <div
      onClick={(e) => {
        handleClick(e)
      }}
      title={tooltip}
      className="group cursor-pointer p-1"
    >
      <div
        className={
          'ease-custom relative flex size-6 items-center justify-center rounded-full bg-gradient-to-tr from-slate-400 to-indigo-500 text-zinc-100 opacity-80 ' +
          'overflow-hidden transition-[transform,opacity] duration-300 group-hover:scale-125 group-hover:opacity-100 ' +
          (clicked ? 'scale-125' : 'group-hover:scale-125')
        }
      >
        <Icon
          className={
            'ease-custom absolute size-3 transition-[opacity,transform] duration-500 group-hover:rotate-180 ' +
            (clicked ? 'translate-y-24 rotate-180 delay-300' : 'translate-y-0 delay-75')
          }
        />
        {IconOnClick && (
          <IconOnClick
            className={
              'ease-custom size-3 transition-[opacity,transform] duration-[1s] ' +
              (clicked ? 'translate-y-0' : '-translate-y-24')
            }
          />
        )}
      </div>
    </div>
  )
}

export interface ReplayButtonProps {
  clickAction: MouseEventHandler
  Icon: LucideIcon
  IconOnClick?: LucideIcon | undefined
  tooltip: string
}

export default ActionButton
