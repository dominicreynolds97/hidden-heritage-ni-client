import waterfall from '../../images/waterfall.jpeg'
import backpack from '../../images/backpack.jpeg'
import { useState } from 'react'

export default function About({ scrolled }) {
  const [isExtended, setIsExtended] = useState(false)

  const handleClick = () => {
    setIsExtended(!isExtended)
  }
 
  return (
    <div className={`about ${scrolled ? 'nav-mounted': ''}`}>
      <div className="container">
        <h2>About</h2>
        <div className="images">
          <img src={waterfall} alt="pic"/>
          <img src={backpack} alt="pic" />
        </div>
        <div className="top">
          <h2>Hi, my name is Lizzie. I live in the green rolling hills of County Down.</h2>
          <p>
            As an accredited Blue, Level 4 Tour Guide, and a well-travelled tourist, I appreciate how visitors love to meet some interesting locals, and feel they have experienced something special and different, beyond the main visitor experiences. I like to “pay forward” the welcome that I, myself, have received abroad.
          </p>
          <p>
            We offer small group, fun, friendly tours that combine experiencing our beautiful outdoors, meeting some locals, and going off the beaten track to see and experience something a little bit different. Let us guide you along rural walks, have unique ‘invited’ access to an historic private home, and take you to some out of the way places that offer a special experience. While we are always sharing local knowledge of our history, heritage, nature, and storytelling on the way. 
          </p>
          <p>
            I love the outdoors and hiking and am interested in local and family history. Especially so, because I have many direct ancestral family connections in the many industries that have shaped Belfast. Hidden Heritage NI has evolved out of these passions.
          </p>
          {isExtended ?
            <div className="bottom">
              <h3>My 3 core values for Tour Guiding are Passion, Communication and Quirkiness.</h3>
              <p>I want to share my <strong>Passion</strong> for the outdoors and experiencing living history.</p>
              <p>The <strong>Communication</strong> is in sharing and good service with a welcoming smile.</p>
              <p>And the <strong>Quirky</strong> – is because of the type of character I am! Quirky is different, and I do not want these days to feel like ‘stuffy’ historic cultural tours. I am a fun, energetic, sociable character, so I wish my tours to reflect this.</p>
              <p>I also work in collaboration with other local guides and, also with Guy, a friendly taxi driver.</p>
              <button onClick={handleClick}>Collapse<div className="arrow-up"></div></button>
            </div>
            :
            <button onClick={handleClick}>Learn More<div className="arrow-down"></div></button>
          }
        </div>
      </div>
    </div>
  )
}