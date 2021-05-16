const VillainsModel = (connection, Sequelize) => connection.define('villains', {
  id: { type: Sequelize.INTEGER, autoIncrement: true },
  name: { type: Sequelize.STRING },
  movie: { type: Sequelize.STRING },
  slug: { type: Sequelize.STRING, primaryKey: true },
}, { paranoid: true })


module.exports = VillainsModel
