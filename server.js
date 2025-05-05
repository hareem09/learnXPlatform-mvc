const express=require('express')
const app= express()
const mongodb=require('./dbs')

//classContent
const classModel=require('./model/classSchema')
const classRouter=require('./routes/classRoutes')
//Course
const courseModel=require('./model/courseSchema')
const courseRouter=require('./routes/courseRoutes')
//Enrollment
const enrollModel=require('./model/enrollSchema')
const enrollRouter=require('./routes/enrollRoutes')
//Progress
const progressModel=require('./model/progressSchema')
const progressRouter=require('./routes/progressRoutes')
//Student
const userModel=require('./model/userSchema')
const userRouter=require('./routes/userRoutes')

app.use(express.json())

const port=3000

app.use('/student',userRouter)

app.use('/progress',progressRouter)

app.use('/enroll',enrollRouter)

app.use('/class',classRouter)

app.use('/course',courseRouter)

app.listen(port,(req,res)=>{
    console.log(`server is running at port${port}`)
})
