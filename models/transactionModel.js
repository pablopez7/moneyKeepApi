'use strict'

const mongoose = require('mongoose')

let TransactionSchema = new mongoose.Schema({
    amount: Number,
    title: String,
    description: String,
    picture: String,
    lat: Number,
    lng: Number,
    signupDate: { type: Date, default: Date.now() }
})

let Transaction = mongoose.model('Transaction', TransactionSchema)

module.exports = Transaction