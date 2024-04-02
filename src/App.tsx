import PageBackground from './components/PageBackground.tsx'
import Animations from './partials/Animations.tsx'
import Demo from './partials/Demo.tsx'
import Nav from './partials/Nav.tsx'
import Intro from './partials/Intro.tsx'
import MainTitle from './partials/MainTitle.tsx'
import Me from './partials/Me.tsx'

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <PageBackground />
      <Nav />
      <div className={'relative z-10 w-full max-w-screen-md p-8 md:p-16 lg:p-20'}>
        <div className="w-full">
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
