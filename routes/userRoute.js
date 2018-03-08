'use strict'

const express = require('express')
const UserCtrl = require('../controllers/userController')
const auth = require('../middlewares/auth')
const userValidation = require('../validations/userValidation')

const api = express.Router()

api.post('/user',
                userValidation.getCheckRulesUser,
                userValidation.validatePostRequestUser,
                UserCtrl.saveUser)

api.post('/login', UserCtrl.loginUser)

api.get('/user/:id', auth, UserCtrl.getUser)

api.get('/users/:page?', UserCtrl.getUsers)

module.exports = api