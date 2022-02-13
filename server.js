const express = require('express')
const bodyParser = require('body-Parser')
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()

//for payload to large error
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }))
app.use(express.json())

// for cross origin error
app.use(cors())

// connect database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

// Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/posts', require('./routes/posts'))

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  )
}

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`server started on port ${PORT}`))
