import PageBackground from './components/PageBackground.tsx'
import MainTitle from './partials/MainTitle.tsx'
import Animations from './partials/Animations.tsx'
import OpenSource from './partials/OpenSource.tsx'
import useLocalStorage from 'use-local-storage'
import Photo from './components/Photo.tsx'
import Header from './partials/Header.tsx'
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
    <div className={'scope/content flex justify-center'}>
      <PageBackground />
      <div className={'relative z-10 w-full max-w-screen-md'}>
        <Header mode={mode} onClick={switchMode} />
        <div className={'supports-no-animations:pt-4 flex w-full pb-4 md:pb-8'}>
          <Photo />
        </div>
        <div className={'view-timeline/content w-full'}>
          <MainTitle />
          <Animations />
          <OpenSource />
          <Me />
        </div>
      </div>
    </div>
  )
}

export default App
