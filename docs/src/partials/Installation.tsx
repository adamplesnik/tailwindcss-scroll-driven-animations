import CodeBlock from '../components/CodeBlock'
import Heading from '../components/Heading'
import Paragraph from '../components/Paragraph'

const pluginV4 = `@import 'tailwindcss';
@plugin '@adam.plesnik/tailwindcss-scroll-driven-animations';`

const pluginV3 = `module.exports = {
  plugins: [
    require('@adam.plesnik/tailwindcss-scroll-driven-animations'),
    // ...
  ],
}`

const Installation = () => {
  return (
    <div>
      <Heading size={2}>Installation</Heading>
      <Heading size={3}>Tailwind CSS v4</Heading>
      <Paragraph>Install the plugin from npm.</Paragraph>
      <CodeBlock language="bash" clipboard>
        npm install @adam.plesnik/tailwindcss-scroll-driven-animations
      </CodeBlock>
      <Paragraph>Then register the plugin in your main CSS file.</Paragraph>
      <CodeBlock language="css" clipboard>
        {pluginV4}
      </CodeBlock>
      <Heading size={3}>Tailwind CSS v3</Heading>
      <Paragraph>
        Install the v0.3 release of the plugin, which supports Tailwind CSS v3.4+.
      </Paragraph>
      <CodeBlock language="bash" clipboard>
        npm install @adam.plesnik/tailwindcss-scroll-driven-animations@0.3
      </CodeBlock>
      <Paragraph>Then add the plugin to your tailwind.config.js.</Paragraph>
      <CodeBlock clipboard>{pluginV3}</CodeBlock>
    </div>
  )
}

export default Installation
