'use strict'

const express = require('express')

//Controller
const PaymentCtrl = require('../controllers/paymentCtrl')

//Middlewares
const PaymentMidd = require('../middlewares/paymentMidd')
const MulterMidd = require('../middlewares/uploadMidd')

const api = express.Router()

api.post('/payment',
        MulterMidd.upload(),
        PaymentCtrl.newPayment,
        PaymentCtrl.savePicture
    )

api.get('/payments', PaymentCtrl.getPayments)

api.get('/payment/:id', PaymentMidd.find, PaymentCtrl.getPayment)

api.put('/payment/:id', PaymentMidd.find, PaymentCtrl.updatePayment)

api.delete('/payment/:id', PaymentMidd.find, PaymentCtrl.deletePayment)

module.exports = api