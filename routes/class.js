const express=require('express')
const router=express.Router()

const{
    addContent,
    updateContent
}=require('../controller/class')

router.post('/add',addContent)

router.put('/update/:id',updateContent)

module.exports=router