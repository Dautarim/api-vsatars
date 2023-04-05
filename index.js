const express = require("express")
const app = express()

const porta = process.env.PORT || 3000
const atrizPath = require("./src/stars/atrizes.json")

app.get("/stars", (req,res)=>{

    return res.json(atrizPath)

})

app.listen(porta, ()=>
{
    console.log("Online...")
})