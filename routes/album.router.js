import express from "express"
import AlbumModel from "../models/album.model.js"
import PurchaseModel from "../models/purchase.model.js"


const albumRoute = express.Router()

// Iteração 2.1 - POST

albumRoute.post("/creat-album", async (req, res) =>{
    try {

        const newAlbum = await AlbumModel.create(req.body)
        return res.status(201).json(newAlbum)        
    } catch (error) {
        console.log(error)
        return response.status(500).json({msg: 'algo deu errado!'})
        
    }
})

