const ProductModel = require('../../models/mongodb/product/product');
const JWT = require('jsonwebtoken')
const JWTModule = require('../../module/JWTCheck')

exports.All = async (req, res) => {
    let Token = await JWTModule.JWTVerify(req.headers)
    if (!Token) {
        res.send(403)
    } else {
        await ProductModel.find().then(response => {
            res.send({
                message: `Successfull to get data`,
                statusCode: 200,
                results: response
            })
        }).catch(err => {
            res.send({
                message: `Failed to get data`,
                statusCode: 500,
            })
        })
    }
}


exports.Create = async (req, res) => {
    let Token = await JWTModule.JWTVerify(req.headers)
    if (!Token) {
        res.send(403)
    } else {
        const newProduct = new ProductModel({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price
        })

        await newProduct.save(newProduct).then(response => {
            res.send({
                message: `Successfull to create data`,
                statusCode: 200,
                results: response
            })
        }).catch(err => {
            res.send({
                message: `Failed to create data`,
                statusCode: 500
            })
        })
    }
}
exports.UpdateOne = async (req, res) => {
    let Token = await JWTModule.JWTVerify(req.headers)
    if (!Token) {
        res.send(403)
    } else {
        const id = req.params.id;
        await ProductModel.findByIdAndUpdate(id, req.body)
            .then((result) => {
                if (!result) {
                    res.status(404).send({
                        message: "User Not Found"
                    });
                }
                res.send({
                    message: "success update user",
                })
            })
            .catch((err) => {
                res.status(409).send({
                    message: "error update user"
                })
            })
    }
}

exports.FindOne = async (req, res) => {
    let Token = await JWTModule.JWTVerify(req.headers)
    if (!Token) {
        res.send(403)
    } else {
        await ProductModel.findOne({
            "_id": req.params.id
        }).then(response => {
            res.send({
                message: `Successfull to create data`,
                statusCode: 200,
                results: response
            })
        }).catch(err => {
            res.send({
                message: `Failed to create data`,
                statusCode: 500,
            })
        })
    }
}

exports.Delete = async (req, res) => {
    let Token = await JWTModule.JWTVerify(req.headers)
    if (!Token) {
        res.send(403)
    }else{
    if (!req.body) {
        res.send({
            message: `Failed to delete data`,
            statusCode: 400
        })
    } else {
        ProductModel.deleteOne({
            "_id": req.body.id
        }).then(response => {
            res.send({
                message: `Successfull to delete data`,
                statusCode: 200
            })
        }).catch(err => {
            res.send({
                message: `Failed to delete data`,
                statusCode: 500
            })
        })
    }
}
}