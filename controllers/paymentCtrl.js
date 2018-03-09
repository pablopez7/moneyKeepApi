'use strict'

const Payment = require('../models/paymentModel')

let PaymentCtrl = {}

PaymentCtrl.newPayment = (req, res) => {
    let params = req.body
    Payment.create({
            amount: params.amount,
            title: params.title,
            description: params.description,
            picture: 'imagen_de_un_ticket_de_compra',
            lat: 95245529.20,
            lng: 9959222.19
        })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

PaymentCtrl.getPayment = (req, res) => {
    res.json(req.payment)
}

PaymentCtrl.getPayments = (req, res) => {
    Payment.paginate({},{ page: req.query.page || 1, limit: 2, sort: {'_id': -1 }})
        .then(docs => {
            res.json(docs)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

PaymentCtrl.updatePayment = (req, res) => {
    let attributes = ['amount', 'title', 'description', 'picture', 'lat', 'lng']

    let paymentParams = {}

    attributes.forEach(attr => {
        if(Object.prototype.hasOwnProperty.call(req.body, attr))
        paymentParams[attr] = req.body[attr]
    })

    req.payment = Object.assign(req.payment, paymentParams)

    req.payment.save()
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

PaymentCtrl.deletePayment = (req, res) => {
    req.payment.remove()
        .then(doc => {
            res.json({})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

module.exports = PaymentCtrl