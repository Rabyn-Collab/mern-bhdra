import bcrypt from 'bcrypt';
import User from '../models/User.js';
import fs from 'fs';


export const loginUser = (req, res) => res.status(200).json({ message: "Login successful" });


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