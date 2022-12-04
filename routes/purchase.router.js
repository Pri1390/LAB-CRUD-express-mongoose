import express, { Router } from "express"
import PurchaseModel from "../models/purchase.model.js"


const purchaseRoute = express.Router()

// 3.1 POST

purchaseRoute.post("/create-purchase/:albumId", async( req, res) =>{
    try {
        const { albumId } = req.params;
        const newPurchase = await PurchaseModel.create({
            ...req.body,
            album: albumId,
          });
          console.log(newPurchase);
      
          return res.status(201).json(newPurchase);        
    } catch (error) {
        console.log(error)
        return response.status(400).json({msg: 'algo deu errado!'})
        
    }
})


// 3.2 GET BY ID

purchaseRoute.get("/:purshaseId", async (req, res) => {
    try {
        const { purshaseId } = req.params;
        console.log(purshaseId);
    
        const purchase = await Purchase.findById(purchaseId).populate('album')
        return res.status(200).json(purchase)    
        
    } catch (error) {
        console.log(error)
        return response.status(400).json({msg: 'algo deu errado!'})
        
    }
})

export default purchaseRoute