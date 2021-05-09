const express = require('express')
const bodyParser = require('body-parser')
const {  } = require('./controllers/villains')

const app = express()

app.get('/', temp)

app.get('/:id', temp)

app.post('/', bodyParser.json(), temp)

app.listen(8080, () => {
  console.log('Listening on port 8080...') // eslint-disable-line no-console
})