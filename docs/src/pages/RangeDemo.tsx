import Code from '../components/Code'
import DemoAnimationExampleRow from '../components/DemoAnimationExampleRow'
import DemoPlaceholderContent from '../components/DemoPlaceholderContent'
import DemoWrapper from '../components/DemoWrapper'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'
import Skeleton from '../components/Skeleton'
import MainLayout from '../layouts/MainLayout'

const skeletonCollection = [
  '46%',
  '100%',
  '92%',
  '100%',
  '93%',
  '87%',
  '55%',
  '100%',
  '93%',
  '87%',
  '55%',
]

const RangeDemo = () => {
  return (
    <MainLayout>
      <Heading size={1}>Animation Range</Heading>
      <div className="flex gap-1 mb-7">
        <Code>.range-start</Code>
        <Code>.range-end</Code>
      </div>
      <Paragraph>lorem</Paragraph>
      <DemoWrapper>
        <DemoPlaceholderContent className="scope/range-demo">
          <div className="sticky top-12 border rounded-lg bg-zinc-400/20 backdrop-blur overflow-hidden">
            <DemoAnimationExampleRow
              animations="range-start-contain range-end-contain"
              bgColor="bg-pink-500"
              timeline="timeline/range-demo"
            />
          </div>
          <div className="mb-8">
            {skeletonCollection.map((width, key) => (
              <Skeleton width={width} key={key} />
            ))}
          </div>
          <DemoPlaceholderContent className="view-timeline/range-demo">
            <Code>.view-timeline/range-demo</Code>
          </DemoPlaceholderContent>
          <div className="mb-8">
            {skeletonCollection.map((width, key) => (
              <Skeleton width={width} key={key} />
            ))}
          </div>
        </DemoPlaceholderContent>
      </DemoWrapper>
    </MainLayout>
  )
}

export default RangeDemo
