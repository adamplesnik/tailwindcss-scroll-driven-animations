import HeaderModeSwitch from '../components/HeaderModeSwitch.tsx'
import { MouseEventHandler } from 'react'
import HeaderNavAnchor from '../components/HeaderNavAnchor.tsx'
import HeaderSegment from '../components/HeaderSegment.tsx'

const Header = ({ mode, onClick }: HeaderProps) => {
  return (
    <div className={'sticky top-8 z-10 flex items-stretch justify-between md:px-1'}>
      <div
        className={
          'animate-translate-down timeline range-end-[200px] flex items-stretch ' +
          'supports-animations:-translate-y-24 supports-animations:md:-translate-y-32 supports-animations:lg:-translate-y-40'
        }
      >
        <HeaderSegment>
          <div
            className={
              'animate-bg-position timeline/content flex gap-2 rounded-full ' +
              'bg-gradient-to-r from-yellow-300/0 from-30% via-slate-400/30 via-50% to-purple-700/0 to-70% bg-[length:500%_100%] ' +
              'dark:from-slate-300/0 dark:via-slate-300/30'
            }
          >
            <HeaderNavAnchor href={'#tailwind'}>Tailwind</HeaderNavAnchor>
            <HeaderNavAnchor href={'#open-source'}>Open Source</HeaderNavAnchor>
            <HeaderNavAnchor href={'#me'}>Me</HeaderNavAnchor>
          </div>
        </HeaderSegment>
      </div>
      <HeaderModeSwitch mode={mode} onClick={onClick} />
    </div>
  )
}

export interface HeaderProps {
  mode: string
  onClick: MouseEventHandler
}

export default Header
