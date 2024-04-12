import { PropsWithChildren } from 'react'
import { addWithSpace } from '../utils/addWithSpace'

const CenterLayout = ({ children, className = '' }: PropsWithChildren<CenterLayoutProps>) => {
  return (
    <div className={'mx-auto w-full max-w-screen-xl' + addWithSpace(className)}>{children}</div>
  )
}

export interface CenterLayoutProps {
  children: PropsWithChildren
  className?: string
}

export default CenterLayout
