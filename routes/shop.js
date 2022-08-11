const {Router} = require('express')

const router = Router()

const shopControllers = require('../controllers/shop')

router.get('/',shopControllers.getHome)

router.get('/cart',shopControllers.getCart)

router.get('/product-detail',shopControllers.getProductDetail)

router.get('/products',shopControllers.getProducts)

module.exports = router