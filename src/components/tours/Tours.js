import TourCard from "./TourCard"
import { useState } from 'react'
import GuidedRural from './GuidedRural'
import BelfastTours from "./BelfastTours"
import DriverTours from "./DriverTours"
import { cardData } from './data'

export default function Tours() {
  const [tourTypeSelected, setTourTypeSelected] = useState(0)

  const handleSelectTourType = (tourType) => {
    console.log(tourType)
    tourTypeSelected === tourType ? setTourTypeSelected(0) : setTourTypeSelected(tourType)
  }


  return (
    <div className="tours">
      <h1>Tours</h1>
      <div className="container">
        {cardData.map((tourType, i) => (
          <TourCard
            {...tourType}
            handleSelectTourType={handleSelectTourType}
            tourIndex={i}
          />
        ))}
      </div>
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
  )
}