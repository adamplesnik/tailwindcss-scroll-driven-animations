import { Github } from 'lucide-react'
import DarkModeSwitch from '../components/DarkModeSwitch.tsx'
import HeaderNavAnchor from '../components/HeaderNavAnchor.tsx'
import Logo from '../components/Logo.tsx'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="sticky top-0 z-20 flex w-full items-stretch justify-center bg-white/20 text-zinc-700 shadow-xl shadow-black/5 backdrop-blur-sm dark:border-b-slate-600/50 dark:bg-slate-800/60 dark:text-zinc-400">
      <div className="flex w-full max-w-screen-lg items-stretch gap-3 px-8 py-3 md:px-16 lg:px-20">
        <NavLink
          className="flex items-center gap-2 self-center text-sm font-medium text-zinc-900 dark:text-zinc-100"
          to="/"
        >
          <Logo />
          <span className="mr-2 hidden sm:block">scrolldriven.dev</span>
        </NavLink>
        <HeaderNavAnchor to="/docs">Docs</HeaderNavAnchor>
        <HeaderNavAnchor to="/tech">Tech</HeaderNavAnchor>
        <div className="flex flex-1 items-center justify-end gap-0.5">
          <DarkModeSwitch />
          <HeaderNavAnchor
            to="https://github.com/adamplesnik/tailwindcss-scroll-driven-animations"
            external
          >
            <Github className="p-0.5 hover:animate-bounce-bottom" />
          </HeaderNavAnchor>
        </div>
      </div>
    </div>
  )
}

export default Nav
