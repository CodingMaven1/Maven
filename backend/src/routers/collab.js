const express = require("express")
const router = new express.Router()
const Collab = require('../models/collab')
const collabController = require('../controllers/collab-controller')
const auth = require('../middleware/auth')

router.post('/createcollab',auth, collabController.CreateCollab)

router.get('/getusercollab',auth, collabController.GetUserCollab)

router.get('/getallcollab', collabController.GetAllCollab)

module.exports = router