import { ArrowUpRight, Github } from 'lucide-react'
import DarkModeSwitch from '../components/DarkModeSwitch.tsx'
import HeaderNavAnchor from '../components/HeaderNavAnchor.tsx'

const Nav = () => {
  return (
    <div
      className="range/0%,200px sticky top-0 z-20 flex w-full animate-translate-down items-stretch justify-center border-b border-b-slate-200/50 bg-white/20
        p-1 shadow-lg backdrop-blur-sm timeline supports-animations:-translate-y-24 md:px-1 supports-animations:md:-translate-y-32 supports-animations:lg:-translate-y-40
        dark:border-b-slate-600/50 dark:bg-slate-800/60"
    >
      <div className="flex w-full max-w-screen-lg items-stretch gap-2 px-8 py-2 md:px-16 lg:px-20">
        <HeaderNavAnchor to="/#plugin">Plugin</HeaderNavAnchor>
        <HeaderNavAnchor to="/docs#documentation">Docs</HeaderNavAnchor>
        <HeaderNavAnchor to="https://adamplesnik.com" external>
          Me <ArrowUpRight className="ml-2 size-4" />
        </HeaderNavAnchor>
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
