const courseModel=require('../model/courseSchema')

const addCourse=async(req,res)=>{
    try{
        const course=await courseModel.create(req.body)
        await course.save()
        res.status(200).json({
            message:'course added successfully',
            course
        })
    }
    catch(err)
    {
        res.status(500).json({
            message:'failed to add',
            error:err.message
        })
    }
}
const getAllCourse=async(req,res)=>{
    try{
        const course=await courseModel.find()
        res.status(200).json({
            message:'course retrieved successfully',
            course
        })
    }
    catch(err)
    {
        res.status(500).json({
            message:'failed to retrieve',
            error:err.message
        })
    }
}

const getCourse=async(req,res)=>{
    try{
        const course=await courseModel.findById(req.params.id)
        res.status(200).json({
            message:'course retrieved successfully',
            course
        })
    }
    catch(err)
    {
        res.status(500).json({
            message:'failed to retrieve',
            error:err.message
        })
    }
}
module.exports={
    addCourse,
    getAllCourse,
    getCourse
}