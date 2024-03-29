import Code from '../components/Code'

const Skeleton = ({ width = '200px' }) => {
  return (
    <div style={{ width: width }} className="mb-2 h-6 rounded-full bg-gray-200 dark:bg-slate-700" />
  )
}

const skeletonCollection = ['96%', '100%', '92%', '100%', '93%', '87%', '55%']

const Demo = () => {
  return (
    <div className="mb-8 h-96 overflow-y-auto overflow-x-hidden rounded-lg border border-zinc-300 bg-zinc-100/70 dark:border-zinc-700 dark:bg-black/10">
      <div className="-mt-14 text-sm scope/demo sm:-mt-8">
        <div className="range-start-exit-crossing sticky top-0 z-10 flex -translate-y-24 animate-translate-down flex-wrap gap-1 border-b border-b-zinc-300 bg-white/20 px-8 py-4 backdrop-blur timeline/demo range-end sm:-translate-y-16 dark:border-b-zinc-600 dark:bg-slate-800/60">
          <Code>.animate...</Code>
          <Code>.range-start-exit-crossing</Code>
          <Code>.range-end</Code>
          <Code>.timeline/demo</Code>
        </div>
        <div className="px-4">
          <Code>.scope/demo</Code>
        </div>
        <div className="mx-4 mb-4 mt-2 rounded-lg border border-dashed border-fuchsia-300 p-8 dark:border-cyan-800">
          <Skeleton></Skeleton>
          <Skeleton width={'100%'}></Skeleton>
          <Skeleton width={'78%'}></Skeleton>
          <div className="my-8 flex items-center gap-4 view-timeline/demo">
            <div className="-ml-8 h-px w-4 bg-fuchsia-500 dark:bg-cyan-500" />
            <Code>.view-timeline/demo</Code>
            <div className="h-px flex-1 border-t border-dashed border-t-fuchsia-500 dark:border-t-cyan-600"></div>
            <span className="hidden text-xs font-bold sm:inline-block">Trigger on exit</span>
            <div className="-mr-8 h-px w-4 bg-fuchsia-500 dark:bg-cyan-500" />
          </div>
          <div className="mb-8">
            {skeletonCollection.map((width) => (
              <Skeleton width={width} />
            ))}
          </div>
          {skeletonCollection.map((width) => (
            <Skeleton width={width} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Demo
