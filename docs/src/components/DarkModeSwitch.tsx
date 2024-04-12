import { motion } from 'framer-motion'
import { Moon, Sun } from 'lucide-react'
import { MouseEventHandler, useState } from 'react'

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
    <div
      className="size-8 flex cursor-pointer flex-col overflow-hidden rounded-full transition-colors hover:bg-white/40 dark:hover:bg-slate-500/60"
      onClick={switchMode}
    >
      <motion.div
        initial={{ y: !darkMode ? 0 : '-2rem' }}
        animate={{ y: !darkMode ? 0 : '-2rem' }}
        transition={{ ease: [0.65, 0.05, 0.17, 0.99], duration: 0.5, delay: 0.2 }}
        className="group flex flex-col"
      >
        <Sun className="size-8 ease-line p-1 transition-transform duration-700 group-hover:rotate-[22deg]" />
        <Moon className="size-8 ease-line p-1 transition-transform duration-700 group-hover:-rotate-[22deg]" />
      </motion.div>
    </div>
  )
}

export interface ModeSwitchProps {
  mode: string
  onClick: MouseEventHandler
}

export default DarkModeSwitch
