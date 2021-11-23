import { useEffect, useState } from 'react'

export default function TourDetail({ data, index }) {
  const [selected, setSelected] = useState(data.tours.map(t => 0))

  useEffect(() => {
    // console.log('tours', data.tours)
    setSelected(data.tours.map(t => 0))
  }, [index, data])

  // console.log(selected)

  const handleClick = (i, j) => {
    const arr = selected
    arr[i] = j
    setSelected([...arr])
  }

  return (
    <div className="tour-detail">
      <h2>{data.h2}</h2>
      <h3>{data.h3}</h3>
      <div className="container">
        {data.tours.map((tour, i) => (
          <div key={tour.title} className="card-container">
            <div className="tour-detail-card">
              <div className="images">
                {tour.imgs.length > 1 ?
                  <>
                    <img className="displayed-image" src={tour.imgs[selected[i]].src} alt={tour.title} />
                    <div className="icons">
                      {tour.imgs.map((img, j) => (
                        <img
                          key={img.key}
                          className={`icon ${j === selected[i] ? "selected" : ""}`}
                          src={img.src}
                          alt="404"
                          onClick={() => handleClick(i, j)}
                        />
                      ))}
                    </div>
                  </>
                  :
                  <img className="displayed-image" src={tour.imgs[0].src} alt={tour.title} />
                }
              </div>
            </div>
            <div className="text">
              <h3>{tour.title}</h3>
              {tour.text.map(p => (
                <p>{p}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ul>
        {data.list.map(listItem => (
          <li key={listItem}>{listItem}</li>
        ))}
      </ul>
    </div>
  )
}