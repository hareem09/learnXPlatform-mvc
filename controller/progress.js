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
        const progress=await progressModel.findById(req.params.id).populate('classId','title description quiz').populate('studentId','student')
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
module.exports={
    addProgress,
    getProgress
}
