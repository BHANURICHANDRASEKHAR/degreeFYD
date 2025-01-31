import express from 'express';
const router=express.Router();
import CollegeData from "../Database_Models/CollegeData.js";
import data from './output.js'
async function putData()
{
  try{
    for(var value=0; value<data.length; value++)
    {
        const val=data[value]
        const newCollege= await  CollegeData.create({
            Institute_Name: val.Institute_Name,
            Institute_city: val.Institute_city,
            Institute_State: val.Institute_State,
            Course_Stream: val.Course_Stream,
            Course_Name:val.Course_Name,
            Level: val.Level,
            Fee:val.Fee,
            Fee_Type: val.Fee_Type,
            Course_Duration: val.Course_Duration,
            Duration_Type: val.Duration_Type,
            
        })
        newCollege.save().then(() => console.log(`Data saved successfully ${index + 1}`)).catch((err) => console.error(`Error saving data: ${err}`));
     
    }
  }
  catch(err)
  {
    console.error(err)
  }
}
// putData(data) 
export default router.post('/postdata',async(req,res)=>{
    await putData()
    res.send('Data posted successfully')
})