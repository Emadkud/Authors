const express = require('express')
const app = express()
port = 5000


// const authors = require('/routes')


app.get("/" ,(req,res) => {
    res.send("Authors API")
   
}) 

// app.use('authors' , authorsroutes)


app.listen(port , () => {
    console.log(`server is running on port ${port}`)
})