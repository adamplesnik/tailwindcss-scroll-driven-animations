import { Github } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import DarkModeSwitch from '../components/DarkModeSwitch.tsx'
import HeaderNavAnchor from '../components/HeaderNavAnchor.tsx'
import Logo from '../components/Logo.tsx'

const Nav = () => {
  return (
    <div className="sticky top-0 z-20 flex w-full items-stretch justify-center bg-white/20 text-zinc-800 shadow-xl shadow-black/5 backdrop-blur-sm dark:border-b-slate-600/50 dark:bg-slate-800/60 dark:text-zinc-300">
      <div className="flex w-full max-w-screen-lg items-stretch gap-2 px-8 py-3 md:px-16 lg:px-20">
        <NavLink
          className="mr-2 flex items-center gap-1 self-center text-sm font-medium text-zinc-950 dark:text-zinc-50"
          to="/"
        >
          <Logo />
          <span className="mr-2 hidden sm:block">scrolldriven.dev</span>
        </NavLink>
        <HeaderNavAnchor to="/">How To</HeaderNavAnchor>
        <HeaderNavAnchor to="/docs">Docs</HeaderNavAnchor>
        <HeaderNavAnchor to="/tech">Tech</HeaderNavAnchor>
        <div className="flex-1" />
        <DarkModeSwitch />
        <a
          href="https://github.com/adamplesnik/tailwindcss-scroll-driven-animations"
          target="_blank"
          className="group flex size-8 items-center justify-center self-center rounded-full p-1.5 transition-colors duration-200 hover:bg-white/40 dark:hover:bg-slate-500/60"
        >
          <Github className="group-hover:animate-bounce-bottom" />
        </a>
      </div>
    </div>
  )
}

export default Nav
