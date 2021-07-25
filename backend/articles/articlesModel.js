const mongoose = require('mongoose')

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    date: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    }
})

const Articles = mongoose.model('Articles', ArticleSchema)

module.exports = Articles