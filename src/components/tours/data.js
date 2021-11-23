import rural from '../../images/rural-walks-square.jpeg'
import belfast from '../../images/belfast-tours.jpeg'
import driver from '../../images/driver-guided.jpeg'
import ward from '../../images/castle-ward.jpeg'
import crawfordsburn from '../../images/crawfordsburn.jpeg'
import murlough from '../../images/murlough.jpeg'
import lagan from '../../images/lagan.jpeg'
import causeway2 from '../../images/causeway2.jpeg'
import causewayStonesWithFeet from '../../images/causeway-stones-with-feet.jpeg'
import dunluce from '../../images/dunluce.jpeg'
import ballyloughDavid from '../../images/ballylough-david.jpeg'
import oharabrook from '../../images/oharabrook.jpeg'
import loom1 from '../../images/loom1.jpeg'
import loom2 from '../../images/loom2.jpeg'
import flax from '../../images/flax.jpeg'
// import downDelights from '../../images/down-delights.jpeg'
import huntley from '../../images/driver_guided (1).jpeg'
import korea from '../../images/korea-memorial.jpeg'
import titanic from '../../images/titanic.jpeg'

import armaghSunset from '../../images/armagh-sunset.jpeg'
import coiCathedral from '../../images/coi-cathedral.jpeg'
import rcCathedral from '../../images/rc-cathedral.jpeg'
import armaghCider from '../../images/armagh-cider.jpeg'

export const cardData = [
  { title: 'Bespoke Driver Guided Tours', src: driver, element: 'driver' },
  { title: 'Belfast City Walking Tours', src: belfast, element: 'belfast' },
  { title: 'Guided Rural Walks in County Down', src: rural, element: 'guided-rural' },
]

export const data = [
  null,
  {
    titles: {
      h2: 'Driver Guided Tours',
      h3: 'Cost will be on enquiry'
    },
    tours: [
      {
        title: 'Causeway Coast - 8 to 9 Hours',
        text: [
          'On this full day private tour from Belfast, the highlight is a visit to the world famous Giant’s Causeway UNESCO World Heritage site, with a choice of tour options: ',
          '1. The day is designed around your choice: as whether you wish to experience this spectacular coast with our guided 6 mile, strenuous 3.5 hour hike along the Causeway Cliff Path, with breathtaking views, all the way to the famous Giant’s Causeway Stones.',
          'We drive onwards along this spectacular coast, before arriving to experience the Giant’s Causeway, with the option at the Giant’s Causeway to take the moderate circular 2 mile walk, via the cliff top path to experience the wonderful views, with history, geology and of course legends on the way (includes steep steps). Lunch stop in Bushmills.',
          'or',
          '2. first take a visit to walk over the Carrick-a-rede rope bridge.  (photo: Carrick-a-rede)At extra cost (and dependent on his availability) we can organise an exclusive ‘Beyond the Bridge’ tour with local guide, Mark Rogers',
          'We drive onwards along this spectacular coast, with fabulous photos stops, and then to visit and take a 2 mile round walk to the famous Giant’s Causeway stones.',
          'On our return drive we visit a private country house and estate, meeting the owners for unique access. The houses visited will vary depending on the owners’ availability and access on your day.',
          'The hike takes 3.5 to 4 hours, so a pack lunch is required.',
          'After either option, we will have a photo stop of Dunluce Castle, and then on our return drive to Belfast we stop for a special private tea, meet the owners, and a tour of one of the private homes of Ballylough House or O’Harabrook.'
        ],
        imgs: [
          { src: causeway2, key: 'causeway2' },
          { src: causewayStonesWithFeet, key: 'cwswf' },
          { src: dunluce, key: 'dunluce' },
          { src: ballyloughDavid, key: 'bldavid' },
          { src: oharabrook, key: 'oharabrook' }
        ]
      },
      {
        title: 'Warm Welcomes - Linen Heritage and Craft Creations - 7 Hours',
        text: [
          'This is a day of warm welcomes!',
          'In the drumlins of County Down, we meet Deborah White, one of Ireland’s last handloom linen damask weavers and designers, who opens her studio workshop to showcase her on-going restoration of ‘The Royal Loom’. An early 19th century ten-quarter damask broadloom, it wove for the accession of HRH Queen Elizabeth II in 1952, and the dining rooms of Buckingham Palace, Sandringham and Windsor Castle. With privileged access to the Lecale Weaving Workshop the technicalities and the art of handwoven linen damask weaving are revealed. Try your hand at a weavers knot, throw a flying shuttle or wind a pirn, and connect with the last surviving broadloom to be used in Ireland’s three hundred year tradition of figured linen weaving. A warm welcome is sure to await.',
          'Take out: When you visit Lecale Looms in the green rolling drumlins of County Down, Deborah and her husband Ian, will not only immerse you in our Linen history, but demonstrate weaving linen damask on her restored Royal handloom.',
          'We journey on to Mount Ida Pottery, near Banbridge, to meet another local character, Trevor, where you have the fun opportunity of making your own ceramic flax flowers, by forming the clay by hand. (Your creations can be posted on to you later.)',
          'Lunch stop is at the F. E McWilliam Gallery and Studio.',
          'On our return to Belfast, our final stop for tea and scones, is at Hidden Huntley, a unique and charming private country house. This is one of the 19th century ‘linen houses’ of the Lagan Valley, in semi rural South Belfast.'
        ],
        imgs: [
          { src: loom1, key: 'loom1' },
          { src: loom2, key: 'loom2' },
          { src: flax, key: 'flax' },
          { src: huntley, key: 'huntley' }
        ]
      },
      {
        title: 'Armagh - Cider and City - 7 Hours',
        text: [
          'This is truly a special day, to this city on seven hills, steeped with history and legends. We visit St Patrick’s Church of Ireland Cathedral, where St Patrick first built a church on this site in 445AD, and where the High King of Ireland, Brian Boru, was buried in 1014. This is a tour with unique access.',
          'Followed on by a visit to the Registry and the Armagh Robinson Library, the oldest library in Ireland, founded in 1771. A library with incredible collections and treasures, including a very early edition of ‘Gulliver’s Travels’, with amendments in Jonathan Swift’s handwriting.',
          'If you let us know your interest ahead the librarians can prepare and have ready relevant historical collections. (eg. interests in art, flora and fauna, medicine, etc)',
          'Also included is a visit to the Catholic Cathedral.',
          'Armagh county is famous for its apple growing, particular the Bramble apple. We take you to enjoy lunch at an apple cider farm. Here you meet wonderful local characters from whom you will learn and enjoy a guided tour about their family’s apple growing business going back generations, while walking through orchards, visiting the cider premises and with tasting opportunities.'
        ],
        imgs: [
          { src: armaghSunset, key: 'armaghSunset' },
          { src: coiCathedral, key: 'coi' },
          { src: rcCathedral, key: 'rc' },
          { src: armaghCider, key: 'cider' }
        ]
      }
      // {
      //   title: 'Down Delights',
      //   text: [],
      //   img: downDelights
      // }
    ],
    list: [
      'If you would like to book any of these tours for yourself, family or your group, please get in touch with me using the contact form below, so we can discuss costs, transport, dates and any special requests.',
      'All these tour experiences are subject to avaliability. However, we can always substitute other wonderful experiences if something is unavaliable on your date requested.',
      'Appropriate footwear and clothing is necessary, especailly as our climate is unpredictable.',
      'Time, date, pick up location and advice on what to wear and bring will be provided by email.'
    ]
  },
  {
    titles: {
      h2: 'Belfast City Walking Tours',
      h3: '2 hours duration'
    },
    tours: [
      {
        title: 'City Centre Walking Tour',
        text: [
          'Our City Centre walking tour takes in many of Belfast’s iconic landmarks, including the City Hall, the Ulster Hall, the Grand Opera House, the Waterfront Hall, Customs House Square, the Albert Memorial Clock and St Anne’s Cathedral. Appreciate Belfast’s architectural heritage, learn about the rich industrial history, and become engaged in stories on our journey. We walk through the Linen Quarter, a part of the city which was once key for Belfast and its world leading linen industry. We finish our tour in the vibrant Cathedral Quarter, where you can join us for a drink in one of its famous bars.'
        ],
        imgs: [
          { src: korea, key: 'korea' }
        ]
      },
      {
        title: 'Titanic Walking Tour',
        text: [
          'Start learning about Belfast’s industrial and maritime history from the Titanic Memorial Gardens in the City Hall gardens and then onwards following along the River Lagan. With fabulous views ahead, we cross the river into the Titanic Quarter. Our martitime walk takes us by the SSE Arena, Belfast Marina and to the SS Nomadic, a sister ship that transported passengers, in Cherbourg, out to the Titanic.',
          'As we walk by the Titanic Belfast building, and onto the slipways where the Titanic and her sister ship the Olympic were built side by side - we learn about the building of the Titanic, her launch, and her fatal maiden voyage. We follow along the maritime mile to HMS Caroline, the only surviving warship from the Battle of Jutland, in World War One. We finish our tour at the Titanic Dock and Pump House, where you are welcome to join us for refreshments.'
        ],
        imgs: [{
          src: titanic, key: 'titanic'
        }
        ]
      }
    ],
    list: [
      'City Centre and Titanic walking tours meet at the front of the City Hall.',
      'Approximately 2 hours duration',
      'Covering approximately 2 miles.',
      '£15 per person (minimum cost £30 for one customer booking alone)',
      'Please wear appropriate footwear and clothing.'
    ]
  },
  {
    titles: {
      h2: 'Guided Rural Walks in County Down',
      h3: '3 hour hikes'
    },
    tours: [
      {
        title: 'Castle Ward & Strangford',
        text: [
          'Our hike takes you on the perimeter of the National Trust Castleward Estate, visiting some famous locations of filming for The Game of Thrones and Bloodlands. We follow along the shoreline, enjoying and learning about nature on the way, visit a bird hide, enjoy views across Strangford Lough, visit the 16th century Audley’s Castle, a Neolithic cairn, a mansion, and we walk through glorious woodland.',
          'There may be optional refreshment stop in the Stableyard Tearooms, or in Strangford village afterwards, depending on time of year and opening hours access.'
        ],
        imgs: [
          { src: ward, key: 'ward' }
        ],
      },
      {
        title: 'Crawfordsburn & Helens Bay',
        text: [
          'Our guided walk takes you along a beach with 400 to 500 million year old rocks, and nature in abundance. We walk through a beech lined avenue of Clandeboye Estate, home of the Blackwood family, then to the quaint old village of Crawfordsburn. We follow on into Crawfordsburn Country Park, which was the Estate of the Sharman Crawford family, through an old wooded glen and by a waterfall.',
          'A lunch stop or refreshments are optional at the end of the walk.'
        ],
        imgs: [
          { src: crawfordsburn, key: 'crawforsdburn' }
        ],
      },
      {
        title: 'Murlough National Reserve',
        text: [
          'We start our hike along a lesser trodden trail, over a 6000-year sand dune system, now owned by the National Trust. Evidence has been found here of human occupation from Neolithic, Bronze Age and Early Christian periods.',
          'We are likely to see wild ponies, and in the winter our famous migrating Brent geese. You will learn about conservation, wonderful wildlife, the woodland, and the Downshire Estate.',
          'The 4th Marquis of Downshire, of the Hill family, came to Dundrum in 1840 and built himself a summer house in 1857, Murlough House, which we walk by on our hike.',
          'We walk along a vast magnificent beach with fabulous views of our Mourne Mountains and we return along boardwalks over the sand dunes.'
        ],
        imgs: [
          { src: murlough, key: 'murlough' }
        ],
      },
      {
        title: 'Lagan Valley',
        text: [
          'Our walk takes us along the Lagan tow path, following the river in the Lagan Valley. We walk through majestic woodland, through the historic and charming linen village of Edenberry, now a conservation area. Then we head up through rolling meadows to The Giant’s Ring, a henge monument, which dates from the Neolithic period, and was built around 2700BC, meaning it predates the Egyptian pyramids! We return through the National Trust Minnowburn, to enjoy fine views from the Italian style Terrace Hill garden built in the 1930’s, before returning to the riverside and refreshments.'
        ],
        imgs: [
          { src: lagan, key: 'lagan' }
        ],
      },
    ],
    list: [
      'Reasonable to good level of fitness needed, as covering about 6 miles on trails',
      'Approximately 3 hour hikes',
      '£18 Per adult',
      '£9 Under-18',
      'Usually there will be an optional refreshment break at the end, however some of the hikes you may need to bring along a packed lunch',
      'Important - Appropriate footwear and wet weather clothing is necessary, as our climate is unpredictable. Some terain may be rocky, slippery, wet, muddy or uneven',
      'We meet at a car park meeting point - Time, date, exact location and advice on what to wear and bring will be provided in an email',
      'We will engage you in history, nature and storytelling along the way!',
      'We can also organise pick up and drop off, to and from the rural walks, at extra cost.',
      'In the future, these rural walks may be combined to make a full day excursion, with a "Down Delights" experience.'
    ]
  }
]