const express = require('express')
const bodyParser = require('body-parser')
const { getAllVillains, getVillainById, villainData, saveNewVillain } = require('./controllers/villains')

const app = express()

app.get('/villains', getAllVillains)

app.get('/villains/:id', getVillainById)

app.get('/villains/:villainData', villainData)

app.post('/villains', bodyParser.json(), saveNewVillain)

app.listen(8080, () => {
  console.log('Listening on port 8080...') // eslint-disable-line no-console
})