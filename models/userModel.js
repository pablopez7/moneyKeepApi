'use strict'

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    name: String,
    admin: {
        type: Boolean,
        default: false
    },
    picture: String,
    signupDate: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('User', UserSchema)