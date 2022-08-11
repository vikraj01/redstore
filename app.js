const express = require('express')
const path = require('path')










const app = express()
app.set('view engine','ejs')
app.set('views','views')
app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'public')))


// #routes configuration
const shopRoutes = require('./routes/shop')
app.use(shopRoutes)


app.use((req,res,next) => {
    res.render('404.ejs')
})

app.listen(8888,() => {
    console.log('App is started on http://localhost:8888')
})