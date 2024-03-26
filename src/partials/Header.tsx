import HeaderModeSwitch from '../components/HeaderModeSwitch.tsx'
import { MouseEventHandler } from 'react'
import HeaderNavAnchor from '../components/HeaderNavAnchor.tsx'
import HeaderSegment from '../components/HeaderSegment.tsx'

const Header = ({ mode, onClick }: HeaderProps) => {
  return (
    <div className={'sticky top-8 z-10 flex items-stretch justify-between px-1'}>
      <div
        className={
          'animate-translate-down timeline/content flex translate-y-[-162px] items-stretch [animation-range-end:contain]'
        }
      >
        <HeaderSegment>
          <div
            className={
              'animate-bg-position timeline/content flex gap-2 rounded-full ' +
              'bg-gradient-to-r from-yellow-300/0 from-30% via-purple-600/30 via-50% to-purple-700/0 to-70% bg-[length:500%_100%] '
            }
          >
            <HeaderNavAnchor href={'#up'}>&uarr;</HeaderNavAnchor>
            <HeaderNavAnchor href={'#tailwind'}>Tailwind</HeaderNavAnchor>
            <HeaderNavAnchor href={'#figma'}>Figma</HeaderNavAnchor>
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
