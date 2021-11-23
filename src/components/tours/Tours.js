import TourCard from "./TourCard"
import { useState } from 'react'
import TourDetail from './TourDetail'
import { cardData } from './data'
import { Element } from 'react-scroll'
import { data } from './data'

export default function Tours() {
  const [tourTypeSelected, setTourTypeSelected] = useState(0)

  const handleSelectTourType = (tourType) => {
    let out = 0
    tourTypeSelected === tourType ? out = 0 : out = tourType
    setTourTypeSelected(out)
    return out
  }

  console.log(tourTypeSelected)

  return (
    <div className="tours">
      <h1>Tours</h1>
      <p><strong>Hidden Heritage NI</strong> is a new venture, that offers small group, fun, friendly guided tours, driving into the counties of Down, Armagh, or Antrim. All our tours include some memorable unique experiences, which will always include meeting some interesting locals on the way.
      </p>
      <p>Rural Walks: We can also organise pick up and drop off, to and from the rural walks, at extra cost. </p>
      <p>In the future, these rural walks may be combined to make a full day excursion, with a ‘Down Delights’ experience. </p>
      <div className="container">
        {cardData.map((tourType, i) => (
          <TourCard
            {...tourType}
            handleSelectTourType={handleSelectTourType}
            tourTypeSelected={tourTypeSelected}
            tourIndex={i}
            key={i}
          />
        ))}
      </div>
      {tourTypeSelected > 0 &&
        <Element name="tour-detail">
          <TourDetail
            index={tourTypeSelected}
            data={data[tourTypeSelected]}
          />
        </Element>
      }
    </div>
  )
}