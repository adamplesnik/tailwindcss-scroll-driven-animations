import { TrendingUp } from 'lucide-react'
import Heading from '../components/Heading.tsx'
import Link from '../components/Link.tsx'
import Paragraph from '../components/Paragraph.tsx'

const Me = () => {
  return (
    <>
      <Heading size={2} id={'me'}>
        Me
      </Heading>
      <Paragraph>
        I am married, 38 years old, father of two kids, living in Bratislava, Slovakia. While my
        passion for coding is obvious, I also enjoy mountain biking, traveling, and spending quality
        time with my family.
      </Paragraph>
      <Paragraph>
        I speak English and French fluently, and because I love Portugal, I'm also learning
        Portuguese.
      </Paragraph>
      <Paragraph>
        Learn more about me at my{' '}
        <Link href="https://adamplesnik.com" target="_blank" Icon={TrendingUp}>
          personal page
        </Link>
        .
      </Paragraph>
    </>
  )
}

export default Me
