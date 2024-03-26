import PageBackground from './components/PageBackground.tsx'
import MainTitle from './partials/MainTitle.tsx'
import Tailwind from './partials/Tailwind.tsx'
import Figma from './partials/Figma.tsx'
import useLocalStorage from 'use-local-storage'
import Photo from './components/Photo.tsx'
import Header from './partials/Header.tsx'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [mode, setMode] = useLocalStorage('mode', defaultDark ? 'dark' : 'light')
  const switchMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light')
  }
  return (
    <div
      className={
        'flex justify-center bg-zinc-50 p-8 text-zinc-950 md:p-16 lg:p-20 dark:bg-zinc-900 dark:text-gray-200 ' +
        mode
      }
    >
      <PageBackground />
      <div className={'relative z-10 flex w-full max-w-screen-md flex-col gap-4 md:gap-8'}>
        <Header mode={mode} onClick={switchMode} />
        <div className={'flex w-full pb-4 md:pb-8'}>
          <Photo />
        </div>
        <MainTitle />
        <Tailwind />
        <Figma />
      </div>
    </div>
  )
}

export default App
