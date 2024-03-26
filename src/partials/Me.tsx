import Title from '../components/Title.tsx'
import Paragraph from '../components/Paragraph.tsx'

const Me = () => {
  return (
    <>
      <Title size={2} id={'me'}>
        Me
      </Title>
      <Paragraph>
        I am married, 38 years old, father of two kids, living in Bratislava, Slovakia. While my
        passion for coding is obvious, I also enjoy mountain biking, traveling, and spending quality
        time with my family.
      </Paragraph>
      <Paragraph>
        I can speak English and French fluently, and because I love Portugal, I'm also learning
        Portuguese.
      </Paragraph>
      <Paragraph>
        PS: There’s a free X-Wing ride to be won, you just have to look closely.
      </Paragraph>
    </>
  )
}

export default Me
