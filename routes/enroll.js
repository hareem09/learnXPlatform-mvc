const express=require('express')
const router=express.Router()

const{
   addEnroll,
   getEnroll
}=require('../controller/enroll')

router.post('/addEnroll',addEnroll)

router.get('/getEnroll/:id',getEnroll)

module.exports=router