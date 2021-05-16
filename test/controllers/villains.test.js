/* eslint-disable max-len */
const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const { before, afterEach, describe, it } = require('mocha')
const { villainsList, singleVillain } = require('../mocks/villains')
const { getAllVillains, getVillainBySlug, saveNewVillain } = require('../../controllers/villains')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - villains', () => {
  let stubbedFindOne

  before(() => {
    stubbedFindOne = sinon.stub(models.villains, 'findOne')
  })

  afterEach(() => {
    stubbedFindOne.resetBehavior()
  })

  describe('getAllVillains', () => {
    it('retrieves a list of villains from the database and calls response.send() with the list', async () => {
      const stubbedFindAll = sinon.stub(models.villains, 'findAll').returns(villainsList)
      const stubbedSend = sinon.stub()
      const response = { send: stubbedSend }

      await getAllVillains({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(villainsList)
    })
  })

  describe('getVillainBySlug', () => {
    it('retrieves the villain associated with the provided slug from the database and calls response.send with it', async () => {
      stubbedFindOne.returns(singleVillain)
      const request = { params: { slug: 'gaston' } }
      const stubbedSend = sinon.stub()
      const response = { send: stubbedSend }

      await getVillainBySlug(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { slug: 'gaston' } })
      expect(stubbedSend).to.have.been.calledWith(singleVillain)
    })

    it('returns a 404 when no hero is found', async () => {
      stubbedFindOne.returns(null)
      const request = { params: { slug: 'not-found' } }
      const stubbedSendStatus = sinon.stub()
      const response = { sendStatus: stubbedSendStatus }

      await getVillainBySlug(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { slug: 'not-found' } })
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })
  })

  describe('saveNewVillain', () => {
    it('accepts new villain details and saves them as a new villain, returning the saved record with a 201 status', async () => {
      const request = { body: singleVillain }
      const stubbedSend = sinon.stub()
      const stubbedStatus = sinon.stub().returns({ send: stubbedSend })
      const response = { status: stubbedStatus }
      const stubbedCreate = sinon.stub(models.villains, 'create').returns(singleVillain)

      await saveNewVillain(request, response)

      expect(stubbedCreate).to.have.been.calledWith(singleVillain)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedSend).to.have.been.calledWith(singleVillain)
    })
  })
})
