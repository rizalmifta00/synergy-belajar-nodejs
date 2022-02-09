const express = require('express');
const Routes = express.Router();

const UserAPIController = require('../controllers/user/user')
const ProductControllers = require('../controllers/products/productView')
const ProductAPIControllers = require('../controllers/products/product');


Routes.get('/login', (req, res) => { res.render('login')})
Routes.post('/login-post',UserAPIController.LoginPost)

Routes.get('/',ProductControllers.mainProduct)
Routes.post('/api/product', ProductAPIControllers.Create)
Routes.get('/api/product', ProductAPIControllers.All)


Routes.get('/api/user',UserAPIController.All)
Routes.post('api/user',UserAPIController.Create)
Routes.put('/api/user/:id',UserAPIController.update)
Routes.get('/api/user/:id',UserAPIController.findOne)
Routes.delete('/api/user/:id',UserAPIController.Delete)
Routes.post('/login',UserAPIController.Login)

module.exports = Routes
