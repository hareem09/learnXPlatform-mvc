const express=require('express')
const router=express.Router()

const{
    addCourse,
    getAllCourse,
    getCourse,
    updateCourse,
    deleteCourse
}=require('../controller/courseController')

router.post('/addCourse',addCourse)


router.get('/get',getAllCourse)

router.get('/get/:id',getCourse)

router.put('/update/:id',updateCourse)

router.delete('/delete/:id',deleteCourse)

module.exports=router
