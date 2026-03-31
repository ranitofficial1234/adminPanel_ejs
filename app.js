const express = require('express')
const path = require('path')

const app = express()

//view engine
app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

const pathToActivePage = {
  '/': 'dashboard',
  '/button': 'button',
  '/cards': 'cards',
  '/charts': 'charts',
  '/tables': 'tables',
  '/blank': 'blank',
  '/notfound': 'notfound',
  '/utilities-color': 'utilities-color',
  '/utilities-border': 'utilities-border',
  '/utilities-animation': 'utilities-animation',
  '/utilities-other': 'utilities-other',
  '/login': 'login',
  '/register': 'register',
  '/forgot-password': 'forgot-password',
}

app.use((req, res, next) => {
  res.locals.activePage = pathToActivePage[req.path] || ''
  next()
})

const indexRoute=require('./app/routes/indexRoutes')
app.use(indexRoute)

//static
app.use(express.static(path.join(__dirname,'public')))

app.listen(5000,()=>{
    console.log('server running')
})