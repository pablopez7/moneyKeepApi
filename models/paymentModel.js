'use strict'

const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
const uploader = require('./uploaderModel')

let PaymentSchema = new mongoose.Schema({
    amount: Number,
    title: String,
    description: String,
    avatarImage: String,
    lat: Number,
    lng: Number,
    signupDate: { type: Date, default: Date.now() }
})

PaymentSchema.method.updateAvatar = (path) => {
    return uploader(path)
        .then(secure_url = this.saveAvatarUrl(secure_url))
}

PaymentSchema.method.updateAvatar = (secure_url) => {
    this.avatarImage = secure_url
    return this.save()
}

PaymentSchema.plugin(mongoosePaginate)

let Payment = mongoose.model('Payment', PaymentSchema)

module.exports = Payment