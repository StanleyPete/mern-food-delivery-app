import userModel from '../models/userModel.js';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import validator from 'validator'

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET);
}


//User sign up
const signUpUser = async(req, res) => {
    const {name, password, email} = req.body;
    try {
        // User already exists 'check':
        const userExists = await userModel.findOne({email});
        if (userExists) {
            return res.json({success: false, message: "User already exsists"});
        }

        //E-mail format/strong password validation:
        if (!validator.isEmail(email)) {
            return res.json({success: false, message: "Please enter valid e-mail address"})
        }
        if (password.length < 8) {
            return res.json({success: false, message: "Password must include 8 characters"})
        }

        //Password hasing:
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        //Creating new user account:
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        });
        
        //Saving new user in db and response:
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success: true, token})
        
    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
};

//User log in
const logInUser = async(req, res) => {
    const {email, password} = req.body;
    try {
        //Checking if user exsists in db:
        const user = await userModel.findOne({email});
        if (!user) {
            return res.json({success: false, message: "User does not exist"});
        }

        //Checking if passwords matched the one in db
        const isPasswordOk = await bcrypt.compare(password, user.password);
        if (!isPasswordOk){
            return res.json({success: false, message: "Incorrect password"});
        }

        const token = createToken(user._id);
        res.json({success: true, token});

    } catch (error) {
        console.log(error);
        res.json({success: false, message: "Error"});
    }
};

export {logInUser, signUpUser}