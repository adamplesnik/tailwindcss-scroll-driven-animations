import Code from '../components/Code'
import Skeleton from '../components/Skeleton'
import DemoWrapper from './DemoWrapper'

const skeletonCollection = [
  '96%',
  '100%',
  '92%',
  '100%',
  '93%',
  '75%',
  '32%',
  '96%',
  '100%',
  '92%',
  '100%',
  '93%',
  '75%',
  '32%',
]

const SupportsDemo = () => {
  return (
    <DemoWrapper className="mt-4 h-48">
      <div className="no-animations:translate-y-0 sticky left-4 top-0 flex w-fit -translate-y-20 animate-translate-down flex-wrap gap-2 rounded-b-lg bg-sky-400/40 p-4 backdrop-blur timeline sm:left-8 dark:bg-fuchsia-600/40">
        <Code>animate...</Code>
        <Code>timeline</Code>
        <Code>-translate-y-20</Code>
        <Code>no-animations:translate-0</Code>
      </div>
      <div className="no-animations:mt-0 -mt-12 p-4 sm:p-8">
        <Skeleton />
        {skeletonCollection.map((width, key) => (
          <Skeleton width={width} key={key} />
        ))}
      </div>
    </DemoWrapper>
  )
}

export default SupportsDemo
