const express = require('express')
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

/**
 * Session Route
 */
routes.get('/session', SessionController.create)

/**
 * Ongs Route
 */
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)

/**
 * Profile Route
 */
routes.get('/profile', ProfileController.index)

/**
 * Incidents Route
 */
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;