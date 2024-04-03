import Separator from '../components/Separator'
import UsageTableRow from './UsageTableRow'

const UsageTable = ({ items }: UsageTableProps) => {
  return (
    <div className="mb-4 flex flex-col gap-2">
      <div className="flex gap-4 text-sm font-bold">
        <div className="w-64 px-2">Class</div>
        <div className="flex-1 px-2">Code</div>
      </div>
      <Separator />
      {items.map((item, index) => (
        <>
          <UsageTableRow className={item.className} code={item.code} key={index} />
          <Separator />
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
