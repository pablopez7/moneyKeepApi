'use strict'

const upload = require('../config/upload')

let MulterMidd = {}

MulterMidd.upload = () => {
    return upload.fields([
        { name: 'avatar', maxCount: 1 },
        { name: 'cover', maxCount: 1 }
    ])
}

module.exports = MulterMidd