const mongoose = require('mongoose')

const KeywordsSchema = new mongoose.Schema({
    keywords: {
        type: Array,
        default: []
    }
})

const Keywords = mongoose.model('Keywords', KeywordsSchema)

module.exports = Keywords