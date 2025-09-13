import validator from "validator";
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken'
import userModel from "../models/userModel.js";


const createToken = (id) => {
    return jwt.sign({id},process.env.JWT_SECRET)
}



const loginUser = async (req, res) => {};

//Router for user register

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //checking user is already exist or not
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User Already exists !" });
    }
    //validating email format & strong passwords
    if (!validator.isEmail(email)) {
      return res.json({ success: false, message: "Please Enter a valid Emails !" });
    }
    if (password.length < 8) {
      return res.json({ success: false, message: "Please enter a valid password !" });
    }
    //hasing user passwords
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password,salt)

    const newUser = new userModel({
        name,
        email,
        password:hashedPassword
    })

    const user = await newUser.save()

    const token = createToken(user._id)

    res.json({success:true,token})

  } catch (error) {

    console.log(error);
    res.json({success:false, message:error.message})
  }
};

//Route for admin login
const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
