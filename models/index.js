const Sequelize = require('sequelize')
const VillainsModel = require('./villains')

const connection = new Sequelize('villains', {
  host: 'localhost', dialect: 'mysql',
})

const Teams = VillainsModel(connection, Sequelize)

module.exports = { Teams }
