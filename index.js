require('dotenv').config()
const exoress = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.send('error404')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)

const router = require('express').Router()

router.get('/', (req, res) => {
    res.send('GET / places')
})
app.use(express.urlencoded({ extended: true }))

module.exports = router