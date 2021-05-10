const Sequelize = require('sequelize')
const VillainsModel = require('./villains')

const connection = new Sequelize('villains', 'DickDastardly', 'Muttl3y!', {
  host: 'localhost', dialect: 'mysql',
})

const villains = VillainsModel(connection, Sequelize)

module.exports = { villains }
