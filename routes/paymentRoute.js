'use strict'

const express = require('express')
const PaymentCtrl = require('../controllers/paymentCtrl')
const PaymentMidd = require('../middlewares/paymentMidd')

const api = express.Router()

api.post('/payment', PaymentCtrl.newPayment)

api.get('/payments', PaymentCtrl.getPayments)

api.get('/payment/:id', PaymentMidd.find, PaymentCtrl.getPayment)

api.put('/payment/:id', PaymentMidd.find, PaymentCtrl.updatePayment)

api.delete('/payment/:id', PaymentMidd.find, PaymentCtrl.deletePayment)

module.exports = api