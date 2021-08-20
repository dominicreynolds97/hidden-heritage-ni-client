import { useState } from 'react'
import { data } from './data'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  //const [t, setT] = useState(0)

  const nextSlide = () => {
    setActiveIndex(activeIndex < data.length - 1 ? activeIndex + 1 : 0)
  }

  const previousSlide = () => {
    setActiveIndex(activeIndex > 0 ? activeIndex - 1 : data.length - 1)
  }

  return (
    <div className="hero">
      <div className="carousel">
        <img className="hero-image" src={data[activeIndex].src} alt={data[activeIndex].title}/>
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