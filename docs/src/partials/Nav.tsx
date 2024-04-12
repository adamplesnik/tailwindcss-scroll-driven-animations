import { ArrowUpRight, Github } from 'lucide-react'
import DarkModeSwitch from '../components/DarkModeSwitch.tsx'
import { NavLink } from 'react-router-dom'
import CenterLayout from '../layouts/CenterLayout.tsx'

const Nav = () => {
  return (
    <div className="sticky top-0 z-50 border-b border-b-slate-200/50 bg-white/20 text-zinc-800 shadow-lg backdrop-blur-sm dark:border-b-slate-600/50 dark:bg-zinc-900/60 dark:text-zinc-300">
      <CenterLayout className="flex items-center gap-2">
        <span className="text-sm font-semibold">scrollmations</span>
        <NavLink to="/#plugin">Plugin</NavLink>
        <NavLink to="/docs#documentation">Docs</NavLink>
        <NavLink to="https://adamplesnik.com">
          Me <ArrowUpRight className="size-4 ml-2" />
        </NavLink>
        <div className="flex-1" />
        <DarkModeSwitch />
        <a
          href="https://github.com/adamplesnik/tailwindcss-scroll-driven-animations"
          target="_blank"
          className="size-8 group flex items-center justify-center self-center rounded-full p-1.5 transition-colors duration-200 hover:bg-white/40 dark:hover:bg-slate-500/60"
        >
          <Github className="group-hover:animate-bounce-bottom" />
        </a>
      </CenterLayout>
    </div>
  )
}

export default Nav
