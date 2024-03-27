import Heading from '../components/Heading.tsx'
import Paragraph from '../components/Paragraph.tsx'

const MainTitle = () => {
  return (
    <>
      <Heading size={1} className={'text-center'}>
        Adam Plesník
      </Heading>
      <Paragraph size={'small'} className={'text-center text-zinc-600 dark:text-zinc-400'}>
        Bratislava, Slovakia
      </Paragraph>
      <Paragraph size={'large'} className={'text-center'}>
        As a front-end developer, I love creating, polishing and improving user interfaces, with a
        particular focus on Tailwind CSS and building reusable components.
      </Paragraph>
    </>
  )
}

export default MainTitle
