import Code from '../components/Code'
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
      <CenterLayout>
        <div>Scroll down</div>
      </CenterLayout>
      <div className="h-[2000px]">
        <CenterLayout className="animate-gradient timeline range/0,2000px sticky top-40 bg-gradient-to-r from-violet-200/0 via-red-400/50 to-cyan-300/0 bg-clip-text bg-no-repeat pb-12 text-center text-9xl font-bold text-transparent">
          Scroll Superpower.
        </CenterLayout>
      </div>
      <div>
        <div className="h-svh sticky top-0  w-full bg-gradient-to-r from-slate-200/0 via-zinc-400/50 to-cyan-300/10">
          <CenterLayout className="h-svh relative flex flex-col justify-between px-8 py-14">
            <TimelineMarker textStart="timeline-view" textEnd={'100%'} />
            <TimelineMarker textEnd={'50%'} />
            <TimelineMarker textStart="timeline-view" textEnd={'0%'} />
          </CenterLayout>
        </div>
        <div className="min-h-svh">
          <CenterLayout className="relative z-20">
            <div className="animate-reveal timeline-view mx-auto w-fit text-center opacity-0">
              <div className="text-xl font-medium">'Luke, he is your father.'</div>
            </div>
            <Code className="mx-auto mt-12 block w-fit" language="html">
              {html}
            </Code>
          </CenterLayout>
        </div>
      </div>
      <div>
        <div className="h-svh sticky top-0 mt-20 w-full bg-gradient-to-r from-pink-200/0 via-red-400/50 to-cyan-300/10">
          <CenterLayout className="h-svh">ho</CenterLayout>
        </div>
        <div className="min-h-svh"></div>
      </div>
      <div>
        <CenterLayout>
          <CodeBlock language="css" className="backdrop-blur-sm">
            {css}
          </CodeBlock>
          <CodeBlock language="html" className="backdrop-blur-sm">
            {html}
          </CodeBlock>
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
