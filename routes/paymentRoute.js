'use strict'

const express = require('express')
const PayCtrl = require('../controllers/payController')

const api = express.Router()

api.post('/pay', PayCtrl.create)


api.get('/payments', PayCtrl.getPayments)

module.exports = api