import Title from '../components/Title.tsx'
import Paragraph from '../components/Paragraph.tsx'
import Link from '../components/Link.tsx'
import Code from '../components/Code.tsx'
import { CornerRightDown, Github } from 'lucide-react'

const Tailwind = () => {
  return (
    <>
      <Title size={2}>Tailwind</Title>
      <Paragraph>
        I remember being yelled at by a senior Java developer when I proudly integrated some atomic
        classes into our dinosaur project. It was back in 2018, I didn’t back out and our collection
        of Tailwind CSS classes has been growing every day.
      </Paragraph>
      <Paragraph>
        In addition to the job I'm paid for, I also love working on, even only by a fraction of
        time, a refactoring of an open-source project{' '}
        <Link
          href={'https://github.com/adamplesnik/webumenia.sk/tree/feature/css-refactoring'}
          Icon={Github}
          target={'_blank'}
        >
          webumenia.sk
        </Link>
        . I forked their dev branch and started the process of removing old code, reorganizing
        dependencies and integrating more Tailwind CSS.
      </Paragraph>
      <Paragraph>
        One aspect of Tailwind CSS that I especially love is how it guides me to utilize edge CSS
        features simply by exploring its documentation.{' '}
        <Link href={'#code-tailwind-1'} Icon={CornerRightDown} target={''}>
          Scroll-driven animations
        </Link>{' '}
        are no exception to this. So I gave it a shot and turned some of their CSS into a plugin.
        This website is the real test; it uses them a lot.
      </Paragraph>
      {/* prettier-ignore */}
      <a id={'code-tailwind-1'}></a>
      <Code>hello world</Code>
    </>
  )
}

export default Tailwind
