import Heading from '../components/Heading.tsx'
import Link from '../components/Link.tsx'
import Paragraph from '../components/Paragraph.tsx'

const MainTitle = () => {
  return (
    <>
      <Heading size={1}>Scroll-driven Animations for Tailwind CSS</Heading>
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
