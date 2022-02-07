const UserModel = require('../../models/mongodb/user/user');

exports.All = (req, res) => {
    UserModel.find().then(response => {
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
    const newUser = new UserModel({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password,
        fullname : req.body.fullname,
        age : req.body.age,
        description : req.body.description
    })

    newUser.save(newUser).then(response => {
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
exports.update = (req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndUpdate(id, req.body)
    .then((result)=>{
        if(!result){
            res.status(404).send({
                message:"User Not Found"
            });
        }
        res.send({
            message:"success update user",
        })
    })
    .catch((err)=>{
        res.status(409).send({
            message:"error update user"
        })
    })
};
exports.findOne = (req,res)=>{
    const id = req.params.id;

    UserModel.findById(id)
    .then((result)=>{
        res.send(result);
    })
    .catch((err)=>{
        res.status(409).send({
            message:err.message
        })
    })
}

exports.Delete =(req,res)=>{
    const id = req.params.id;

    UserModel.findByIdAndRemove(id)
    .then((result)=>{
        if(!result){
            res.status(404).send({
                message:"User not found"
            })
        }
        res.send({
            message:"Success delete user"
        })
    }).catch((err)=> {
        res.status(409).send({
            message:err.message,
        })
    })
}
exports.DeleteOne =  (req,res)=>{
    if( !req.body){
        res.send({
            message: "failed to delete data",
            statusCode: 400
        })
    }
    UserModel.deleteOne({"_id":req.body.id})
    .then(response =>{
        res.send({
            message:"Success delete data",
            statusCode:200
        }).catch(err=>{
            res.send({
                message:"failed delete data"
            })
        })
    })
}