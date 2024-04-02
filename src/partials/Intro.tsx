import { CornerRightDown } from 'lucide-react'
import Link from '../components/Link'
import Paragraph from '../components/Paragraph'

const Intro = () => {
  return (
    <>
      <Paragraph>
        I remember being yelled at by a senior Java developer when I proudly integrated some atomic
        classes into our dinosaur project. It was back in 2018, I didn’t back out and our collection
        of Tailwind CSS classes has been growing every day.
      </Paragraph>
      <Paragraph>
        One of many stand-out features of Tailwind CSS is how it guides developers to utilize the
        edge CSS features simply by exploring its documentation.{' '}
        <Link href={'#code'} Icon={CornerRightDown} target={''}>
          Scroll-driven animations
        </Link>{' '}
        you plan to introduce are no exception to this.
      </Paragraph>
    </>
  )
}

export default Intro
