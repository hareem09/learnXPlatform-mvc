const express=require('express')
const router=express.Router()

const{
    addProgress,
    getProgress
}=require('../controller/progress')

router.post('/addProgress',addProgress)

router.get('/getProgress/:id',getProgress)

module.exports=router
