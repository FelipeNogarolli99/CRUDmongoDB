const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

router.get('/' , ProductController.showProducts)
router.get('/create' , ProductController.createProdutc)
router.post('/create' , ProductController.createProdutcPost)
router.get('/:id' , ProductController.getProducts)
router.post('/remove/:id' , ProductController.removeProduct)
router.get('/edit/:id' , ProductController.editProducts)
router.post('/edit' , ProductController.editProductsPost)

module.exports = router