import { Moon, Sun } from 'lucide-react'
import { MouseEventHandler } from 'react'
import ModeSwitchButton from './ModeSwitchButton.tsx'

const ModeSwitch = ({ mode, onClick }: ModeSwitchProps) => {
  const isDarkMode = mode === 'dark'

  return (
    <div className={'flex gap-2 rounded-full bg-white/10 p-1 backdrop-blur dark:bg-zinc-500/20'}>
      <ModeSwitchButton Icon={Sun} onClick={onClick} pointerEvents={!isDarkMode} />
      <ModeSwitchButton Icon={Moon} onClick={onClick} pointerEvents={isDarkMode} />
      <div
        className={
          (isDarkMode ? 'animate-move-right' : 'animate-move-left') +
          ' absolute z-0 size-8 rounded-full bg-white/60 dark:bg-zinc-500/60'
        }
      ></div>
    </div>
  )
}

export interface ModeSwitchProps {
  mode: string
  onClick: MouseEventHandler
}

export default ModeSwitch
