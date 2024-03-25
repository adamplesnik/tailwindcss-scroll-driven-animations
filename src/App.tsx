import PageBackground from './components/PageBackground.tsx'

function App() {
  return (
    <div className={'flex justify-center p-8 md:p-16 lg:p-20'}>
      <PageBackground />
      <div className={'flex w-full max-w-screen-md flex-col gap-4 md:gap-8'}></div>
    </div>
  )
}

export default App
