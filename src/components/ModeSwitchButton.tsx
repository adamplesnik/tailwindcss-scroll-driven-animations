import { MouseEventHandler } from 'react'
import { LucideIcon } from 'lucide-react'

const ModeSwitchButton = ({ Icon, onClick, pointerEvents }: ModeSwitchButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={
        (pointerEvents && 'pointer-events-none') +
        ' ease-cubic-line z-10 flex size-8 cursor-pointer items-center rounded-full p-1 ' +
        'transition-[transform,_background-color] duration-500 ' +
        'hover:rotate-[24deg] hover:bg-white/40 dark:hover:bg-zinc-500/60'
      }
    >
      <Icon />
    </div>
  )
}

export interface ModeSwitchButtonProps {
  Icon: LucideIcon
  onClick: MouseEventHandler
  pointerEvents: boolean
}

export default ModeSwitchButton
