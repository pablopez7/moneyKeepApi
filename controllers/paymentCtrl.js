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

PaymentCtrl.getPayments = (req, res) => {
    Payment.find({})
        .then(docs => {
            res.json(docs)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

PaymentCtrl.getPayment = (req, res) => {
    Payment.findById(req.params.id)
        .then(doc => {
            res.json(doc)
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

    Payment.findByIdAndUpdate(req.params.id, paymentParams, { new: true })
        .then(doc => {
            res.json(doc)
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}

PaymentCtrl.deletePayment = (req, res) => {
    Payment.findByIdAndRemove(req.params.id)
        .then(doc => {
            res.json({})
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}


module.exports = PaymentCtrl