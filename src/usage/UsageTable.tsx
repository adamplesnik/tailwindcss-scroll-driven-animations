import Separator from '../components/Separator'
import UsageTableRow from './UsageTableRow'

const UsageTable = ({ items }: UsageTableProps) => {
  return (
    <div className="mb-4 flex flex-col gap-2">
      <div className="flex gap-1 text-sm font-bold sm:gap-4">
        <div className="pl-2 sm:w-64">Class</div>
        <div className="block opacity-50 sm:hidden">/</div>
        <div className="flex-1 pr-2 sm:pl-2">Code</div>
      </div>
      <Separator />
      {items.map((item, index) => (
        <>
          <UsageTableRow className={item.className} code={item.code} key={index} />
          <Separator key={'sep' + index} />
        </>
      ))}
    </div>
  )
}

export interface UsageTableProps {
  items: Item[]
}

export interface Item {
  className: string
  code: string
}

export default UsageTable
