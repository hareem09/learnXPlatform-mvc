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
        const course=await courseModel.findById(req.params.id).populate('userId','student')
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
const updateCourse=async(req,res)=>{
    try{
        const course=await courseModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        await course.save()
        res.status(200).json({
            message:'course updated successfully',
            course
        })
    }
        catch(err)
        {
            res.status(500).json({
                message:'failed to update',
                error:err.message
            })
        }
    }
    const deleteCourse=async(req,res)=>{
        try{
            const course=await courseModel.findByIdAndDelete(req.params.id)
            res.status(200).json({
                message:'course deleted successfully',
                course
            })
        }
        catch(err)
        {
            res.status(500).json({
                message:'failed to delete',
                error:err.message
            })
        }
    }
        
module.exports={
    addCourse,
    getAllCourse,
    getCourse,
    updateCourse,
    deleteCourse
}
