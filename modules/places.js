// GET /places
router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})

app.get('/', (req, res) => {
    let places = []
    res.render('places/index', { places })
})
function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div className="col-sm-6">
          <h2>{place.name}</h2>
          <p className="text-center">
            {place.cuisines}
          </p>
          <img src={place.pic} alt={place.name}/>
          <p className="text-center">
            Located in {place.city}, {place.state}
          </p>
        </div>
      )
    })
    return (
      <Def>
        <main>
              <h1>PLACES INDEX PAGE</h1>
            <div className="row">
              {placesFormatted}
            </div>         
        </main>
      </Def>
  )
  }
  
let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: '/images/h-thai-ml-tables.png'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: '/images/coffee-cat.jpg'
    
  }]

  const router = require('express').Router()
  const places = require('../models/places.js')
  
  router.get('/', (req, res) => {
      res.render('places/index', { places })
  })
  
  // More code ...

  router.post('/', (req, res) => {
    console.log(req.body)
    if (!req.body.pic) {
      // Default image if one is not provided
      req.body.pic = 'http://placekitten.com/400/400'
    }
    if (!req.body.city) {
      req.body.city = 'Anytown'
    }
    if (!req.body.state) {
      req.body.state = 'USA'
    }
    places.push(req.body)
    res.redirect('/places')
  })
  