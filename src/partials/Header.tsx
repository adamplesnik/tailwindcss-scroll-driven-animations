import HeaderModeSwitch from '../components/HeaderModeSwitch.tsx'
import { MouseEventHandler } from 'react'
import HeaderNavAnchor from '../components/HeaderNavAnchor.tsx'
import HeaderSegment from '../components/HeaderSegment.tsx'

const Header = ({ mode, onClick }: HeaderProps) => {
  return (
    <div className={'sticky top-8 z-10 flex items-stretch justify-between md:px-1'}>
      <div
        className={
          'flex animate-translate-down items-stretch timeline range-end-[200px] ' +
          'supports-animations:-translate-y-24 supports-animations:md:-translate-y-32 supports-animations:lg:-translate-y-40'
        }
      >
        <HeaderSegment>
          <div
            className={
              'flex animate-bg-position gap-1 rounded-full timeline/content sm:gap-2 ' +
              'bg-gradient-to-r from-yellow-300/0 from-30% via-slate-400/30 via-50% to-purple-700/0 to-70% bg-[length:500%_100%] ' +
              'dark:from-slate-300/0 dark:via-slate-300/30'
            }
          >
            <HeaderNavAnchor href={'#animations'}>
              <span className={'sm:hidden'}>Anim</span>
              <span className={'hidden sm:inline-block'}>Animations</span>
            </HeaderNavAnchor>
            <HeaderNavAnchor href={'#demo'}>Demo</HeaderNavAnchor>
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
