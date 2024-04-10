import Heading from '../components/Heading.tsx'
import MainLayout from '../layouts/MainLayout.tsx'
import HomeIntroAnimation from '../partials/HomeIntroAnimation.tsx'

function Home() {
  return (
    <MainLayout>
      <Heading size={1}>Tailwind CSS Scroll-driven Animations</Heading>
      <Heading size={4}>Silence.</Heading>
      <HomeIntroAnimation />
    </MainLayout>
  )
}

export default Home
