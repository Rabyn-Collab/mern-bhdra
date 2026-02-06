import express from 'express';
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import reviewRoutes from './routes/reviewRoutes.js';
import dotenv from 'dotenv';
const app = express();
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config({ quiet: true });

mongoose.connect(process.env.DB_URL).then((val) => {

  app.listen(5000, () => {
    console.log('DB connected and Server is running on port 5000');
  });

}).catch((err) => {
  console.log(err);
});

app.use(cors({
  credentials: true,
  origin: ['http://localhost:5173']
}));
app.use(cookieParser());
app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 },
}));
app.use(express.json());
app.use(express.static('uploads'));
app.get('/', (req, res) => {

  return res.status(200).json({
    message: "Welcome to backened"
  });

});

app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reviews', reviewRoutes);



