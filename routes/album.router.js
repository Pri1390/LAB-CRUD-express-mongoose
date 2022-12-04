import express from "express"
import AlbumModel from "../models/album.model.js"



const albumRoute = express.Router()

// Iteração 2.1 - POST

albumRoute.post("/create-album", async (req, res) =>{
    try {

        const newAlbum = await AlbumModel.create(req.body)
        return res.status(200).json(newAlbum)        
    } catch (error) {
        console.log(error)
        return response.status(400).json({msg: 'algo deu errado!'})
        
    }
})

// 2.2 - GET

albumRoute.get("/all", async (req, res) => {
    try {
        const allAlbums = await AlbumModel.find()
        return res.status(200).json(allAlbums)        
    } catch (error) {
        console.log(error)
        return response.status(400).json({msg: 'algo deu errado!'})
        
    }
})

// 2.3 GET BY ID

albumRoute.get("/:albumId", async ( req, res) => {
    try {
        const {albumId} = req.params
        const albumById = await AlbumModel.findById(albumId)
        return res.status(200).json(albumById)        
    } catch (error) {
        console.log(error)
        return response.status(400).json({msg: 'algo deu errado!'})
        
    }
})

// 2.4 - PUT

albumRoute.put("update/:albumId", async (req, res) =>{
    try {

        const {albumId} = req.params
        const updatedAlbum = await AlbumModel.findByIdAndUpdate(
            { _id: albumId },
            {...req.body},
            {new:true, runValidators: true}
        )
        return res.status(200).json(updatedAlbum)        
    } catch (error) {
        console.log(error)
        return response.status(400).json({msg: 'algo deu errado!'})
        
    }
})


  // 2.5 - DELETE

  albumRoute.delete("/delete/:albumId", async(req, res) => {
    try {
        const {albumId} = req.params
        const deletedAlbum = await AlbumModel.findByIdAndDelete(albumId)
        return res.status(200).json(deletedAlbum)        
    } catch (error) {
        console.log(error)
        return response.status(400).json({msg: 'algo deu errado!'})
        
    }
  })

  export default albumRoute