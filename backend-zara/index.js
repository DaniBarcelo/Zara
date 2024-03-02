const express = require('express')
const cors = require('cors');
const routes = require('./routes/routes')
const path = require('path')

const app = express()

app.use(cors());
app.options('*', cors());

const PORT = 3001

app.use('/', routes)
app.use(express.static(path.join(__dirname, '/public')))

app.listen(PORT, () => {
  console.log(`app is running on PORT ${PORT}`)
})
module.exports = app