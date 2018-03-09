'use strict'

const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

let PaymentSchema = new mongoose.Schema({
    amount: Number,
    title: String,
    description: String,
    picture: String,
    lat: Number,
    lng: Number,
    signupDate: { type: Date, default: Date.now() }
})

PaymentSchema.plugin(mongoosePaginate)

let Payment = mongoose.model('Payment', PaymentSchema)

module.exports = Payment