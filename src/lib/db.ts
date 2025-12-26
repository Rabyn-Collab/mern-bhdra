import mongoose from "mongoose";


let isConnected: boolean = false;

export const connectDb = async () => {

  if (isConnected) return;
  try {
    await mongoose.connect('mongodb+srv://rabyn900:moles900@cluster0.ikwdezp.mongodb.net/News');
    isConnected = true;
    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
}
