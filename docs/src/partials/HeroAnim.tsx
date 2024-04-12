import CodeBlock from '../components/CodeBlock'
import Paragraph from '../components/Paragraph'
import TimelineMarker from '../components/TimelineMarker'
import CenterLayout from '../layouts/CenterLayout'

const lines = 8

const html = `<div class="animate-reveal timeline-view"></div>`
const css = `@keyframes reveal {
  50% {
    opacity: 1;
    transform: scale(3);
  }
}`

const HeroAnim = () => {
  return (
    <>
      <div className="h-[2000px]">
        <CenterLayout className="animate-gradient timeline range/0,2000px sticky top-40 bg-gradient-to-r from-violet-200/0 via-red-400/50 to-cyan-300/0 bg-clip-text bg-no-repeat pb-12 text-9xl font-bold text-transparent">
          Scroll Superpower.
        </CenterLayout>
      </div>
      <div>
        <div className="h-svh sticky top-0 flex w-full flex-col justify-between bg-gradient-to-r from-slate-200/0 via-zinc-400/50 to-cyan-300/10 px-8 py-4">
          <TimelineMarker number={100} text="End of the animation" />
          <TimelineMarker number={50} />
          <TimelineMarker number={0} text="Start of the animation" />
        </div>
        <div className="min-h-svh">
          <CenterLayout className="relative z-20">
            <div className="animate-reveal timeline-view mx-auto mb-24 w-fit rounded-lg p-8 text-center text-xl font-medium opacity-0">
              'Luke, he is your father.'
            </div>
            <CodeBlock language="css" className="backdrop-blur-sm">
              {css}
            </CodeBlock>
            <CodeBlock language="html" className="backdrop-blur-sm">
              {html}
            </CodeBlock>
          </CenterLayout>
        </div>
      </div>
      <div>
        <CenterLayout>
          <Paragraph>
            Unofficial plugin for Tailwind CSS v3.4+ that provides utilities for scroll-driven
            animations.
          </Paragraph>
        </CenterLayout>
      </div>
    </>
  )
}

export default HeroAnim
