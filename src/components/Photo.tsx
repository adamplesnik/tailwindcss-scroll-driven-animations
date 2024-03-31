import photo from '/adam-plesnik.jpg'

const Photo = () => {
  return (
    <div className={'flex w-full justify-center'}>
      <div
        className={
          'flex size-32 justify-center overflow-hidden rounded-full bg-stone-400 shadow-2xl sm:size-48 md:size-64'
        }
      >
        <img src={photo} className="h-full max-w-max" />
      </div>
    </div>
  )
}

export default Photo
