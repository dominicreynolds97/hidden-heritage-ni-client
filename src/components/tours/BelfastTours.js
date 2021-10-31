import { belfastToursData } from './data'

export default function BelfastTours() {
  return (
    <div className="tour-detail">
      <h2>Belfast City Walking Tours</h2>
      <h3>2 hours duration</h3>
      <div className="container">
        {belfastToursData.map(data => (
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
        <li>City Centre and Titanic walking tours meet at the front of the City Hall.</li>
        <li>Approximately 2 hours duration</li>
        <li>Covering approximately 2 miles.</li>
        <li>£15 per person (minimum cost £30 for one customer booking alone)</li>
        <li>Please wear appropriate footwear and clothing.</li>
      </ul>
    </div>
  )
}