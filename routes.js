import express from "express"

const routes = express.Router()

let lista = ["agua","fogo","terra","ar"]

routes.get("/nomes/:nome", (req,res)=>{
   const {nome} = req.params
    if(nome == lista.find(item => item === nome)){
        return res.status(200).json(`${nome} esta na lista`)
    }
    else{ 
        return res.status(200).json(`${nome} nao encontrado`)
    }
    return res.status(200).json(`${nome} nao encontrado`)


})

export default routes