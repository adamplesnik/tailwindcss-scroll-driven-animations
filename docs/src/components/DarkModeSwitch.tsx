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
      className="flex size-7 cursor-pointer flex-col overflow-hidden text-zinc-900 opacity-70 transition-opacity duration-200 hover:opacity-100 dark:text-zinc-100"
      onClick={switchMode}
    >
      <motion.div
        initial={{ y: darkMode ? 0 : '-1.75rem' }}
        animate={{ y: darkMode ? 0 : '-1.75rem' }}
        transition={{ ease: [0.65, 0.05, 0.17, 0.99], duration: 0.5, delay: 0.2 }}
        className="group flex flex-col"
      >
        <Moon className="size-7 p-1 transition-transform duration-700 ease-line group-hover:rotate-[22deg]" />
        <Sun className="size-7 p-1 transition-transform duration-700 ease-line group-hover:rotate-[22deg]" />
      </motion.div>
    </div>
  )
}

export interface ModeSwitchProps {
  mode: string
  onClick: MouseEventHandler
}

export default DarkModeSwitch
