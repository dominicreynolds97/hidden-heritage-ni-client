import { driverToursData } from './data'

export default function DriverTours() {
  return (
    <div className="driver-tours">
      <h2>Driver Guided Tours</h2>
      <h3>Not yet avaliable due to Covid-19 restrictions</h3>
      <h3>Watch this space</h3>
      <h3>Cost will be on enquiry</h3>
      <div className="container">
        {driverToursData.map(tour => (
          <div className="inner-tour-card">
            <h3>{tour.title}</h3>
            <img src={tour.img} alt={tour.title} />
          </div>
        ))}
      </div>
    </div>
  )
}