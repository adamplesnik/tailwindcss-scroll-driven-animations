import Page from '../layouts/Page.tsx'
import Animations from '../partials/Animations.tsx'

export const meta = () => [
  { title: 'Tech – Scroll-driven Animations Plugin for Tailwind CSS' },
  {
    name: 'description',
    content:
      'How the scroll-driven animations plugin for Tailwind CSS generates its utilities, with the plugin source for each one.',
  },
]

function TechView() {
  return (
    <Page>
      <Animations />
    </Page>
  )
}

export default TechView
