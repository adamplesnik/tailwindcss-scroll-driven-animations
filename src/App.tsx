import PageBackground from './components/PageBackground.tsx'
import Animations from './partials/Animations.tsx'
import Demo from './partials/Demo.tsx'
import Header from './partials/Header.tsx'
import Intro from './partials/Intro.tsx'
import MainTitle from './partials/MainTitle.tsx'
import Me from './partials/Me.tsx'

function App() {
  return (
    <div className="flex justify-center scope/content">
      <PageBackground />
      <div className={'relative z-10 w-full max-w-screen-md'}>
        <Header />
        <div className={'w-full view-timeline/content'}>
          <MainTitle />
          <Intro />
          <Animations />
          <Demo />
          <Me />
        </div>
      </div>
    </div>
  )
}

export default App
