import bcrypt from 'bcrypt';
import User from '../models/User.js';
import fs from 'fs';
import jwt from 'jsonwebtoken';


export const loginUser = async (req, res) => {

  const { email, password } = req.body || {};
  try {
    const isExist = await User.findOne({ email });

    if (!isExist) return res.status(404).json({ message: "User not found" });

    const isMatch = bcrypt.compareSync(password, isExist.password);
    if (!isMatch) return res.status(401).json({ message: "Invalid Credential" });
    const token = jwt.sign({
      id: isExist._id,
      role: isExist.role
    }, process.env.JWT_SECRET);

    // res.cookie('token', token, {
    //   httpOnly: true,
    //   maxAge: 2000
    // });

    return res.status(200).json({
      role: isExist.role,
      token
    });


  } catch (err) {
    return res.status(400).json({
      message: err.message
    })

  }
}

export const registerUser = async (req, res) => {
  const { username, email, password, bio } = req.body || {};
  try {
    const isExist = await User.findOne({ email });
    if (isExist) {
      fs.unlink(`./uploads/${req.imagePath}`, (err) => {
        if (err) return res.status(500).json({ message: "Something went wrong" });
        return res.status(400).json({ message: "User already exist" });
      })

    } else {

      const hashPass = bcrypt.hashSync(password, 10);
      await User.create({
        username, email,
        password: hashPass,
        image: req.imagePath,
        bio
      });
      return res.status(201).json({ message: "Registered successfully" });

    }

  } catch (err) {
    return res.status(400).json({
      message: err.message
    })

  }

};