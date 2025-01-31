import express from 'express';
import bcrypt from 'bcryptjs';
import User from "../Database_Models/User.js";
import jwt from 'jsonwebtoken'
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password, firstname,lastname,state } = req.body;
  console.log(email)
  try {
    const user = await User.findOne({ email });
    if (user) {
      return res.status(200).send({ status: false, msg: 'User already exists' }); 
    }
    const hashedPassword = await bcrypt.hash(password, 10); 

    const newUser = new User({
      email,
      password: hashedPassword, 
      firstname,
      lastname,
      state
    });
  const token = jwt.sign(
        { id: newUser._id, email: newUser.email },
        process.env.JWT_SECRET,
        { expiresIn: '1y' } 
      );
  
    await newUser.save(); 
  //  console.log(process.env.JWT_SECRET)
    res.send({
      status: true,
      token:token
    });

  } catch (e) {
    console.error(e.message);
    res.status(500).send({ status: false, msg: 'Internal Server Error' });
  }
});

export default router;
