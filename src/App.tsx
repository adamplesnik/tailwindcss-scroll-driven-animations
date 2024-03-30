import PageBackground from './components/PageBackground.tsx'
import Photo from './components/Photo.tsx'
import Animations from './partials/Animations.tsx'
import Demo from './partials/Demo.tsx'
import Header from './partials/Header.tsx'
import MainTitle from './partials/MainTitle.tsx'
import Me from './partials/Me.tsx'

function App() {
  return (
    <div className="flex justify-center scope/content">
      <PageBackground />
      <div className={'relative z-10 w-full max-w-screen-md'}>
        <Header />
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
