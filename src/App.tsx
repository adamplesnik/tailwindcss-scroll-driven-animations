import PageBackground from './components/PageBackground.tsx'
import PhotoWithTitle from './partials/PhotoWithTitle.tsx'
import Tailwind from './partials/Tailwind.tsx'
import Figma from './partials/Figma.tsx'

function App() {
  return (
    <div className={'flex justify-center p-8 md:p-16 lg:p-20'}>
      <PageBackground />
      <div className={'flex w-full max-w-screen-md flex-col gap-4 md:gap-8'}>
        <PhotoWithTitle />
        <Tailwind />
        <Figma />
      </div>
    </div>
  )
}

export default App
