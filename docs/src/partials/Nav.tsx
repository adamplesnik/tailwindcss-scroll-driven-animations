import { Github } from 'lucide-react'
import DarkModeSwitch from '../components/DarkModeSwitch.tsx'
import HeaderNavAnchor from '../components/HeaderNavAnchor.tsx'
import Logo from '../components/Logo.tsx'

const Nav = () => {
  return (
    <div className="sticky top-0 z-20 flex w-full items-stretch justify-center bg-white/20 text-zinc-700 shadow-xl shadow-black/5 backdrop-blur-sm dark:border-b-slate-600/50 dark:bg-slate-800/60 dark:text-zinc-400">
      <div className="flex w-full max-w-screen-lg items-stretch gap-6 px-8 py-3 md:px-16 lg:px-20">
        <HeaderNavAnchor className="flex items-center gap-1 self-center text-sm font-medium" to="/">
          <Logo />
          <span className="mr-2 hidden sm:block">scrolldriven.dev</span>
        </HeaderNavAnchor>
        <HeaderNavAnchor to="/docs">Docs</HeaderNavAnchor>
        <HeaderNavAnchor to="/tech">Tech</HeaderNavAnchor>
        <div className="flex flex-1 items-center justify-end gap-2">
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
