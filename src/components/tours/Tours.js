import TourCard from "./TourCard"
import { useState } from 'react'
import GuidedRural from './GuidedRural'
import BelfastTours from "./BelfastTours"
import DriverTours from "./DriverTours"
import { cardData } from './data'
import { Element } from 'react-scroll'

export default function Tours() {
  const [tourTypeSelected, setTourTypeSelected] = useState(0)

  const handleSelectTourType = (tourType) => {
    let out = 0
    tourTypeSelected === tourType ? out = 0 : out = tourType
    setTourTypeSelected(out)
    return out
  }


  return (
    <div className="tours">
      <h1>Tours</h1>
      <div className="container">
        {cardData.map((tourType, i) => (
          <TourCard
            {...tourType}
            handleSelectTourType={handleSelectTourType}
            tourTypeSelected={tourTypeSelected}
            tourIndex={i}
          />
        ))}
      </div>
      <Element name="tour-detail">
        <div>
          {tourTypeSelected === 1 &&
            <GuidedRural/>
          }
          {tourTypeSelected === 2 &&
            <BelfastTours/>
          }
          {tourTypeSelected === 3 && 
            <DriverTours/>
          }
        </div>
      </Element>
    </div>
  )
}