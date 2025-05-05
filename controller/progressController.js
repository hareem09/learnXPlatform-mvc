const progressModel=require('../model/progressSchema')

const addProgress=async(req,res)=>{
    try{
        const progress=await progressModel.create(req.body)
        await progress.save()
        res.status(200).json({
            message:'progress is added',
            progress
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

const getProgress=async(req,res)=>{
    try{
        const progress=await progressModel.findById(req.params.id).populate([
           { 
            path:'classId',
            select:'title description quiz'
           },
          {
            path:'studentId',
            select:'student'
           }
        ])
    res.status(200).json({
        message:'retrieved successfully',
        progress
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
const updateProgress=async(req,res)=>{
    try{
        const progress=await progressModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        await progress.save()
        res.status(200).json({
            message:'progress updated successfully',
            progress
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
    const deleteProgress=async(req,res)=>{
        try{
            const progress=await progressModel.findByIdAndDelete(req.params.id)
            res.status(200).json({
                message:'progress deleted successfully',
                progress
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
    addProgress,
    getProgress,
    updateProgress,
    deleteProgress
}
