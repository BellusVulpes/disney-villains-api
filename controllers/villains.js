const villains = require('../villains')

const getAllVillains = (request, response) => {
  return response.send(villains)
}

const getVillainById = (request, response) => {
  const { id } = request.params

  const matchingVillains = villains.find((villain) => villain.id === parseInt(id))

  return matchingVillains
    ? response.send(matchingVillains)
    : response.sendStatus(404)
}

const getNextId = () => {
  const lastId = villains.reduce((acc, villain) => {
    return villain.id > acc ? villain.id : acc
  }, 0)

  return lastId + 1
}

const villainData = (request, response) => {
  const { villainData } = request.params

  const findMonster = villains.filter((villain) => villain.name.toLowerCase().includes(villainData) ||
    villain.slug.toString().toLowerCase().includes(villainData))

  return response.send(findMonster)
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
    name, movie, slug, id: getNextId()
  }

  villains.push(newVillain)

  return response.status(201).send(newVillain)
}

module.exports = { getAllVillains, getVillainById, villainData, saveNewVillain }
