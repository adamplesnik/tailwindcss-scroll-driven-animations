import PageBackground from './components/PageBackground.tsx'
import Title from './components/Title.tsx'
import Paragraph from './components/Paragraph.tsx'
import Link from './components/Link.tsx'

function App() {
  return (
    <div className={'flex justify-center p-8 md:p-16 lg:p-20'}>
      <PageBackground />
      <div className={'flex w-full max-w-screen-md flex-col gap-4 md:gap-8'}>
        <Title size={1} className={'text-center'}>
          Adam Plesník
        </Title>
        <Paragraph size={'small'} className={'text-center text-zinc-600'}>
          Bratislava, Slovakia
        </Paragraph>
        <Paragraph size={'large'} className={'text-center'}>
          Front-end developer specialized in crafting UIs with particular focus on Tailwind CSS and
          reusable components. Proficient in Vue, React UI development and adept at refactoring UI
          parts of Java, Angular, or PHP projects.
        </Paragraph>
        <Title size={2}>Tailwind</Title>
        <Paragraph>
          I remember being yelled at by a senior Java developer when I proudly integrated some
          atomic classes into our dinosaur project. It was back in 2018, I didn’t back out and our
          collection of Tailwind CSS classes has been growing every day.
        </Paragraph>
        <Paragraph>
          In addition to the job I'm paid for, I also love working on, even only by a fraction of
          time, a refactoring of an open-source project{' '}
          <Link
            href={'https://github.com/adamplesnik/webumenia.sk/tree/feature/css-refactoring'}
            target={'_blank'}
          >
            webumenia.sk
          </Link>
          . I forked their dev branch and started the process of removing old code, reorganizing
          dependencies and integrating more Tailwind CSS.
        </Paragraph>
      </div>
    </div>
  )
}

export default App
