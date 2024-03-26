import { Moon, Sun } from 'lucide-react'
import { MouseEventHandler } from 'react'
import HeaderModeSwitchButton from './HeaderModeSwitchButton.tsx'
import HeaderSegment from './HeaderSegment.tsx'

const HeaderModeSwitch = ({ mode, onClick }: ModeSwitchProps) => {
  const isDarkMode = mode === 'dark'

  return (
    <HeaderSegment>
      <HeaderModeSwitchButton Icon={Sun} onClick={onClick} pointerEvents={!isDarkMode} />
      <HeaderModeSwitchButton Icon={Moon} onClick={onClick} pointerEvents={isDarkMode} />
      <div
        className={
          (isDarkMode ? 'animate-move-right' : 'animate-move-left') +
          ' absolute z-0 size-8 rounded-full bg-white/60 dark:bg-zinc-500/60'
        }
      ></div>
    </HeaderSegment>
  )
}

export interface ModeSwitchProps {
  mode: string
  onClick: MouseEventHandler
}

export default HeaderModeSwitch
