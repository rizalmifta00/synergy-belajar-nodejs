const express = require('express');
const Routes = express.Router();

const UserAPIController = require('../controllers/user/user')
const ProductControllers = require('../controllers/products/productView')
const ProductAPIControllers = require('../controllers/products/product')



Routes.get('/',ProductControllers.mainProduct)
Routes.post('/product/api/create', ProductAPIControllers.Create)
Routes.get('/product/api/all', ProductAPIControllers.All)


Routes.get('/user/api/all',UserAPIController.All)
Routes.post('/user/api/create',UserAPIController.Create)
Routes.put('/user/api/update/:id',UserAPIController.update)
Routes.get('/user/api/get/:id',UserAPIController.findOne)
Routes.delete('/user/api/delete/:id',UserAPIController.Delete)

module.exports = Routes
