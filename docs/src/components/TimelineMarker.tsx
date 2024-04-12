import { addWithSpace } from '../utils/addWithSpace'

const TimelineMarker = ({ number = 0, text = '', className = 'top-0' }: TimelineMarkerProps) => {
  return (
    <div className={'flex items-center gap-4' + addWithSpace(className)}>
      {text && <span className="text-sm font-medium">{text}</span>}
      <div className="h-px flex-1 bg-current opacity-20"></div>
      <span className="font-mono text-sm">{number}%</span>
    </div>
  )
}

export interface TimelineMarkerProps {
  text?: string
  className?: string
  number?: number
}

export default TimelineMarker
