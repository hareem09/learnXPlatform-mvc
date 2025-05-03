const enrollModel=require('../model/enrollSchema')

const addEnroll=async(req,res)=>{
    try{
        const enroll=await enrollModel.create(req.body)
        await enroll.save()
        res.status(200).json({
            message:'progress is added',
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
        const enroll=await enrollModel.findById(req.params.id)
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
module.exports={
    addEnroll,
    getEnroll
}