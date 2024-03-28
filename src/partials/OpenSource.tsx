import Heading from '../components/Heading.tsx'
import Paragraph from '../components/Paragraph.tsx'
import Link from '../components/Link.tsx'
import { Figma, Github } from 'lucide-react'

const OpenSource = () => {
  return (
    <>
      <Heading size={2} id={'open-source'}>
        Open Source
      </Heading>
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
        If Macromedia Fireworks rings a bell, you'll have an idea of my history with such programs.
        For me, Figma is the ultimate tool—I use it every day for almost everything. I can't imagine
        working without features like auto layout, variables, variants, or dev mode.
        <Link
          href="https://www.figma.com/file/LjxbYtmlXcDlXdY4hpeGmV/Colors?type=design&node-id=0%3A1&mode=design&t=HnWzDnfwLncXMYQR-1"
          Icon={Figma}
          target="_blank"
        >
          Tailwind in Figma
        </Link>
      </Paragraph>
    </>
  )
}

export default OpenSource
