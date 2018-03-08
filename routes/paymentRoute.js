'use strict'

const express = require('express')
const PayCtrl = require('../controllers/paymentCtrl')

const api = express.Router()

api.post('/payment', PayCtrl.create)

api.get('/payments', PayCtrl.getPayments)

api.get('/payment/:id', PayCtrl.getPayment)

module.exports = api