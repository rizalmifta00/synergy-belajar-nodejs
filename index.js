const Http = require('http')
const fs = require("fs")


const onRequest = (request, response) => {
    response.writeHead(200,{"Content-Type":"text/html"})
    fs.readFile("./index.html",null,(error , data)=> {
        if(error){
            response.writeHead(404)
            response.write("file not found")
        }else{
            response.write(data)
        }
        response.end()
    })
}


const Port= 8888
Http.createServer(onRequest).listen(Port)


const data = {
    statusCode:200,
    name: "Rizal Miftakhul Rohman",
    age : "20"
}
const onRequest2 = (request,response)=>{
    response.writeHead(200,{"Content-Type":"application.json"})
    response.end(JSON.stringify(data))
}

Http.createServer(onRequest2).listen(5000)
