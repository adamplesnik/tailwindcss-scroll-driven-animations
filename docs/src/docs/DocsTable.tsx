import Separator from '../components/Separator'
import DocsTableRow from './DocsTableRow'

const DocsTable = ({ items }: DocsTableProps) => {
  return (
    <div className="mb-6 flex flex-col gap-2  py-2">
      <div className="flex gap-1 text-xs font-bold sm:gap-4">
        <div className="pl-2 sm:w-80">Class</div>
        <div className="block opacity-50 sm:hidden">/</div>
        <div className="flex-1 pr-2 sm:pl-2">Code</div>
      </div>
      <Separator />
      {items.map((item, index) => (
        <>
          <DocsTableRow className={item.className} code={item.code} key={index} />
          <Separator key={'sep' + index} />
        </>
      ))}
    </div>
  )
}

export interface DocsTableProps {
  items: Item[]
}

export interface Item {
  className: string
  code: string
}

export default DocsTable
