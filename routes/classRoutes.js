const express=require('express')
const router=express.Router()

const{
    addContent,
    updateContent,
    getContent,
    deleteContent
}=require('../controller/classController')

router.post('/add',addContent)

router.put('/update/:id',updateContent)

router.get('/get/:id',getContent)

router.delete('/delete/:id',deleteContent)
module.exports=router
