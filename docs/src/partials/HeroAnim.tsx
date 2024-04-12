import { ArrowDown } from 'lucide-react'
import ChartColumn from '../components/ChartColumn'
import Code from '../components/Code'
import TimelineMarker from '../components/TimelineMarker'
import CenterLayout from '../layouts/CenterLayout'

const columns = [
  'max-h-[40%]',
  'max-h-[65%]',
  'max-h-[78%]',
  'max-h-[67%]',
  'max-h-[88%]',
  'max-h-[92%]',
  'max-h-[66%]',
  'max-h-[43%]',
]

const gradient = `<div class="animate-gradient timeline range/0,2000px"></div>`
const html = `<div class="animate-reveal timeline-view"></div>`
const chart = `<div class="animate-rise timeline/chart range-on-entry/60px,80dvh"></div>`

const HeroAnim = () => {
  return (
    <>
      <CenterLayout>
        <div className="mx-auto flex w-fit items-center gap-4 pt-12">
          <ArrowDown size={24} className="animate-bounce" />
        </div>
      </CenterLayout>
      <CenterLayout className="h-[2000px]">
        <div className="relative h-full w-full">
          <TimelineMarker
            textStart="timeline"
            textEnd="from 0"
            className="absolute left-0 top-24 w-full"
          />
          <div className="animate-gradient no-animations:opacity-100 timeline range/0,2000px sticky top-40 bg-gradient-to-r from-violet-200/0 via-red-400/70 to-cyan-300/0 bg-clip-text bg-no-repeat pb-12 text-5xl font-bold text-transparent opacity-0 dark:via-red-600/70 sm:text-7xl md:text-9xl">
            Scroll Superpower.
          </div>
          <TimelineMarker
            textStart="timeline"
            textEnd="to 2000px"
            className="absolute left-0 bottom-8 w-full"
          />
        </div>
      </CenterLayout>
      <CenterLayout>
        <Code language="html" className="mx-auto mb-72 block w-fit">
          {gradient}
        </Code>
      </CenterLayout>
      <div className="mb-72">
        <div className="h-dvh sticky top-0 w-full">
          <CenterLayout className="h-dvh relative flex flex-col justify-between px-4 py-16 sm:px-8">
            <TimelineMarker textStart="timeline-view" textEnd={'100%'} />
            <TimelineMarker textEnd={'75%'} />
            <TimelineMarker textEnd={'50%'} />
            <TimelineMarker textEnd={'25%'} />
            <TimelineMarker textStart="timeline-view" textEnd={'0%'} />
          </CenterLayout>
        </div>
        <div className="min-h-dvh">
          <CenterLayout className="relative z-20">
            <div className="animate-reveal timeline-view no-animations:opacity-100 mx-auto w-fit text-center opacity-0">
              <div className="text-md text-zinc-950 w-full font-medium dark:text-zinc-200 sm:text-lg md:text-xl">
                'Luke, he is your father.'
              </div>
            </div>
            <Code className="mx-auto mt-12 block w-fit" language="html">
              {html}
            </Code>
          </CenterLayout>
        </div>
      </div>
      <div className="mb-72">
        <div className="h-dvh scope/chart sticky top-0 mt-20 flex w-full items-center">
          <CenterLayout className="h-dvh flex flex-col items-center justify-center px-20">
            <div className="relative flex h-2/3 w-full items-center justify-between py-2.5 pl-32 pr-20">
              {columns.map((column, i) => (
                <ChartColumn className={column} key={i} />
              ))}
              <TimelineMarker
                textStart="entry + 80dvh"
                textEnd="100%"
                className="absolute left-0 top-0 w-full"
              />
              <TimelineMarker
                textEnd="50%"
                className="top-50% absolute left-0 w-full -translate-y-1"
              />
              <TimelineMarker
                textStart="entry +60px"
                textEnd="0%"
                className="absolute left-0 bottom-0 w-full"
              />
              <TimelineMarker textStart="entry" className="absolute left-0 -bottom-12 w-full" />
            </div>
            <Code className="view-timeline/chart mx-auto mt-14 block w-fit" language="html">
              {chart}
            </Code>
          </CenterLayout>
        </div>
        <div className="min-h-dvh"></div>
      </div>
    </>
  )
}

export default HeroAnim
