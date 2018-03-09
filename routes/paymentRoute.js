'use strict'

const express = require('express')
const PaymentCtrl = require('../controllers/paymentCtrl')

const api = express.Router()

api.post('/payment', PaymentCtrl.newPayment)

api.get('/payments', PaymentCtrl.getPayments)

api.get('/payment/:id', PaymentCtrl.getPayment)

api.put('/payment/:id', PaymentCtrl.updatePayment)

api.delete('/payment/:id', PaymentCtrl.deletePayment)

module.exports = api