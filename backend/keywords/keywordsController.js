const Keywords = require('./keywordsModel')

const addKeywords = async (req, res) => {
    let keywordsModel = new Keywords(req.body)
    try {
        keywordsModel.keywords.push(req.body.keywords)
        let savedKeywords = await keywordsModel.save()
        res.json(savedKeywords)
    } catch(e) {
        res.status(400).json(e)
    }
}

const getAllKeywords = async (req, res) => {
    try {
        allKeywords = await Keywords.find({})
        res.json(allKeywords)
    } catch(e) {
        res.status(400).json(e)
    }
}

module.exports = {
    addKeywords,
    getAllKeywords
}