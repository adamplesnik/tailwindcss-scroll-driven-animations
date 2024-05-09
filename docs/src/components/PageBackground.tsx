const PageBackground = () => {
  return (
    <div
      className={
        'fixed left-0 top-0 h-[24rem] w-full animate-translate-up timeline ' +
        'bg-gradient-to-tr from-yellow-200/0 from-55% via-yellow-200/20 via-75% to-violet-500/60 to-[130%] ' +
        'lg:h-[42rem] ' +
        'dark:from-slate-700/0 dark:via-slate-700/30 dark:to-violet-950'
      }
    ></div>
  )
}

export default PageBackground
