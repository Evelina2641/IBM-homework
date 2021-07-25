const router = require('express').Router()

const KeywordsController = require('../keywords/keywordsController')
const ArticlesController = require('../articles/articlesController')

router.post('/keywords', KeywordsController.addKeywords)
router.get('/all-keywords', KeywordsController.getAllKeywords)
router.post('/articles', ArticlesController.addArticleInfo)
router.get('/all-articles', ArticlesController.getAllArticlesInfo)

module.exports = router