import HeaderModeSwitch from '../components/HeaderModeSwitch.tsx'
import { MouseEventHandler } from 'react'
import HeaderNavAnchor from '../components/HeaderNavAnchor.tsx'
import HeaderSegment from '../components/HeaderSegment.tsx'

const Header = ({ mode, onClick }: HeaderProps) => {
  return (
    <div className={'sticky top-12 flex justify-between'}>
      <HeaderSegment>
        <HeaderNavAnchor href={'#up'}>&uarr;</HeaderNavAnchor>
        <HeaderNavAnchor href={'#tailwind'}>Tailwind</HeaderNavAnchor>
        <HeaderNavAnchor href={'#figma'}>Figma</HeaderNavAnchor>
        <HeaderNavAnchor href={'#me'}>Me</HeaderNavAnchor>
      </HeaderSegment>
      <HeaderModeSwitch mode={mode} onClick={onClick} />
    </div>
  )
}

export interface HeaderProps {
  mode: string
  onClick: MouseEventHandler
}

export default Header
