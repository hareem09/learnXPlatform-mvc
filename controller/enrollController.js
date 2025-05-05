const enrollModel=require('../model/enrollSchema')

const addEnroll=async(req,res)=>{
    try{
        const enroll=await enrollModel.create(req.body)
        await enroll.save()
        res.status(200).json({
            message:'enrolled successfully',
            enroll
        })
    }
    catch(err)
    {
        res.status(500).json({
            message:'failed',
            error:err.message
        })
    }
}

const getEnroll=async(req,res)=>{
    try{
        const enroll=await enrollModel.findById(req.params.id).populate([
            {
            path:'courseId',
            select:'course teacher'
            },
            {
            path:'studentId',
            select:'student' 
            }
        ])
    res.status(200).json({
        message:'retrieved successfully',
        enroll
    })
    }
    catch(err)
    {
        res.status(500).json({
            message:'failed',
            error:err.message
        })
    }
}
const updateEnroll=async(req,res)=>{
    try{
        const enroll=await enrollModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        await enroll.save()
        res.status(200).json({
            message:'enrollment updated successfully',
            enroll
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
    const deleteEnroll=async(req,res)=>{
        try{
            const enroll=await enrollModel.findByIdAndDelete(req.params.id)
            res.status(200).json({
                message:'enrollment deleted successfully',
                enroll
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
    addEnroll,
    getEnroll,
    updateEnroll,
    deleteEnroll
}
