import Page from '../layouts/Page.tsx'
import HeroAnim from '../partials/HeroAnim.tsx'
import Nav from '../partials/Nav.tsx'

const HomePage = () => {
  return (
    <>
      <Nav />
      <HeroAnim />
      <Page>hello</Page>
    </>
  )
}

export default HomePage
