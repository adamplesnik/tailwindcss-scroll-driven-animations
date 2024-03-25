import Title from '../components/Title.tsx'
import Paragraph from '../components/Paragraph.tsx'

const PhotoWithTitle = () => {
  return (
    <>
      <Title size={1} className={'text-center'}>
        Adam Plesník
      </Title>
      <Paragraph size={'small'} className={'text-center text-zinc-600 dark:text-zinc-400'}>
        Bratislava, Slovakia
      </Paragraph>
      <Paragraph size={'large'} className={'text-center'}>
        Front-end developer specialized in crafting UIs with particular focus on Tailwind CSS and
        reusable components. Proficient in Vue, React UI development and adept at refactoring UI
        parts of Java, Angular, or PHP projects.
      </Paragraph>
    </>
  )
}

export default PhotoWithTitle
