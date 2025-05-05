const userModel=require('../model/userSchema')

const addUser= async (req,res)=>{
  try{
    const user=await userModel.create(req.body)
    await user.save()
    res.status(200).json({message:'user is added successfully' ,user})
  }
  catch(error){
    res.status(500).json({
        message:'failed to add user',
        error: error.message
    })
  }
}

const loginUser= async (req,res)=>{
    try{
        const login=await userModel.create(req.body)
        await login.save()
        res.status(200).json({message:'login is done successfully' ,login})  
    }
    catch(err){
        res.status(500).json({
            message:'failed to login',
            error: err.message
        })
      }
}
const getUser=async(req,res)=>{
    try{
        const user=await userModel.findById(req.params.id)
        res.status(200).json({
        message:'retrieved successfully',
        user
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
  
  const updateUser=async(req,res)=>{
    try{
        const user=await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        await user.save()
        res.status(200).json({
            message:'user updated successfully',
            user
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
      const deleteUser=async(req,res)=>{
        try{
            const user=await userModel.findByIdAndDelete(req.params.id)
            res.status(200).json({
                message:'user deleted successfully',
                student
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
    addUser,
    loginUser,
    getUser,
    updateUser,
    deleteUser
}
