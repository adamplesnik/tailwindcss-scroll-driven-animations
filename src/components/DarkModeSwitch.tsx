import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { MouseEventHandler, useState } from 'react'
import DarkModeSwitchButton from './DarkModeSwitchButton.tsx'

const DarkModeSwitch = () => {
  const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  const storageModeDark = localStorage.getItem('mode') === 'dark'
  const [darkMode, setDarkMode] = useState(storageModeDark || systemDarkMode ? true : false)
  const classList = document.documentElement.classList
  darkMode ? classList.add('dark') : classList.remove('dark')

  const switchMode = () => {
    localStorage.setItem('mode', darkMode ? 'light' : 'dark')
    setDarkMode(!darkMode)
  }

  return (
    <div className="relative flex items-stretch gap-2">
      <DarkModeSwitchButton Icon={Sun} onClick={switchMode} pointerEvents={!darkMode} />
      <DarkModeSwitchButton Icon={Moon} onClick={switchMode} pointerEvents={darkMode} />
      <motion.div
        layout
        transition={{
          type: 'spring',
          delay: 0.12,
          duration: 0.67,
          ease: [0.65, 0.05, 0.17, 0.99],
        }}
        style={darkMode ? { right: '0' } : { left: '0 ' }}
        className="absolute z-0 size-8 rounded-full bg-white/60 dark:bg-zinc-500/60"
      ></motion.div>
    </div>
  )
}

export interface ModeSwitchProps {
  mode: string
  onClick: MouseEventHandler
}

export default DarkModeSwitch
