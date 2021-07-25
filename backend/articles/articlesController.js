const Articles = require('./articlesModel')

const addArticleInfo = async (req, res) => {
    let articleModel =  new Articles(req.body)
    try {
        let savedArticleInfo = await articleModel.save()
        res.json(savedArticleInfo)
    } catch(e) {
        res.status(400).json(e)
    }
}

const getAllArticlesInfo = async (req, res) => {
    try {
        allArticles = await Articles.find({})
        res.json(allArticles)
    } catch(e) {
        res.status(400).json(e)
    }
}

module.exports = {
    addArticleInfo,
    getAllArticlesInfo
}