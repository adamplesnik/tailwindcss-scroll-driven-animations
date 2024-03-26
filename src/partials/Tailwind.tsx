import Heading from '../components/Heading.tsx'
import Paragraph from '../components/Paragraph.tsx'
import Link from '../components/Link.tsx'
import Code from '../components/Code.tsx'
import { CornerRightDown, Github } from 'lucide-react'

const codeExample = `matchUtilities(
  {
    'animation-timeline': (value, { modifier }) => {
      if (modifier) {
        return {
          'animation-timeline': \`--\${modifier}\`,
        }
      } else {
        return {
          animationTimeline: value,
        }
      }
    },
  },
  {
    values: {
      DEFAULT: 'scroll(y)',
      auto: 'auto',
      none: 'none',
      'scroll-x': 'scroll(x)',
      view: 'view()',
    },
    modifiers: 'any',
  }
)
`
const Tailwind = () => {
  return (
    <>
      <Heading size={2} id={'tailwind'}>
        Tailwind
      </Heading>
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
        you plan to introduce are no exception to this. So I gave it a shot and turned some of their
        CSS into a plugin. This website is the real test; it uses them a lot.
      </Paragraph>
      <Heading size={3}>Llalloasd</Heading>
      <Paragraph>
        So I gave it a shot and turned some of their CSS into a plugin. This website is the real
        test; it uses them a lot.
      </Paragraph>
      <Code
        Icon={Github}
        linkHref={
          'https://github.com/adamplesnik/tailwind-job/blob/e8b3fd14b40b96ccce55ae1846bc7d09d1af6a86/tailwind.config.js#L16'
        }
        linkText={'adamplesnik/.../tailwind.config.js'}
      >
        <a id={'code-tailwind-1'}></a>
        {codeExample}
      </Code>
    </>
  )
}

export default Tailwind
