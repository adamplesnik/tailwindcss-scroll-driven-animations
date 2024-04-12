import CenterLayout from '../layouts/CenterLayout'

const lines = 8

const HeroAnim = () => {
  return (
    <>
      <div className="h-[2000px]">
        <CenterLayout className="animate-gradient timeline range/0,2000px sticky top-40 bg-gradient-to-r from-violet-200/0 via-red-400/50 to-cyan-300/0 bg-clip-text bg-no-repeat text-9xl font-bold text-transparent">
          Scroll Superpower.
        </CenterLayout>
      </div>
      <CenterLayout>Scroll-driven animations in Tailwind CSS.</CenterLayout>
      <div className="h-0.5 w-full bg-fuchsia-300"></div>
      <div className="h-[2000px]">
        <CenterLayout>
          {[...Array(lines)].map((i) => (
            <div className="h my-12 h-px w-full bg-gray-400" style={{ opacity: i * 0.1 }}></div>
          ))}
        </CenterLayout>
      </div>
    </>
  )
}

export default HeroAnim
