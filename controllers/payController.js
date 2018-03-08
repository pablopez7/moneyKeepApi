'use strict'

const Payment = require('../models/paymentModel')

let PaymentCtrl = {}

PaymentCtrl.create = (req, res) => {
    let params = req.body
    Payment.create({
            amount: params.amount,
            title: params.title,
            description: params.description,
            picture: 'imagen_para_compra',
            lat: 6516160.654,
            lng: 68438.19
        })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

PaymentCtrl.getPayments = (req, res) => {
    let params = req.body
    Payment.find({})
        .then(docs => {
            res.json(docs)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

module.exports = PaymentCtrl