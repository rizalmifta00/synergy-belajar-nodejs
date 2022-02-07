const ProductModel = require('../../models/mongodb/product/product');

exports.All = (req, res) => {
    ProductModel.find().then(response => {
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

exports.Create = (req, res) => {
    // Create / Insert New Schema DB
    const newProduct = new ProductModel({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price
    })

    newProduct.save(newProduct).then(response => {
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
exports.UpdateOne = (req,res)=>{

}

exports.FindOne = (req, res) => {
    ProductModel.findOne({ "_id": req.params.id }).then(response => {
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

exports.Delete = (req, res) => {
    if ( !req.body ) {
        res.send({
            message: `Failed to delete data`,
            statusCode: 400
        })
    } else {
        ProductModel.deleteOne({ "_id": req.body.id }).then(response => {
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

