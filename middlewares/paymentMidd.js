'use strict'

const Payment = require('../models/paymentModel')

let PaymentMidd = {}

PaymentMidd.find = (req, res, next) => {
    Payment.findById(req.params.id)
        .then(payment => {
            req.payment = payment
            next()
        })
        .catch(err => {
            console.log(err)
            next(err)
        })
}

module.exports = PaymentMidd