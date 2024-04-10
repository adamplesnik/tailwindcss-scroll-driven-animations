const HomeIntroAnimation = () => {
  const text = Array.from('Scroll. Your next superpower.')
  return (
    <div className="h-[1920px] w-full">
      <div className="flex w-full font-bold text-3xl sm:text-7xl sticky top-32">
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
    </div>
  )
}

export default HomeIntroAnimation
