import express from 'express';
import productRoutes from './routes/productRoutes.js';

const app = express();



app.use(express.json());
app.get('/', (req, res) => {
  return res.status(200).json({
    message: "Welcome to backened"
  });

});

app.use(productRoutes);




app.listen(5000, () => {
  console.log('Server is running on port 5000');
});