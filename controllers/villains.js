const villains = require('../villains')
const models = require('../models')

const getAllVillains = async (request, response) => {
  try {
    const villains = await models.villains.findAll()

    return response.send(villains)
  } catch (error) {
    return response.status(500).send('unable to retrieve all , please try again')
  }
}


const getVillainBySlug = (request, response) => {
  const { slug } = request.params

  const foundVillain = villains.filter((villain) => villain.slug === slug)

  return response.send(foundVillain)
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
