import { Figma, Github } from 'lucide-react'
import Heading from '../components/Heading.tsx'
import Link from '../components/Link.tsx'
import Paragraph from '../components/Paragraph.tsx'

const Me = () => {
  return (
    <>
      <Heading size={2} id={'me'}>
        Me
      </Heading>
      <Paragraph>
        I am married, 38 years old, father of two kids, living in Bratislava, Slovakia. While my
        passion for coding is obvious, I also enjoy mountain biking, traveling, and spending quality
        time with my family.
      </Paragraph>
      <Paragraph>
        I speak English and French fluently, and because I love Portugal, I'm also learning
        Portuguese.
      </Paragraph>
      <Heading size={3}>Open Source</Heading>
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
      <Paragraph>
        PS: There’s a free X-Wing ride to be won, you just have to look closely.
      </Paragraph>
    </>
  )
}

export default Me
