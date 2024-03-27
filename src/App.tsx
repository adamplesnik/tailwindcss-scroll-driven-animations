import PageBackground from './components/PageBackground.tsx'
import MainTitle from './partials/MainTitle.tsx'
import Tailwind from './partials/Tailwind.tsx'
import Figma from './partials/Figma.tsx'
import useLocalStorage from 'use-local-storage'
import Photo from './components/Photo.tsx'
import Header from './partials/Header.tsx'
import Me from './partials/Me.tsx'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [mode, setMode] = useLocalStorage('mode', defaultDark ? 'dark' : 'light')
  const switchMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }
  return (
    <div
      id={'up'}
      className={
        'flex justify-center bg-zinc-50 p-8 text-zinc-950 md:p-16 lg:p-20 dark:bg-gray-900 dark:text-zinc-300 ' +
        'scope/content ' +
        mode
      }
    >
      <PageBackground />
      <div className={'relative z-10 w-full max-w-screen-md'}>
        <Header mode={mode} onClick={switchMode} />
        <div className={'flex w-full pb-4 md:pb-8'}>
          <Photo />
        </div>
        <div className={'view-timeline/content w-full'}>
          <MainTitle />
          <Tailwind />
          <Figma />
          <Me />
        </div>
      </div>
    </div>
  )
}

export default App
