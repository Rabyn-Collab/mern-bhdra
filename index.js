import express from 'express';
import productRoutes from './routes/productRoutes.js';
import dotenv from 'dotenv';
const app = express();
import mongoose from 'mongoose';

dotenv.config({ quiet: true });

mongoose.connect(process.env.DB_URL).then((val) => {

  app.listen(5000, () => {
    console.log('DB connected and Server is running on port 5000');
  });

}).catch((err) => {
  console.log(err);
});



app.use(express.json());
app.get('/', (req, res) => {
  return res.status(200).json({
    message: "Welcome to backened"
  });

});

app.use(productRoutes);



