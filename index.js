import express from 'express';
import userRoutes from './routes/userRoutes.js';


const app = express();



app.use(userRoutes);

app.listen(5000, () => {
  console.log('Server running on port 5000');
});