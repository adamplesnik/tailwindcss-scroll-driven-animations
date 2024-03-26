import ModeSwitch from '../components/ModeSwitch.tsx'
import { MouseEventHandler } from 'react'

const Header = ({ mode, onClick }: HeaderProps) => {
  return (
    <div className={'sticky top-12 flex justify-end'}>
      <ModeSwitch mode={mode} onClick={onClick} />
    </div>
  )
}

export interface HeaderProps {
  mode: string
  onClick: MouseEventHandler
}

export default Header
