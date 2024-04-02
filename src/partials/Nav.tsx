import { Bike } from 'lucide-react'
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
        <div className="group flex gap-2">
          <Bike className="group-hover:animate-bike-out size-4 self-center" />
          <span className="mr-8 self-center text-xs font-bold">AP</span>
        </div>
        <HeaderNavAnchor href={'#animations'}>
          <span className={'sm:hidden'}>Anim</span>
          <span className={'hidden sm:inline-block'}>Animations</span>
        </HeaderNavAnchor>
        <HeaderNavAnchor href={'#demo'}>Demo</HeaderNavAnchor>
        <HeaderNavAnchor href={'#me'}>Me</HeaderNavAnchor>
        <div className="flex-1" />
        <DarkModeSwitch />
      </div>
    </div>
  )
}

export default Nav
