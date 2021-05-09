const VillainsModel = (connection, Sequelize) => connection.define('villains', {
  id: { type: Sequelize.INTEGER, autoIncrement: true },
  name: { type: Sequelize.STRING },
  movie: { type: Sequelize.STRING },
  slug: { type: Sequelize.STRING, primaryKey: true},
  createdAt: { type: DATETIME DEFAULT NOW() },
  updatedAt: { type: DATETIME DEFAULT NOW() ON UPDATE NOW() },
  deletedAt: { type: DATETIME }
})

module.exports = VillainsModel
