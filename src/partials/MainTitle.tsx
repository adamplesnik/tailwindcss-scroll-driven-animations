import { Github } from 'lucide-react'
import Heading from '../components/Heading.tsx'
import Link from '../components/Link.tsx'
import Paragraph from '../components/Paragraph.tsx'

const MainTitle = () => {
  return (
    <>
      <Heading size={1} className={'text-center'}>
        Adam Plesník
      </Heading>
      <Paragraph size={'small'} className={'text-center text-zinc-600 dark:text-zinc-400'}>
        Bratislava, Slovakia,{' '}
        <Link href="https://adamplesnik.com" target="_blank">
          adamplesnik.com
        </Link>
      </Paragraph>
      <Paragraph size={'large'} className={'px-8 text-center'}>
        This website serves as my application for the Tailwind Labs Design Engineer position. It
        features the Scroll-driven Animations plugin I wrote and{' '}
        <Link Icon={Github} href="" target="_blank">
          published
        </Link>
        .
      </Paragraph>
    </>
  )
}

export default MainTitle
