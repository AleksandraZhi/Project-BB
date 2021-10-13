const express = require('express')
const axios = require('axios')
const loginController = require('../controllers/loginController')
const userController = require('../controllers/userController')

const router = express.Router()

router
	.get('/login', (req, res) => {
		res.render('login')
	})
	.post('/login', loginController.authCheck)

router.get('/user', userController.policyPage)

module.exports = router
