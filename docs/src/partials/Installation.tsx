import CodeBlock from '../components/CodeBlock'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'

const plugin = `module.exports = {
  plugins: [
    require('@adam.plesnik/tailwindcss-scroll-driven-animations'),
    // ...
  ],
}`

const Installation = () => {
  return (
    <div>
      <Heading size={2}>Installation</Heading>
      <Paragraph>Install the plugin from npm.</Paragraph>
      <CodeBlock>npm install @adam.plesnik/tailwindcss-scroll-driven-animations</CodeBlock>
      <Paragraph> Then add the plugin to your tailwind.config.js.</Paragraph>
      <CodeBlock>{plugin}</CodeBlock>
    </div>
  )
}

export default Installation
