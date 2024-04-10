import CodeBlock from '../components/CodeBlock'

const introAnimCSS = `@keyframes appear {
  to {
    width: auto;
  }
}

.animate-appear {
  animation: appear 0s linear forwards;
}`

const introAnimTSX = `{text.map((letter, index) => (
  <span
    className="inline-block w-0 animate-appear overflow-hidden timeline"
    style={{
      animationRangeEnd: (index * 64 + 128).toString() + 'px',
    }}
    key={index}
  >
    {letter === ' ' ? '\\u00A0' : letter}
  </span>
))}`

const HomeIntroAnimation = () => {
  const text = Array.from('Scroll. Your next superpower.')
  return (
    <div className="h-[1920px] w-full">
      <div className="sticky top-32">
        <div className="flex w-full font-bold text-3xl sm:text-7xl">
          {text.map((letter, index) => (
            <span
              className="inline-block w-0 animate-appear overflow-hidden timeline"
              style={{
                animationRangeEnd: (index * 64 + 128).toString() + 'px',
              }}
              key={index}
            >
              {letter === ' ' ? '\u00A0' : letter}
            </span>
          ))}
        </div>
        <CodeBlock language="css">{introAnimCSS}</CodeBlock>
        <CodeBlock language="tsx">{introAnimTSX}</CodeBlock>
      </div>
    </div>
  )
}

export default HomeIntroAnimation
