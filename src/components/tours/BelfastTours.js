import { belfastToursData } from './data'

export default function BelfastTours() {
  return (
    <div className="belfast-tours">
      <h2>Belfast City Walking Tours</h2>
      <h3>2 hours duration</h3>
      <h3>£15 per person</h3>
      <div className="container">
        {belfastToursData.map(tour => (
          <div className="inner-tour-card">
            <h3>{tour.title}</h3>
            <img src={tour.img} alt={tour.title} />
          </div>
        ))}
      </div>
    </div>
  )
}