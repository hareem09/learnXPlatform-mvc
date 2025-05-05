const classModel=require('../model/classSchema')

const addContent=async(req,res)=>{
    try{
        const content=await classModel.create(req.body)
        await content.save()
        res.status(200).json({
            message:'course added successfully',
            content
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

const getContent=async(req,res)=>{
    try{
        const content=await classModel.findById(req.params.id)
        res.status(200).json({
            message:'course fetched successfully',
            content
        })
    }
    catch(err)
    {
        res.status(500).json({
            message:'failed to fetch',
            error:err.message
        })
    }
}
const updateContent=async(req,res)=>{
    try{
        const content=await classModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        await content.save()
        res.status(200).json({
            message:'course updated successfully',
            content
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
    const deleteContent=async(req,res)=>{
        try{
            const content=await classModel.findByIdAndDelete(req.params.id)
            res.status(200).json({
                message:'course deleted successfully',
                content
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
    addContent,
    getContent,
    updateContent,
    deleteContent
}
