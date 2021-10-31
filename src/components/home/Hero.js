import { useCallback, useEffect, useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { data } from './data'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [t, setT] = useState(0)

  const nextSlide = useCallback(() => {
    setActiveIndex(activeIndex < data.length - 1 ? activeIndex + 1 : 0)
  }, [activeIndex])

  const previousSlide = useCallback(() => {
    setActiveIndex(activeIndex > 0 ? activeIndex - 1 : data.length - 1)
  }, [activeIndex])

  const handlers = useSwipeable({
    onSwipedRight: nextSlide,
    onSwipedLeft: previousSlide,
  })

  useEffect(() => {
    clearInterval(t)
    setT(setInterval(() => nextSlide(), 4000))
  }, [nextSlide, previousSlide])

  return (
    <div className="hero">
      <div className="carousel" {...handlers}>
        {data.map((slide, i) => (
          <img key={i} className={`hero-image ${activeIndex === i ? '' : 'hide'}`} src={slide.src} alt={slide.title}/>
        ))}
        <div className="text">
          <h1>Hidden Heritage NI</h1>
          <h4>{data[activeIndex].title}</h4>
        </div>
        <LeftArrow
          previousSlide={previousSlide}
        />
        <RightArrow
          nextSlide={nextSlide}
        />
      </div>
    </div>
  )
}