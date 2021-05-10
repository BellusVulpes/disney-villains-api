const villains = require('../villains')
const models = require('../models')

const getAllVillains = async (request, response) => {
  models.villains.findAll().then(villains => {
    return response.send(villains)
  })
}


const getVillainBySlug = (request, response) => {
  const { slug } = request.params

  const foundVillain = villains.filter((villain) => villain.slug === slug)

  return response.send(foundVillain)
}


const saveNewVillain = (request, response) => {
  const {
    name, movie, slug
  } = request.body

  if (!name || !movie || !slug) {
    return response
      .status(400)
      .send('The following fields are required: name, movie, slug')
  }

  const newVillain = {
    name, movie, slug
  }

  villains.push(newVillain)

  return response.status(201).send(newVillain)
}

module.exports = { getAllVillains, getVillainBySlug, saveNewVillain }
