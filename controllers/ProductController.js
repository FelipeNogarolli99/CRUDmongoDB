const Product = require("../models/Product")
const { ObjectId } = require('mongodb')

module.exports = class ProductController{
    static async showProducts(req, res){
        const products = await Product.getProducts()

        res.render("products/all", {products})
    }

    static createProdutc(req, res){
        res.render('products/create')
    }

    static createProdutcPost(req,res){
        const name = req.body.name
        const image = req.body.image
        const price = req.body.price
        const description = req.body.description

        const product = new Product(name,image, price, description)

        product.save()

        res.redirect('/products')
    }

    static async getProducts(req, res) {
        const id = req.params.id

        // Verifica se o ID é válido antes de fazer a consulta
        if (!ObjectId.isValid(id)) {
            return res.status(400).send('ID inválido.')
        }

        const product = await Product.getProductsById(id)

        if (!product) {
            return res.status(404).send('Produto não encontrado.')
        }

        res.render('products/product', { product })
    }
    static async removeProduct(req, res){
        const id= req.params.id

        await Product.removeProductById(id)

        res.redirect('/products')
    }

    static async editProducts(req, res){
        const id = req.params.id

        const product = await Product.getProductsById(id)

        res.render("products/edit" , {product})
    }

    static async editProductsPost(req, res){
        const id = req.body.id
        const name = req.body.name
        const image = req.body.image
        const price = req.body.price 
        const description = req.body.description

        const product = new Product(name,image, price, description)

        await product.updateProduct(id)

        res.redirect('/products')
    }
}