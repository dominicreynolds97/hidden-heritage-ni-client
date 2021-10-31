import { driverToursData } from './data'

export default function DriverTours() {
  return (
    <div className="tour-detail">
      <h2>Driver Guided Tours</h2>
      <h3>Cost will be on enquiry</h3>
      <div className="container">
        {driverToursData.map(data => (
          <div className="card-container">
            <div className="tour-detail-card">
              <img src={data.img} alt={data.title} />
            </div>
            <div className="text">
              <h3>{data.title}</h3>
              {data.text.map(p => (
                <p>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ul>
        <li>If you would like to book any of these tours for yourself, family or your group, please get in touch with me using the contact form below, so we can discuss costs, transport, dates and any special requests.</li>
        <li>All these tour experiences are subject to avaliability. However, we can always substitute other wonderful experiences if something is unavaliable on your date requested.</li>
        <li>Appropriate footwear and clothing is necessary, especailly as our climate is unpredictable.</li>
        <li>Time, date, pick up location and advice on what to wear and bring will be provided by email.</li>
      </ul>
    </div>
  )
}