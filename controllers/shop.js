exports.getHome = (req,res,next) => {
    res.render('shop/home.ejs')
}

exports.getProducts = (req,res,next) => {
    res.render('shop/products.ejs')
}

exports.getCart = (req,res,next) => {
    res.render('shop/cart.ejs')
}

exports.getProductDetail = (req,res,next) => {
    res.render('shop/product-detail.ejs')
}