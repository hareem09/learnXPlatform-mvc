const express=require('express')
const router=express.Router()

const {
    addStudent,
    loginStudent
}=require('../controller/student')

router.post('/add',addStudent)

router.post('/login',loginStudent)

module.exports=router