import express from 'express';
const app = express();
import { config } from 'dotenv';
import DbConnection from './DataBaseConnection.js'
// import PostCollegeData from './Components/CollegeDataInsertion.js'
import UpDatePassWord from './Components/UpdatePassword.js'
import GetRecommendedData from './Components/RecommendData.js';
import Email from './Components/email/SendMail.js'
import cors from 'cors'
import login from './Components/Login.js'
import Signup from './Components/signup.js';
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
DbConnection();
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
 
}))
app.get('/',(req,res)=>{
    res.send('Hello Welcome To DegreeFYD!');

})
// app.use(PostCollegeData)
app.use(login)
app.use(Signup)
app.use(Email);
app.use(UpDatePassWord);
app.use(GetRecommendedData)
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
