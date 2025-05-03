const studentModel=require('../model/studentSchema')

const addStudent= async (req,res)=>{
  try{
    const student=await studentModel.create(req.body)
    await student.save()
    res.status(200).json({message:'student is added successfully' ,student})
  }
  catch(error){
    res.status(500).json({
        message:'failed to add student',
        error: error.message
    })
  }
}

const loginStudent= async (req,res)=>{
    try{
        const login=await studentModel.create(req.body)
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

module.exports={
    addStudent,
    loginStudent
}