import { Github } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import DarkModeSwitch from '../components/DarkModeSwitch.tsx'
import CenterLayout from '../layouts/CenterLayout.tsx'

const Nav = () => {
  return (
    <div className="sticky top-0 z-50 flex h-12 items-stretch border-b border-b-slate-200/50 bg-white/20 text-zinc-800 shadow-lg backdrop-blur-sm dark:border-b-slate-600/50 dark:bg-zinc-900/60 dark:text-zinc-300">
      <CenterLayout className="flex items-center gap-2">
        <NavLink to="/">
          <span className="text-sm font-semibold">scrollmations</span>
        </NavLink>
        <NavLink to="/docs#documentation">Docs</NavLink>
        <div className="flex-1" />
        <DarkModeSwitch />
        <a
          href="https://github.com/adamplesnik/tailwindcss-scroll-driven-animations"
          target="_blank"
          className="size-8 group flex items-center justify-center self-center rounded-full p-1.5 transition-colors duration-200 hover:bg-white/40 dark:hover:bg-slate-500/60"
        >
          <Github className="group-hover:animate-bounce" />
        </a>
      </CenterLayout>
    </div>
  )
}

export default Nav
