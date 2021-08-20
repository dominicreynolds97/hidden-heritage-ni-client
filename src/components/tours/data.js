import rural from '../../images/rural-walks-square.jpeg'
import belfast from '../../images/belfast-tours.jpeg'
import driver from '../../images/driver-guided.jpeg'
import ward from '../../images/castle-ward.jpeg'
import crawfordsburn from '../../images/crawfordsburn.jpeg'
import murlough from '../../images/murlough.jpeg'
import lagan from '../../images/lagan.jpeg'
import causeway2 from '../../images/causeway2.jpeg'
import downDelights from '../../images/down-delights.jpeg'
import huntley from '../../images/huntley.jpeg'

export const cardData = [
  { title: 'Guided Rural Walks in County Down', src: rural, element: 'guided-rural' },
  { title: 'Belfast City Walking Tours', src: belfast, element: 'belfast' },
  { title: 'Bespoke Driver Guided Tours', src: driver, element: 'driver' },
]

export const guidedRuralData = [
  {
    title: 'Castle Ward & Strangford',
    text: [
      'Our hike takes you on the perimeter of the National Trust Castleward Estate, visiting some famous locations of filming for The Game of Thrones and Bloodlands. We follow along the shoreline, enjoying and learning about nature on the way, visit a bird hide, enjoy views across Strangford Lough, visit the 16th century Audley’s Castle, a Neolithic cairn, a mansion, and we walk through glorious woodland.',
      'There may be optional refreshment stop in the Stableyard Tearooms, or in Strangford village afterwards, depending on time of year and opening hours access.'
    ], 
    img: ward,
  },
  { 
    title: 'Crawfordsburn & Helens Bay', 
    text: [
      'Our guided walk takes you along a beach with 400 to 500 million year old rocks, with nature in abundance. We walk through a beech lined avenue of Clandeboye Estate, home of the Blackwood family. We walk through the quaint old village of Crawfordsburn, following on into Crawfordsburn Country Park, which was the Estate of the Sharman Crawford family, through an old wooded glen and by a waterfall.',
      'Lunch or refreshments are optional at the end of the walk at the Crawfordsburn Inn or at the café in Crawfordsburn Country Park.'
    ], 
    img: crawfordsburn,
  },
  { 
    title: 'Murlough National Reserve', 
    text: [
      'We start our hike along a lesser trodden trail over a 6000-year sand dune system, now owned by the National Trust. Evidence has been found here of human occupation from Neolithic, Bronze Age and Early Christian periods.',
      'We are likely to see wild ponies, and in the winter our famous migrating Brent geese. You will learn about conservation, wonderful wildlife, the woodland, and the Downshire Estate.',
      'The 4th Marquis of Downshire of the Hill family, came to Dundrum in 1840 and built himself a summer house in 1857, Murlough House, which we walk by on our hike.',
      'We walk along a vast magnificent beach with fabulous views of our Mourne Mountains and return along boardwalks over the sand dunes.'
    ], 
    img: murlough,
  },
  { 
    title: 'Lagan Valley', 
    text: [
      'Our walk takes us along the Lagan tow path, following the river in the Lagan Valley. We walk through majestic woodland through the historic and charming linen village of Edenberry, now a conservation area. Then we head up through rolling meadows to The Giant’s Ring, a henge monument, which dates from the Neolithic period, and was built around 2700BC, meaning it predates the Egyptian pyramids! We return through the National Trust Minnowburn, to enjoy fine views from the Italian style Terrace Hill garden built in the 1930’s, before returning to the riverside and refreshments.'
    ], 
    img: lagan,
  },
]

export const driverToursData = [
  {
    title: 'Causeway Coast',
    img: causeway2
  },
  {
    title: 'Linen History Tour',
    img: huntley
  },
  {
    title: 'Armagh - Cider and City',
    img: ''
  },
  {
    title: 'Down Delights',
    img: downDelights
  }
]