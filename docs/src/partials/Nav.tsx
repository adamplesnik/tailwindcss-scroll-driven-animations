import { Github } from 'lucide-react'
import DarkModeSwitch from '../components/DarkModeSwitch.tsx'
import HeaderNavAnchor from '../components/HeaderNavAnchor.tsx'
import CenterLayout from '../layouts/CenterLayout.tsx'

const Nav = () => {
  return (
    <div className="sticky top-0 z-20 flex w-full items-stretch justify-center border-b border-b-slate-200/50 bg-white/20 text-zinc-800 shadow-lg backdrop-blur-sm dark:border-b-slate-600/50 dark:bg-slate-800/60 dark:text-zinc-300">
      <CenterLayout className="flex items-stretch gap-2 py-2 sm:py-3">
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
      </CenterLayout>
    </div>
  )
}

export default Nav
