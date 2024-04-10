import Heading from '../components/Heading.tsx'
import Link from '../components/Link.tsx'
import Paragraph from '../components/Paragraph.tsx'

const MainTitle = () => {
  return (
    <>
      <Heading size={1}>
        Hello, I am Adam Plesník. This website serves as my application for the Tailwind Labs Design
        Engineer position. It features the Scroll-driven Animations{' '}
        <Link
          href="https://github.com/adamplesnik/tailwindcss-scroll-driven-animations"
          target="_blank"
          borderWidth="huge"
          inline
        >
          plugin
        </Link>{' '}
        I&nbsp;created.
      </Heading>
      <Paragraph size={'small'} className={'pb-12 pt-6 text-zinc-600 dark:text-zinc-400'}>
        Bratislava, Slovakia,{' '}
        <Link href="https://adamplesnik.com" target="_blank" borderWidth="narrow">
          adamplesnik.com
        </Link>
      </Paragraph>
    </>
  )
}

export default MainTitle
