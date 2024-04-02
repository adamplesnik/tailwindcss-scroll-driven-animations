import { Github } from 'lucide-react'
import DarkModeSwitch from '../components/DarkModeSwitch.tsx'
import HeaderNavAnchor from '../components/HeaderNavAnchor.tsx'

const Nav = () => {
  return (
    <div
      className="sticky top-0 z-20 flex w-full animate-translate-down items-stretch justify-center border-b border-b-slate-200/50 bg-white/20 p-1
        shadow-lg backdrop-blur-sm timeline range-end-[200px] supports-animations:-translate-y-24 md:px-1 supports-animations:md:-translate-y-32 supports-animations:lg:-translate-y-40
        dark:border-b-slate-600/50 dark:bg-slate-800/60"
    >
      <div className="flex w-full max-w-screen-md items-stretch gap-2 px-8 py-2 md:px-16 lg:px-20">
        <HeaderNavAnchor href="#plugin">
          <span className="hidden sm:inline-block">Plugin</span>
        </HeaderNavAnchor>
        <HeaderNavAnchor href="#demo">Demo</HeaderNavAnchor>
        <HeaderNavAnchor href="#me">Me</HeaderNavAnchor>
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
