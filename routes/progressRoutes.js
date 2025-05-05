const express=require('express')
const router=express.Router()

const{
    addProgress,
    getProgress,
    updateProgress,
    deleteProgress
}=require('../controller/progressController')

router.post('/addProgress',addProgress)

router.get('/getProgress/:id',getProgress)

router.put('/updateProgress/:id',updateProgress)

router.delete('/deleteProgress/:id',deleteProgress)
module.exports=router
