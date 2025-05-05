const express=require('express')
const router=express.Router()

const {
    addUser,
    loginUser,
    getUser,
    updateUser,
    deleteUser
}=require('../controller/userController')

router.post('/add',addUser)

router.post('/login',loginUser)

router.get('/getStudent/:id',getUser)

router.put('/updateStudent/:id',updateUser)

router.delete('/deleteStudent/:id',deleteUser)

module.exports=router
