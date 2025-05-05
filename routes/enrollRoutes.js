const express=require('express')
const router=express.Router()

const{
   addEnroll,
   getEnroll,
   updateEnroll,
   deleteEnroll
}=require('../controller/enrollController')

router.post('/addEnroll',addEnroll)

router.get('/getEnroll/:id',getEnroll)

router.put('/updateEnroll/:id',updateEnroll)

router.delete('/deleteEnroll/:id',deleteEnroll)

module.exports=router
