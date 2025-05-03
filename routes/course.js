const express=require('express')
const router=express.Router()

const{
    addCourse,
    getAllCourse,
    getCourse
}=require('../controller/course')

router.post('/addCourse',addCourse)


router.get('/get',getAllCourse)

router.get('/get/:id',getCourse)

module.exports=router