import Page from '../layouts/Page.tsx'
import Animations from '../partials/Animations.tsx'
import Intro from '../partials/Intro.tsx'
import MainTitle from '../partials/MainTitle.tsx'

function HomeView() {
  return (
    <Page>
      <MainTitle />
      <Intro />
      <Animations />
    </Page>
  )
}

export default HomeView
