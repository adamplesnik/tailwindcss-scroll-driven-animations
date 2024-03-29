import useLocalStorage from 'use-local-storage'
import PageBackground from './components/PageBackground.tsx'
import Photo from './components/Photo.tsx'
import Animations from './partials/Animations.tsx'
import Demo from './partials/Demo.tsx'
import Header from './partials/Header.tsx'
import MainTitle from './partials/MainTitle.tsx'
import Me from './partials/Me.tsx'

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [mode, setMode] = useLocalStorage('mode', defaultDark ? 'dark' : 'light')
  const switchMode = () => {
    const isLight = mode === 'light'
    setMode(isLight ? 'dark' : 'light')
    const classList = document.body.classList
    isLight ? classList.add('dark') : classList.remove('dark')
  }
  return (
    <div className={'flex justify-center scope/content'}>
      <PageBackground />
      <div className={'relative z-10 w-full max-w-screen-md'}>
        <Header mode={mode} onClick={switchMode} />
        <div className={'flex w-full pb-4 supports-no-animations:pt-4 md:pb-8'}>
          <Photo />
        </div>
        <div className={'w-full view-timeline/content'}>
          <MainTitle />
          <Animations />
          <Demo />
          <Me />
        </div>
      </div>
    </div>
  )
}

export default App
