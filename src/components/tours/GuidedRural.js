import { guidedRuralData } from './data'

export default function GuidedRural() {
  return (
    <div className="guided-rural">
      <h2>Guided Rural Walks in County Down</h2>
      <div className="container">
        {guidedRuralData.map(data => (
          <div className="card-container">
            <div className="guided-rural-card">
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
        <li>Reasonable to good level of fitness needed, as covering about 6 miles on trails</li>
        <li>Approximately 3 hour hikes</li>
        <li>£18 Per adult</li>
        <li>£9 Under-18</li>
        <li>Usually there will be an optional refreshment break at the end, however some of the hikes you may need to bring along a packed lunch</li>
        <li><strong>Important</strong> - Appropriate footwear and wet weather clothing is necessary, as our climate is unpredictable. Some terain may be rocky, slippery, wet, muddy or uneven</li>
        <li>We meet at a car park meeting point - Time, date, exact location and advice on what to wear and bring will be provided in an email</li>
        <li>We will engage you in history, nature and storytelling along the way!</li>
      </ul>
    </div>
  )
}