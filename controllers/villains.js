const villains = require('../villains')
const models = require('../models')

const getAllVillains = async (request, response) => {
  try {
    const villains = await models.villains.findAll()

    return response.send(villains)
  } catch (error) {
    return response.status(500).send('unable to retrieve all villains, please try again')
  }
}


const getVillainBySlug = async (request, response) => {
  try {
    const { slug } = request.params

    const matchingVillain = await models.villains.findOne({ where: { slug } })

    return matchingVillain
      ? response.send(matchingVillain)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('unable to retrieve villain, please try again')
  }
}

const saveNewVillain = async (request, response) => {
  const {
    name, movie, slug
  } = request.body

  if (!name || !movie || !slug) {
    return response
      .status(400)
      .send('The following fields are required: name, movie, slug')
  }

  const newVillain = await models.villains.create({
    name, movie, slug
  })

  return response.status(201).send(newVillain)
}

module.exports = { getAllVillains, getVillainBySlug, saveNewVillain }
