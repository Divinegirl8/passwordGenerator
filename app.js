require('dotenv').config()
const express  = require('express')
const app = express()
// const dbUrl = process.env.MONGO_URI;
const port = 4500;
const NotFound = require("./features/middleware/NotFound");
const router = require("./features/router/router")

app.use(express.json())
app.use('/api/v1',router)
app.use(NotFound)


try{
    app.listen(port,()=>{
        console.log(`app is listening at port ${port}`)
    })
}catch(error){console.log(error)}